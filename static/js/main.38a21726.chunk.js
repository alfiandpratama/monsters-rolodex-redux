(this["webpackJsonpmonsters-rolodex-redux"]=this["webpackJsonpmonsters-rolodex-redux"]||[]).push([[0],{13:function(e,t,n){e.exports=n(29)},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(1),c=n.n(o),s=n(2),l=n(3),i=(n(24),n(9)),u=n(10),h=n(12),m=n(11),d=(n(25),function(e){return r.a.createElement("div",{className:"card-container"},r.a.createElement("img",{src:"https://robohash.org/".concat(e.monster.id,".png?set=set2&size=180x180"),alt:"monster"}),r.a.createElement("h2",null,e.monster.name),r.a.createElement("p",null,e.monster.email))}),p=(n(26),function(e){return r.a.createElement("div",{className:"card-list"},e.monsters.map((function(e){return r.a.createElement(d,{key:e.id,monster:e})})))}),f=(n(27),function(e){var t=e.placeholder,n=e.handleChange;return r.a.createElement("input",{className:"search",type:"search",placeholder:t,onChange:n})}),v=(n(28),function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).state={monsters:[]},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this.state.monsters,t=this.props,n=t.searchField,a=t.handleChange,o=e.filter((function(e){return e.name.toLowerCase().includes(n.toLocaleLowerCase())}));return console.log(o),r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Monsters Rolodex"),r.a.createElement(f,{placeholder:"Search Monster",handleChange:a}),r.a.createElement(p,{monsters:o}))}}]),n}(a.Component)),E=Object(l.b)((function(e){return{searchField:e.searchField}}),(function(e){return{handleChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})}}}))(v);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var g={searchField:""},b=Object(s.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}}));c.a.render(r.a.createElement(l.a,{store:b},r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[13,1,2]]]);
//# sourceMappingURL=main.38a21726.chunk.js.map