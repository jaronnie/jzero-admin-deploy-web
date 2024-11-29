import{A as ea,m as aa,e as ta,a as na,G as la,b as oa,E as ra,_ as sa,c as ua,d as ia,f as da,u as ca,g as pa,h as ma,i as ga,j as fa,N as va,D as ha,k as ya,l as ba,n as _a}from"./business-DK4tGOst.js";import{d as te,a1 as y,L as E,M as De,K as j,N as J,O as de,U as Ke,ag as Ia,a8 as je,ah as Pa,a6 as Fe,ai as Ta,aj as ka,ak as Na,al as Ra,am as wa,aa as Ca,ab as we,v as fe,an as Oa,r as se,a9 as me,ao as Va,V as ze,a as F,Y as $a,ap as Aa,B as z,aq as xe,ar as Me,as as _e,at as Ie,au as Da,av as ue,aw as Ee,ax as xa,ay as Pe,az as Ma,ae as Ea,o as C,b as ae,e as qe,aA as R,aB as Ue,aC as Ua,y as Sa,$ as t,p as Ge,f as a,_ as Re,aD as Se,c as K,w as p,g as Be,t as Le,h as o,a3 as Te,a4 as ie,aE as le,aF as Ba,aG as La,aH as Ka,aI as ja,A as Fa,aJ as za,aK as ke,a5 as Ne,J as qa,aL as Ga}from"./index-uS9qCRF1.js";import{u as Wa,a as Ya,b as Ha}from"./form-BlK7Jnjb.js";import{_ as Ja}from"./Space-CPryNm1A.js";import{a as Xa}from"./Grid-CBxk-Rvm.js";const Qa=te({name:"ArrowUp",render(){return y("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},y("g",{fill:"none"},y("path",{d:"M3.13 9.163a.5.5 0 1 0 .74.674L9.5 3.67V17.5a.5.5 0 0 0 1 0V3.672l5.63 6.165a.5.5 0 0 0 .738-.674l-6.315-6.916a.746.746 0 0 0-.632-.24a.746.746 0 0 0-.476.24L3.131 9.163z",fill:"currentColor"})))}}),I="0!important",We="-1px!important";function oe(n){return J(`${n}-type`,[j("& +",[E("button",{},[J(`${n}-type`,[de("border",{borderLeftWidth:I}),de("state-border",{left:We})])])])])}function re(n){return J(`${n}-type`,[j("& +",[E("button",[J(`${n}-type`,[de("border",{borderTopWidth:I}),de("state-border",{top:We})])])])])}const Za=E("button-group",`
 flex-wrap: nowrap;
 display: inline-flex;
 position: relative;
`,[De("vertical",{flexDirection:"row"},[De("rtl",[E("button",[j("&:first-child:not(:last-child)",`
 margin-right: ${I};
 border-top-right-radius: ${I};
 border-bottom-right-radius: ${I};
 `),j("&:last-child:not(:first-child)",`
 margin-left: ${I};
 border-top-left-radius: ${I};
 border-bottom-left-radius: ${I};
 `),j("&:not(:first-child):not(:last-child)",`
 margin-left: ${I};
 margin-right: ${I};
 border-radius: ${I};
 `),oe("default"),J("ghost",[oe("primary"),oe("info"),oe("success"),oe("warning"),oe("error")])])])]),J("vertical",{flexDirection:"column"},[E("button",[j("&:first-child:not(:last-child)",`
 margin-bottom: ${I};
 margin-left: ${I};
 margin-right: ${I};
 border-bottom-left-radius: ${I};
 border-bottom-right-radius: ${I};
 `),j("&:last-child:not(:first-child)",`
 margin-top: ${I};
 margin-left: ${I};
 margin-right: ${I};
 border-top-left-radius: ${I};
 border-top-right-radius: ${I};
 `),j("&:not(:first-child):not(:last-child)",`
 margin: ${I};
 border-radius: ${I};
 `),re("default"),J("ghost",[re("primary"),re("info"),re("success"),re("warning"),re("error")])])])]),et={size:{type:String,default:void 0},vertical:Boolean},at=te({name:"ButtonGroup",props:et,setup(n){const{mergedClsPrefixRef:f,mergedRtlRef:m}=Ke(n);return Ia("-button-group",Za,f),je(Pa,n),{rtlEnabled:Fe("ButtonGroup",m,f),mergedClsPrefix:f}},render(){const{mergedClsPrefix:n}=this;return y("div",{class:[`${n}-button-group`,this.rtlEnabled&&`${n}-button-group--rtl`,this.vertical&&`${n}-button-group--vertical`],role:"group"},this.$slots)}});function tt(){return wa}const nt=Ta({name:"DynamicInput",common:ka,peers:{Input:Na,Button:Ra},self:tt}),Ce=Ca("n-dynamic-input"),lt=te({name:"DynamicInputInputPreset",props:{clsPrefix:{type:String,required:!0},value:{type:String,default:""},disabled:Boolean,parentPath:String,path:String,onUpdateValue:{type:Function,required:!0}},setup(){const{mergedThemeRef:n,placeholderRef:f}=we(Ce);return{mergedTheme:n,placeholder:f}},render(){const{mergedTheme:n,placeholder:f,value:m,clsPrefix:g,onUpdateValue:v,disabled:D}=this;return y("div",{class:`${g}-dynamic-input-preset-input`},y(fe,{theme:n.peers.Input,"theme-overrides":n.peerOverrides.Input,value:m,placeholder:f,onUpdateValue:v,disabled:D}))}}),ot=te({name:"DynamicInputPairPreset",props:{clsPrefix:{type:String,required:!0},value:{type:Object,default:()=>({key:"",value:""})},disabled:Boolean,parentPath:String,path:String,onUpdateValue:{type:Function,required:!0}},setup(n){const{mergedThemeRef:f,keyPlaceholderRef:m,valuePlaceholderRef:g}=we(Ce);return{mergedTheme:f,keyPlaceholder:m,valuePlaceholder:g,handleKeyInput(v){n.onUpdateValue({key:v,value:n.value.value})},handleValueInput(v){n.onUpdateValue({key:n.value.key,value:v})}}},render(){const{mergedTheme:n,keyPlaceholder:f,valuePlaceholder:m,value:g,clsPrefix:v,disabled:D}=this;return y("div",{class:`${v}-dynamic-input-preset-pair`},y(fe,{theme:n.peers.Input,"theme-overrides":n.peerOverrides.Input,value:g.key,class:`${v}-dynamic-input-pair-input`,placeholder:f,onUpdateValue:this.handleKeyInput,disabled:D}),y(fe,{theme:n.peers.Input,"theme-overrides":n.peerOverrides.Input,value:g.value,class:`${v}-dynamic-input-pair-input`,placeholder:m,onUpdateValue:this.handleValueInput,disabled:D}))}}),rt=E("dynamic-input",{width:"100%"},[E("dynamic-input-item",`
 margin-bottom: 10px;
 display: flex;
 flex-wrap: nowrap;
 `,[E("dynamic-input-preset-input",{flex:1,alignItems:"center"}),E("dynamic-input-preset-pair",`
 flex: 1;
 display: flex;
 align-items: center;
 `,[E("dynamic-input-pair-input",[j("&:first-child",{"margin-right":"12px"})])]),de("action",`
 align-self: flex-start;
 display: flex;
 justify-content: flex-end;
 flex-shrink: 0;
 flex-grow: 0;
 margin: var(--action-margin);
 `,[J("icon",{cursor:"pointer"})]),j("&:last-child",{marginBottom:0})]),E("form-item",`
 padding-top: 0 !important;
 margin-right: 0 !important;
 `,[E("form-item-blank",{paddingTop:"0 !important"})])]),ge=new WeakMap,st=Object.assign(Object.assign({},ze.props),{max:Number,min:{type:Number,default:0},value:Array,defaultValue:{type:Array,default:()=>[]},preset:{type:String,default:"input"},keyField:String,itemClass:String,itemStyle:[String,Object],keyPlaceholder:{type:String,default:""},valuePlaceholder:{type:String,default:""},placeholder:{type:String,default:""},disabled:Boolean,showSortButton:Boolean,createButtonProps:Object,onCreate:Function,onRemove:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClear:Function,onInput:[Function,Array]}),ut=te({name:"DynamicInput",props:st,setup(n,{slots:f}){const{mergedComponentPropsRef:m,mergedClsPrefixRef:g,mergedRtlRef:v,inlineThemeDisabled:D}=Ke(),w=we(Oa,null),$=se(n.defaultValue),U=me(n,"value"),O=Va(U,$),S=ze("DynamicInput","-dynamic-input",rt,nt,n,g),k=F(()=>{const{value:c}=O;if(Array.isArray(c)){const{max:l}=n;return l!==void 0&&c.length>=l}return!1}),W=F(()=>{const{value:c}=O;return Array.isArray(c)?c.length<=n.min:!0}),e=F(()=>{var c,l;return(l=(c=m==null?void 0:m.value)===null||c===void 0?void 0:c.DynamicInput)===null||l===void 0?void 0:l.buttonSize});function V(c){const{onInput:l,"onUpdate:value":i,onUpdateValue:d}=n;l&&Pe(l,c),i&&Pe(i,c),d&&Pe(d,c),$.value=c}function Y(c,l){if(c==null||typeof c!="object")return l;const i=_e(c)?Ie(c):c;let d=ge.get(i);return d===void 0&&ge.set(i,d=Da()),d}function x(c,l){const{value:i}=O,d=Array.from(i??[]),P=d[c];if(d[c]=l,P&&l&&typeof P=="object"&&typeof l=="object"){const G=_e(P)?Ie(P):P,M=_e(l)?Ie(l):l,ce=ge.get(G);ce!==void 0&&ge.set(M,ce)}V(d)}function H(){A(-1)}function A(c){const{value:l}=O,{onCreate:i}=n,d=Array.from(l??[]);if(i)d.splice(c+1,0,i(c+1)),V(d);else if(f.default)d.splice(c+1,0,null),V(d);else switch(n.preset){case"input":d.splice(c+1,0,""),V(d);break;case"pair":d.splice(c+1,0,{key:"",value:""}),V(d);break}}function B(c){const{value:l}=O;if(!Array.isArray(l))return;const{min:i}=n;if(l.length<=i)return;const{onRemove:d}=n;d&&d(c);const P=Array.from(l);P.splice(c,1),V(P)}function b(c,l,i){if(l<0||i<0||l>=c.length||i>=c.length||l===i)return;const d=c[l];c[l]=c[i],c[i]=d}function q(c,l){const{value:i}=O;if(!Array.isArray(i))return;const d=Array.from(i);c==="up"&&b(d,l,l-1),c==="down"&&b(d,l,l+1),V(d)}je(Ce,{mergedThemeRef:S,keyPlaceholderRef:me(n,"keyPlaceholder"),valuePlaceholderRef:me(n,"valuePlaceholder"),placeholderRef:me(n,"placeholder")});const X=Fe("DynamicInput",v,g),Q=F(()=>{const{self:{actionMargin:c,actionMarginRtl:l}}=S.value;return{"--action-margin":c,"--action-margin-rtl":l}}),L=D?$a("dynamic-input",void 0,Q,n):void 0;return{locale:Aa("DynamicInput").localeRef,rtlEnabled:X,buttonSize:e,mergedClsPrefix:g,NFormItem:w,uncontrolledValue:$,mergedValue:O,insertionDisabled:k,removeDisabled:W,handleCreateClick:H,ensureKey:Y,handleValueChange:x,remove:B,move:q,createItem:A,mergedTheme:S,cssVars:D?void 0:Q,themeClass:L==null?void 0:L.themeClass,onRender:L==null?void 0:L.onRender}},render(){const{$slots:n,itemClass:f,buttonSize:m,mergedClsPrefix:g,mergedValue:v,locale:D,mergedTheme:w,keyField:$,itemStyle:U,preset:O,showSortButton:S,NFormItem:k,ensureKey:W,handleValueChange:e,remove:V,createItem:Y,move:x,onRender:H,disabled:A}=this;return H==null||H(),y("div",{class:[`${g}-dynamic-input`,this.rtlEnabled&&`${g}-dynamic-input--rtl`,this.themeClass],style:this.cssVars},!Array.isArray(v)||v.length===0?y(z,Object.assign({block:!0,ghost:!0,dashed:!0,size:m},this.createButtonProps,{disabled:this.insertionDisabled||A,theme:w.peers.Button,themeOverrides:w.peerOverrides.Button,onClick:this.handleCreateClick}),{default:()=>xe(n["create-button-default"],()=>[D.create]),icon:()=>xe(n["create-button-icon"],()=>[y(ue,{clsPrefix:g},{default:()=>y(Ee,null)})])}):v.map((B,b)=>y("div",{key:$?B[$]:W(B,b),"data-key":$?B[$]:W(B,b),class:[`${g}-dynamic-input-item`,f],style:U},Me(n.default,{value:v[b],index:b},()=>[O==="input"?y(lt,{disabled:A,clsPrefix:g,value:v[b],parentPath:k?k.path.value:void 0,path:k!=null&&k.path.value?`${k.path.value}[${b}]`:void 0,onUpdateValue:q=>{e(b,q)}}):O==="pair"?y(ot,{disabled:A,clsPrefix:g,value:v[b],parentPath:k?k.path.value:void 0,path:k!=null&&k.path.value?`${k.path.value}[${b}]`:void 0,onUpdateValue:q=>{e(b,q)}}):null]),Me(n.action,{value:v[b],index:b,create:Y,remove:V,move:x},()=>[y("div",{class:`${g}-dynamic-input-item__action`},y(at,{size:m},{default:()=>[y(z,{disabled:this.removeDisabled||A,theme:w.peers.Button,themeOverrides:w.peerOverrides.Button,circle:!0,onClick:()=>{V(b)}},{icon:()=>y(ue,{clsPrefix:g},{default:()=>y(xa,null)})}),y(z,{disabled:this.insertionDisabled||A,circle:!0,theme:w.peers.Button,themeOverrides:w.peerOverrides.Button,onClick:()=>{Y(b)}},{icon:()=>y(ue,{clsPrefix:g},{default:()=>y(Ee,null)})}),S?y(z,{disabled:b===0||A,circle:!0,theme:w.peers.Button,themeOverrides:w.peerOverrides.Button,onClick:()=>{x("up",b)}},{icon:()=>y(ue,{clsPrefix:g},{default:()=>y(Qa,null)})}):null,S?y(z,{disabled:b===v.length-1||A,circle:!0,theme:w.peers.Button,themeOverrides:w.peerOverrides.Button,onClick:()=>{x("down",b)}},{icon:()=>y(ue,{clsPrefix:g},{default:()=>y(ea,null)})}):null]}))]))))}}),Ye={Y:"common.yesOrNo.yes",N:"common.yesOrNo.no"};Ma(Ye);const it={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"};function dt(n,f){return C(),ae("svg",it,f[0]||(f[0]=[qe("path",{fill:"currentColor",d:"M18 13H6c-.55 0-1-.45-1-1s.45-1 1-1h12c.55 0 1 .45 1 1s-.45 1-1 1"},null,-1)]))}const ct=Ea({name:"ic-round-remove",render:dt});function pt(){return Object.keys(Object.assign({"/src/assets/svg-icon/activity.svg":()=>R(()=>import("./activity-B4XY664I.js"),[]),"/src/assets/svg-icon/at-sign.svg":()=>R(()=>import("./at-sign-DvqQw7Qx.js"),[]),"/src/assets/svg-icon/avatar.svg":()=>R(()=>import("./avatar-CQqEtg-V.js"),[]),"/src/assets/svg-icon/banner.svg":()=>R(()=>import("./banner-CFFAqDOx.js"),[]),"/src/assets/svg-icon/cast.svg":()=>R(()=>import("./cast-n3EmpXB4.js"),[]),"/src/assets/svg-icon/chrome.svg":()=>R(()=>import("./chrome-BM_Le6p_.js"),[]),"/src/assets/svg-icon/copy.svg":()=>R(()=>import("./copy-BsYpLlfM.js"),[]),"/src/assets/svg-icon/custom-icon.svg":()=>R(()=>import("./custom-icon-857Ak5pp.js"),[]),"/src/assets/svg-icon/empty-data.svg":()=>R(()=>import("./empty-data-Df-AtTS4.js"),[]),"/src/assets/svg-icon/expectation.svg":()=>R(()=>import("./expectation-BuEJD7SN.js"),[]),"/src/assets/svg-icon/heart.svg":()=>R(()=>import("./heart-DOH2U7VV.js"),[]),"/src/assets/svg-icon/logo.svg":()=>R(()=>import("./logo-BeLY4cv9.js"),[]),"/src/assets/svg-icon/network-error.svg":()=>R(()=>import("./network-error-DDJxZniG.js"),[]),"/src/assets/svg-icon/no-icon.svg":()=>R(()=>import("./no-icon-lf9QfDPR.js"),[]),"/src/assets/svg-icon/no-permission.svg":()=>R(()=>import("./no-permission-CgHwmHj5.js"),[]),"/src/assets/svg-icon/not-found.svg":()=>R(()=>import("./not-found-qgwLoIvx.js"),[]),"/src/assets/svg-icon/service-error.svg":()=>R(()=>import("./service-error-BlNULCLM.js"),[]),"/src/assets/svg-icon/wind.svg":()=>R(()=>import("./wind-Dy5zdHKW.js"),[])})).map(m=>{var g;return((g=m.split("/").at(-1))==null?void 0:g.replace(".svg",""))||""}).filter(Boolean)}const ve="layout.",he="view.",He="$";function mt(n){let f="",m="";const[g="",v=""]=(n==null?void 0:n.split(He))||[];return f=gt(g),m=ft(v||g),{layout:f,page:m}}function gt(n){return n.startsWith(ve)?n.replace(ve,""):""}function ft(n){return n.startsWith(he)?n.replace(he,""):""}function vt(n,f){const m=!!n,g=!!f;return m&&g?`${ve}${n}${He}${he}${f}`:m?`${ve}${n}`:g?`${he}${f}`:""}function ht(n){return`/${n.replace(/_/g,"/")}`}function yt(n){const[f,m=""]=n.split("/:");return{path:f,param:m}}function bt(n,f){return f.trim()?`${n}/:${f}`:n}const _t={class:"ml-8px flex-y-center flex-1 gap-12px"},It=te({name:"MenuOperateModal",__name:"menu-operate-modal",props:Ue({operateType:{},rowData:{},allPages:{}},{visible:{type:Boolean,default:!1},visibleModifiers:{}}),emits:Ue(["submitted"],["update:visible"]),setup(n,{emit:f}){const m=n,g=f,v=Ua(n,"visible"),{formRef:D,validate:w,restoreValidation:$}=Wa(),{defaultRequiredRule:U}=Ya(),{loading:O,startLoading:S,endLoading:k}=Sa(),W=F(()=>({add:t("page.manage.menu.addMenu"),addChild:t("page.manage.menu.addChildMenu"),edit:t("page.manage.menu.editMenu")})[m.operateType]),e=Ge(V());function V(){return{menuType:"1",menuName:"",routeName:"",routePath:"",pathParam:"",component:"",layout:"",page:"",i18nKey:null,icon:"",iconType:"1",parentId:0,status:"1",keepAlive:!1,constant:!1,order:0,href:null,hideInMenu:!1,activeMenu:null,multiTab:!1,fixedIndexInTab:null,query:[],buttonCode:"",permissions:[]}}const Y={menuName:U,status:U,routeName:U,routePath:U},x=F(()=>m.operateType==="edit"),A=pt().map(T=>({label:()=>a("div",{class:"flex-y-center gap-16px"},[a(Re,{localIcon:T,class:"text-icon"},null),a("span",null,[T])]),value:T})),B=F(()=>e.parentId===0),b=F(()=>e.menuType==="2"),q=F(()=>e.menuType==="1"||e.menuType==="2"),X=F(()=>{const T=[...m.allPages];return e.routeName&&!T.includes(e.routeName)&&T.unshift(e.routeName),T.map(_=>({label:_,value:_}))}),Q=[{label:"base",value:"base"},{label:"blank",value:"blank"}],L=se([]);async function c(){const{error:T,data:u}=await la();if(!T){const _=u.map(s=>({label:s.roleName,value:s.roleCode}));L.value=[..._]}}function l(){if(Object.assign(e,V()),!!m.rowData){if(m.operateType==="addChild"){const{id:T}=m.rowData;Object.assign(e,{parentId:T})}if(m.operateType==="edit"){const{component:T,...u}=m.rowData,{layout:_,page:s}=mt(T),{path:h,param:N}=yt(u.routePath);Object.assign(e,u,{layout:_,page:s,routePath:h,pathParam:N})}e.query||(e.query=[]),e.permissions||(e.permissions=[])}}function i(){v.value=!1}function d(){e.routeName?e.routePath=ht(e.routeName):e.routePath=""}function P(){e.routeName?e.i18nKey=`route.${e.routeName}`:e.i18nKey=null}function G(){return{code:"",desc:""}}function M(){const{layout:T,page:u,pathParam:_,...s}=e,h=vt(T,u),N=bt(e.routePath,_);return s.component=h,s.routePath=N,s}async function ce(){var T,u,_;if(m.operateType==="add"||m.operateType==="addChild"){await w();const s=M(),h={activeMenu:s.activeMenu,menuType:s.menuType,menuName:s.menuName,routeName:s.routeName,routePath:s.routePath,component:s.component,icon:s.icon,iconType:s.iconType,parentId:s.parentId,status:s.status,keepAlive:s.keepAlive,constant:s.constant,order:s.order,hideInMenu:s.hideInMenu,href:s.href,mutiTab:s.multiTab,fixedIndexInTab:s.fixedIndexInTab,query:s.query,buttonCode:s.buttonCode,permissions:s.permissions,i18nKey:s.i18nKey};S();const{error:N}=await oa(h);k(),N||((T=window.$message)==null||T.success(t("common.addSuccess")),i(),g("submitted"))}else if(m.operateType==="edit"){await w();const s=M(),h={id:(u=m.rowData)==null?void 0:u.id,activeMenu:s.activeMenu,menuType:s.menuType,menuName:s.menuName,routeName:s.routeName,routePath:s.routePath,component:s.component,icon:s.icon,iconType:s.iconType,parentId:s.parentId,status:s.status,keepAlive:s.keepAlive,constant:s.constant,order:s.order,hideInMenu:s.hideInMenu,href:s.href,mutiTab:s.multiTab,fixedIndexInTab:s.fixedIndexInTab,query:s.query,buttonCode:s.buttonCode,permissions:s.permissions,i18nKey:s.i18nKey};S();const{error:N}=await ra(h);k(),N||((_=window.$message)==null||_.success(t("common.editSuccess")),i(),g("submitted"))}}return Se(v,()=>{v.value&&(l(),$(),c())}),Se(()=>e.routeName,()=>{d(),P()}),(T,u)=>{const _=sa,s=ua,h=ia,N=fe,Oe=Ba,pe=La,Ve=da,ne=z,$e=ct,ye=Ja,Ae=ut,Je=Xa,Xe=Ha,Qe=Ka,Ze=ja;return C(),K(Ze,{show:v.value,"onUpdate:show":u[23]||(u[23]=r=>v.value=r),title:W.value,preset:"card",class:"w-800px"},{footer:p(()=>[a(ye,{justify:"end",size:16},{default:p(()=>[a(ne,{onClick:i},{default:p(()=>[Be(Le(o(t)("common.cancel")),1)]),_:1}),a(ne,{loading:o(O),type:"primary",onClick:ce},{default:p(()=>[Be(Le(o(t)("common.confirm")),1)]),_:1},8,["loading"])]),_:1})]),default:p(()=>[a(Qe,{class:"h-480px pr-20px"},{default:p(()=>[a(Xe,{ref_key:"formRef",ref:D,model:e,rules:Y,"label-placement":"left","label-width":100},{default:p(()=>[a(Je,{responsive:"screen","item-responsive":""},{default:p(()=>[a(h,{span:"24 m:12",label:o(t)("page.manage.menu.menuType"),path:"menuType"},{default:p(()=>[a(s,{value:e.menuType,"onUpdate:value":u[0]||(u[0]=r=>e.menuType=r),disabled:x.value},{default:p(()=>[(C(!0),ae(ie,null,Te(o(aa),r=>(C(),K(_,{key:r.value,value:r.value,label:o(t)(r.label)},null,8,["value","label"]))),128))]),_:1},8,["value","disabled"])]),_:1},8,["label"]),a(h,{span:"24 m:12",label:o(t)("page.manage.menu.menuName"),path:"menuName"},{default:p(()=>[a(N,{value:e.menuName,"onUpdate:value":u[1]||(u[1]=r=>e.menuName=r),placeholder:o(t)("page.manage.menu.form.menuName")},null,8,["value","placeholder"])]),_:1},8,["label"]),a(h,{span:"24 m:12",label:o(t)("page.manage.menu.menuStatus"),path:"status"},{default:p(()=>[a(s,{value:e.status,"onUpdate:value":u[2]||(u[2]=r=>e.status=r)},{default:p(()=>[(C(!0),ae(ie,null,Te(o(ta),r=>(C(),K(_,{key:r.value,value:r.value,label:o(t)(r.label)},null,8,["value","label"]))),128))]),_:1},8,["value"])]),_:1},8,["label"]),a(h,{span:"24 m:12",label:o(t)("page.manage.menu.hideInMenu"),path:"hideInMenu"},{default:p(()=>[a(s,{value:e.hideInMenu,"onUpdate:value":u[3]||(u[3]=r=>e.hideInMenu=r)},{default:p(()=>[a(_,{value:!0,label:o(t)("common.yesOrNo.yes")},null,8,["label"]),a(_,{value:!1,label:o(t)("common.yesOrNo.no")},null,8,["label"])]),_:1},8,["value"])]),_:1},8,["label"]),a(h,{span:"24 m:12",label:o(t)("page.manage.menu.i18nKey"),path:"i18nKey"},{default:p(()=>[a(N,{value:e.i18nKey,"onUpdate:value":u[4]||(u[4]=r=>e.i18nKey=r),placeholder:o(t)("page.manage.menu.form.i18nKey")},null,8,["value","placeholder"])]),_:1},8,["label"]),a(h,{span:"24 m:12",label:o(t)("page.manage.menu.order"),path:"order"},{default:p(()=>[a(Oe,{value:e.order,"onUpdate:value":u[5]||(u[5]=r=>e.order=r),class:"w-full",placeholder:o(t)("page.manage.menu.form.order")},null,8,["value","placeholder"])]),_:1},8,["label"]),q.value?(C(),ae(ie,{key:0},[a(h,{span:"24 m:12",label:o(t)("page.manage.menu.routeName"),path:"routeName"},{default:p(()=>[a(N,{value:e.routeName,"onUpdate:value":u[6]||(u[6]=r=>e.routeName=r),placeholder:o(t)("page.manage.menu.form.routeName")},null,8,["value","placeholder"])]),_:1},8,["label"]),a(h,{span:"24 m:12",label:o(t)("page.manage.menu.routePath"),path:"routePath"},{default:p(()=>[a(N,{value:e.routePath,"onUpdate:value":u[7]||(u[7]=r=>e.routePath=r),disabled:"",placeholder:o(t)("page.manage.menu.form.routePath")},null,8,["value","placeholder"])]),_:1},8,["label"]),a(h,{span:"24 m:12",label:o(t)("page.manage.menu.pathParam"),path:"pathParam"},{default:p(()=>[a(N,{value:e.pathParam,"onUpdate:value":u[8]||(u[8]=r=>e.pathParam=r),placeholder:o(t)("page.manage.menu.form.pathParam")},null,8,["value","placeholder"])]),_:1},8,["label"]),B.value?(C(),K(h,{key:0,span:"24 m:12",label:o(t)("page.manage.menu.layout"),path:"layout"},{default:p(()=>[a(pe,{value:e.layout,"onUpdate:value":u[9]||(u[9]=r=>e.layout=r),options:Q,placeholder:o(t)("page.manage.menu.form.layout")},null,8,["value","placeholder"])]),_:1},8,["label"])):le("",!0),b.value?(C(),K(h,{key:1,span:"24 m:12",label:o(t)("page.manage.menu.page"),path:"page"},{default:p(()=>[a(pe,{value:e.page,"onUpdate:value":u[10]||(u[10]=r=>e.page=r),options:X.value,placeholder:o(t)("page.manage.menu.form.page")},null,8,["value","options","placeholder"])]),_:1},8,["label"])):le("",!0),a(h,{span:"24 m:12",label:o(t)("page.manage.menu.iconTypeTitle"),path:"iconType"},{default:p(()=>[a(s,{value:e.iconType,"onUpdate:value":u[11]||(u[11]=r=>e.iconType=r)},{default:p(()=>[(C(!0),ae(ie,null,Te(o(na),r=>(C(),K(_,{key:r.value,value:r.value,label:o(t)(r.label)},null,8,["value","label"]))),128))]),_:1},8,["value"])]),_:1},8,["label"]),a(h,{span:"24 m:12",label:o(t)("page.manage.menu.icon"),path:"icon"},{default:p(()=>[e.iconType==="1"?(C(),K(N,{key:0,value:e.icon,"onUpdate:value":u[12]||(u[12]=r=>e.icon=r),placeholder:o(t)("page.manage.menu.form.icon"),class:"flex-1"},{suffix:p(()=>[e.icon?(C(),K(Re,{key:0,icon:e.icon,class:"text-icon"},null,8,["icon"])):le("",!0)]),_:1},8,["value","placeholder"])):le("",!0),e.iconType==="2"?(C(),K(pe,{key:1,value:e.icon,"onUpdate:value":u[13]||(u[13]=r=>e.icon=r),placeholder:o(t)("page.manage.menu.form.localIcon"),options:o(A)},null,8,["value","placeholder","options"])):le("",!0)]),_:1},8,["label"]),a(h,{span:"24 m:12",label:o(t)("page.manage.menu.keepAlive"),path:"keepAlive"},{default:p(()=>[a(s,{value:e.keepAlive,"onUpdate:value":u[14]||(u[14]=r=>e.keepAlive=r)},{default:p(()=>[a(_,{value:!0,label:o(t)("common.yesOrNo.yes")},null,8,["label"]),a(_,{value:!1,label:o(t)("common.yesOrNo.no")},null,8,["label"])]),_:1},8,["value"])]),_:1},8,["label"]),a(h,{span:"24 m:12",label:o(t)("page.manage.menu.constant"),path:"constant"},{default:p(()=>[a(s,{value:e.constant,"onUpdate:value":u[15]||(u[15]=r=>e.constant=r)},{default:p(()=>[a(_,{value:!0,label:o(t)("common.yesOrNo.yes")},null,8,["label"]),a(_,{value:!1,label:o(t)("common.yesOrNo.no")},null,8,["label"])]),_:1},8,["value"])]),_:1},8,["label"]),a(h,{span:"24 m:12",label:o(t)("page.manage.menu.href"),path:"href"},{default:p(()=>[a(N,{value:e.href,"onUpdate:value":u[16]||(u[16]=r=>e.href=r),placeholder:o(t)("page.manage.menu.form.href")},null,8,["value","placeholder"])]),_:1},8,["label"]),e.hideInMenu?(C(),K(h,{key:2,span:"24 m:12",label:o(t)("page.manage.menu.activeMenu"),path:"activeMenu"},{default:p(()=>[a(pe,{value:e.activeMenu,"onUpdate:value":u[17]||(u[17]=r=>e.activeMenu=r),options:X.value,clearable:"",placeholder:o(t)("page.manage.menu.form.activeMenu")},null,8,["value","options","placeholder"])]),_:1},8,["label"])):le("",!0),a(h,{span:"24 m:12",label:o(t)("page.manage.menu.multiTab"),path:"multiTab"},{default:p(()=>[a(s,{value:e.multiTab,"onUpdate:value":u[18]||(u[18]=r=>e.multiTab=r)},{default:p(()=>[a(_,{value:!0,label:o(t)("common.yesOrNo.yes")},null,8,["label"]),a(_,{value:!1,label:o(t)("common.yesOrNo.no")},null,8,["label"])]),_:1},8,["value"])]),_:1},8,["label"]),a(h,{span:"24 m:12",label:o(t)("page.manage.menu.fixedIndexInTab"),path:"fixedIndexInTab"},{default:p(()=>[a(Oe,{value:e.fixedIndexInTab,"onUpdate:value":u[19]||(u[19]=r=>e.fixedIndexInTab=r),class:"w-full",clearable:"",placeholder:o(t)("page.manage.menu.form.fixedIndexInTab")},null,8,["value","placeholder"])]),_:1},8,["label"]),a(h,{span:"24",label:o(t)("page.manage.menu.query")},{default:p(()=>[a(Ae,{value:e.query,"onUpdate:value":u[20]||(u[20]=r=>e.query=r),preset:"pair","key-placeholder":o(t)("page.manage.menu.form.queryKey"),"value-placeholder":o(t)("page.manage.menu.form.queryValue")},{action:p(({index:r,create:Z,remove:be})=>[a(ye,{class:"ml-12px"},{default:p(()=>[a(ne,{size:"medium",onClick:()=>Z(r)},{default:p(()=>[a(Ve,{class:"text-icon"})]),_:2},1032,["onClick"]),a(ne,{size:"medium",onClick:()=>be(r)},{default:p(()=>[a($e,{class:"text-icon"})]),_:2},1032,["onClick"])]),_:2},1024)]),_:1},8,["value","key-placeholder","value-placeholder"])]),_:1},8,["label"])],64)):(C(),ae(ie,{key:1},[a(h,{span:"24 m:12",label:o(t)("page.manage.menu.buttonCode"),path:"buttonCode"},{default:p(()=>[a(N,{value:e.buttonCode,"onUpdate:value":u[21]||(u[21]=r=>e.buttonCode=r),placeholder:o(t)("page.manage.menu.form.buttonCode")},null,8,["value","placeholder"])]),_:1},8,["label"]),a(h,{span:"24",label:o(t)("page.manage.menu.permission")},{default:p(()=>[a(Ae,{value:e.permissions,"onUpdate:value":u[22]||(u[22]=r=>e.permissions=r),"on-create":G},{default:p(({value:r})=>[qe("div",_t,[a(N,{value:r.code,"onUpdate:value":Z=>r.code=Z,placeholder:o(t)("page.manage.menu.form.buttonCode"),class:"flex-1"},null,8,["value","onUpdate:value","placeholder"]),a(N,{value:r.desc,"onUpdate:value":Z=>r.desc=Z,placeholder:o(t)("page.manage.menu.form.buttonDesc"),class:"flex-1"},null,8,["value","onUpdate:value","placeholder"])])]),action:p(({index:r,create:Z,remove:be})=>[a(ye,{class:"ml-12px"},{default:p(()=>[a(ne,{size:"medium",onClick:()=>Z(r)},{default:p(()=>[a(Ve,{class:"text-icon"})]),_:2},1032,["onClick"]),a(ne,{size:"medium",onClick:()=>be(r)},{default:p(()=>[a($e,{class:"text-icon"})]),_:2},1032,["onClick"])]),_:2},1024)]),_:1},8,["value"])]),_:1},8,["label"])],64))]),_:1})]),_:1},8,["model"])]),_:1})]),_:1},8,["show","title"])}}});function ee(n){return typeof n=="function"||Object.prototype.toString.call(n)==="[object Object]"&&!Ga(n)}const wt=te({name:"manage_menu",__name:"index",setup(n){const f=Fa(),m=Ge({}),{bool:g,setTrue:v}=za(),D=se(null),{columns:w,columnChecks:$,data:U,loading:O,pagination:S,getData:k,getDataByPage:W}=ca({apiFn:ma,columns:()=>[{type:"selection",align:"center",width:48},{key:"id",title:t("page.manage.menu.id"),align:"center"},{key:"menuType",title:t("page.manage.menu.menuType"),align:"center",width:80,render:l=>{const i={1:"default",2:"primary",3:"primary"},d=t(ga[l.menuType]);return a(Ne,{type:i[l.menuType]},ee(d)?d:{default:()=>[d]})}},{key:"menuName",title:t("page.manage.menu.menuName"),align:"center",minWidth:120,render:l=>{const{i18nKey:i,menuName:d}=l,P=i?t(i):d;return a("span",null,[P])}},{key:"icon",title:t("page.manage.menu.icon"),align:"center",width:60,render:l=>{const i=l.iconType==="1"?l.icon:void 0,d=l.iconType==="2"?l.icon:void 0;return a("div",{class:"flex-center"},[a(Re,{icon:i,localIcon:d,class:"text-icon"},null)])}},{key:"routeName",title:t("page.manage.menu.routeName"),align:"center",minWidth:120},{key:"routePath",title:t("page.manage.menu.routePath"),align:"center",minWidth:120},{key:"status",title:t("page.manage.menu.menuStatus"),align:"center",width:80,render:l=>{if(l.status===null)return null;const i={1:"success",2:"warning"},d=t(fa[l.status]);return a(Ne,{type:i[l.status]},ee(d)?d:{default:()=>[d]})}},{key:"hideInMenu",title:t("page.manage.menu.hideInMenu"),align:"center",width:80,render:l=>{const i=l.hideInMenu?"Y":"N",d={Y:"error",N:"default"},P=t(Ye[i]);return a(Ne,{type:d[i]},ee(P)?P:{default:()=>[P]})}},{key:"parentId",title:t("page.manage.menu.parentId"),width:90,align:"center"},{key:"order",title:t("page.manage.menu.order"),align:"center",width:60},{key:"operate",title:t("common.operate"),align:"center",width:230,render:l=>{let i,d,P;return a("div",{class:"flex-center justify-end gap-8px"},[l.menuType==="1"&&a(z,{type:"primary",ghost:!0,size:"small",onClick:()=>X(l)},ee(i=t("page.manage.menu.addChildMenu"))?i:{default:()=>[i]}),l.menuType==="2"&&a(z,{type:"primary",ghost:!0,size:"small",onClick:()=>X(l)},ee(d=t("page.manage.menu.addChildMenu"))?d:{default:()=>[d]}),a(z,{type:"primary",ghost:!0,size:"small",onClick:()=>q(l)},ee(P=t("common.edit"))?P:{default:()=>[P]}),a(va,{onPositiveClick:()=>B(l.id)},{default:()=>t("common.confirmDelete"),trigger:()=>{let G;return a(z,{loading:m[l.id],type:"error",ghost:!0,size:"small"},ee(G=t("common.delete"))?G:{default:()=>[G]})}})])}}]}),{checkedRowKeys:e,onBatchDeleted:V,onDeleted:Y}=pa(U,k),x=se("add");function H(){x.value="add",v()}async function A(){console.log(e.value),V()}async function B(l){const i=[l];m[l]=!0;const{error:d}=await ha(i);m[l]=!1,!d&&Y()}const b=se(null);function q(l){x.value="edit",b.value={...l},v()}function X(l){x.value="addChild",b.value={...l},v()}const Q=se([]);async function L(){const{data:l}=await _a();Q.value=l||[]}function c(){L()}return c(),(l,i)=>{const d=ya,P=ba,G=qa;return C(),ae("div",{ref_key:"wrapperRef",ref:D,class:"flex-col-stretch gap-16px overflow-hidden lt-sm:overflow-auto"},[a(G,{title:o(t)("page.manage.menu.title"),bordered:!1,size:"small",class:"sm:flex-1-hidden card-wrapper"},{"header-extra":p(()=>[a(d,{columns:o($),"onUpdate:columns":i[0]||(i[0]=M=>ke($)?$.value=M:null),"disabled-delete":o(e).length===0,loading:o(O),"add-auth":"manage:menu:add","delete-auth":"manage:menu:delete",onAdd:H,onDelete:A,onRefresh:o(k)},null,8,["columns","disabled-delete","loading","onRefresh"])]),default:p(()=>[a(P,{"checked-row-keys":o(e),"onUpdate:checkedRowKeys":i[1]||(i[1]=M=>ke(e)?e.value=M:null),columns:o(w),data:o(U),size:"small","flex-height":!o(f).isMobile,"scroll-x":1088,loading:o(O),"row-key":M=>M.id,remote:"",pagination:o(S),class:"sm:h-full"},null,8,["checked-row-keys","columns","data","flex-height","loading","row-key","pagination"]),a(It,{visible:o(g),"onUpdate:visible":i[2]||(i[2]=M=>ke(g)?g.value=M:null),"operate-type":x.value,"row-data":b.value,"all-pages":Q.value,onSubmitted:o(W)},null,8,["visible","operate-type","row-data","all-pages","onSubmitted"])]),_:1},8,["title"])],512)}}});export{wt as default};
