(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{111:function(e,t,n){n(110),e.exports=n(55)},13:function(e,t,n){e.exports={container:"voice_container__GCoVH",title:"voice_title__1ID_a",para:"voice_para__2Rzd2",spacer:"voice_spacer__1VvHe",background:"voice_background__1_s3v"}},32:function(e,t,n){e.exports={app:"app_app__KZsr_",list:"app_list__1Q8rf"}},52:function(e,t,n){e.exports=n.p+"static/media/particles.47eabe77.mp4"},55:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(54),i=n.n(a),c=n(112),s=n(113),u=n(16),l=n(32),p=n.n(l),f=n(53),m=n.n(f),h=n(31),y=n.n(h),d=n(13),b=n.n(d),g=n(52),v=n.n(g);function _(e){return(_="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(e,t){return!t||"object"!==_(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function O(e){return(O=Object.getPrototypeOf||function(e){return e.__proto__})(e)}var j=[{name:"isolated microservices",text:'<span className="mid">ISOLATED</span> <br/> <span className="big">MICROSERVICES?</span>',info:"The task of transforming monolithic mainframe applications into Microservices can be daunting unless they can be containerized, delivered and deployed using a modern DevOps Toolchain. "},{name:"realtime analytics",text:'<span className="mid">REAL TIME</span> <br/> <span className="big">ANALYTICS?</span>',info:"Using a database such as PostgreSQL to store updates, an organization can benefit from a plethora of tools which put critical information into the hands of key decision makers at the same speed as other source data. "}],x=function(e){return j.filter(function(t){return t.name===e})[0]},N="#JSGF V1.0; grammar terms; public <color> = ".concat(j.map(function(e){return e.name}).join(" | ")),P=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return S(r,(n=r=S(this,(e=O(t)).call.apply(e,[this].concat(i))),r.state={started:!1,selected:null},r.fuzzy=m()(j.map(function(e){return e.name})),r.ref={title:o.a.createRef(),subtitle:o.a.createRef(),paragraph:o.a.createRef()},r.recognitionResult=function(e){console.log(e.results);var t=w(e.results).map(function(e){return e[0].transcript.toLowerCase().trim()});console.log(t);var n=t.map(function(e){return r.fuzzy.get(e)});if(console.log(n),n[0]){var o=n[0].filter(function(e){return e[0]>.3}).map(function(e){return e[1]});console.log(o);var a=x(o[0]);console.log(a),a&&r.setState({selected:a})}},n))}var n,r,a;return n=t,(r=[{key:"componentDidMount",value:function(){var e=this;if("webkitSpeechRecognition"in window){this.recognition=new window.webkitSpeechRecognition,this.recognition.continuous=!1,this.recognition.interimResults=!1,this.recognition.lang="en-GB",this.recognition.maxAlternatives=4;var t=new window.webkitSpeechGrammarList;t.addFromString(N,1),this.recognition.grammars=t,this.recognition.onresult=this.recognitionResult,this.recognition.onnomatch=function(){console.log("No match found"),e.recognition.abort()},this.recognition.onend=function(){e.recognition.start()},this.recognition.start(),this.setState({started:!0})}}},{key:"componentDidUpdate",value:function(){var e=this,t=this.state.selected;if(t){this.timeout&&clearTimeout(this.timeout),this.title&&this.title.destroy(),this.paragraph&&this.paragraph.destroy();var n={strings:[t.info],typeSpeed:10,onComplete:function(){e.timeout=setTimeout(function(){e.title&&e.title.destroy(),e.paragraph&&e.paragraph.destroy(),e.setState({selected:null})},3e3)}},r={strings:[t.text],typeSpeed:5,onComplete:function(){e.paragraph=new y.a(e.ref.paragraph.current,n)}};this.title=new y.a(this.ref.title.current,r)}}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:b.a.container},o.a.createElement("h1",{className:b.a.title,ref:this.ref.title},(this.state.selected,"")),o.a.createElement("div",{className:b.a.spacer}),this.state.selected&&o.a.createElement("p",{className:b.a.para,ref:this.ref.paragraph})),o.a.createElement("video",{preload:"auto",loop:!0,muted:!0,autoPlay:!0,src:v.a,className:b.a.background}))}}])&&k(n.prototype,r),a&&k(n,a),function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");E(e.prototype,t&&t.prototype),t&&E(e,t)}(t,e),t}(r.Component),T=n(10),R=n(23),C=n.n(R),I=n(7),A=n.n(I);function L(e){return(L="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function F(e,t){return(F=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function D(e,t){return!t||"object"!==L(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function G(e){return(G=Object.getPrototypeOf||function(e){return e.__proto__})(e)}var V=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),D(this,G(t).apply(this,arguments))}var n,r,a;return n=t,(r=[{key:"render",value:function(){return o.a.createElement(T.b,null,o.a.createElement("div",{className:A.a.app},o.a.createElement(u.a,{path:"/panes",render:function(){return o.a.createElement(M,{className:C()(A.a.panel,A.a.first)},"Test Text 1")}}),o.a.createElement(u.a,{path:"/panes",render:function(){return o.a.createElement(M,{className:C()(A.a.panel,A.a.second)},"Test Text 2")}}),o.a.createElement(u.a,{path:"/panes",render:function(){return o.a.createElement(M,{className:C()(A.a.panel,A.a.third)},"Test Text 3")}})))}}])&&z(n.prototype,r),a&&z(n,a),function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");F(e.prototype,t&&t.prototype),t&&F(e,t)}(t,e),t}(r.Component),M=function(e){var t=e.className,n=e.children,r=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["className","children"]);return o.a.createElement(T.a,r,o.a.createElement("article",{className:t},n))},B=n(30),H=n.n(B),J=n(50),K=n.n(J),Q=n(6),U=n.n(Q);function Z(e){return(Z="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function W(e,t){return(W=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function X(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Y(e,t){return!t||"object"!==Z(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function q(e){return(q=Object.getPrototypeOf||function(e){return e.__proto__})(e)}var $=function(e){var t=e.children,n=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["children"]);return o.a.createElement("a",Object.assign({className:U.a.warp},n),t)},ee=function(e,t){return new Promise(function(n,r){e.onload=function(){K()(e).then(function(e){n(e)})},e.src=t})};function te(e){return(te="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ne(e,t){return(ne=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function re(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function oe(e,t){return!t||"object"!==te(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function ae(e){return(ae=Object.getPrototypeOf||function(e){return e.__proto__})(e)}var ie=[{path:"voice",name:"Voice",component:P},{path:"panes",name:"FLIP panes",component:V},{path:"flip-link",name:"FLIP link",component:function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return Y(r,(n=r=Y(this,(e=q(t)).call.apply(e,[this].concat(i))),r.canvas=o.a.createRef(),r.iframe=o.a.createRef(),r.links=[],r.state={opened:!1,href:"about:blank"},r.registerLink=function(e){return r.links.push(e),console.log(r.links),e},r.linkClick=function(e){e.preventDefault(),r.setState(function(e){return{opened:!e.opened}})},n))}var n,a,i;return n=t,(a=[{key:"componentDidMount",value:function(){var e=this.canvas.current,t=this.iframe.current;e.width=window.innerWidth,e.height=window.innerHeight;this.links.map(function(){var e,n=(e=H.a.mark(function e(n){return H.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ee(t,n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}),function(){var t=this,n=arguments;return new Promise(function(r,o){var a=e.apply(t,n);function i(e,t){try{var n=a[e](t),i=n.value}catch(e){return void o(e)}n.done?r(i):Promise.resolve(i).then(c,s)}function c(e){i("next",e)}function s(e){i("throw",e)}c()})});return function(e){return n.apply(this,arguments)}}())}},{key:"render",value:function(){return o.a.createElement(r.Fragment,null,o.a.createElement(T.b,{flipKey:this.state.opened,duration:500},o.a.createElement("div",{className:U.a.app},o.a.createElement("div",{className:U.a.central},o.a.createElement("h1",{className:U.a.heading},"Something really interesting"),o.a.createElement("p",{className:U.a.para},"Some kinda paragraph. It has a link in it here to"," ",this.state.opened?o.a.createElement(T.a,{flipId:"link"}):o.a.createElement(T.a,{flipId:"link"},o.a.createElement($,{href:this.registerLink("http://danproudfoot.co.uk"),onClick:this.linkClick},"Test Link")))))),o.a.createElement("div",{className:U.a.hidden},o.a.createElement("iframe",{src:null,title:"hidden",frameBorder:"0",className:U.a.iframe,ref:this.iframe}),o.a.createElement("canvas",{ref:this.canvas})))}}])&&X(n.prototype,a),i&&X(n,i),function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");W(e.prototype,t&&t.prototype),t&&W(e,t)}(t,e),t}(r.Component)}],ce=window.location.href.includes("localhost")?"":window.location.pathname,se=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),oe(this,ae(t).apply(this,arguments))}var n,r,a;return n=t,(r=[{key:"render",value:function(){return o.a.createElement(c.a,{hashType:"noslash",basename:ce},o.a.createElement("div",{className:p.a.app},ie.map(function(e){return o.a.createElement(u.a,{key:e.path,path:"/".concat(e.path),component:e.component})}),o.a.createElement(u.a,{exact:!0,path:"/",component:ue})))}}])&&re(n.prototype,r),a&&re(n,a),function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");ne(e.prototype,t&&t.prototype),t&&ne(e,t)}(t,e),t}(r.Component),ue=function(){return o.a.createElement("ul",{className:p.a.list},ie.map(function(e){return o.a.createElement("li",{key:e.path},o.a.createElement(s.a,{to:e.path},e.name))}))};n(59),n(57);i.a.render(o.a.createElement(se,null),document.getElementById("root"))},57:function(e,t,n){},6:function(e,t,n){e.exports={app:"app_app__1tFZB",central:"app_central__15XRb",external:"app_external__1G8N6",iframe:"app_iframe__1ORQH",hidden:"app_hidden__7c91m"}},7:function(e,t,n){e.exports={app:"app_app__1ikeP",central:"app_central__21Kp7",external:"app_external__2jU2a",iframe:"app_iframe__1FgkV",hidden:"app_hidden__1jGCs"}}},[[111,0,1]]]);
//# sourceMappingURL=main.da964312.chunk.js.map