(this["webpackJsonpfirst-app"]=this["webpackJsonpfirst-app"]||[]).push([[0],{22:function(e,t,n){},41:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c=n(2),s=n.n(c),r=n(12),a=n.n(r),o=(n(22),n(13)),i=n(14),h=n(17),l=n(16),u=n(15),d=n.n(u),j=(n.p,n(41),n(0)),p=function(e){var t=e.placeholder,n=e.handleChange;return Object(j.jsx)("input",{className:"search",type:"search",placeholder:t,onChange:n})},f=(n(43),function(e){var t=e.monster;return Object(j.jsxs)("div",{className:"card-container",children:[Object(j.jsx)("img",{alt:"monster",src:"https://robohash.org/".concat(t.id,"?set=set2&size=180x180")}),Object(j.jsx)("h1",{children:t.name}),Object(j.jsx)("h2",{children:t.email})]})}),m=(n(44),function(e){return Object(j.jsx)("div",{className:"card-list",children:e.monsters.map((function(e){return Object(j.jsx)(f,{monster:e},e.id)}))})}),b=(n(45),function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(e){var c;return Object(o.a)(this,n),(c=t.call(this,e)).handleChange=function(e){c.setState({searchField:e.target.value})},c.state={monsters:[],searchField:""},c}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;d.a.get("https://jsonplaceholder.typicode.com/users").then((function(t){return e.setState({monsters:t.data})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"Monsters Rolodex"}),Object(j.jsx)(p,{placeholder:"Search monsters",handleChange:this.handleChange}),Object(j.jsx)(m,{monsters:c,children:Object(j.jsx)("h1",{children:"Monsters"})})]})}}]),n}(c.Component)),O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),r(e),a(e)}))};a.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root"),(function(){console.log("App loaded")})),O()}},[[46,1,2]]]);
//# sourceMappingURL=main.e86740dd.chunk.js.map