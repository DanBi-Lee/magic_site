(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],[,,function(e,t,n){e.exports={contents:"Magic_contents__1MOVH",title:"Magic_title__3FMKO"}},,,,,function(e,t,n){e.exports={numberList:"Step_numberList__1yAGN"}},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(1),r=n.n(s),a=n(6),i=n.n(a),l=(n(13),n(5)),u=n(7),j=n.n(u);var o=function(e){var t=e.styles,n=e.onClick,r=e.step,a=e.number,i=e.setNumber,l=Object(s.useMemo)((function(){for(var e=r,t="",n=0;n<e;n++)t=0===n?t+"1":t+"0";return t=parseInt(t,2)}),[r]),u=Object(s.useCallback)((function(e,t){i((function(){return e+t}))}),[i]);return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:t.contents,children:[Object(c.jsxs)("p",{children:["".concat(r,".")," \ub2e4\uc74c \uc22b\uc790 \uc911",Object(c.jsx)("br",{}),"\ub2f9\uc2e0\uc774 \uace0\ub978 \uc22b\uc790\uac00 \uc788\ub098\uc694?"]}),Object(c.jsx)("ul",{className:j.a.numberList,children:function(e){for(var t=32,n=[];t-1>=0;t--){var c=t.toString(2);"1"===c[c.length-e]&&n.push(t)}return n.reverse()}(r).map((function(e){return Object(c.jsx)("li",{children:e},e)}))})]}),Object(c.jsx)("button",{className:"button",onClick:function(){n(),u(a,l)},style:{marginRight:"16px"},value:!0,children:"\uc788\ub2e4"}),Object(c.jsx)("button",{className:"button",onClick:n,value:!1,children:"\uc5c6\ub2e4"})]})};var b=function(e){var t=e.styles,n=e.onClick;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:t.contents,children:[Object(c.jsx)("p",{className:t.title,children:"\ub9c8\ubc95\uc758 \uc218\uc815\uad6c\uc2ac"}),Object(c.jsx)("p",{children:"\ub2f9\uc2e0\uc758 \ub9c8\uc74c\uc744 \uc77d\uc5b4\ub4dc\ub9bd\ub2c8\ub2e4!"})]}),Object(c.jsx)("button",{className:"button",onClick:n,children:"\ub2e4\uc74c\uc73c\ub85c"})]})},O=n(2),d=n.n(O);var m=function(e){var t=e.styles,n=e.onClick;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:t.contents,children:Object(c.jsxs)("p",{children:["1~32 \uc0ac\uc774\uc5d0\uc11c",Object(c.jsx)("br",{}),"\uc6d0\ud558\ub294 \uc22b\uc790\ub97c \ub9c8\uc74c\uc18d\uc73c\ub85c \ub5a0\uc62c\ub9ac\uc138\uc694."]})}),Object(c.jsx)("button",{className:"button",onClick:n,children:"\ub2e4\uc74c\uc73c\ub85c"})]})},x=n.p+"static/media/logo.42cd4cf6.png";function h(e){var t=e.styles;return Object(c.jsx)("h1",{className:t.logo,children:Object(c.jsx)("img",{src:x,alt:"\ub85c\uace0"})})}var p=r.a.memo(h);var f=function(e){var t=e.styles,n=e.number,s=e.setScreen;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:t.contents,children:Object(c.jsxs)("p",{children:["\ub2f9\uc2e0\uc774 \uc0dd\uac01\ud55c \uc22b\uc790\ub294",Object(c.jsxs)("span",{children:[" ",0===n?32:n," "]}),"\uc785\ub2c8\ub2e4."]})}),Object(c.jsxs)("button",{className:"button",onClick:function(){s((function(){return 0}))},children:["\ub2e4\uc2dc\ud558\uae30 ",Object(c.jsx)("i",{className:"fas fa-redo-alt"})]})]})};var v=function(){var e=Object(s.useState)(""),t=["ReadyScreen","NumberSelection","Step1","Step2","Step3","Step4","Step5","Result"],n=Object(s.useState)(0),r=Object(l.a)(n,2),a=r[0],i=r[1],u=Object(s.useState)(0),j=Object(l.a)(u,2),O=j[0],x=j[1],h=function(){x((function(){return O+1}))};return Object(c.jsxs)("div",{children:[Object(c.jsx)(p,{styles:d.a}),function(n){switch(t[n]){case t[0]:return e.current="ready",Object(c.jsx)(b,{styles:d.a,onClick:h});case t[1]:return e.current="numberSelection",Object(c.jsx)(m,{styles:d.a,onClick:h});case t[2]:case t[3]:case t[4]:case t[5]:case t[6]:return e.current="step",Object(c.jsx)(o,{styles:d.a,onClick:h,step:n-1,number:a,setNumber:i,state:e.current});case t[7]:return Object(c.jsx)(f,{styles:d.a,onClick:h,number:a,setScreen:x});default:throw Error("\uc815\uc758\ub418\uc9c0 \uc54a\uc740 step")}}(O)]})};n(14),n(15);var N=function(){return Object(c.jsx)(v,{})};n(16);i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(N,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.7193d73d.chunk.js.map