(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){e.exports=n.p+"static/media/arni.6fcdb2fd.jpg"},16:function(e,t,n){e.exports=n.p+"static/media/Terminator.40dd3f16.mp3"},20:function(e,t,n){e.exports=n(31)},25:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(8),c=n.n(a),i=(n(25),n(2)),p=n(4),u=n(3),s=n(5),l=(n(7),n(15)),d=n.n(l),m=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(p.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).render=function(){var e=n.props.index===n.props.id?"photo show":"photo";return o.a.createElement("div",{className:"item",id:n.props.id},o.a.createElement("img",{src:d.a,alt:"",className:e,onClick:n.props.itemOnClick})," :")},n}return Object(s.a)(t,e),t}(o.a.Component),f=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(p.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).render=function(){var e=n.props.item.map(function(e){return o.a.createElement(m,{key:e.id,id:e.id,index:n.props.index,itemOnClick:n.props.itemOnClick})});return o.a.createElement("div",{className:"wrapper"},e)},n}return Object(s.a)(t,e),t}(o.a.Component),O=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(p.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).render=function(){return o.a.createElement("div",{className:"counter"},o.a.createElement("span",{className:"user"},"  User:  ")," ",n.props.count)},n}return Object(s.a)(t,e),t}(o.a.Component),b=n(16),h=n.n(b),v=n(17),j=n.n(v),w=n(18);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(n,!0).forEach(function(t){Object(w.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var E={item:[{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8},{id:9}],index:1,count:0},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET-INDEX":return y({},e,{index:t.getIndex=Math.floor(9*Math.random())});case"COUNTER":return y({},e,{count:t.newCount+1})}return e},x=n(10),k=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(p.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).getRandomImageIndex=function(e){n.props.getRandomIndex(e)},n.id=setInterval(function(){n.getRandomImageIndex()},700),n.itemOnClick=function(){n.props.itemOnClickAC(n.props.count),new j.a(h.a).play()},n.render=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(f,{item:n.props.item,index:n.props.index,itemOnClick:n.itemOnClick}),o.a.createElement(O,{count:n.props.count}))},n}return Object(s.a)(t,e),t}(o.a.Component),I=Object(x.b)(function(e){return{index:e.index,count:e.count,item:e.item,comp:e.comp}},function(e){return{getRandomIndex:function(t){var n=function(e){return{type:"GET-INDEX",getIndex:e}}(t);e(n)},itemOnClickAC:function(t){var n=function(e){return{type:"COUNTER",newCount:e}}(t);e(n)}}})(k);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var N=n(9),P=Object(N.b)(C);c.a.render(o.a.createElement(x.a,{store:P},o.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e,t,n){}},[[20,1,2]]]);
//# sourceMappingURL=main.98a00ba7.chunk.js.map