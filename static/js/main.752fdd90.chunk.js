(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){},2:function(e,t,n){e.exports={contents:"Magic_contents__1MOVH",title:"Magic_title__3FMKO"}},22:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(1),r=n.n(s),a=n(6),i=n.n(a),u=(n(15),n(5)),o=n(7),l=n.n(o);var j=function(e){var t=e.styles,n=e.onClick,r=e.step,a=e.number,i=e.setNumber,u=Object(s.useMemo)((function(){for(var e=r,t="",n=0;n<e;n++)t=0===n?t+"1":t+"0";return t=parseInt(t,2)}),[r]),o=Object(s.useCallback)((function(e,t){i((function(){return e+t}))}),[i]);return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:t.contents,children:[Object(c.jsxs)("p",{children:["".concat(r,".")," \ub2e4\uc74c \uc22b\uc790 \uc911",Object(c.jsx)("br",{}),"\ub2f9\uc2e0\uc774 \uace0\ub978 \uc22b\uc790\uac00 \uc788\ub098\uc694?"]}),Object(c.jsx)("ul",{className:l.a.numberList,children:function(e){for(var t=32,n=[];t-1>=0;t--){var c=t.toString(2);"1"===c[c.length-e]&&n.push(t)}return n.reverse()}(r).map((function(e){return Object(c.jsx)("li",{children:e},e)}))})]}),Object(c.jsx)("button",{className:"button",onClick:function(){n(),o(a,u)},style:{marginRight:"16px"},value:!0,children:"\uc788\ub2e4"}),Object(c.jsx)("button",{className:"button",onClick:n,value:!1,children:"\uc5c6\ub2e4"})]})},b=n(8),m=n(9),d=n.p+"static/media/my_mistake.da807046.mp3",p=n.p+"static/media/button.ca3856e4.mp3",O=n.p+"static/media/magic.cd393c80.mp3",h=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];Object(b.a)(this,e),this.audio=new Audio(t),this.audio.loop=n}return Object(m.a)(e,[{key:"play",value:function(){this.audio.currentTime=0,this.audio.play()}},{key:"stop",value:function(){this.audio.pause()}}]),e}(),x=new h(d,!0),f=new h(p),v=new h(O);var y=function(e){var t=e.styles,n=e.onClick;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:t.contents,children:[Object(c.jsx)("p",{className:t.title,children:"\ub9c8\ubc95\uc758 \uc218\uc815\uad6c\uc2ac"}),Object(c.jsx)("p",{children:"\ub2f9\uc2e0\uc758 \ub9c8\uc74c\uc744 \uc77d\uc5b4\ub4dc\ub9bd\ub2c8\ub2e4!"})]}),Object(c.jsx)("button",{className:"button",onClick:function(){n(),x.play()},children:"\ub2e4\uc74c\uc73c\ub85c"})]})},g=n(2),N=n.n(g);var S=function(e){var t=e.styles,n=e.onClick;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:t.contents,children:Object(c.jsxs)("p",{children:["1~32 \uc0ac\uc774\uc5d0\uc11c",Object(c.jsx)("br",{}),"\uc6d0\ud558\ub294 \uc22b\uc790\ub97c \ub9c8\uc74c\uc18d\uc73c\ub85c \ub5a0\uc62c\ub9ac\uc138\uc694."]})}),Object(c.jsx)("button",{className:"button",onClick:n,children:"\ub2e4\uc74c\uc73c\ub85c"})]})},k=n.p+"static/media/logo.42cd4cf6.png";function C(e){var t=e.styles;return Object(c.jsx)("h1",{className:t.logo,children:Object(c.jsx)("img",{src:k,alt:"\ub85c\uace0"})})}var _=r.a.memo(C);var w=function(e){var t=e.styles,n=e.number,s=e.setNumber,r=e.setScreen,a=e.playButtonSE;return x.stop(),v.play(),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:t.contents,children:Object(c.jsxs)("p",{children:["\ub2f9\uc2e0\uc774 \uc0dd\uac01\ud55c \uc22b\uc790\ub294",Object(c.jsxs)("span",{children:[" ",0===n?32:n," "]}),"\uc785\ub2c8\ub2e4."]})}),Object(c.jsxs)("button",{className:"button",onClick:function(){r((function(){return 0})),s((function(){return 0})),a()},children:["\ub2e4\uc2dc\ud558\uae30 ",Object(c.jsx)("i",{className:"fas fa-redo-alt"})]})]})};var M=function(){var e=Object(s.useState)(""),t=["ReadyScreen","NumberSelection","Step1","Step2","Step3","Step4","Step5","Result"],n=Object(s.useState)(0),r=Object(u.a)(n,2),a=r[0],i=r[1],o=Object(s.useState)(0),l=Object(u.a)(o,2),b=l[0],m=l[1],d=function(){f.play()},p=function(){m((function(){return b+1})),d()};return Object(c.jsxs)("div",{children:[Object(c.jsx)(_,{styles:N.a}),function(n){switch(t[n]){case t[0]:return e.current="ready",Object(c.jsx)(y,{styles:N.a,onClick:p});case t[1]:return e.current="numberSelection",Object(c.jsx)(S,{styles:N.a,onClick:p});case t[2]:case t[3]:case t[4]:case t[5]:case t[6]:return e.current="step",Object(c.jsx)(j,{styles:N.a,onClick:p,step:n-1,number:a,setNumber:i,state:e.current});case t[7]:return Object(c.jsx)(w,{styles:N.a,number:a,setNumber:i,setScreen:m,playButtonSE:d});default:throw Error("\uc815\uc758\ub418\uc9c0 \uc54a\uc740 step")}}(b)]})};n(16),n(17);var F=function(){return Object(c.jsx)(M,{})};n(18);i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(F,{})}),document.getElementById("root"))},7:function(e,t,n){e.exports={numberList:"Step_numberList__1yAGN",numberChange:"Step_numberChange__2ga33"}}},[[22,1,2]]]);
//# sourceMappingURL=main.752fdd90.chunk.js.map