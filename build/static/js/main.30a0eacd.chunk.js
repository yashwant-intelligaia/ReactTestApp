(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{80:function(e,t,a){"use strict";a.r(t);var n=a(5),s=a(0),c=a(9),i=a.n(c),r=a(15),o=a(119),l=a(122),j=a(124),u=a(126),b=a(125),d=a(127),h=Object(o.a)({root:{maxWidth:800,margin:"100px auto"},media:{height:500},typo:{textAlign:"center"}});function m(){var e="",t=(new Date).getHours(),a="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sunrise-quotes-21-1586892331.jpg";t>=4&&t<12?(e="Good morning",a="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sunrise-quotes-21-1586892331.jpg"):t>=12&&t<17?(e="Good Afternoon",a="https://wallpapercave.com/wp/wp2214654.jpg"):t>=17&&t<20?(e="Good Evening",a="https://wallpapercave.com/wp/wp3113563.jpg"):(e="Good Night",a="https://wallpaperaccess.com/full/253790.jpg");var s=h();return Object(n.jsx)(l.a,{className:s.root,children:Object(n.jsxs)(j.a,{children:[Object(n.jsx)(b.a,{className:s.media,image:a,title:e,alt:e}),Object(n.jsx)(u.a,{children:Object(n.jsxs)(d.a,{className:s.typo,gutterBottom:!0,variant:"h5",component:"h2",children:["Hello David, ",e]})})]})})}var p=a(128),g=a(130),x=a(129),O=Object(o.a)({root:{maxWidth:500,margin:"100px auto"},media:{height:500},typo:{textAlign:"center"},textStyle:{width:"80%"},textCenter:{textAlign:"center"},buttonStyle:{textAlign:"right",margin:"0 10% 10% 10%"}});function f(){var e=new Date,t=e.getHours()>12?e.getHours()-12:e.getHours(),a=(t>9?t:"0"+t)+":"+(e.getMinutes()>=10?e.getMinutes():"0"+e.getMinutes())+":"+(e.getSeconds()>=10?e.getSeconds():"0"+e.getSeconds())+" "+(e.getHours()>12?"PM":"AM"),c=Object(s.useState)(a),i=Object(r.a)(c,2),o=i[0],j=i[1],u=O();return Object(n.jsxs)(l.a,{className:u.root,children:[Object(n.jsx)(b.a,{className:u.media,image:"https://i.pinimg.com/originals/24/48/24/244824821f943a397973d35a9b5f6748.jpg",title:o,alt:o}),Object(n.jsxs)(p.a,{children:[Object(n.jsx)(x.a,{item:!0,xs:9,sm:9,children:Object(n.jsx)("h1",{children:o})}),Object(n.jsx)(x.a,{item:!0,xs:3,sm:3,children:Object(n.jsx)(g.a,{onClick:function(){var t=new Date,a=t.getHours()>12?t.getHours()-12:t.getHours();a=a>9?a:"0"+a;var n=e.getMinutes()>=10?e.getMinutes():"0"+e.getMinutes(),s=t.getSeconds()>=10?t.getSeconds():"0"+t.getSeconds(),c=e.getHours()>12?"PM":"AM";j(a+":"+n+":"+s+" "+c)},variant:"contained",color:"primary",children:"Update"})})]})]})}var v=a(56),w=a(134),S=a(137),k=a(135);a(78);function y(e){return Object(n.jsx)(k.a,Object(v.a)({elevation:6,variant:"filled"},e))}var N=function(e){var t=O(),a=Object(s.useState)(""),c=Object(r.a)(a,2),i=c[0],o=c[1],j=Object(s.useState)(""),u=Object(r.a)(j,2),b=u[0],d=u[1],h=Object(s.useState)(!1),m=Object(r.a)(h,2),f=m[0],v=m[1],k=function(){v(!1)};return Object(s.useEffect)((function(){f&&setInterval((function(){v(!1)}),2e3)}),[f]),Object(n.jsxs)(l.a,{className:t.root,children:[Object(n.jsx)(p.a,{children:Object(n.jsx)("form",{onSubmit:function(e){console.log("submit form"),v(!0),o(""),d(""),e.preventDefault()},children:Object(n.jsxs)(x.a,{container:!0,spacing:2,className:t.textCenter,children:[Object(n.jsx)(x.a,{item:!0,xs:12,children:Object(n.jsx)("h1",{children:"Form"})}),Object(n.jsx)(x.a,{item:!0,xs:12,children:Object(n.jsx)(w.a,{className:t.textStyle,id:"outlined-basic",label:"Name",variant:"outlined",value:i,onChange:function(e){o(e.target.value)},autoComplete:"off"})}),Object(n.jsx)(x.a,{item:!0,xs:12,children:Object(n.jsx)(w.a,{id:"outlined-multiline-static",label:"Address",multiline:!0,rows:4,variant:"outlined",className:t.textStyle,value:b,autoComplete:"off",onChange:function(e){d(e.target.value)}})}),Object(n.jsx)(x.a,{item:!0,xs:12,className:t.buttonStyle,children:Object(n.jsx)(g.a,{type:"submit",variant:"contained",color:"primary",disabled:""===i||""===b,children:"Submit"})})]})})}),Object(n.jsx)(S.a,{open:f,autoHideDuration:2e3,onClose:k,children:Object(n.jsx)(y,{onClose:k,severity:"success",children:"Form Saved Successfully."})})]})},C=a(132),H=a(133),M=a(131),A=a(54),D=a.n(A),G=a(53),B=a.n(G),z=a(138),E=a(55),P=Object(o.a)((function(e){return{selectTask:{width:200},root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));var T=function(){var e=P(),t=Object(s.useState)(null),a=Object(r.a)(t,2),c=a[0],i=a[1],o=Object(s.useState)("task1"),l=Object(r.a)(o,2),j=l[0],u=l[1],b=Boolean(c),h=function(){i(null)},p=Object(n.jsx)(m,{});switch(j){case"task1":p=Object(n.jsx)(m,{});break;case"task2":p=Object(n.jsx)(f,{});break;case"task3":p=Object(n.jsx)(N,{});break;default:p=Object(n.jsx)(m,{})}return Object(n.jsxs)("div",{children:[Object(n.jsx)(C.a,{position:"static",children:Object(n.jsxs)(H.a,{children:[Object(n.jsx)(M.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu",children:Object(n.jsx)(B.a,{})}),Object(n.jsx)(d.a,{variant:"h6",className:e.title,children:"TestApp"}),Object(n.jsxs)("div",{children:[Object(n.jsx)(M.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){i(e.currentTarget)},color:"inherit",children:Object(n.jsx)(D.a,{})}),Object(n.jsx)(E.a,{id:"menu-appbar",anchorEl:c,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:b,onClose:h,PaperProps:{style:{maxHeight:135,width:"20ch"}},children:["task1","task2","task3"].map((function(e,t){return Object(n.jsx)(z.a,{onClick:function(){return u(e),void h()},children:e},t)}))})]})]})}),p]})};i.a.render(Object(n.jsx)(T,{}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.30a0eacd.chunk.js.map