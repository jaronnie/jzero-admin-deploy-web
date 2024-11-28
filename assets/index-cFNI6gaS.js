import{A as Xe,m as Qe,e as Ze,a as ea,G as aa,b as ta,E as na,_ as la,c as oa,d as ra,f as sa,u as ua,g as ia,h as da,i as pa,j as ca,N as ma,D as ga,k as fa,l as va,n as ha}from"./business-B8H6sV-e.js";import{d as Z,a1 as y,L as U,M as Ve,K,N as Y,O as ue,U as Se,ag as ya,a8 as Be,ah as ba,a6 as Le,ai as _a,aj as Ia,ak as Pa,al as Ta,am as ka,aa as Na,ab as ke,v as ce,an as Ra,r as oe,a9 as de,ao as wa,V as Ke,a as j,Y as Ca,ap as Oa,B as F,aq as $e,ar as Ae,as as he,at as ye,au as Va,av as re,aw as De,ax as $a,ay as be,az as Aa,ae as Da,o as C,b as Q,e as je,aA as R,aB as xe,aC as xa,$ as t,p as Fe,f as a,_ as Te,aD as Me,c as L,w as c,g as Ee,t as Ue,h as r,a3 as _e,a4 as se,aE as te,aF as Ma,aG as Ea,aH as Ua,aI as Sa,A as Ba,aJ as La,aK as Ie,a5 as Pe,J as Ka,aL as ja}from"./index-BURk0wDq.js";import{u as Fa,a as za,b as qa}from"./form-B7hamF-p.js";import{_ as Ga}from"./Space-CirnrUGG.js";import{a as Wa}from"./Grid-DJ7Kcdct.js";const Ya=Z({name:"ArrowUp",render(){return y("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},y("g",{fill:"none"},y("path",{d:"M3.13 9.163a.5.5 0 1 0 .74.674L9.5 3.67V17.5a.5.5 0 0 0 1 0V3.672l5.63 6.165a.5.5 0 0 0 .738-.674l-6.315-6.916a.746.746 0 0 0-.632-.24a.746.746 0 0 0-.476.24L3.131 9.163z",fill:"currentColor"})))}}),P="0!important",ze="-1px!important";function ne(n){return Y(`${n}-type`,[K("& +",[U("button",{},[Y(`${n}-type`,[ue("border",{borderLeftWidth:P}),ue("state-border",{left:ze})])])])])}function le(n){return Y(`${n}-type`,[K("& +",[U("button",[Y(`${n}-type`,[ue("border",{borderTopWidth:P}),ue("state-border",{top:ze})])])])])}const Ha=U("button-group",`
 flex-wrap: nowrap;
 display: inline-flex;
 position: relative;
`,[Ve("vertical",{flexDirection:"row"},[Ve("rtl",[U("button",[K("&:first-child:not(:last-child)",`
 margin-right: ${P};
 border-top-right-radius: ${P};
 border-bottom-right-radius: ${P};
 `),K("&:last-child:not(:first-child)",`
 margin-left: ${P};
 border-top-left-radius: ${P};
 border-bottom-left-radius: ${P};
 `),K("&:not(:first-child):not(:last-child)",`
 margin-left: ${P};
 margin-right: ${P};
 border-radius: ${P};
 `),ne("default"),Y("ghost",[ne("primary"),ne("info"),ne("success"),ne("warning"),ne("error")])])])]),Y("vertical",{flexDirection:"column"},[U("button",[K("&:first-child:not(:last-child)",`
 margin-bottom: ${P};
 margin-left: ${P};
 margin-right: ${P};
 border-bottom-left-radius: ${P};
 border-bottom-right-radius: ${P};
 `),K("&:last-child:not(:first-child)",`
 margin-top: ${P};
 margin-left: ${P};
 margin-right: ${P};
 border-top-left-radius: ${P};
 border-top-right-radius: ${P};
 `),K("&:not(:first-child):not(:last-child)",`
 margin: ${P};
 border-radius: ${P};
 `),le("default"),Y("ghost",[le("primary"),le("info"),le("success"),le("warning"),le("error")])])])]),Ja={size:{type:String,default:void 0},vertical:Boolean},Xa=Z({name:"ButtonGroup",props:Ja,setup(n){const{mergedClsPrefixRef:f,mergedRtlRef:m}=Se(n);return ya("-button-group",Ha,f),Be(ba,n),{rtlEnabled:Le("ButtonGroup",m,f),mergedClsPrefix:f}},render(){const{mergedClsPrefix:n}=this;return y("div",{class:[`${n}-button-group`,this.rtlEnabled&&`${n}-button-group--rtl`,this.vertical&&`${n}-button-group--vertical`],role:"group"},this.$slots)}});function Qa(){return ka}const Za=_a({name:"DynamicInput",common:Ia,peers:{Input:Pa,Button:Ta},self:Qa}),Ne=Na("n-dynamic-input"),et=Z({name:"DynamicInputInputPreset",props:{clsPrefix:{type:String,required:!0},value:{type:String,default:""},disabled:Boolean,parentPath:String,path:String,onUpdateValue:{type:Function,required:!0}},setup(){const{mergedThemeRef:n,placeholderRef:f}=ke(Ne);return{mergedTheme:n,placeholder:f}},render(){const{mergedTheme:n,placeholder:f,value:m,clsPrefix:g,onUpdateValue:v,disabled:A}=this;return y("div",{class:`${g}-dynamic-input-preset-input`},y(ce,{theme:n.peers.Input,"theme-overrides":n.peerOverrides.Input,value:m,placeholder:f,onUpdateValue:v,disabled:A}))}}),at=Z({name:"DynamicInputPairPreset",props:{clsPrefix:{type:String,required:!0},value:{type:Object,default:()=>({key:"",value:""})},disabled:Boolean,parentPath:String,path:String,onUpdateValue:{type:Function,required:!0}},setup(n){const{mergedThemeRef:f,keyPlaceholderRef:m,valuePlaceholderRef:g}=ke(Ne);return{mergedTheme:f,keyPlaceholder:m,valuePlaceholder:g,handleKeyInput(v){n.onUpdateValue({key:v,value:n.value.value})},handleValueInput(v){n.onUpdateValue({key:n.value.key,value:v})}}},render(){const{mergedTheme:n,keyPlaceholder:f,valuePlaceholder:m,value:g,clsPrefix:v,disabled:A}=this;return y("div",{class:`${v}-dynamic-input-preset-pair`},y(ce,{theme:n.peers.Input,"theme-overrides":n.peerOverrides.Input,value:g.key,class:`${v}-dynamic-input-pair-input`,placeholder:f,onUpdateValue:this.handleKeyInput,disabled:A}),y(ce,{theme:n.peers.Input,"theme-overrides":n.peerOverrides.Input,value:g.value,class:`${v}-dynamic-input-pair-input`,placeholder:m,onUpdateValue:this.handleValueInput,disabled:A}))}}),tt=U("dynamic-input",{width:"100%"},[U("dynamic-input-item",`
 margin-bottom: 10px;
 display: flex;
 flex-wrap: nowrap;
 `,[U("dynamic-input-preset-input",{flex:1,alignItems:"center"}),U("dynamic-input-preset-pair",`
 flex: 1;
 display: flex;
 align-items: center;
 `,[U("dynamic-input-pair-input",[K("&:first-child",{"margin-right":"12px"})])]),ue("action",`
 align-self: flex-start;
 display: flex;
 justify-content: flex-end;
 flex-shrink: 0;
 flex-grow: 0;
 margin: var(--action-margin);
 `,[Y("icon",{cursor:"pointer"})]),K("&:last-child",{marginBottom:0})]),U("form-item",`
 padding-top: 0 !important;
 margin-right: 0 !important;
 `,[U("form-item-blank",{paddingTop:"0 !important"})])]),pe=new WeakMap,nt=Object.assign(Object.assign({},Ke.props),{max:Number,min:{type:Number,default:0},value:Array,defaultValue:{type:Array,default:()=>[]},preset:{type:String,default:"input"},keyField:String,itemClass:String,itemStyle:[String,Object],keyPlaceholder:{type:String,default:""},valuePlaceholder:{type:String,default:""},placeholder:{type:String,default:""},disabled:Boolean,showSortButton:Boolean,createButtonProps:Object,onCreate:Function,onRemove:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClear:Function,onInput:[Function,Array]}),lt=Z({name:"DynamicInput",props:nt,setup(n,{slots:f}){const{mergedComponentPropsRef:m,mergedClsPrefixRef:g,mergedRtlRef:v,inlineThemeDisabled:A}=Se(),w=ke(Ra,null),V=oe(n.defaultValue),S=de(n,"value"),O=wa(S,V),e=Ke("DynamicInput","-dynamic-input",tt,Za,n,g),k=j(()=>{const{value:p}=O;if(Array.isArray(p)){const{max:l}=n;return l!==void 0&&p.length>=l}return!1}),G=j(()=>{const{value:p}=O;return Array.isArray(p)?p.length<=n.min:!0}),x=j(()=>{var p,l;return(l=(p=m==null?void 0:m.value)===null||p===void 0?void 0:p.DynamicInput)===null||l===void 0?void 0:l.buttonSize});function D(p){const{onInput:l,"onUpdate:value":d,onUpdateValue:i}=n;l&&be(l,p),d&&be(d,p),i&&be(i,p),V.value=p}function W(p,l){if(p==null||typeof p!="object")return l;const d=he(p)?ye(p):p;let i=pe.get(d);return i===void 0&&pe.set(d,i=Va()),i}function M(p,l){const{value:d}=O,i=Array.from(d??[]),T=i[p];if(i[p]=l,T&&l&&typeof T=="object"&&typeof l=="object"){const b=he(T)?ye(T):T,s=he(l)?ye(l):l,I=pe.get(b);I!==void 0&&pe.set(s,I)}D(i)}function z(){$(-1)}function $(p){const{value:l}=O,{onCreate:d}=n,i=Array.from(l??[]);if(d)i.splice(p+1,0,d(p+1)),D(i);else if(f.default)i.splice(p+1,0,null),D(i);else switch(n.preset){case"input":i.splice(p+1,0,""),D(i);break;case"pair":i.splice(p+1,0,{key:"",value:""}),D(i);break}}function B(p){const{value:l}=O;if(!Array.isArray(l))return;const{min:d}=n;if(l.length<=d)return;const{onRemove:i}=n;i&&i(p);const T=Array.from(l);T.splice(p,1),D(T)}function _(p,l,d){if(l<0||d<0||l>=p.length||d>=p.length||l===d)return;const i=p[l];p[l]=p[d],p[d]=i}function q(p,l){const{value:d}=O;if(!Array.isArray(d))return;const i=Array.from(d);p==="up"&&_(i,l,l-1),p==="down"&&_(i,l,l+1),D(i)}Be(Ne,{mergedThemeRef:e,keyPlaceholderRef:de(n,"keyPlaceholder"),valuePlaceholderRef:de(n,"valuePlaceholder"),placeholderRef:de(n,"placeholder")});const ee=Le("DynamicInput",v,g),H=j(()=>{const{self:{actionMargin:p,actionMarginRtl:l}}=e.value;return{"--action-margin":p,"--action-margin-rtl":l}}),E=A?Ca("dynamic-input",void 0,H,n):void 0;return{locale:Oa("DynamicInput").localeRef,rtlEnabled:ee,buttonSize:x,mergedClsPrefix:g,NFormItem:w,uncontrolledValue:V,mergedValue:O,insertionDisabled:k,removeDisabled:G,handleCreateClick:z,ensureKey:W,handleValueChange:M,remove:B,move:q,createItem:$,mergedTheme:e,cssVars:A?void 0:H,themeClass:E==null?void 0:E.themeClass,onRender:E==null?void 0:E.onRender}},render(){const{$slots:n,itemClass:f,buttonSize:m,mergedClsPrefix:g,mergedValue:v,locale:A,mergedTheme:w,keyField:V,itemStyle:S,preset:O,showSortButton:e,NFormItem:k,ensureKey:G,handleValueChange:x,remove:D,createItem:W,move:M,onRender:z,disabled:$}=this;return z==null||z(),y("div",{class:[`${g}-dynamic-input`,this.rtlEnabled&&`${g}-dynamic-input--rtl`,this.themeClass],style:this.cssVars},!Array.isArray(v)||v.length===0?y(F,Object.assign({block:!0,ghost:!0,dashed:!0,size:m},this.createButtonProps,{disabled:this.insertionDisabled||$,theme:w.peers.Button,themeOverrides:w.peerOverrides.Button,onClick:this.handleCreateClick}),{default:()=>$e(n["create-button-default"],()=>[A.create]),icon:()=>$e(n["create-button-icon"],()=>[y(re,{clsPrefix:g},{default:()=>y(De,null)})])}):v.map((B,_)=>y("div",{key:V?B[V]:G(B,_),"data-key":V?B[V]:G(B,_),class:[`${g}-dynamic-input-item`,f],style:S},Ae(n.default,{value:v[_],index:_},()=>[O==="input"?y(et,{disabled:$,clsPrefix:g,value:v[_],parentPath:k?k.path.value:void 0,path:k!=null&&k.path.value?`${k.path.value}[${_}]`:void 0,onUpdateValue:q=>{x(_,q)}}):O==="pair"?y(at,{disabled:$,clsPrefix:g,value:v[_],parentPath:k?k.path.value:void 0,path:k!=null&&k.path.value?`${k.path.value}[${_}]`:void 0,onUpdateValue:q=>{x(_,q)}}):null]),Ae(n.action,{value:v[_],index:_,create:W,remove:D,move:M},()=>[y("div",{class:`${g}-dynamic-input-item__action`},y(Xa,{size:m},{default:()=>[y(F,{disabled:this.removeDisabled||$,theme:w.peers.Button,themeOverrides:w.peerOverrides.Button,circle:!0,onClick:()=>{D(_)}},{icon:()=>y(re,{clsPrefix:g},{default:()=>y($a,null)})}),y(F,{disabled:this.insertionDisabled||$,circle:!0,theme:w.peers.Button,themeOverrides:w.peerOverrides.Button,onClick:()=>{W(_)}},{icon:()=>y(re,{clsPrefix:g},{default:()=>y(De,null)})}),e?y(F,{disabled:_===0||$,circle:!0,theme:w.peers.Button,themeOverrides:w.peerOverrides.Button,onClick:()=>{M("up",_)}},{icon:()=>y(re,{clsPrefix:g},{default:()=>y(Ya,null)})}):null,e?y(F,{disabled:_===v.length-1||$,circle:!0,theme:w.peers.Button,themeOverrides:w.peerOverrides.Button,onClick:()=>{M("down",_)}},{icon:()=>y(re,{clsPrefix:g},{default:()=>y(Xe,null)})}):null]}))]))))}}),qe={Y:"common.yesOrNo.yes",N:"common.yesOrNo.no"};Aa(qe);const ot={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"};function rt(n,f){return C(),Q("svg",ot,f[0]||(f[0]=[je("path",{fill:"currentColor",d:"M18 13H6c-.55 0-1-.45-1-1s.45-1 1-1h12c.55 0 1 .45 1 1s-.45 1-1 1"},null,-1)]))}const st=Da({name:"ic-round-remove",render:rt});function ut(){return Object.keys(Object.assign({"/src/assets/svg-icon/activity.svg":()=>R(()=>import("./activity-B4XY664I.js"),[]),"/src/assets/svg-icon/at-sign.svg":()=>R(()=>import("./at-sign-DvqQw7Qx.js"),[]),"/src/assets/svg-icon/avatar.svg":()=>R(()=>import("./avatar-CQqEtg-V.js"),[]),"/src/assets/svg-icon/banner.svg":()=>R(()=>import("./banner-CFFAqDOx.js"),[]),"/src/assets/svg-icon/cast.svg":()=>R(()=>import("./cast-n3EmpXB4.js"),[]),"/src/assets/svg-icon/chrome.svg":()=>R(()=>import("./chrome-BM_Le6p_.js"),[]),"/src/assets/svg-icon/copy.svg":()=>R(()=>import("./copy-BsYpLlfM.js"),[]),"/src/assets/svg-icon/custom-icon.svg":()=>R(()=>import("./custom-icon-857Ak5pp.js"),[]),"/src/assets/svg-icon/empty-data.svg":()=>R(()=>import("./empty-data-Df-AtTS4.js"),[]),"/src/assets/svg-icon/expectation.svg":()=>R(()=>import("./expectation-BuEJD7SN.js"),[]),"/src/assets/svg-icon/heart.svg":()=>R(()=>import("./heart-DOH2U7VV.js"),[]),"/src/assets/svg-icon/logo.svg":()=>R(()=>import("./logo-BeLY4cv9.js"),[]),"/src/assets/svg-icon/network-error.svg":()=>R(()=>import("./network-error-DDJxZniG.js"),[]),"/src/assets/svg-icon/no-icon.svg":()=>R(()=>import("./no-icon-lf9QfDPR.js"),[]),"/src/assets/svg-icon/no-permission.svg":()=>R(()=>import("./no-permission-CgHwmHj5.js"),[]),"/src/assets/svg-icon/not-found.svg":()=>R(()=>import("./not-found-qgwLoIvx.js"),[]),"/src/assets/svg-icon/service-error.svg":()=>R(()=>import("./service-error-BlNULCLM.js"),[]),"/src/assets/svg-icon/wind.svg":()=>R(()=>import("./wind-Dy5zdHKW.js"),[])})).map(m=>{var g;return((g=m.split("/").at(-1))==null?void 0:g.replace(".svg",""))||""}).filter(Boolean)}const me="layout.",ge="view.",Ge="$";function it(n){let f="",m="";const[g="",v=""]=(n==null?void 0:n.split(Ge))||[];return f=dt(g),m=pt(v||g),{layout:f,page:m}}function dt(n){return n.startsWith(me)?n.replace(me,""):""}function pt(n){return n.startsWith(ge)?n.replace(ge,""):""}function ct(n,f){const m=!!n,g=!!f;return m&&g?`${me}${n}${Ge}${ge}${f}`:m?`${me}${n}`:g?`${ge}${f}`:""}function mt(n){return`/${n.replace(/_/g,"/")}`}function gt(n){const[f,m=""]=n.split("/:");return{path:f,param:m}}function ft(n,f){return f.trim()?`${n}/:${f}`:n}const vt={class:"ml-8px flex-y-center flex-1 gap-12px"},ht=Z({name:"MenuOperateModal",__name:"menu-operate-modal",props:xe({operateType:{},rowData:{},allPages:{}},{visible:{type:Boolean,default:!1},visibleModifiers:{}}),emits:xe(["submitted"],["update:visible"]),setup(n,{emit:f}){const m=n,g=f,v=xa(n,"visible"),{formRef:A,validate:w,restoreValidation:V}=Fa(),{defaultRequiredRule:S}=za(),O=j(()=>({add:t("page.manage.menu.addMenu"),addChild:t("page.manage.menu.addChildMenu"),edit:t("page.manage.menu.editMenu")})[m.operateType]),e=Fe(k());function k(){return{menuType:"1",menuName:"",routeName:"",routePath:"",pathParam:"",component:"",layout:"",page:"",i18nKey:null,icon:"",iconType:"1",parentId:0,status:"1",keepAlive:!1,constant:!1,order:0,href:null,hideInMenu:!1,activeMenu:null,multiTab:!1,fixedIndexInTab:null,query:[],buttonCode:"",permissions:[]}}const G={menuName:S,status:S,routeName:S,routePath:S},x=j(()=>m.operateType==="edit"),W=ut().map(b=>({label:()=>a("div",{class:"flex-y-center gap-16px"},[a(Te,{localIcon:b,class:"text-icon"},null),a("span",null,[b])]),value:b})),M=j(()=>e.parentId===0),z=j(()=>e.menuType==="2"),$=j(()=>e.menuType==="1"||e.menuType==="2"),B=j(()=>{const b=[...m.allPages];return e.routeName&&!b.includes(e.routeName)&&b.unshift(e.routeName),b.map(I=>({label:I,value:I}))}),_=[{label:"base",value:"base"},{label:"blank",value:"blank"}],q=oe([]);async function ee(){const{error:b,data:s}=await aa();if(!b){const I=s.map(u=>({label:u.roleName,value:u.roleCode}));q.value=[...I]}}function H(){if(Object.assign(e,k()),!!m.rowData){if(m.operateType==="addChild"){const{id:b}=m.rowData;Object.assign(e,{parentId:b})}if(m.operateType==="edit"){const{component:b,...s}=m.rowData,{layout:I,page:u}=it(b),{path:h,param:N}=gt(s.routePath);Object.assign(e,s,{layout:I,page:u,routePath:h,pathParam:N})}e.query||(e.query=[]),e.permissions||(e.permissions=[])}}function E(){v.value=!1}function p(){e.routeName?e.routePath=mt(e.routeName):e.routePath=""}function l(){e.routeName?e.i18nKey=`route.${e.routeName}`:e.i18nKey=null}function d(){return{code:"",desc:""}}function i(){const{layout:b,page:s,pathParam:I,...u}=e,h=ct(b,s),N=ft(e.routePath,I);return u.component=h,u.routePath=N,u}async function T(){var b,s,I;if(m.operateType==="add"||m.operateType==="addChild"){await w();const u=i(),h={activeMenu:u.activeMenu,menuType:u.menuType,menuName:u.menuName,routeName:u.routeName,routePath:u.routePath,component:u.component,icon:u.icon,iconType:u.iconType,parentId:u.parentId,status:u.status,keepAlive:u.keepAlive,constant:u.constant,order:u.order,hideInMenu:u.hideInMenu,href:u.href,mutiTab:u.multiTab,fixedIndexInTab:u.fixedIndexInTab,query:u.query,buttonCode:u.buttonCode,permissions:u.permissions,i18nKey:u.i18nKey},{error:N}=await ta(h);N||((b=window.$message)==null||b.success(t("common.addSuccess")),E(),g("submitted"))}else if(m.operateType==="edit"){await w();const u=i(),h={id:(s=m.rowData)==null?void 0:s.id,activeMenu:u.activeMenu,menuType:u.menuType,menuName:u.menuName,routeName:u.routeName,routePath:u.routePath,component:u.component,icon:u.icon,iconType:u.iconType,parentId:u.parentId,status:u.status,keepAlive:u.keepAlive,constant:u.constant,order:u.order,hideInMenu:u.hideInMenu,href:u.href,mutiTab:u.multiTab,fixedIndexInTab:u.fixedIndexInTab,query:u.query,buttonCode:u.buttonCode,permissions:u.permissions,i18nKey:u.i18nKey},{error:N}=await na(h);N||((I=window.$message)==null||I.success(t("common.addSuccess")),E(),g("submitted"))}}return Me(v,()=>{v.value&&(H(),V(),ee())}),Me(()=>e.routeName,()=>{p(),l()}),(b,s)=>{const I=la,u=oa,h=ra,N=ce,Re=Ma,ie=Ea,we=sa,ae=F,Ce=st,fe=Ga,Oe=lt,We=Wa,Ye=qa,He=Ua,Je=Sa;return C(),L(Je,{show:v.value,"onUpdate:show":s[23]||(s[23]=o=>v.value=o),title:O.value,preset:"card",class:"w-800px"},{footer:c(()=>[a(fe,{justify:"end",size:16},{default:c(()=>[a(ae,{onClick:E},{default:c(()=>[Ee(Ue(r(t)("common.cancel")),1)]),_:1}),a(ae,{type:"primary",onClick:T},{default:c(()=>[Ee(Ue(r(t)("common.confirm")),1)]),_:1})]),_:1})]),default:c(()=>[a(He,{class:"h-480px pr-20px"},{default:c(()=>[a(Ye,{ref_key:"formRef",ref:A,model:e,rules:G,"label-placement":"left","label-width":100},{default:c(()=>[a(We,{responsive:"screen","item-responsive":""},{default:c(()=>[a(h,{span:"24 m:12",label:r(t)("page.manage.menu.menuType"),path:"menuType"},{default:c(()=>[a(u,{value:e.menuType,"onUpdate:value":s[0]||(s[0]=o=>e.menuType=o),disabled:x.value},{default:c(()=>[(C(!0),Q(se,null,_e(r(Qe),o=>(C(),L(I,{key:o.value,value:o.value,label:r(t)(o.label)},null,8,["value","label"]))),128))]),_:1},8,["value","disabled"])]),_:1},8,["label"]),a(h,{span:"24 m:12",label:r(t)("page.manage.menu.menuName"),path:"menuName"},{default:c(()=>[a(N,{value:e.menuName,"onUpdate:value":s[1]||(s[1]=o=>e.menuName=o),placeholder:r(t)("page.manage.menu.form.menuName")},null,8,["value","placeholder"])]),_:1},8,["label"]),a(h,{span:"24 m:12",label:r(t)("page.manage.menu.menuStatus"),path:"status"},{default:c(()=>[a(u,{value:e.status,"onUpdate:value":s[2]||(s[2]=o=>e.status=o)},{default:c(()=>[(C(!0),Q(se,null,_e(r(Ze),o=>(C(),L(I,{key:o.value,value:o.value,label:r(t)(o.label)},null,8,["value","label"]))),128))]),_:1},8,["value"])]),_:1},8,["label"]),a(h,{span:"24 m:12",label:r(t)("page.manage.menu.hideInMenu"),path:"hideInMenu"},{default:c(()=>[a(u,{value:e.hideInMenu,"onUpdate:value":s[3]||(s[3]=o=>e.hideInMenu=o)},{default:c(()=>[a(I,{value:!0,label:r(t)("common.yesOrNo.yes")},null,8,["label"]),a(I,{value:!1,label:r(t)("common.yesOrNo.no")},null,8,["label"])]),_:1},8,["value"])]),_:1},8,["label"]),a(h,{span:"24 m:12",label:r(t)("page.manage.menu.i18nKey"),path:"i18nKey"},{default:c(()=>[a(N,{value:e.i18nKey,"onUpdate:value":s[4]||(s[4]=o=>e.i18nKey=o),placeholder:r(t)("page.manage.menu.form.i18nKey")},null,8,["value","placeholder"])]),_:1},8,["label"]),a(h,{span:"24 m:12",label:r(t)("page.manage.menu.order"),path:"order"},{default:c(()=>[a(Re,{value:e.order,"onUpdate:value":s[5]||(s[5]=o=>e.order=o),class:"w-full",placeholder:r(t)("page.manage.menu.form.order")},null,8,["value","placeholder"])]),_:1},8,["label"]),$.value?(C(),Q(se,{key:0},[a(h,{span:"24 m:12",label:r(t)("page.manage.menu.routeName"),path:"routeName"},{default:c(()=>[a(N,{value:e.routeName,"onUpdate:value":s[6]||(s[6]=o=>e.routeName=o),placeholder:r(t)("page.manage.menu.form.routeName")},null,8,["value","placeholder"])]),_:1},8,["label"]),a(h,{span:"24 m:12",label:r(t)("page.manage.menu.routePath"),path:"routePath"},{default:c(()=>[a(N,{value:e.routePath,"onUpdate:value":s[7]||(s[7]=o=>e.routePath=o),disabled:"",placeholder:r(t)("page.manage.menu.form.routePath")},null,8,["value","placeholder"])]),_:1},8,["label"]),a(h,{span:"24 m:12",label:r(t)("page.manage.menu.pathParam"),path:"pathParam"},{default:c(()=>[a(N,{value:e.pathParam,"onUpdate:value":s[8]||(s[8]=o=>e.pathParam=o),placeholder:r(t)("page.manage.menu.form.pathParam")},null,8,["value","placeholder"])]),_:1},8,["label"]),M.value?(C(),L(h,{key:0,span:"24 m:12",label:r(t)("page.manage.menu.layout"),path:"layout"},{default:c(()=>[a(ie,{value:e.layout,"onUpdate:value":s[9]||(s[9]=o=>e.layout=o),options:_,placeholder:r(t)("page.manage.menu.form.layout")},null,8,["value","placeholder"])]),_:1},8,["label"])):te("",!0),z.value?(C(),L(h,{key:1,span:"24 m:12",label:r(t)("page.manage.menu.page"),path:"page"},{default:c(()=>[a(ie,{value:e.page,"onUpdate:value":s[10]||(s[10]=o=>e.page=o),options:B.value,placeholder:r(t)("page.manage.menu.form.page")},null,8,["value","options","placeholder"])]),_:1},8,["label"])):te("",!0),a(h,{span:"24 m:12",label:r(t)("page.manage.menu.iconTypeTitle"),path:"iconType"},{default:c(()=>[a(u,{value:e.iconType,"onUpdate:value":s[11]||(s[11]=o=>e.iconType=o)},{default:c(()=>[(C(!0),Q(se,null,_e(r(ea),o=>(C(),L(I,{key:o.value,value:o.value,label:r(t)(o.label)},null,8,["value","label"]))),128))]),_:1},8,["value"])]),_:1},8,["label"]),a(h,{span:"24 m:12",label:r(t)("page.manage.menu.icon"),path:"icon"},{default:c(()=>[e.iconType==="1"?(C(),L(N,{key:0,value:e.icon,"onUpdate:value":s[12]||(s[12]=o=>e.icon=o),placeholder:r(t)("page.manage.menu.form.icon"),class:"flex-1"},{suffix:c(()=>[e.icon?(C(),L(Te,{key:0,icon:e.icon,class:"text-icon"},null,8,["icon"])):te("",!0)]),_:1},8,["value","placeholder"])):te("",!0),e.iconType==="2"?(C(),L(ie,{key:1,value:e.icon,"onUpdate:value":s[13]||(s[13]=o=>e.icon=o),placeholder:r(t)("page.manage.menu.form.localIcon"),options:r(W)},null,8,["value","placeholder","options"])):te("",!0)]),_:1},8,["label"]),a(h,{span:"24 m:12",label:r(t)("page.manage.menu.keepAlive"),path:"keepAlive"},{default:c(()=>[a(u,{value:e.keepAlive,"onUpdate:value":s[14]||(s[14]=o=>e.keepAlive=o)},{default:c(()=>[a(I,{value:!0,label:r(t)("common.yesOrNo.yes")},null,8,["label"]),a(I,{value:!1,label:r(t)("common.yesOrNo.no")},null,8,["label"])]),_:1},8,["value"])]),_:1},8,["label"]),a(h,{span:"24 m:12",label:r(t)("page.manage.menu.constant"),path:"constant"},{default:c(()=>[a(u,{value:e.constant,"onUpdate:value":s[15]||(s[15]=o=>e.constant=o)},{default:c(()=>[a(I,{value:!0,label:r(t)("common.yesOrNo.yes")},null,8,["label"]),a(I,{value:!1,label:r(t)("common.yesOrNo.no")},null,8,["label"])]),_:1},8,["value"])]),_:1},8,["label"]),a(h,{span:"24 m:12",label:r(t)("page.manage.menu.href"),path:"href"},{default:c(()=>[a(N,{value:e.href,"onUpdate:value":s[16]||(s[16]=o=>e.href=o),placeholder:r(t)("page.manage.menu.form.href")},null,8,["value","placeholder"])]),_:1},8,["label"]),e.hideInMenu?(C(),L(h,{key:2,span:"24 m:12",label:r(t)("page.manage.menu.activeMenu"),path:"activeMenu"},{default:c(()=>[a(ie,{value:e.activeMenu,"onUpdate:value":s[17]||(s[17]=o=>e.activeMenu=o),options:B.value,clearable:"",placeholder:r(t)("page.manage.menu.form.activeMenu")},null,8,["value","options","placeholder"])]),_:1},8,["label"])):te("",!0),a(h,{span:"24 m:12",label:r(t)("page.manage.menu.multiTab"),path:"multiTab"},{default:c(()=>[a(u,{value:e.multiTab,"onUpdate:value":s[18]||(s[18]=o=>e.multiTab=o)},{default:c(()=>[a(I,{value:!0,label:r(t)("common.yesOrNo.yes")},null,8,["label"]),a(I,{value:!1,label:r(t)("common.yesOrNo.no")},null,8,["label"])]),_:1},8,["value"])]),_:1},8,["label"]),a(h,{span:"24 m:12",label:r(t)("page.manage.menu.fixedIndexInTab"),path:"fixedIndexInTab"},{default:c(()=>[a(Re,{value:e.fixedIndexInTab,"onUpdate:value":s[19]||(s[19]=o=>e.fixedIndexInTab=o),class:"w-full",clearable:"",placeholder:r(t)("page.manage.menu.form.fixedIndexInTab")},null,8,["value","placeholder"])]),_:1},8,["label"]),a(h,{span:"24",label:r(t)("page.manage.menu.query")},{default:c(()=>[a(Oe,{value:e.query,"onUpdate:value":s[20]||(s[20]=o=>e.query=o),preset:"pair","key-placeholder":r(t)("page.manage.menu.form.queryKey"),"value-placeholder":r(t)("page.manage.menu.form.queryValue")},{action:c(({index:o,create:J,remove:ve})=>[a(fe,{class:"ml-12px"},{default:c(()=>[a(ae,{size:"medium",onClick:()=>J(o)},{default:c(()=>[a(we,{class:"text-icon"})]),_:2},1032,["onClick"]),a(ae,{size:"medium",onClick:()=>ve(o)},{default:c(()=>[a(Ce,{class:"text-icon"})]),_:2},1032,["onClick"])]),_:2},1024)]),_:1},8,["value","key-placeholder","value-placeholder"])]),_:1},8,["label"])],64)):(C(),Q(se,{key:1},[a(h,{span:"24 m:12",label:r(t)("page.manage.menu.buttonCode"),path:"buttonCode"},{default:c(()=>[a(N,{value:e.buttonCode,"onUpdate:value":s[21]||(s[21]=o=>e.buttonCode=o),placeholder:r(t)("page.manage.menu.form.buttonCode")},null,8,["value","placeholder"])]),_:1},8,["label"]),a(h,{span:"24",label:r(t)("page.manage.menu.permission")},{default:c(()=>[a(Oe,{value:e.permissions,"onUpdate:value":s[22]||(s[22]=o=>e.permissions=o),"on-create":d},{default:c(({value:o})=>[je("div",vt,[a(N,{value:o.code,"onUpdate:value":J=>o.code=J,placeholder:r(t)("page.manage.menu.form.buttonCode"),class:"flex-1"},null,8,["value","onUpdate:value","placeholder"]),a(N,{value:o.desc,"onUpdate:value":J=>o.desc=J,placeholder:r(t)("page.manage.menu.form.buttonDesc"),class:"flex-1"},null,8,["value","onUpdate:value","placeholder"])])]),action:c(({index:o,create:J,remove:ve})=>[a(fe,{class:"ml-12px"},{default:c(()=>[a(ae,{size:"medium",onClick:()=>J(o)},{default:c(()=>[a(we,{class:"text-icon"})]),_:2},1032,["onClick"]),a(ae,{size:"medium",onClick:()=>ve(o)},{default:c(()=>[a(Ce,{class:"text-icon"})]),_:2},1032,["onClick"])]),_:2},1024)]),_:1},8,["value"])]),_:1},8,["label"])],64))]),_:1})]),_:1},8,["model"])]),_:1})]),_:1},8,["show","title"])}}});function X(n){return typeof n=="function"||Object.prototype.toString.call(n)==="[object Object]"&&!ja(n)}const Tt=Z({name:"manage_menu",__name:"index",setup(n){const f=Ba(),m=Fe({}),{bool:g,setTrue:v}=La(),A=oe(null),{columns:w,columnChecks:V,data:S,loading:O,pagination:e,getData:k,getDataByPage:G}=ua({apiFn:da,columns:()=>[{type:"selection",align:"center",width:48},{key:"id",title:t("page.manage.menu.id"),align:"center"},{key:"menuType",title:t("page.manage.menu.menuType"),align:"center",width:80,render:l=>{const d={1:"default",2:"primary",3:"primary"},i=t(pa[l.menuType]);return a(Pe,{type:d[l.menuType]},X(i)?i:{default:()=>[i]})}},{key:"menuName",title:t("page.manage.menu.menuName"),align:"center",minWidth:120,render:l=>{const{i18nKey:d,menuName:i}=l,T=d?t(d):i;return a("span",null,[T])}},{key:"icon",title:t("page.manage.menu.icon"),align:"center",width:60,render:l=>{const d=l.iconType==="1"?l.icon:void 0,i=l.iconType==="2"?l.icon:void 0;return a("div",{class:"flex-center"},[a(Te,{icon:d,localIcon:i,class:"text-icon"},null)])}},{key:"routeName",title:t("page.manage.menu.routeName"),align:"center",minWidth:120},{key:"routePath",title:t("page.manage.menu.routePath"),align:"center",minWidth:120},{key:"status",title:t("page.manage.menu.menuStatus"),align:"center",width:80,render:l=>{if(l.status===null)return null;const d={1:"success",2:"warning"},i=t(ca[l.status]);return a(Pe,{type:d[l.status]},X(i)?i:{default:()=>[i]})}},{key:"hideInMenu",title:t("page.manage.menu.hideInMenu"),align:"center",width:80,render:l=>{const d=l.hideInMenu?"Y":"N",i={Y:"error",N:"default"},T=t(qe[d]);return a(Pe,{type:i[d]},X(T)?T:{default:()=>[T]})}},{key:"parentId",title:t("page.manage.menu.parentId"),width:90,align:"center"},{key:"order",title:t("page.manage.menu.order"),align:"center",width:60},{key:"operate",title:t("common.operate"),align:"center",width:230,render:l=>{let d,i,T;return a("div",{class:"flex-center justify-end gap-8px"},[l.menuType==="1"&&a(F,{type:"primary",ghost:!0,size:"small",onClick:()=>ee(l)},X(d=t("page.manage.menu.addChildMenu"))?d:{default:()=>[d]}),l.menuType==="2"&&a(F,{type:"primary",ghost:!0,size:"small",onClick:()=>ee(l)},X(i=t("page.manage.menu.addChildMenu"))?i:{default:()=>[i]}),a(F,{type:"primary",ghost:!0,size:"small",onClick:()=>q(l)},X(T=t("common.edit"))?T:{default:()=>[T]}),a(ma,{onPositiveClick:()=>B(l.id)},{default:()=>t("common.confirmDelete"),trigger:()=>{let b;return a(F,{loading:m[l.id],type:"error",ghost:!0,size:"small"},X(b=t("common.delete"))?b:{default:()=>[b]})}})])}}]}),{checkedRowKeys:x,onBatchDeleted:D,onDeleted:W}=ia(S,k),M=oe("add");function z(){M.value="add",v()}async function $(){console.log(x.value),D()}async function B(l){const d=[l];m[l]=!0;const{error:i}=await ga(d);m[l]=!1,!i&&W()}const _=oe(null);function q(l){M.value="edit",_.value={...l},v()}function ee(l){M.value="addChild",_.value={...l},v()}const H=oe([]);async function E(){const{data:l}=await ha();H.value=l||[]}function p(){E()}return p(),(l,d)=>{const i=fa,T=va,b=Ka;return C(),Q("div",{ref_key:"wrapperRef",ref:A,class:"flex-col-stretch gap-16px overflow-hidden lt-sm:overflow-auto"},[a(b,{title:r(t)("page.manage.menu.title"),bordered:!1,size:"small",class:"sm:flex-1-hidden card-wrapper"},{"header-extra":c(()=>[a(i,{columns:r(V),"onUpdate:columns":d[0]||(d[0]=s=>Ie(V)?V.value=s:null),"disabled-delete":r(x).length===0,loading:r(O),onAdd:z,onDelete:$,onRefresh:r(k)},null,8,["columns","disabled-delete","loading","onRefresh"])]),default:c(()=>[a(T,{"checked-row-keys":r(x),"onUpdate:checkedRowKeys":d[1]||(d[1]=s=>Ie(x)?x.value=s:null),columns:r(w),data:r(S),size:"small","flex-height":!r(f).isMobile,"scroll-x":1088,loading:r(O),"row-key":s=>s.id,remote:"",pagination:r(e),class:"sm:h-full"},null,8,["checked-row-keys","columns","data","flex-height","loading","row-key","pagination"]),a(ht,{visible:r(g),"onUpdate:visible":d[2]||(d[2]=s=>Ie(g)?g.value=s:null),"operate-type":M.value,"row-data":_.value,"all-pages":H.value,onSubmitted:r(G)},null,8,["visible","operate-type","row-data","all-pages","onSubmitted"])]),_:1},8,["title"])],512)}}});export{Tt as default};
