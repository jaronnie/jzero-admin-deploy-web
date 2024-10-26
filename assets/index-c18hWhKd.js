import{L as x,M as e,N as ee,O as T,P as W,Q as te,R as oe,d as K,U as re,V as Z,W as ne,a as H,X as M,Y as se,Z as ie,a0 as ae,a1 as n,a2 as le,C as ce,o as A,c as E,w as s,f as d,e as F,t as j,h as i,$ as h,g as L,b as J,a3 as Q,a4 as X,K as de,a5 as pe}from"./index-Dd5zJpNt.js";import{g as be,_ as ue}from"./Space-KMt9k6g1.js";function Y(r,y="default",a=[]){const{children:p}=r;if(p!==null&&typeof p=="object"&&!Array.isArray(p)){const l=p[y];if(typeof l=="function")return l()}return a}const q="DESCRIPTION_ITEM_FLAG";function me(r){return typeof r=="object"&&r&&!Array.isArray(r)?r.type&&r.type[q]:!1}const ge=x([e("descriptions",{fontSize:"var(--n-font-size)"},[e("descriptions-separator",`
 display: inline-block;
 margin: 0 8px 0 2px;
 `),e("descriptions-table-wrapper",[e("descriptions-table",[e("descriptions-table-row",[e("descriptions-table-header",{padding:"var(--n-th-padding)"}),e("descriptions-table-content",{padding:"var(--n-td-padding)"})])])]),ee("bordered",[e("descriptions-table-wrapper",[e("descriptions-table",[e("descriptions-table-row",[x("&:last-child",[e("descriptions-table-content",{paddingBottom:0})])])])])]),T("left-label-placement",[e("descriptions-table-content",[x("> *",{verticalAlign:"top"})])]),T("left-label-align",[x("th",{textAlign:"left"})]),T("center-label-align",[x("th",{textAlign:"center"})]),T("right-label-align",[x("th",{textAlign:"right"})]),T("bordered",[e("descriptions-table-wrapper",`
 border-radius: var(--n-border-radius);
 overflow: hidden;
 background: var(--n-merged-td-color);
 border: 1px solid var(--n-merged-border-color);
 `,[e("descriptions-table",[e("descriptions-table-row",[x("&:not(:last-child)",[e("descriptions-table-content",{borderBottom:"1px solid var(--n-merged-border-color)"}),e("descriptions-table-header",{borderBottom:"1px solid var(--n-merged-border-color)"})]),e("descriptions-table-header",`
 font-weight: 400;
 background-clip: padding-box;
 background-color: var(--n-merged-th-color);
 `,[x("&:not(:last-child)",{borderRight:"1px solid var(--n-merged-border-color)"})]),e("descriptions-table-content",[x("&:not(:last-child)",{borderRight:"1px solid var(--n-merged-border-color)"})])])])])]),e("descriptions-header",`
 font-weight: var(--n-th-font-weight);
 font-size: 18px;
 transition: color .3s var(--n-bezier);
 line-height: var(--n-line-height);
 margin-bottom: 16px;
 color: var(--n-title-text-color);
 `),e("descriptions-table-wrapper",`
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[e("descriptions-table",`
 width: 100%;
 border-collapse: separate;
 border-spacing: 0;
 box-sizing: border-box;
 `,[e("descriptions-table-row",`
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[e("descriptions-table-header",`
 font-weight: var(--n-th-font-weight);
 line-height: var(--n-line-height);
 display: table-cell;
 box-sizing: border-box;
 color: var(--n-th-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),e("descriptions-table-content",`
 vertical-align: top;
 line-height: var(--n-line-height);
 display: table-cell;
 box-sizing: border-box;
 color: var(--n-td-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[W("content",`
 transition: color .3s var(--n-bezier);
 display: inline-block;
 color: var(--n-td-text-color);
 `)]),W("label",`
 font-weight: var(--n-th-font-weight);
 transition: color .3s var(--n-bezier);
 display: inline-block;
 margin-right: 14px;
 color: var(--n-th-text-color);
 `)])])])]),e("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color);
 --n-merged-td-color: var(--n-td-color);
 --n-merged-border-color: var(--n-border-color);
 `),te(e("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color-modal);
 --n-merged-td-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),oe(e("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color-popover);
 --n-merged-td-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]),he=Object.assign(Object.assign({},Z.props),{title:String,column:{type:Number,default:3},columns:Number,labelPlacement:{type:String,default:"top"},labelAlign:{type:String,default:"left"},separator:{type:String,default:":"},size:{type:String,default:"medium"},bordered:Boolean,labelClass:String,labelStyle:[Object,String],contentClass:String,contentStyle:[Object,String]}),ve=K({name:"Descriptions",props:he,setup(r){const{mergedClsPrefixRef:y,inlineThemeDisabled:a}=re(r),p=Z("Descriptions","-descriptions",ge,ne,r,y),l=H(()=>{const{size:b,bordered:w}=r,{common:{cubicBezierEaseInOut:v},self:{titleTextColor:k,thColor:f,thColorModal:t,thColorPopover:u,thTextColor:z,thFontWeight:m,tdTextColor:S,tdColor:B,tdColorModal:g,tdColorPopover:o,borderColor:P,borderColorModal:O,borderColorPopover:_,borderRadius:C,lineHeight:I,[M("fontSize",b)]:D,[M(w?"thPaddingBordered":"thPadding",b)]:$,[M(w?"tdPaddingBordered":"tdPadding",b)]:R}}=p.value;return{"--n-title-text-color":k,"--n-th-padding":$,"--n-td-padding":R,"--n-font-size":D,"--n-bezier":v,"--n-th-font-weight":m,"--n-line-height":I,"--n-th-text-color":z,"--n-td-text-color":S,"--n-th-color":f,"--n-th-color-modal":t,"--n-th-color-popover":u,"--n-td-color":B,"--n-td-color-modal":g,"--n-td-color-popover":o,"--n-border-radius":C,"--n-border-color":P,"--n-border-color-modal":O,"--n-border-color-popover":_}}),c=a?se("descriptions",H(()=>{let b="";const{size:w,bordered:v}=r;return v&&(b+="a"),b+=w[0],b}),l,r):void 0;return{mergedClsPrefix:y,cssVars:a?void 0:l,themeClass:c==null?void 0:c.themeClass,onRender:c==null?void 0:c.onRender,compitableColumn:ie(r,["columns","column"]),inlineThemeDisabled:a}},render(){const r=this.$slots.default,y=r?ae(r()):[];y.length;const{contentClass:a,labelClass:p,compitableColumn:l,labelPlacement:c,labelAlign:b,size:w,bordered:v,title:k,cssVars:f,mergedClsPrefix:t,separator:u,onRender:z}=this;z==null||z();const m=y.filter(o=>me(o)),S={span:0,row:[],secondRow:[],rows:[]},g=m.reduce((o,P,O)=>{const _=P.props||{},C=m.length-1===O,I=["label"in _?_.label:Y(P,"label")],D=[Y(P)],$=_.span||1,R=o.span;o.span+=$;const N=_.labelStyle||_["label-style"]||this.labelStyle,V=_.contentStyle||_["content-style"]||this.contentStyle;if(c==="left")v?o.row.push(n("th",{class:[`${t}-descriptions-table-header`,p],colspan:1,style:N},I),n("td",{class:[`${t}-descriptions-table-content`,a],colspan:C?(l-R)*2+1:$*2-1,style:V},D)):o.row.push(n("td",{class:`${t}-descriptions-table-content`,colspan:C?(l-R)*2:$*2},n("span",{class:[`${t}-descriptions-table-content__label`,p],style:N},[...I,u&&n("span",{class:`${t}-descriptions-separator`},u)]),n("span",{class:[`${t}-descriptions-table-content__content`,a],style:V},D)));else{const U=C?(l-R)*2:$*2;o.row.push(n("th",{class:[`${t}-descriptions-table-header`,p],colspan:U,style:N},I)),o.secondRow.push(n("td",{class:[`${t}-descriptions-table-content`,a],colspan:U,style:V},D))}return(o.span>=l||C)&&(o.span=0,o.row.length&&(o.rows.push(o.row),o.row=[]),c!=="left"&&o.secondRow.length&&(o.rows.push(o.secondRow),o.secondRow=[])),o},S).rows.map(o=>n("tr",{class:`${t}-descriptions-table-row`},o));return n("div",{style:f,class:[`${t}-descriptions`,this.themeClass,`${t}-descriptions--${c}-label-placement`,`${t}-descriptions--${b}-label-align`,`${t}-descriptions--${w}-size`,v&&`${t}-descriptions--bordered`]},k||this.$slots.header?n("div",{class:`${t}-descriptions-header`},k||be(this,"header")):null,n("div",{class:`${t}-descriptions-table-wrapper`},n("table",{class:`${t}-descriptions-table`},n("tbody",null,c==="top"&&n("tr",{class:`${t}-descriptions-table-row`,style:{visibility:"collapse"}},le(l*2,n("td",null))),g))))}}),fe={label:String,span:{type:Number,default:1},labelClass:String,labelStyle:[Object,String],contentClass:String,contentStyle:[Object,String]},ye=K({name:"DescriptionsItem",[q]:!0,props:fe,render(){return null}}),we="jzero-admin",_e="module",xe="v0.0.1",ze="基于 go 语言 jzero 脚手架和 soybean-admin 搭建的后台管理系统",Se={name:"jaronnie",email:"jaron@jaoronnie.com",url:"https://github.com/jzero-io"},je="Apache-2.0",ke="https://github.com/jzero-io/jzero-admin",Ce={url:"https://github.com/jzero-io/jzero-admin.git"},$e={url:"https://github.com/jzero-io/jzero-admin/issues"},Pe=["jzero","soybean-admin","Vue3 admin ","vue-admin-template","Vite5","TypeScript","naive-ui","naive-ui-admin","ant-design-vue v4","UnoCSS"],Ie={node:">=18.12.0",pnpm:">=8.7.0"},De={build:"vite build --mode prod","build:test":"vite build --mode test",cleanup:"sa cleanup",commit:"sa git-commit","commit:zh":"sa git-commit -l=zh-cn",dev:"vite --mode test","dev:prod":"vite --mode prod","gen-route":"sa gen-route",lint:"eslint . --fix",prepare:"simple-git-hooks",preview:"vite preview",release:"sa release",typecheck:"vue-tsc --noEmit --skipLibCheck --outdir .","update-pkg":"sa update-pkg"},Re={"@antv/data-set":"0.11.8","@antv/g2":"5.2.5","@better-scroll/core":"2.5.1","@iconify/vue":"4.1.2","@sa/axios":"workspace:*","@sa/color":"workspace:*","@sa/hooks":"workspace:*","@sa/materials":"workspace:*","@sa/utils":"workspace:*","@vueuse/core":"11.1.0",clipboard:"2.0.11",dayjs:"1.11.13","dhtmlx-gantt":"8.0.10",dompurify:"3.1.6",echarts:"5.5.1",jsbarcode:"3.11.6",json5:"2.2.3","naive-ui":"2.40.1",nprogress:"0.2.0",pinia:"2.2.4","pinyin-pro":"3.24.2","print-js":"1.6.0",swiper:"11.1.12","tailwind-merge":"2.5.3",typeit:"8.8.4",vditor:"3.10.5",vue:"3.5.11","vue-draggable-plus":"0.5.3","vue-i18n":"10.0.4","vue-pdf-embed":"2.1.0","vue-router":"4.4.5",wangeditor:"4.7.15",xgplayer:"3.0.20",xlsx:"0.18.5"},Te={"@amap/amap-jsapi-types":"0.0.15","@elegant-router/vue":"0.3.8","@iconify/json":"2.2.258","@sa/scripts":"workspace:*","@sa/uno-preset":"workspace:*","@soybeanjs/eslint-config":"1.4.1","@types/bmapgl":"0.0.7","@types/dompurify":"3.0.5","@types/node":"22.7.5","@types/nprogress":"0.2.3","@unocss/eslint-config":"0.63.4","@unocss/preset-icons":"0.63.4","@unocss/preset-uno":"0.63.4","@unocss/transformer-directives":"0.63.4","@unocss/transformer-variant-group":"0.63.4","@unocss/vite":"0.63.4","@vitejs/plugin-vue":"5.1.4","@vitejs/plugin-vue-jsx":"4.0.1",eslint:"9.12.0","eslint-plugin-vue":"9.28.0","lint-staged":"15.2.10",sass:"1.79.4","simple-git-hooks":"2.11.1",tsx:"4.19.1",typescript:"5.6.3","unplugin-icons":"0.19.3","unplugin-vue-components":"0.27.4",vite:"5.4.8","vite-plugin-progress":"0.0.7","vite-plugin-svg-icons":"2.0.1","vite-plugin-vue-devtools":"7.4.6","vue-eslint-parser":"9.4.3","vue-tsc":"2.1.6"},Ae="https://demo.jzero-admin.jaronnie.com",G={name:we,type:_e,version:xe,description:ze,author:Se,license:je,homepage:ke,repository:Ce,bugs:$e,keywords:Pe,engines:Ie,scripts:De,dependencies:Re,devDependencies:Te,"simple-git-hooks":{"commit-msg":"pnpm sa git-commit-verify","pre-commit":"pnpm typecheck && pnpm lint-staged"},"lint-staged":{"*":"eslint --fix"},website:Ae},Be=["href"],Le=["href"],Ve=K({name:"about",__name:"index",setup(r){const y=ce(),a=H(()=>y.isMobile?1:2),{name:p,version:l,dependencies:c,devDependencies:b}=G;function w(f){const[t,u]=f;return{name:t,version:u}}const v={name:p,version:l,dependencies:Object.entries(c).map(f=>w(f)),devDependencies:Object.entries(b).map(f=>w(f))},k="2024-10-26 13:38:59";return(f,t)=>{const u=de,z=pe,m=ye,S=ve,B=ue;return A(),E(B,{vertical:"",size:16},{default:s(()=>[d(u,{title:i(h)("page.about.title"),bordered:!1,size:"small",segmented:"",class:"card-wrapper"},{default:s(()=>[F("p",null,j(i(h)("page.about.introduction")),1)]),_:1},8,["title"]),d(u,{title:i(h)("page.about.projectInfo.title"),bordered:!1,size:"small",segmented:"",class:"card-wrapper"},{default:s(()=>[d(S,{"label-placement":"left",bordered:"",size:"small",column:a.value},{default:s(()=>[d(m,{label:i(h)("page.about.projectInfo.version")},{default:s(()=>[d(z,{type:"primary"},{default:s(()=>[L(j(v.version),1)]),_:1})]),_:1},8,["label"]),d(m,{label:i(h)("page.about.projectInfo.latestBuildTime")},{default:s(()=>[d(z,{type:"primary"},{default:s(()=>[L(j(i(k)),1)]),_:1})]),_:1},8,["label"]),d(m,{label:i(h)("page.about.projectInfo.githubLink")},{default:s(()=>[F("a",{class:"text-primary",href:i(G).homepage,target:"_blank",rel:"noopener noreferrer"},j(i(h)("page.about.projectInfo.githubLink")),9,Be)]),_:1},8,["label"]),d(m,{label:i(h)("page.about.projectInfo.previewLink")},{default:s(()=>[F("a",{class:"text-primary",href:i(G).website,target:"_blank",rel:"noopener noreferrer"},j(i(h)("page.about.projectInfo.previewLink")),9,Le)]),_:1},8,["label"])]),_:1},8,["column"])]),_:1},8,["title"]),d(u,{title:i(h)("page.about.prdDep"),bordered:!1,size:"small",segmented:"",class:"card-wrapper"},{default:s(()=>[d(S,{"label-placement":"left",bordered:"",size:"small",column:a.value},{default:s(()=>[(A(!0),J(X,null,Q(v.dependencies,g=>(A(),E(m,{key:g.name,label:g.name},{default:s(()=>[L(j(g.version),1)]),_:2},1032,["label"]))),128))]),_:1},8,["column"])]),_:1},8,["title"]),d(u,{title:i(h)("page.about.devDep"),bordered:!1,size:"small",segmented:"",class:"card-wrapper"},{default:s(()=>[d(S,{"label-placement":"left",bordered:"",size:"small",column:a.value},{default:s(()=>[(A(!0),J(X,null,Q(v.devDependencies,g=>(A(),E(m,{key:g.name,label:g.name},{default:s(()=>[L(j(g.version),1)]),_:2},1032,["label"]))),128))]),_:1},8,["column"])]),_:1},8,["title"])]),_:1})}}});export{Ve as default};
