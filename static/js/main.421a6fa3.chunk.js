(this["webpackJsonpbespoke-sharing-webapp"]=this["webpackJsonpbespoke-sharing-webapp"]||[]).push([[0],{276:function(e,t,n){},704:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(49),i=n.n(r),s=(n(276),n(118)),o=n(774),l=n(241),d=n(18),u=n(57),j=n(705),b=n(779),h=n(2),p=Object(j.b)({error:{background:"red",padding:50},errorFull:{width:"100vw",height:"100vh",position:"fixed",top:0,display:"flex",justifyContent:"center",alignItems:"center"},title:{fontWeight:"bold"}}),f=function(){var e=Object(b.a)().t;return Object(h.jsx)("div",{className:p.errorFull,children:Object(h.jsxs)("div",{className:p.error,children:[Object(h.jsx)("div",{className:p.title,children:e("Error.title")}),Object(h.jsx)("div",{children:e("Error.content")})]})})},m=n(81),O=n(26),x=n(768),g=n(771),v=n(769),y=n(764),k=n(151),w=n(222),C=n(37),N=n.n(C),S=n(80),P={basePath:"BespokeSynth-Sharing-Webapp",repo:"https://fredericlb.github.io/BespokeSynth-Community-Sharing-Repo/"},T=P.repo,L=Object(c.createContext)({}),A=function(){var e=Object(c.useState)({}),t=Object(O.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),i=Object(O.a)(r,2),s=i[0],o=i[1],l=Object(c.useState)(!1),u=Object(O.a)(l,2),j=u[0],b=u[1],h=Object(c.useState)(),p=Object(O.a)(h,2),f=p[0],m=p[1],x=(Object(d.f)(),Object(c.useCallback)((function(){var e=function(){var e=Object(S.a)(N.a.mark((function e(){var t,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(T,"manifest.json"));case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,a(n),b(!1),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),b(!0);case 14:return e.prev=14,o(!0),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,11,14,17]])})));return function(){return e.apply(this,arguments)}}();e()}),[])),g=Object(c.useMemo)((function(){var e="",t=[];if(f&&f.includes("---")){var n=f.split("---"),c=Object(w.a)(n),a=c[0],r=c.slice(1);a!==e&&(e=a),(1!==r.length||r[0].length>0)&&(t=r)}return{search:e,selectedTags:t}}),[f]),v=g.search,y=g.selectedTags,C=Object(c.useMemo)((function(){return Object.values(n).filter((function(e){return 0===y.length||y.every((function(t){return e.tags.includes(t)}))})).filter((function(e){return 0===v.length||(e.title[0]+e.summary[0]).toLowerCase().includes(v.toLowerCase())}))}),[n,y,v]),P=Object(c.useMemo)((function(){return Object.values(n).reduce((function(e,t){return t.tags.forEach((function(t){return e.add(t)})),e}),new Set)}),[n]),L=Object(c.useCallback)(function(){var e=Object(S.a)(N.a.mark((function e(t){var n,c,a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(T).concat(t,"/"),e.prev=1,e.next=4,fetch("".concat(n,"manifest.json"));case 4:return e.next=6,e.sent.json();case 6:return c=e.sent,a=c.bsk_content.modules.filter((function(e){return null!=e.script})).map((function(e){return e.script})),e.abrupt("return",Object(k.a)(Object(k.a)({},c),{},{audio_samples:(c.audio_samples||[]).map((function(e){return"".concat(n).concat(e)})),bsk_download:"".concat(n).concat(c.bsk_path),scripts:a}));case 11:return e.prev=11,e.t0=e.catch(1),console.error(e.t0),e.abrupt("return",null);case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),[]);return{isLoaded:s,isError:j,load:x,filteredPatchList:C,tags:P,search:v,selectedTags:y,patches:n,getPatchInfo:L,setSearchState:m}},I=Object(j.b)({root:{height:"100%",width:"100%",paddingLeft:5,paddingRight:10},form:{"@media screen and (max-width: 600px)":{marginTop:0}},header:{background:"#303030",height:45,width:"100%",boxSizing:"border-box",paddingLeft:5,paddingRight:12,zIndex:1111,position:"fixed",top:0,"@media screen and (max-width: 600px)":{height:80}},brand:{fontSize:"2.3rem",fontWeight:"bold",letterSpacing:"-0.09rem",cursor:"pointer"},subBrand:{content:"/community",opacity:.5}}),D=function(){var e=Object(b.a)().t,t=Object(c.useContext)(L),n=t.tags,a=t.search,r=t.selectedTags,i=(t.setSearchState,Object(c.useState)(a)),s=Object(O.a)(i,2),o=s[0],l=s[1],u=Object(c.useState)(r),j=Object(O.a)(u,2),p=j[0],f=j[1],k=Object(d.f)(),w=Object(c.useCallback)((function(){o.length>0||p.length>0?k.push("/search/".concat(o,"---").concat(p.join("---"))):window.location.pathname.startsWith("/search")&&k.push("/")}),[k,o,p]);return Object(c.useEffect)((function(){l(a),f(r)}),[a,r]),Object(h.jsx)("header",{className:I.header,children:Object(h.jsxs)(x.a,{horizontal:!0,wrap:!0,className:I.root,verticalAlign:"center",horizontalAlign:"space-between",children:[Object(h.jsx)("div",{role:"button",onClick:function(){return k.push("/")},children:Object(h.jsxs)("h1",{className:I.brand,children:["bespoke",Object(h.jsx)("span",{className:I.subBrand,children:"/community"})]})}),Object(h.jsx)("form",{onSubmit:function(e){e.preventDefault(),w()},className:I.form,children:Object(h.jsxs)(x.a,{horizontal:!0,tokens:{childrenGap:16},children:[Object(h.jsx)(g.a,{placeholder:e("Header.search"),onChange:function(e,t){return l(t)},value:o}),Object(h.jsx)(v.a,{placeholder:e("Header.tags"),options:Array.from(n).map((function(e){return{key:e,text:e}})),multiSelect:!0,selectedKey:p,onChange:function(e,t){return t&&f(t.selected?[].concat(Object(m.a)(p),[t.key]):p.filter((function(e){return e!==t.key})))},allowFreeform:!1}),Object(h.jsx)(y.a,{type:"primary",onClick:w,children:e("Header.go")})]})})]})})},E=n(235),B=Object(j.b)({full:{width:"100vw",height:"100vh",display:"flex",position:"fixed",top:0,justifyContent:"center",alignItems:"center"}}),_=function(e){e.full;return Object(h.jsx)("div",{className:B.full,children:Object(h.jsx)(E.RingLoader,{color:"#ffffff",size:120})})},R=n(20),z="@media screen and (max-width: 600px)",M=Object(j.b)({root:Object(R.a)({paddingTop:50,maxWidth:1024,paddingLeft:20,paddingRight:20,margin:"auto"},z,{paddingTop:70})}),W=function(e){var t=e.children;return Object(h.jsx)("section",{className:M.root,children:t})},H=n(242),F=n(82),G={Patch:{viz:"viz",audio_samples:"audio_samples",description:"description",no_audio_samples:"No audio samples",no_description:"No description",back:"Patch list"},About:{title:"About",description:"Lorem Ipsum"},Error:{title:"ERROR",content:"Something bad happened :("},Header:{search:"search...",tags:"tags...",go:"go"},PatchItem:{author:"author",date:"date",revision:"revision",download:"Download"},ScriptsModal:{title:"Scripts review",intro:"This patch contains Python scripts. Since Python is not sandboxed when\n    running Bespoke, running these scripts could do potentially harm your\n    computer. Please review all these scripts before download, and if you\n    are not Python saavy please ask someone on the Discord community.",cancel:"Cancel",download:"Download"}},J=function(){H.a.use(F.e).init({resources:{en:{translation:G}},lng:"en",fallbackLng:"en",interpolation:{escapeValue:!1}})},Q=n(243),V=Object(j.b)({sectionTitle:{marginTop:32,marginBottom:16,fontSize:"1.5rem",fontWeight:"bold",color:"#ABABAB",textTransform:"lowercase",selectors:{"::before":{content:"/"}}}}),Y=function(e){var t=e.children;return Object(h.jsxs)("h2",{className:V.sectionTitle,children:["/",t]})},Z=function(e){e.short;var t=Object(b.a)().t;return Object(h.jsxs)("div",{children:[Object(h.jsx)(Y,{children:t("About.title")}),Object(h.jsx)("p",{children:t("About.description")})]})},K=n(246),U=n(157),X=n.n(U),q=Object(K.a)((function(){return{root:{background:"#343434",position:"relative"},title:{background:"#EFEFEF",width:"100%",fontWeight:"bold",fontSize:"1.3rem",cursor:"pointer",color:"#343434",height:30,display:"flex",alignItems:"center",paddingLeft:8,boxSizing:"border-box",borderBottom:"3px solid #676767",justifyContent:"space-between",paddingRight:8},content:Object(R.a)({padding:8,flexDirection:"row",justifyContent:"space-between",alignItems:"center"},z,{alignItems:"flex-start",justifyContent:"flex-start",flexDirection:"column"}),titleInList:{selectors:{"&:after":{content:"'\u2192'"}}},subpatch:Object(R.a)({display:"flex",opacity:.7},z,{flexDirection:"column"}),subpatchTitle:{fontWeight:"bold"},separator:{"&:before":Object(R.a)({content:"'//'",display:"inline-block",marginLeft:8,marginRight:8,marginBottom:2,fontSize:"1rem"},z,{display:"none"})},tags:{marginTop:4},tag:{background:"#676767",display:"inline-block",padding:"2px 5px",marginRight:8},download:Object(R.a)({marginRight:16},z,{paddingTop:16,marginRight:0,display:"flex",justifyContent:"center"}),description:{marginTop:12}}})),$=function(e){var t=e.patch,n=e.onDownload,a=e.isList,r=q(),i=Object(c.useContext)(L),s=i.search,o=i.selectedTags,l=Object(d.f)(),u=Object(b.a)().t;return Object(h.jsxs)("div",{className:r.root,children:[Object(h.jsx)("div",{role:"button",onClick:function(){return!n&&l.push("/patch/".concat(t.id))},className:"".concat(r.title," ").concat(a&&r.titleInList),children:Object(h.jsx)(X.a,{highlightClassName:"highlight",searchWords:[s],autoEscape:!0,textToHighlight:t.title[0]})}),Object(h.jsxs)(x.a,{className:r.content,verticalAlign:"center",horizontalAlign:"space-between",children:[Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:r.subpatch,children:[Object(h.jsxs)("div",{children:[Object(h.jsxs)("span",{className:r.subpatchTitle,children:[u("PatchItem.author"),":"]})," ",t.author[0]," "]}),Object(h.jsxs)("div",{className:r.separator,children:[Object(h.jsxs)("span",{className:r.subpatchTitle,children:[u("PatchItem.date"),": "]})," ",new Date(t.publish).toLocaleString("en-US")]}),Object(h.jsxs)("div",{className:r.separator,children:[Object(h.jsxs)("span",{className:r.subpatchTitle,children:[u("PatchItem.revision"),":"," "]})," ",t.version[0]]})]}),Object(h.jsx)("div",{className:r.tags,children:t.tags.map((function(e){return Object(h.jsx)("div",{className:r.tag,style:o.includes(e)?{background:"yellow",color:"black"}:{},children:e},e)}))}),Object(h.jsx)("p",{className:r.description,children:Object(h.jsx)(X.a,{searchWords:[s],autoEscape:!0,textToHighlight:t.summary[0]})})]}),n&&Object(h.jsx)("div",{className:r.download,children:Object(h.jsx)(y.a,{iconProps:{iconName:"download"},onClick:n,children:u("PatchItem.download")})})]})]})},ee=Object(j.b)({list:Object(R.a)({display:"grid",gridTemplateColumns:"1fr 1fr",gap:16},z,{gridTemplateColumns:"1fr"})}),te=function(){var e=Object(c.useContext)(L).filteredPatchList;return Object(h.jsxs)("div",{className:"patch-list",children:[Object(h.jsx)(Y,{children:"Patches"}),Object(h.jsx)("div",{className:ee.list,children:e.map((function(e){return Object(h.jsx)($,{patch:e,isList:!0},e.id)}))})]})},ne=["setSearchState"],ce=function(){var e=Object(c.useContext)(L),t=e.setSearchState,n=Object(s.a)(e,ne),a=Object(d.g)().searchState,r=Object(d.f)(),i=Object(b.a)().t;Object(c.useEffect)((function(){t(a)}),[a,t]);var o=Object(c.useMemo)((function(){return 0===n.search.length&&0===n.selectedTags.length}),[n]);return Object(h.jsxs)("div",{className:"page-home",children:[o&&Object(h.jsx)(Z,{}),!o&&Object(h.jsx)(Q.a,{style:{marginTop:24},onClick:function(){return r.push("/")},iconProps:{iconName:"back"},children:i("Patch.back")}),Object(h.jsx)(te,{})]})},ae=n(780),re=n(158),ie=n.n(re),se=n(43),oe=n(766),le=n(772),de=n(765),ue=Object(j.b)({container:{maxWidth:"80vw",background:"#343434"},header:[{flex:"1 1 auto",display:"flex",alignItems:"center",fontWeight:600,padding:"12px 12px 14px 24px"}],body:{flex:"4 4 auto",padding:"0 24px 24px 24px",overflowY:"hidden",selectors:{p:{margin:"14px 0"},"p:first-child":{marginTop:0},"p:last-child":{marginBottom:0}}},footer:{display:"flex",justifyContent:"flex-end",paddingRight:"24px",paddingBottom:"16px"},closeIcon:{color:"#ABABAB",marginLeft:"auto",marginTop:"4px",marginRight:"2px"},closeIconHovered:{color:"#676767"},textRead:{maxHeight:500,minHeight:120,minWidth:"40vw",overflowY:"scroll",overflowX:"auto",fontFamily:"monospace",whiteSpace:"pre",background:"#f8f8ff"}}),je=function(e){var t=e.type,n=e.content,c=e.title,a=e.onClose,r=void 0===a?function(){}:a;return Object(h.jsxs)(oe.a,{isOpen:!0,onDismiss:r,isBlocking:!0,containerClassName:ue.container,children:[Object(h.jsxs)("div",{className:ue.header,children:[Object(h.jsx)("span",{children:c}),Object(h.jsx)(ae.a,{className:ue.closeIcon,iconProps:{iconName:"Cancel"},onClick:r})]}),Object(h.jsx)("div",{className:ue.body,children:Object(h.jsx)("div",{className:ue.textRead,children:"python"===t?Object(h.jsx)(le.a,{language:"python",style:de.a,children:n}):Object(h.jsx)(le.a,{language:"markdown",style:de.a,children:"content"})})})]})},be=new ie.a.graphlib.Graph;be.setDefaultEdgeLabel((function(){return{}}));var he=function(e){var t=e.modules,n=Object(c.useState)(),a=Object(O.a)(n,2),r=a[0],i=a[1],s=Object(c.useMemo)((function(){return t.flatMap((function(e,n){return(e.target||"").split(",").filter((function(e){return""!==e})).map((function(e){var c=t.findIndex((function(t){return t.name===e}));return{id:"".concat(n,"-").concat(c),source:"".concat(n),target:"".concat(c),animated:!0}}))}))}),[t]),o=Object(c.useMemo)((function(){return t.map((function(e,t){var n="#efefef";return e.script?n="#AAffAA":e.comment&&(n="#AAAAff"),{id:"".concat(t),type:"default",data:{label:e.name,i:t},style:{width:"auto",fontSize:"12px",cursor:e.script||e.comment?"pointer":"default",backgroundColor:n},position:{x:e.position[0]/1.2,y:e.position[1]/1.5}}}))}),[t]),l=Object(c.useMemo)((function(){return[].concat(Object(m.a)(o),Object(m.a)(s))}),[o,s]),d=Object(c.useCallback)((function(e){var n=t[e.data.i];null!=n.script?i({content:n.script,type:"python",title:n.name}):n.comment&&i({content:n.comment,type:"comment",title:n.name})}),[t]);return Object(h.jsxs)("div",{style:{width:"100%",height:300,backgroundColor:"#343434"},children:[r&&Object(h.jsx)(je,{content:r.content,title:r.title,type:r.type,onClose:function(){return i(void 0)}}),Object(h.jsxs)(se.e,{minZoom:.1,maxZoom:10,elements:l,onLoad:function(e){return e.fitView()},nodesDraggable:!1,nodesConnectable:!1,onElementClick:function(e,t){return Object(se.f)(t)&&d(t)},children:[Object(h.jsx)(se.c,{showInteractive:!1}),Object(h.jsx)(se.a,{variant:se.b.Dots,color:"#ff00ff",gap:16})]})]})},pe=function(e){Object(c.useEffect)((function(){var t=document.title;return document.title=e,function(){document.title=t}}))},fe=function(e){var t=e.children;return pe(t),null},me=n(773),Oe=n(240),xe=function(e){var t=e.scripts,n=e.onClose,c=void 0===n?function(){}:n,a=e.onEnd,r=Object(b.a)().t;return Object(h.jsxs)(oe.a,{isOpen:!0,onDismiss:c,isBlocking:!0,containerClassName:ue.container,children:[Object(h.jsxs)("div",{className:ue.header,children:[Object(h.jsx)("span",{children:r("ScriptsModal.title")}),Object(h.jsx)(ae.a,{className:ue.closeIcon,iconProps:{iconName:"Cancel"},onClick:c})]}),Object(h.jsxs)("div",{className:ue.body,children:[Object(h.jsx)("p",{style:{maxWidth:"50vw",background:"#CDCDCD",color:"#010101",padding:5,borderRadius:5},children:r("ScriptsModal.intro")}),Object(h.jsx)(me.a,{children:t.map((function(e){var t=e.name,n=e.content;return Object(h.jsx)(Oe.a,{headerText:t,children:Object(h.jsx)("div",{className:ue.textRead,children:Object(h.jsx)(le.a,{language:"python",style:de.a,children:n})})})}))})]}),Object(h.jsxs)("div",{className:ue.footer,children:[Object(h.jsx)(Q.a,{onClick:function(){return a(!1)},style:{marginRight:16},children:r("ScriptsModal.cancel")}),Object(h.jsx)(y.a,{onClick:function(){return a(!0)},children:r("ScriptsModal.download")})]})]})},ge=function(e){var t=e.src,n=e.fname,a=Object(c.useRef)(null),r=Object(c.useState)(!1),i=Object(O.a)(r,2),s=i[0],o=i[1],l=Object(c.useCallback)((function(){a.current&&(s?a.current.pause():a.current.play(),o(!s))}),[s]);return Object(h.jsxs)(x.a,{horizontal:!0,verticalAlign:"center",children:[Object(h.jsx)("audio",{src:t,ref:a}),Object(h.jsx)(ae.a,{iconProps:{iconName:s?"pause":"play"},onClick:l}),Object(h.jsx)("div",{children:n.split("/").reverse()[0]})]})},ve=Object(j.b)({back:{marginTop:40,marginBottom:20},viz:Object(R.a)({width:"70%"},z,{width:"100%"}),samples:Object(R.a)({paddingLeft:12},z,{paddingLeft:0}),contentStack:Object(R.a)({flexDirection:"row"},z,{flexDirection:"column"})}),ye=function(){var e=Object(b.a)().t,t=Object(d.g)().id,n=Object(c.useContext)(L),a=n.patches,r=n.getPatchInfo,i=Object(c.useState)(!1),s=Object(O.a)(i,2),o=s[0],l=s[1],u=Object(c.useState)(),j=Object(O.a)(u,2),p=j[0],m=j[1],g=Object(d.f)(),v=Object(c.useMemo)((function(){return p?p.bsk_content.modules.filter((function(e){return null!=e.script})).map((function(e){return{name:e.name,content:e.script}})):[]}),[p]);Object(c.useEffect)((function(){var e=function(){var e=Object(S.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=m,e.next=3,r(t);case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[r,t]);var y=Object(c.useCallback)((function(){if(p){var e=document.createElement("a");e.download="download",e.href=p.bsk_download,e.click()}}),[p]);return Object(h.jsxs)("div",{children:[o&&Object(h.jsx)(xe,{scripts:v,onClose:function(){l(!1)},onEnd:function(e){l(!1),e&&y()}}),Object(h.jsx)(Q.a,{onClick:function(){return g.goBack()},iconProps:{iconName:"back"},className:ve.back,children:e("Patch.back")}),Object(h.jsx)($,{isList:!1,patch:a[t],onDownload:function(){return p&&p.scripts.length>0?l(!0):y()}}),void 0===p&&Object(h.jsx)(_,{full:!0}),null===p&&Object(h.jsx)(f,{}),null!=p&&Object(h.jsxs)("div",{className:"patch-content",children:[Object(h.jsxs)(fe,{children:[p.title," / Bespoke Community"]}),Object(h.jsxs)(x.a,{className:ve.contentStack,children:[Object(h.jsxs)("div",{className:ve.viz,children:[Object(h.jsx)(Y,{children:e("Patch.viz")}),Object(h.jsx)(he,{modules:p.bsk_content.modules})]}),Object(h.jsxs)("div",{className:ve.samples,children:[Object(h.jsx)(Y,{children:e("Patch.audio_samples")}),0===p.audio_samples.length&&Object(h.jsx)("div",{children:e("Patch.no_audio_samples")}),p.audio_samples.length>0&&p.audio_samples.map((function(e){return Object(h.jsx)(ge,{src:e,fname:e},e)})),Object(h.jsx)("ul",{children:Object(h.jsx)("li",{})})]})]}),Object(h.jsx)(Y,{children:e("Patch.description")}),0===p.html.trim().length?Object(h.jsx)("div",{className:"mdContent",children:e("Patch.no_description")}):Object(h.jsx)("div",{className:"mdContent",dangerouslySetInnerHTML:{__html:p.html}})]})]})},ke=n(4),we=Object(ke.j)({palette:{themePrimary:"#bdbdbd",themeLighterAlt:"#080808",themeLighter:"#1e1e1e",themeLight:"#393939",themeTertiary:"#717171",themeSecondary:"#a6a6a6",themeDarkAlt:"#c3c3c3",themeDark:"#cdcdcd",themeDarker:"#dadada",neutralLighterAlt:"#161616",neutralLighter:"#161616",neutralLight:"#151515",neutralQuaternaryAlt:"#141414",neutralQuaternary:"#131313",neutralTertiaryAlt:"#121212",neutralTertiary:"#f3f3f3",neutralSecondary:"#f5f5f5",neutralPrimaryAlt:"#f7f7f7",neutralPrimary:"#eeeeee",neutralDark:"#fbfbfb",black:"#fdfdfd",white:"#161616"}}),Ce=["load"];Object(l.a)(),J();var Ne=function(){var e=A(),t=e.load,n=Object(s.a)(e,Ce);return Object(c.useEffect)((function(){return t()}),[t]),Object(h.jsxs)(L.Provider,{value:n,children:[Object(h.jsx)(D,{}),!n.isLoaded&&Object(h.jsx)(_,{full:!0}),n.isLoaded&&n.isError&&Object(h.jsx)(f,{}),n.isLoaded&&!n.isError&&Object(h.jsx)(W,{children:Object(h.jsxs)(d.c,{children:[Object(h.jsx)(d.a,{exact:!0,path:"/",component:ce}),Object(h.jsx)(d.a,{path:"/search/:searchState",component:ce}),Object(h.jsx)(d.a,{path:"/patch/:id",component:ye})]})})]})},Se=function(){return Object(h.jsx)(o.a,{applyTo:"body",theme:we,children:Object(h.jsx)(u.a,{basename:P.basePath,children:Object(h.jsx)(Ne,{})})})};i.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(Se,{})}),document.getElementById("root"))}},[[704,1,2]]]);
//# sourceMappingURL=main.421a6fa3.chunk.js.map