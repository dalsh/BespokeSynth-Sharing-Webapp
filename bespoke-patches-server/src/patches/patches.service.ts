import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { Patch } from './patch.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class PatchesService {
  constructor(
    @InjectRepository(Patch)
    private repository: Repository<Patch>,
    private connection: Connection,
  ) {}

  public findByUuid(uuid: string): Patch | null {
    return null;
  }

  public async find(tags: string[], search: string | null): Promise<Patch[]> {
    const builder = this.repository.createQueryBuilder('p');

    if (search && search.length > 0) {
      const s = `%${search.toLowerCase()}%`;
      builder
        .where('LOWER(p_title) like :s', { s })
        .orWhere('LOWER(p_author) like :s', { s })
        .orWhere('LOWER(p_summary) like :s', { s });
    }

    // FIXME Own table for tags, this is ugly
    if (tags.length > 0) {
      builder.where("',' || tags || ',' like :tags", {
        tags: `%,${tags.sort().join(',')},%`,
      });
    }

    const patches = await builder.getMany();

    return patches;
  }

  public async save(patchToSave: Patch): Promise<Patch> {
    const patch = patchToSave;
    patch.uuid = uuidv4();
    patch.publicationDate = new Date();
    patch.tags = patch.tags.map((t) => t.toLowerCase()).sort();
    patch._token = uuidv4();

    const queryRunner = this.connection.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      await queryRunner.manager.save(patch);
      await queryRunner.commitTransaction();
    } catch (err) {
      await queryRunner.rollbackTransaction();
      throw err;
    } finally {
      await queryRunner.release();
    }

    return patch;
  }
}
