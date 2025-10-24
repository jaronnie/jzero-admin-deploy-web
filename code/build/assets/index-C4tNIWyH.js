import{K as y,L as e,M as Y,N as Z,O as q,P as A,Q as K,d as G,U as ee,V as n,W as te,X as oe,Y as Q,Z as re,a as F,a0 as N,a1 as ne,a2 as se,A as ie,c as U,o as O,w as a,f as u,I as ae,h as l,$ as g,e as V,t as C,a3 as le,g as E,b as ce,a4 as de,a5 as pe}from"./index-BVUjtG50.js";import{g as be,_ as ue}from"./Space-D8XCkdaJ.js";function W(r,m="default",c=[]){const{children:d}=r;if(d!==null&&typeof d=="object"&&!Array.isArray(d)){const s=d[m];if(typeof s=="function")return s()}return c}const X="DESCRIPTION_ITEM_FLAG";function ge(r){return typeof r=="object"&&r&&!Array.isArray(r)?r.type&&r.type[X]:!1}const me=y([e("descriptions",{fontSize:"var(--n-font-size)"},[e("descriptions-separator",`
 display: inline-block;
 margin: 0 8px 0 2px;
 `),e("descriptions-table-wrapper",[e("descriptions-table",[e("descriptions-table-row",[e("descriptions-table-header",{padding:"var(--n-th-padding)"}),e("descriptions-table-content",{padding:"var(--n-td-padding)"})])])]),q("bordered",[e("descriptions-table-wrapper",[e("descriptions-table",[e("descriptions-table-row",[y("&:last-child",[e("descriptions-table-content",{paddingBottom:0})])])])])]),A("left-label-placement",[e("descriptions-table-content",[y("> *",{verticalAlign:"top"})])]),A("left-label-align",[y("th",{textAlign:"left"})]),A("center-label-align",[y("th",{textAlign:"center"})]),A("right-label-align",[y("th",{textAlign:"right"})]),A("bordered",[e("descriptions-table-wrapper",`
 border-radius: var(--n-border-radius);
 overflow: hidden;
 background: var(--n-merged-td-color);
 border: 1px solid var(--n-merged-border-color);
 `,[e("descriptions-table",[e("descriptions-table-row",[y("&:not(:last-child)",[e("descriptions-table-content",{borderBottom:"1px solid var(--n-merged-border-color)"}),e("descriptions-table-header",{borderBottom:"1px solid var(--n-merged-border-color)"})]),e("descriptions-table-header",`
 font-weight: 400;
 background-clip: padding-box;
 background-color: var(--n-merged-th-color);
 `,[y("&:not(:last-child)",{borderRight:"1px solid var(--n-merged-border-color)"})]),e("descriptions-table-content",[y("&:not(:last-child)",{borderRight:"1px solid var(--n-merged-border-color)"})])])])])]),e("descriptions-header",`
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
 `,[K("content",`
 transition: color .3s var(--n-bezier);
 display: inline-block;
 color: var(--n-td-text-color);
 `)]),K("label",`
 font-weight: var(--n-th-font-weight);
 transition: color .3s var(--n-bezier);
 display: inline-block;
 margin-right: 14px;
 color: var(--n-th-text-color);
 `)])])])]),e("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color);
 --n-merged-td-color: var(--n-td-color);
 --n-merged-border-color: var(--n-border-color);
 `),Y(e("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color-modal);
 --n-merged-td-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),Z(e("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color-popover);
 --n-merged-td-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]),he=Object.assign(Object.assign({},Q.props),{title:String,column:{type:Number,default:3},columns:Number,labelPlacement:{type:String,default:"top"},labelAlign:{type:String,default:"left"},separator:{type:String,default:":"},size:{type:String,default:"medium"},bordered:Boolean,labelClass:String,labelStyle:[Object,String],contentClass:String,contentStyle:[Object,String]}),ve=G({name:"Descriptions",props:he,setup(r){const{mergedClsPrefixRef:m,inlineThemeDisabled:c}=oe(r),d=Q("Descriptions","-descriptions",me,re,r,m),s=F(()=>{const{size:p,bordered:h}=r,{common:{cubicBezierEaseInOut:w},self:{titleTextColor:v,thColor:z,thColorModal:t,thColorPopover:_,thTextColor:b,thFontWeight:x,tdTextColor:$,tdColor:k,tdColorModal:B,tdColorPopover:o,borderColor:I,borderColorModal:D,borderColorPopover:f,borderRadius:S,lineHeight:P,[N("fontSize",p)]:R,[N(h?"thPaddingBordered":"thPadding",p)]:j,[N(h?"tdPaddingBordered":"tdPadding",p)]:T}}=d.value;return{"--n-title-text-color":v,"--n-th-padding":j,"--n-td-padding":T,"--n-font-size":R,"--n-bezier":w,"--n-th-font-weight":x,"--n-line-height":P,"--n-th-text-color":b,"--n-td-text-color":$,"--n-th-color":z,"--n-th-color-modal":t,"--n-th-color-popover":_,"--n-td-color":k,"--n-td-color-modal":B,"--n-td-color-popover":o,"--n-border-radius":S,"--n-border-color":I,"--n-border-color-modal":D,"--n-border-color-popover":f}}),i=c?ne("descriptions",F(()=>{let p="";const{size:h,bordered:w}=r;return w&&(p+="a"),p+=h[0],p}),s,r):void 0;return{mergedClsPrefix:m,cssVars:c?void 0:s,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender,compitableColumn:se(r,["columns","column"]),inlineThemeDisabled:c}},render(){const r=this.$slots.default,m=r?ee(r()):[];m.length;const{contentClass:c,labelClass:d,compitableColumn:s,labelPlacement:i,labelAlign:p,size:h,bordered:w,title:v,cssVars:z,mergedClsPrefix:t,separator:_,onRender:b}=this;b==null||b();const x=m.filter(o=>ge(o)),$={span:0,row:[],secondRow:[],rows:[]},B=x.reduce((o,I,D)=>{const f=I.props||{},S=x.length-1===D,P=["label"in f?f.label:W(I,"label")],R=[W(I)],j=f.span||1,T=o.span;o.span+=j;const L=f.labelStyle||f["label-style"]||this.labelStyle,M=f.contentStyle||f["content-style"]||this.contentStyle;if(i==="left")w?o.row.push(n("th",{class:[`${t}-descriptions-table-header`,d],colspan:1,style:L},P),n("td",{class:[`${t}-descriptions-table-content`,c],colspan:S?(s-T)*2+1:j*2-1,style:M},R)):o.row.push(n("td",{class:`${t}-descriptions-table-content`,colspan:S?(s-T)*2:j*2},n("span",{class:[`${t}-descriptions-table-content__label`,d],style:L},[...P,_&&n("span",{class:`${t}-descriptions-separator`},_)]),n("span",{class:[`${t}-descriptions-table-content__content`,c],style:M},R)));else{const H=S?(s-T)*2:j*2;o.row.push(n("th",{class:[`${t}-descriptions-table-header`,d],colspan:H,style:L},P)),o.secondRow.push(n("td",{class:[`${t}-descriptions-table-content`,c],colspan:H,style:M},R))}return(o.span>=s||S)&&(o.span=0,o.row.length&&(o.rows.push(o.row),o.row=[]),i!=="left"&&o.secondRow.length&&(o.rows.push(o.secondRow),o.secondRow=[])),o},$).rows.map(o=>n("tr",{class:`${t}-descriptions-table-row`},o));return n("div",{style:z,class:[`${t}-descriptions`,this.themeClass,`${t}-descriptions--${i}-label-placement`,`${t}-descriptions--${p}-label-align`,`${t}-descriptions--${h}-size`,w&&`${t}-descriptions--bordered`]},v||this.$slots.header?n("div",{class:`${t}-descriptions-header`},v||be(this,"header")):null,n("div",{class:`${t}-descriptions-table-wrapper`},n("table",{class:`${t}-descriptions-table`},n("tbody",null,i==="top"&&n("tr",{class:`${t}-descriptions-table-row`,style:{visibility:"collapse"}},te(s*2,n("td",null))),B))))}}),fe={label:String,span:{type:Number,default:1},labelClass:String,labelStyle:[Object,String],contentClass:String,contentStyle:[Object,String]},ye=G({name:"DescriptionsItem",[X]:!0,props:fe,render(){return null}}),we="jzero-admin",_e="module",xe="v0.0.1",ze="pnpm@9.14.2+sha512.6e2baf77d06b9362294152c851c4f278ede37ab1eba3a55fda317a4a17b209f4dbb973fb250a77abc463a341fcb1f17f17cfa24091c4eb319cda0d9b84278387",ke="基于 go 语言 jzero 脚手架和 soybean-admin 搭建的后台管理系统",Se={name:"jaronnie",email:"jaron@jaoronnie.com",url:"https://github.com/jzero-io"},je="Apache-2.0",Ce="https://github.com/jzero-io/jzero-admin",$e={url:"https://github.com/jzero-io/jzero-admin.git"},Ie={url:"https://github.com/jzero-io/jzero-admin/issues"},Pe=["jzero","soybean-admin","Vue3 admin ","vue-admin-template","Vite5","TypeScript","naive-ui","naive-ui-admin","ant-design-vue v4","UnoCSS"],Re={node:">=18.12.0",pnpm:">=8.7.0"},Te={build:"vite build --mode prod","build:test":"vite build --mode test",cleanup:"sa cleanup",commit:"sa git-commit","commit:zh":"sa git-commit -l=zh-cn",dev:"vite --mode test","dev:prod":"vite --mode prod","gen-route":"sa gen-route",lint:"eslint . --fix",prepare:"simple-git-hooks",preview:"vite preview",release:"sa release",typecheck:"vue-tsc --noEmit --skipLibCheck --outdir .","update-pkg":"sa update-pkg"},Ae={"@antv/data-set":"0.11.8","@antv/g2":"5.2.5","@better-scroll/core":"2.5.1","@iconify/vue":"4.1.2","@sa/axios":"workspace:*","@sa/color":"workspace:*","@sa/hooks":"workspace:*","@sa/materials":"workspace:*","@sa/utils":"workspace:*","@vueuse/core":"11.1.0",clipboard:"2.0.11",dayjs:"1.11.13","dhtmlx-gantt":"8.0.10",dompurify:"3.2.4",echarts:"5.5.1",jsbarcode:"3.11.6",json5:"2.2.3","naive-ui":"2.40.1",nprogress:"0.2.0",pinia:"2.2.4","pinyin-pro":"3.24.2","print-js":"1.6.0",swiper:"11.1.12","tailwind-merge":"2.5.3",typeit:"8.8.4",vditor:"3.10.5",vue:"3.5.11","vue-draggable-plus":"0.5.3","vue-i18n":"10.0.6","vue-pdf-embed":"2.1.0","vue-router":"4.5.0",wangeditor:"4.7.15",xgplayer:"3.0.20",xlsx:"0.18.5"},Be={"@amap/amap-jsapi-types":"0.0.15","@elegant-router/vue":"0.3.8","@iconify/json":"2.2.258","@sa/scripts":"workspace:*","@sa/uno-preset":"workspace:*","@soybeanjs/eslint-config":"1.4.1","@types/bmapgl":"0.0.7","@types/dompurify":"3.0.5","@types/node":"22.7.5","@types/nprogress":"0.2.3","@unocss/eslint-config":"0.63.4","@unocss/preset-icons":"0.63.4","@unocss/preset-uno":"0.63.4","@unocss/transformer-directives":"0.63.4","@unocss/transformer-variant-group":"0.63.4","@unocss/vite":"0.63.4","@vitejs/plugin-vue":"5.1.4","@vitejs/plugin-vue-jsx":"4.0.1",eslint:"9.12.0","eslint-plugin-vue":"9.28.0","lint-staged":"15.2.10",sass:"1.79.4","simple-git-hooks":"2.11.1",tsx:"4.19.1",typescript:"5.6.3","unplugin-icons":"0.19.3","unplugin-vue-components":"0.27.4",vite:"5.4.19","vite-plugin-progress":"0.0.7","vite-plugin-svg-icons":"2.0.1","vite-plugin-vue-devtools":"7.4.6","vue-eslint-parser":"9.4.3","vue-tsc":"2.1.6"},De="https://admin.jzero.io",J={name:we,type:_e,version:xe,packageManager:ze,description:ke,author:Se,license:je,homepage:Ce,repository:$e,bugs:Ie,keywords:Pe,engines:Re,scripts:Te,dependencies:Ae,devDependencies:Be,"simple-git-hooks":{"commit-msg":"pnpm sa git-commit-verify","pre-commit":"pnpm typecheck && pnpm lint-staged"},"lint-staged":{"*":"eslint --fix"},website:De},Le=["href"],Me=["href"],Ve=G({name:"about",__name:"index",setup(r){const m=ie(),c=F(()=>m.isMobile?1:2),{name:d,version:s,dependencies:i}={name:"jzero-admin",version:"v1.0.0-beta",dependencies:{jzero:"v0.64.3","soybean-admin":"v1.3.7+fork",vue:"v3.5.11","naive-ui":"2.40.1"}};function p(v){const[z,t]=v;return{name:z,version:t}}const h={name:d,version:s,dependencies:Object.entries(i).map(v=>p(v))},w="2025-10-24 17:44:22";return(v,z)=>{const t=ae,_=le,b=ye,x=ve,$=ue;return O(),U($,{vertical:"",size:16},{default:a(()=>[u(t,{title:l(g)("page.about.title"),bordered:!1,size:"small",segmented:"",class:"card-wrapper"},{default:a(()=>[V("p",null,C(l(g)("page.about.introduction")),1)]),_:1},8,["title"]),u(t,{title:l(g)("page.about.projectInfo.title"),bordered:!1,size:"small",segmented:"",class:"card-wrapper"},{default:a(()=>[u(x,{"label-placement":"left",bordered:"",size:"small",column:c.value},{default:a(()=>[u(b,{label:l(g)("page.about.projectInfo.version")},{default:a(()=>[u(_,{type:"primary"},{default:a(()=>[E(C(h.version),1)]),_:1})]),_:1},8,["label"]),u(b,{label:l(g)("page.about.projectInfo.latestBuildTime")},{default:a(()=>[u(_,{type:"primary"},{default:a(()=>[E(C(l(w)),1)]),_:1})]),_:1},8,["label"]),u(b,{label:l(g)("page.about.projectInfo.githubLink")},{default:a(()=>[V("a",{class:"text-primary",href:l(J).homepage,target:"_blank",rel:"noopener noreferrer"},C(l(g)("page.about.projectInfo.githubLink")),9,Le)]),_:1},8,["label"]),u(b,{label:l(g)("page.about.projectInfo.previewLink")},{default:a(()=>[V("a",{class:"text-primary",href:l(J).website,target:"_blank",rel:"noopener noreferrer"},C(l(g)("page.about.projectInfo.previewLink")),9,Me)]),_:1},8,["label"])]),_:1},8,["column"])]),_:1},8,["title"]),u(t,{title:l(g)("page.about.prdDep"),bordered:!1,size:"small",segmented:"",class:"card-wrapper"},{default:a(()=>[u(x,{"label-placement":"left",bordered:"",size:"small",column:c.value},{default:a(()=>[(O(!0),ce(de,null,pe(h.dependencies,k=>(O(),U(b,{key:k.name,label:k.name},{default:a(()=>[E(C(k.version),1)]),_:2},1032,["label"]))),128))]),_:1},8,["column"])]),_:1},8,["title"])]),_:1})}}});export{Ve as default};
