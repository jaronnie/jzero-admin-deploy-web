import{c4 as G,aT as R,d as j,U as E,V as C,a6 as T,a as _,X as I,c5 as M,b0 as w,a0 as P,a1 as S,c6 as A}from"./index-mn_Ifhn_.js";function L(e,n="default",i=[]){const t=e.$slots[n];return t===void 0?i:t()}function O(){return G}const U={name:"Space",self:O};let h;function V(){if(!R)return!0;if(h===void 0){const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e);const n=e.scrollHeight===1;return document.body.removeChild(e),h=n}return h}const W=Object.assign(Object.assign({},C.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,reverse:Boolean,size:{type:[String,Number,Array],default:"medium"},wrapItem:{type:Boolean,default:!0},itemClass:String,itemStyle:[String,Object],wrap:{type:Boolean,default:!0},internalUseGap:{type:Boolean,default:void 0}}),F=j({name:"Space",props:W,setup(e){const{mergedClsPrefixRef:n,mergedRtlRef:i}=E(e),c=C("Space","-space",void 0,U,e,n),t=T("Space",i,n);return{useGap:V(),rtlEnabled:t,mergedClsPrefix:n,margin:_(()=>{const{size:a}=e;if(Array.isArray(a))return{horizontal:a[0],vertical:a[1]};if(typeof a=="number")return{horizontal:a,vertical:a};const{self:{[I("gap",a)]:f}}=c.value,{row:r,col:g}=M(f);return{horizontal:w(g),vertical:w(r)}})}},render(){const{vertical:e,reverse:n,align:i,inline:c,justify:t,itemClass:a,itemStyle:f,margin:r,wrap:g,mergedClsPrefix:v,rtlEnabled:x,useGap:l,wrapItem:$,internalUseGap:B}=this,u=P(L(this),!1);if(!u.length)return null;const b=`${r.horizontal}px`,m=`${r.horizontal/2}px`,z=`${r.vertical}px`,o=`${r.vertical/2}px`,p=u.length-1,d=t.startsWith("space-");return S("div",{role:"none",class:[`${v}-space`,x&&`${v}-space--rtl`],style:{display:c?"inline-flex":"flex",flexDirection:e&&!n?"column":e&&n?"column-reverse":!e&&n?"row-reverse":"row",justifyContent:["start","end"].includes(t)?`flex-${t}`:t,flexWrap:!g||e?"nowrap":"wrap",marginTop:l||e?"":`-${o}`,marginBottom:l||e?"":`-${o}`,alignItems:i,gap:l?`${r.vertical}px ${r.horizontal}px`:""}},!$&&(l||B)?u:u.map((y,s)=>y.type===A?y:S("div",{role:"none",class:a,style:[f,{maxWidth:"100%"},l?"":e?{marginBottom:s!==p?z:""}:x?{marginLeft:d?t==="space-between"&&s===p?"":m:s!==p?b:"",marginRight:d?t==="space-between"&&s===0?"":m:"",paddingTop:o,paddingBottom:o}:{marginRight:d?t==="space-between"&&s===p?"":m:s!==p?b:"",marginLeft:d?t==="space-between"&&s===0?"":m:"",paddingTop:o,paddingBottom:o}]},y)))}});export{F as _,L as g};
