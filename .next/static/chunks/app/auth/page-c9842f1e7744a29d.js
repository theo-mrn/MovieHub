(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[235],{9421:function(e,t,r){Promise.resolve().then(r.bind(r,8846))},9376:function(e,t,r){"use strict";var s=r(5475);r.o(s,"useRouter")&&r.d(t,{useRouter:function(){return s.useRouter}})},8846:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return v}});var s=r(7437),a=r(2265),n=r(9376),i=r(7168),l=r(279),o=r(2381),u=r(6840),d=a.forwardRef((e,t)=>(0,s.jsx)(u.WV.label,{...e,ref:t,onMouseDown:t=>{var r;t.target.closest("button, input, select, textarea")||(null===(r=e.onMouseDown)||void 0===r||r.call(e,t),!t.defaultPrevented&&t.detail>1&&t.preventDefault())}}));d.displayName="Label";var c=r(7712),f=r(3448);let m=(0,c.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),p=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)(d,{ref:t,className:(0,f.cn)(m(),r),...a})});p.displayName=d.displayName;var x=r(9820),g=r(4752),b=r(5978),h=r(6410);function v(){let e=(0,n.useRouter)(),[t,r]=(0,a.useState)(""),[u,d]=(0,a.useState)(""),[c,f]=(0,a.useState)(""),[m,v]=(0,a.useState)(null),y=async(r,s)=>{r.preventDefault(),v(null);try{if("signup"===s){let r=(await (0,g.Xb)(h.I8,t,u)).user;await (0,b.pl)((0,b.JU)(h.db,"users",r.uid),{name:c,title:"d\xe9butant"}),e.push("/films")}else"login"===s&&(await (0,g.e5)(h.I8,t,u),e.push("/films"))}catch(e){e instanceof Error&&v(e.message)}};return(0,s.jsx)("div",{className:"min-h-screen flex items-center justify-center bg-gray-100 p-4",children:(0,s.jsxs)(x.Zb,{className:"w-full max-w-2xl",children:[(0,s.jsx)(x.Ol,{children:(0,s.jsx)(x.ll,{className:"text-3xl font-bold text-center",children:"Authentification"})}),(0,s.jsx)(x.aY,{children:(0,s.jsxs)(i.mQ,{defaultValue:"signup",className:"w-full",children:[(0,s.jsxs)(i.dr,{className:"grid w-full grid-cols-2 mb-6 h-12",children:[(0,s.jsx)(i.SP,{value:"signup",className:"text-base h-full data-[state=active]:bg-background",children:"Inscription"}),(0,s.jsx)(i.SP,{value:"login",className:"text-base h-full data-[state=active]:bg-background",children:"Connexion"})]}),m&&(0,s.jsx)("p",{className:"text-red-500 text-center",children:m}),"  ",(0,s.jsx)(i.nU,{value:"signup",children:(0,s.jsxs)("form",{onSubmit:e=>y(e,"signup"),className:"space-y-6",children:[(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsx)(p,{htmlFor:"signup-username",className:"text-base",children:"Nom d'utilisateur"}),(0,s.jsx)(l.I,{id:"signup-username",type:"text",placeholder:"Nom d'utilisateur",value:c,onChange:e=>f(e.target.value),required:!0,className:"text-base py-2"})]}),(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsx)(p,{htmlFor:"signup-email",className:"text-base",children:"Email"}),(0,s.jsx)(l.I,{id:"signup-email",type:"email",placeholder:"votre@email.com",value:t,onChange:e=>r(e.target.value),required:!0,className:"text-base py-2"})]}),(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsx)(p,{htmlFor:"signup-password",className:"text-base",children:"Mot de passe"}),(0,s.jsx)(l.I,{id:"signup-password",type:"password",value:u,onChange:e=>d(e.target.value),required:!0,className:"text-base py-2"})]}),(0,s.jsx)(o.z,{type:"submit",className:"w-full text-base py-2",children:"S'inscrire"})]})}),(0,s.jsx)(i.nU,{value:"login",children:(0,s.jsxs)("form",{onSubmit:e=>y(e,"login"),className:"space-y-6",children:[(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsx)(p,{htmlFor:"login-email",className:"text-base",children:"Email"}),(0,s.jsx)(l.I,{id:"login-email",type:"email",placeholder:"votre@email.com",value:t,onChange:e=>r(e.target.value),required:!0,className:"text-base py-2"})]}),(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsx)(p,{htmlFor:"login-password",className:"text-base",children:"Mot de passe"}),(0,s.jsx)(l.I,{id:"login-password",type:"password",value:u,onChange:e=>d(e.target.value),required:!0,className:"text-base py-2"})]}),(0,s.jsx)("div",{className:"flex justify-between items-center",children:(0,s.jsx)(o.z,{type:"submit",className:"w-1/2 text-base py-2",children:"Se connecter"})})]})})]})})]})})}},2381:function(e,t,r){"use strict";r.d(t,{z:function(){return u}});var s=r(7437),a=r(2265),n=r(7053),i=r(7712),l=r(3448);let o=(0,i.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),u=a.forwardRef((e,t)=>{let{className:r,variant:a,size:i,asChild:u=!1,...d}=e,c=u?n.g7:"button";return(0,s.jsx)(c,{className:(0,l.cn)(o({variant:a,size:i,className:r})),ref:t,...d})});u.displayName="Button"},9820:function(e,t,r){"use strict";r.d(t,{Ol:function(){return l},Zb:function(){return i},aY:function(){return u},eW:function(){return d},ll:function(){return o}});var s=r(7437),a=r(2265),n=r(3448);let i=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)("div",{ref:t,className:(0,n.cn)("rounded-xl border bg-card text-card-foreground shadow",r),...a})});i.displayName="Card";let l=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)("div",{ref:t,className:(0,n.cn)("flex flex-col space-y-1.5 p-6",r),...a})});l.displayName="CardHeader";let o=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)("h3",{ref:t,className:(0,n.cn)("font-semibold leading-none tracking-tight",r),...a})});o.displayName="CardTitle",a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)("p",{ref:t,className:(0,n.cn)("text-sm text-muted-foreground",r),...a})}).displayName="CardDescription";let u=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)("div",{ref:t,className:(0,n.cn)("p-6 pt-0",r),...a})});u.displayName="CardContent";let d=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)("div",{ref:t,className:(0,n.cn)("flex items-center p-6 pt-0",r),...a})});d.displayName="CardFooter"},279:function(e,t,r){"use strict";r.d(t,{I:function(){return i}});var s=r(7437),a=r(2265),n=r(3448);let i=a.forwardRef((e,t)=>{let{className:r,type:a,...i}=e;return(0,s.jsx)("input",{type:a,className:(0,n.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",r),ref:t,...i})});i.displayName="Input"},7168:function(e,t,r){"use strict";r.d(t,{SP:function(){return u},dr:function(){return o},mQ:function(){return l},nU:function(){return d}});var s=r(7437),a=r(2265),n=r(54),i=r(3448);let l=n.fC,o=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)(n.aV,{ref:t,className:(0,i.cn)("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",r),...a})});o.displayName=n.aV.displayName;let u=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)(n.xz,{ref:t,className:(0,i.cn)("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",r),...a})});u.displayName=n.xz.displayName;let d=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)(n.VY,{ref:t,className:(0,i.cn)("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",r),...a})});d.displayName=n.VY.displayName},6410:function(e,t,r){"use strict";r.d(t,{Aj:function(){return n.Aj},I8:function(){return o},JU:function(){return i.JU},QT:function(){return i.QT},db:function(){return u},pl:function(){return i.pl}});var s=r(738),a=r(62),n=r(4752),i=r(5978);let l=(0,s.ZF)({apiKey:"AIzaSyB-TxKbw3OgJiM7AaCuhF3S3jc7eD8yYzA",authDomain:"moviehub-25b57.firebaseapp.com",projectId:"moviehub-25b57",storageBucket:"moviehub-25b57.firebasestorage.app",messagingSenderId:"485341819524",appId:"1:485341819524:web:5481b8df1da67a903388d1",measurementId:"G-GCXQJ2Y9EB"}),o=(0,n.v0)(l),u=(0,i.ad)(l);(0,a.cF)(l)},3448:function(e,t,r){"use strict";r.d(t,{cn:function(){return n}});var s=r(1994),a=r(3335);function n(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,a.m6)((0,s.W)(t))}}},function(e){e.O(0,[358,400,37,74,971,117,744],function(){return e(e.s=9421)}),_N_E=e.O()}]);