(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[850],{1270:function(e,t,r){Promise.resolve().then(r.bind(r,4504))},4504:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return N}});var a=r(7437),i=r(2265),s=r(9820),n=r(279),o=r(2381);let l=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),c=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((e,t,r)=>!!e&&r.indexOf(e)===t).join(" ")};var d={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let u=(0,i.forwardRef)((e,t)=>{let{color:r="currentColor",size:a=24,strokeWidth:s=2,absoluteStrokeWidth:n,className:o="",children:l,iconNode:u,...f}=e;return(0,i.createElement)("svg",{ref:t,...d,width:a,height:a,stroke:r,strokeWidth:n?24*Number(s)/Number(a):s,className:c("lucide",o),...f},[...u.map(e=>{let[t,r]=e;return(0,i.createElement)(t,r)}),...Array.isArray(l)?l:[l]])}),f=(e,t)=>{let r=(0,i.forwardRef)((r,a)=>{let{className:s,...n}=r;return(0,i.createElement)(u,{ref:a,iconNode:t,className:c("lucide-".concat(l(e)),s),...n})});return r.displayName="".concat(e),r},m=f("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]),v=f("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);var p=r(7168),h=r(3145),g=r(6410);let x="ca033664d69e46239a2fefbbcd663c4d".replace(/'/g,"&#39;");async function b(e){let t=e?"https://api.themoviedb.org/3/discover/movie?api_key=".concat(x,"&with_genres=").concat(e):"https://api.themoviedb.org/3/movie/popular?api_key=".concat(x);try{let e=await fetch(t);return(await e.json()).results.map(e=>({id:e.id,title:e.title,overview:e.overview,image:e.poster_path?"https://image.tmdb.org/t/p/w400".concat(e.poster_path):"",vote_average:e.vote_average,vote_count:e.vote_count}))}catch(e){return console.error("Error fetching popular movies:",e),[]}}async function w(e){let t="https://api.themoviedb.org/3/search/movie?api_key=".concat(x,"&query=").concat(encodeURIComponent(e));try{let e=await fetch(t);return(await e.json()).results.map(e=>({id:e.id,title:e.title,overview:e.overview,image:e.poster_path?"https://image.tmdb.org/t/p/w400".concat(e.poster_path):"",vote_average:e.vote_average,vote_count:e.vote_count}))}catch(e){return console.error("Error searching movies:",e),[]}}async function y(){try{let e=await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=".concat(x));return(await e.json()).genres}catch(e){return console.error("Error fetching genres:",e),[]}}let j=async e=>await Promise.all(e.map(async e=>{let t=await fetch("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(x)),r=await t.json();return{id:r.id,title:r.title,overview:r.overview,image:r.poster_path?"https://image.tmdb.org/t/p/w400".concat(r.poster_path):"",vote_average:r.vote_average,vote_count:r.vote_count,poster_path:r.poster_path}}));function N(){let[e,t]=(0,i.useState)(""),[r,l]=(0,i.useState)([]),[c,d]=(0,i.useState)([]),[u,f]=(0,i.useState)([]),[x,N]=(0,i.useState)(null),[k,_]=(0,i.useState)(null),[C,S]=(0,i.useState)([]);(0,i.useEffect)(()=>{(async function(){f(await y())})()},[]),(0,i.useEffect)(()=>{(async function(){l(await b(x||void 0))})()},[x]);let A=async e=>{let t=await (0,g.QT)((0,g.JU)(g.db,"favorites",e));if(t.exists()){let e=t.data().favorites||[];d(e),S(await j(e))}},R=async(e,t)=>{let r=(0,g.JU)(g.db,"favorites",e),a=await (0,g.QT)(r);if(a.exists()){let e=a.data().favorites||[];e.includes(t)||(e.push(t),await (0,g.pl)(r,{favorites:e},{merge:!0}))}else await (0,g.pl)(r,{favorites:[t]})},E=async(e,t)=>{let r=(0,g.JU)(g.db,"favorites",e),a=await (0,g.QT)(r);if(a.exists()){let e=(a.data().favorites||[]).filter(e=>e!==t);await (0,g.pl)(r,{favorites:e},{merge:!0})}};(0,i.useEffect)(()=>{let e=(0,g.Aj)(g.I8,e=>{e?(_(e),A(e.uid)):(_(null),d([]))});return()=>e()},[]);let z=async()=>{e?l(await w(e)):l(await b(x||void 0))},I=e=>{k&&(c.includes(e)?E(k.uid,e):R(k.uid,e)),d(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e]),S(t=>t.some(t=>t.id===e)?t.filter(t=>t.id!==e):[...t,r.find(t=>t.id===e)])},U=e=>{let{movie:t,isFavorite:r}=e;return(0,a.jsxs)(s.Zb,{className:"w-full rounded-[2rem] overflow-hidden shadow-lg group relative",children:[(0,a.jsx)(s.aY,{className:"p-0",children:(0,a.jsxs)("div",{className:"relative aspect-square",children:[(0,a.jsx)(h.default,{src:t.image,alt:t.title,width:400,height:600,className:"object-cover rounded-[2rem]",priority:!0}),(0,a.jsx)("div",{className:"absolute inset-0 bg-black opacity-0 group-hover:opacity-80 transition-opacity rounded-[2rem] flex items-center justify-center p-4",children:(0,a.jsxs)("div",{className:"text-white text-center",children:[(0,a.jsx)("p",{className:"text-sm md:text-base mb-2",children:t.overview}),(0,a.jsx)("div",{className:"mb-2",children:(0,a.jsxs)("p",{className:"text-lg font-semibold",children:[t.vote_average,"/10"]})}),(0,a.jsxs)("p",{className:"text-sm",children:[t.vote_count," reviews"]})]})}),(0,a.jsxs)(o.z,{variant:"ghost",size:"icon",className:"absolute top-2 right-2 w-10 h-10 rounded-full bg-background/50 hover:bg-background/75 opacity-0 group-hover:opacity-100 transition-opacity",onClick:()=>I(t.id),children:[(0,a.jsx)(m,{className:"w-6 h-6 ".concat(r?"fill-red-500 text-red-500":"text-white")}),(0,a.jsx)("span",{className:"sr-only",children:"Toggle favorite"})]})]})}),(0,a.jsx)(s.eW,{className:"p-4",children:(0,a.jsx)("h3",{className:"font-medium text-base text-center w-full text-foreground",children:t.title})})]},t.id)};return(0,a.jsxs)("div",{className:"bg-background min-h-screen p-8",children:[(0,a.jsx)("h1",{className:"text-4xl font-bold mb-8 text-primary",children:"Popular Movies"}),(0,a.jsxs)("div",{className:"flex items-center mb-8",children:[(0,a.jsx)(n.I,{type:"search",placeholder:"Search movies...",className:"max-w-md text-black bg-white",value:e,onChange:e=>t(e.target.value)}),(0,a.jsxs)(o.z,{onClick:z,className:"ml-2 bg-black text-white hover:bg-gray-800",variant:"ghost",size:"icon",children:[(0,a.jsx)(v,{className:"w-6 h-6"}),(0,a.jsx)("span",{className:"sr-only",children:"Search"})]})]}),(0,a.jsx)("div",{className:"flex mb-8",children:(0,a.jsxs)("select",{value:x||"",onChange:e=>N(Number(e.target.value)),className:"bg-white text-black p-2 rounded-md",children:[(0,a.jsx)("option",{value:"",children:"All Genres"}),u.map(e=>(0,a.jsx)("option",{value:e.id,children:e.name},e.id))]})}),(0,a.jsxs)(p.mQ,{defaultValue:"all",className:"mb-8",children:[(0,a.jsxs)(p.dr,{children:[(0,a.jsx)(p.SP,{value:"all",children:"All Movies"}),(0,a.jsx)(p.SP,{value:"favorites",children:"Favorites"})]}),(0,a.jsx)(p.nU,{value:"all",children:(0,a.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6",children:r.map(e=>(0,a.jsx)(U,{movie:e,isFavorite:c.includes(e.id)},e.id))})}),(0,a.jsx)(p.nU,{value:"favorites",children:(0,a.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6",children:C.length>0?C.map(e=>(0,a.jsx)(U,{movie:e,isFavorite:!0},e.id)):(0,a.jsx)("p",{children:"No favorite movies found."})})})]})]})}},2381:function(e,t,r){"use strict";r.d(t,{z:function(){return c}});var a=r(7437),i=r(2265),s=r(7053),n=r(7712),o=r(3448);let l=(0,n.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),c=i.forwardRef((e,t)=>{let{className:r,variant:i,size:n,asChild:c=!1,...d}=e,u=c?s.g7:"button";return(0,a.jsx)(u,{className:(0,o.cn)(l({variant:i,size:n,className:r})),ref:t,...d})});c.displayName="Button"},9820:function(e,t,r){"use strict";r.d(t,{Ol:function(){return o},Zb:function(){return n},aY:function(){return c},eW:function(){return d},ll:function(){return l}});var a=r(7437),i=r(2265),s=r(3448);let n=i.forwardRef((e,t)=>{let{className:r,...i}=e;return(0,a.jsx)("div",{ref:t,className:(0,s.cn)("rounded-xl border bg-card text-card-foreground shadow",r),...i})});n.displayName="Card";let o=i.forwardRef((e,t)=>{let{className:r,...i}=e;return(0,a.jsx)("div",{ref:t,className:(0,s.cn)("flex flex-col space-y-1.5 p-6",r),...i})});o.displayName="CardHeader";let l=i.forwardRef((e,t)=>{let{className:r,...i}=e;return(0,a.jsx)("h3",{ref:t,className:(0,s.cn)("font-semibold leading-none tracking-tight",r),...i})});l.displayName="CardTitle",i.forwardRef((e,t)=>{let{className:r,...i}=e;return(0,a.jsx)("p",{ref:t,className:(0,s.cn)("text-sm text-muted-foreground",r),...i})}).displayName="CardDescription";let c=i.forwardRef((e,t)=>{let{className:r,...i}=e;return(0,a.jsx)("div",{ref:t,className:(0,s.cn)("p-6 pt-0",r),...i})});c.displayName="CardContent";let d=i.forwardRef((e,t)=>{let{className:r,...i}=e;return(0,a.jsx)("div",{ref:t,className:(0,s.cn)("flex items-center p-6 pt-0",r),...i})});d.displayName="CardFooter"},279:function(e,t,r){"use strict";r.d(t,{I:function(){return n}});var a=r(7437),i=r(2265),s=r(3448);let n=i.forwardRef((e,t)=>{let{className:r,type:i,...n}=e;return(0,a.jsx)("input",{type:i,className:(0,s.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",r),ref:t,...n})});n.displayName="Input"},7168:function(e,t,r){"use strict";r.d(t,{SP:function(){return c},dr:function(){return l},mQ:function(){return o},nU:function(){return d}});var a=r(7437),i=r(2265),s=r(54),n=r(3448);let o=s.fC,l=i.forwardRef((e,t)=>{let{className:r,...i}=e;return(0,a.jsx)(s.aV,{ref:t,className:(0,n.cn)("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",r),...i})});l.displayName=s.aV.displayName;let c=i.forwardRef((e,t)=>{let{className:r,...i}=e;return(0,a.jsx)(s.xz,{ref:t,className:(0,n.cn)("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",r),...i})});c.displayName=s.xz.displayName;let d=i.forwardRef((e,t)=>{let{className:r,...i}=e;return(0,a.jsx)(s.VY,{ref:t,className:(0,n.cn)("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",r),...i})});d.displayName=s.VY.displayName},6410:function(e,t,r){"use strict";r.d(t,{Aj:function(){return s.Aj},I8:function(){return l},JU:function(){return n.JU},QT:function(){return n.QT},db:function(){return c},pl:function(){return n.pl}});var a=r(738),i=r(62),s=r(4752),n=r(5978);let o=(0,a.ZF)({apiKey:"AIzaSyB-TxKbw3OgJiM7AaCuhF3S3jc7eD8yYzA",authDomain:"moviehub-25b57.firebaseapp.com",projectId:"moviehub-25b57",storageBucket:"moviehub-25b57.firebasestorage.app",messagingSenderId:"485341819524",appId:"1:485341819524:web:5481b8df1da67a903388d1",measurementId:"G-GCXQJ2Y9EB"}),l=(0,s.v0)(o),c=(0,n.ad)(o);(0,i.cF)(o)},3448:function(e,t,r){"use strict";r.d(t,{cn:function(){return s}});var a=r(1994),i=r(3335);function s(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,i.m6)((0,a.W)(t))}}},function(e){e.O(0,[358,400,37,74,145,971,117,744],function(){return e(e.s=1270)}),_N_E=e.O()}]);