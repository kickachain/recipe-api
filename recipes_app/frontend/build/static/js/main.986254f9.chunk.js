(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var r=n(1),s=n.n(r),a=n(3),o=n.n(a),c=(n(14),n(15),n(2)),i=n.n(c),u=n(5),p=n(6),d=n(7),j=n(9),l=n(8),m=n(0),h=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(p.a)(this,n),(r=t.call(this,e)).mySubmitHandler=function(e){e.preventDefault();var t=document.getElementsByName("username"),n=document.getElementsByName("password"),s={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,password:n})};fetch("/api/token/",s).then(function(){var e=Object(u.a)(i.a.mark((function e(t){var n,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:if(n=e.sent,t.ok){e.next=6;break}return s=n&&n.message||t.status,e.abrupt("return",Promise.reject(s));case 6:r.setState({postId:n.id}),console.log(n);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){r.setState({errorMessage:e.toString()}),console.error("There was an error!",e)}))},r.state={username:"",password:""},r}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this,t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:"React POST Request Example"})};fetch("/api/token/",t).then(function(){var t=Object(u.a)(i.a.mark((function t(n){var r,s;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.json();case 2:if(r=t.sent,n.ok){t.next=6;break}return s=r&&r.message||n.status,t.abrupt("return",Promise.reject(s));case 6:e.setState({postId:r.id});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.setState({errorMessage:t.toString()}),console.error("There was an error!",t)}))}},{key:"render",value:function(){return Object(m.jsxs)("form",{onSubmit:this.mySubmitHandler,children:[Object(m.jsx)("p",{children:"Enter your name:"}),Object(m.jsx)("input",{type:"text",name:"username"}),Object(m.jsx)("p",{children:"Enter your password:"}),Object(m.jsx)("input",{type:"password",name:"password"}),Object(m.jsx)("button",{type:"submit",children:"Submit"})]})}}]),n}(s.a.Component),b=h;o.a.render(Object(m.jsx)(h,{}),document.getElementById("root"));var f=function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsxs)("header",{className:"App-header",children:[Object(m.jsxs)("p",{children:["Edit ",Object(m.jsx)("code",{children:"src/App.tsx"})," and save to reload."]}),Object(m.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})]}),Object(m.jsx)(b,{})]})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),r(e),s(e),a(e),o(e)}))};o.a.render(Object(m.jsx)(f,{}),document.getElementById("root")),O()}},[[18,1,2]]]);
//# sourceMappingURL=main.986254f9.chunk.js.map