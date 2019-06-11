(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{141:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(145),i=n(142),s=(n(153),n(7)),c=n.n(s),u=n(144),f=(n(33),{refresh:function(){},play:function(){},pause:function(){},stop:function(){}}),l=Object(u.b)({gameOfLife:function(t,e){void 0===t&&(t=f);var n=e.type,a=e.payload;switch(n){case"SET_GAME_OF_LIFE_STATE":return Object.assign({},t,a);default:return t}}}),p=Object(u.c)(l,{}),h=n(154),m=(n(160),function(t){function e(){return t.apply(this,arguments)||this}return c()(e,t),e.prototype.render=function(){var t=this.props.children;return r.a.createElement(d,null,r.a.createElement(h.Helmet,null,r.a.createElement("title",null,"Conway's Game of Life"),r.a.createElement("meta",{name:"description",content:"The implementation of Conway's game of life."})),t)},e}(r.a.Component)),d=i.a.div.withConfig({displayName:"layout__Wrapper",componentId:"nyrk3j-0"})([""]),v=m,w=function(t){var e=function(e){function n(){return e.apply(this,arguments)||this}return c()(n,e),n.prototype.render=function(){return r.a.createElement(o.a,{store:p},r.a.createElement(v,this.props,r.a.createElement(t,this.props)))},n}(r.a.Component);return e.displayName="Wrapper-of-"+(t.displayName||t.name),e};var E=function(t){var e=t.sketch,o=t.exposeSketchCustomProps,i=void 0===o?function(){}:o,s=Object(a.useRef)(null),c=null;return Object(a.useEffect)(function(){var t=n(166);c=new t(e,s.current)},[]),Object(a.useEffect)(function(){c&&c.setSketchProps&&c.setSketchProps(t)}),Object(a.useEffect)(function(){i(c.customProps)},[]),r.a.createElement("div",{ref:s})},y=(n(147),function(){function t(t,e,n,a){var r=this;this.setState=function(t){r.state=t},this.saveState=function(){r.previousState=r.state},this.x=e,this.y=n,this.w=a,this.state=Math.floor(t.random(2)),this.previousState=this.state}return t.prototype.display=function(t){t.stroke(0),t.strokeWeight(1),1===this.state?t.fill(50):t.fill(255),t.rect(this.x,this.y,this.w,this.w)},t}()),b=function(){function t(t){var e=this;this.w=20,this.columns=Math.floor(t.width/this.w),this.rows=Math.floor(t.height/this.w),this.board=Array(this.columns).fill().map(function(){return Array(e.rows).fill()}),this.init(t)}var e=t.prototype;return e.init=function(t){var e=this;this.board=this.board.map(function(n,a){return n.map(function(n,r){var o=new y(t,a*e.w,r*e.w,e.w);return 0!==a&&a!==e.columns-1&&0!==r&&r!==e.rows-1||o.setState(0),o})})},e.refresh=function(t){var e=this;this.board.forEach(function(n,a){n.forEach(function(n,r){0===a||a===e.columns-1||0===r||r===e.rows-1?n.setState(0):n.setState(Math.floor(t.random(2)))})})},e.clear=function(){this.board.forEach(function(t,e){return t.forEach(function(t,e){return t.setState(0)})})},e.generate=function(){var t=this;this.board.forEach(function(t){return t.forEach(function(t){return t.saveState()})}),this.board.forEach(function(e,n){e.forEach(function(e,a){if(n>0&&n<t.columns-1&&a>0&&a<t.rows-1){for(var r=0,o=-1;o<=1;o++)for(var i=-1;i<=1;i++)r+=t.board[n+o][a+i].previousState;r-=e.previousState,1===e.previousState&&r<2?e.setState(0):1===e.previousState&&r>3?e.setState(0):0===e.previousState&&3===r&&e.setState(1)}})})},e.display=function(t){this.board.forEach(function(e){return e.forEach(function(e){return e.display(t)})})},t}();function S(t){var e;t.customProps={},t.customProps.refresh=function(){e.refresh(t),e.display(t)},t.customProps.play=function(){t.loop()},t.customProps.pause=function(){t.noLoop()},t.customProps.stop=function(){t.noLoop(),e.clear(),e.display(t)},t.setup=function(){t.createCanvas(t.windowWidth,t.windowHeight).mouseClicked(function(){var n=Math.floor(t.mouseX/e.w),a=Math.floor(t.mouseY/e.w),r=e.board[n][a];1===r.state?r.setState(0):0===r.state&&r.setState(1),e.display(t)}),t.background(255),e=new b(t)},t.draw=function(){e.generate(),e.display(t)},t.windowResized=function(){t.resizeCanvas(t.windowWidth,t.windowHeight)}}var C=n(168),O=function(t){return r.a.createElement(C.c,t)},g=function(t){return r.a.createElement(C.b,t)},x=function(t){return r.a.createElement(C.a,t)},L=function(t){return r.a.createElement(C.d,t)};var k=i.a.div.withConfig({displayName:"round-button__Wrapper",componentId:"sc-6jgl9b-0"})(["width:30px;height:30px;border-radius:50%;background:#ccc;display:flex;justify-content:center;align-items:center;",""],function(t){return t.extraCss}),_=function(t){var e=t.extraCss,n=void 0===e?"":e,a=t.onClick,o=void 0===a?function(){}:a,i=t.children;return r.a.createElement(k,{extraCss:n,onClick:o},i)};var j=i.a.div.withConfig({displayName:"control-panel__Wrapper",componentId:"sc-161y226-0"})(["display:flex;align-items:center;",""],function(t){return t.extraCss}),G=Object(o.b)(function(t,e){return{refreshGameOfLife:t.gameOfLife.refresh,playGameOfLife:t.gameOfLife.play,pauseGameOfLife:t.gameOfLife.pause,stopGameOfLife:t.gameOfLife.stop}},null)(function(t){var e=t.extraCss,n=t.refreshGameOfLife,o=t.playGameOfLife,i=t.pauseGameOfLife,s=t.stopGameOfLife,c=Object(a.useState)(!0),u=c[0],f=c[1];return r.a.createElement(j,{extraCss:e},r.a.createElement(_,{onClick:n},r.a.createElement(O,{size:20})),r.a.createElement(_,{extraCss:"margin-left: 5px;",onClick:function(){u?i():o(),f(!u)}},u?r.a.createElement(x,{size:20}):r.a.createElement(g,{size:20})),r.a.createElement(_,{extraCss:"margin-left: 5px;",onClick:function(){s(),f(!1)}},r.a.createElement(L,{size:20})))});var P=i.a.div.withConfig({displayName:"pages__Wrapper",componentId:"sc-8aqjb-0"})([""]);e.default=w(Object(o.b)(null,function(t){return{setGameOfLifeState:function(e){t({type:"SET_GAME_OF_LIFE_STATE",payload:e})}}})(function(t){var e=t.setGameOfLifeState;return r.a.createElement(P,null,r.a.createElement(G,{extraCss:"position: absolute; top: 10px; left: 15px;"}),r.a.createElement(E,{sketch:S,exposeSketchCustomProps:function(t){e(t)}}))}))}}]);
//# sourceMappingURL=component---src-pages-index-js-e3e9fbb545cafd34aa4d.js.map