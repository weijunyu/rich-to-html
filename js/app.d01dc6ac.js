(function(t){function n(n){for(var i,o,l=n[0],c=n[1],r=n[2],b=0,d=[];b<l.length;b++)o=l[b],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&d.push(s[o][0]),s[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(n);while(d.length)d.shift()();return a.push.apply(a,r||[]),e()}function e(){for(var t,n=0;n<a.length;n++){for(var e=a[n],i=!0,l=1;l<e.length;l++){var c=e[l];0!==s[c]&&(i=!1)}i&&(a.splice(n--,1),t=o(o.s=e[0]))}return t}var i={},s={app:0},a=[];function o(n){if(i[n])return i[n].exports;var e=i[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=i,o.d=function(t,n,e){o.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,n){if(1&n&&(t=o(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)o.d(e,i,function(n){return t[n]}.bind(null,i));return e},o.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(n,"a",n),n},o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},o.p="/rich-to-html/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=n,l=l.slice();for(var r=0;r<l.length;r++)n(l[r]);var u=c;a.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"0488":function(t,n,e){"use strict";var i=e("e159"),s=e.n(i);s.a},"56d7":function(t,n,e){"use strict";e.r(n);e("e260"),e("e6cf"),e("cca6"),e("a79d");var i=e("2b0e"),s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"app sgds-container content has-default-header-styles"},[e("div",{staticClass:"editor"},[e("editor-menu-bar",{attrs:{editor:t.editor},scopedSlots:t._u([{key:"default",fn:function(n){var i=n.commands,s=n.isActive;return[e("div",{staticClass:"menubar"},[e("button",{staticClass:"menubar__button",class:{"is-active":s.bold()},on:{click:i.bold}},[e("i",{staticClass:"fas fa-bold"})]),e("button",{staticClass:"menubar__button",class:{"is-active":s.italic()},on:{click:i.italic}},[e("i",{staticClass:"fas fa-italic"})]),e("button",{staticClass:"menubar__button",class:{"is-active":s.strike()},on:{click:i.strike}},[e("i",{staticClass:"fas fa-strikethrough"})]),e("button",{staticClass:"menubar__button",class:{"is-active":s.underline()},on:{click:i.underline}},[e("i",{staticClass:"fas fa-underline"})]),e("button",{staticClass:"menubar__button",class:{"is-active":s.code()},on:{click:i.code}},[e("i",{staticClass:"fas fa-code"})]),e("button",{staticClass:"menubar__button",class:{"is-active":s.paragraph()},on:{click:i.paragraph}},[e("i",{staticClass:"fas fa-paragraph"})]),e("button",{staticClass:"menubar__button",class:{"is-active":s.heading({level:1})},on:{click:function(t){return i.heading({level:1})}}},[t._v(" H1 ")]),e("button",{staticClass:"menubar__button",class:{"is-active":s.heading({level:2})},on:{click:function(t){return i.heading({level:2})}}},[t._v(" H2 ")]),e("button",{staticClass:"menubar__button",class:{"is-active":s.heading({level:3})},on:{click:function(t){return i.heading({level:3})}}},[t._v(" H3 ")]),e("button",{staticClass:"menubar__button",class:{"is-active":s.heading({level:4})},on:{click:function(t){return i.heading({level:4})}}},[t._v(" H4 ")]),e("button",{staticClass:"menubar__button",class:{"is-active":s.heading({level:5})},on:{click:function(t){return i.heading({level:5})}}},[t._v(" H5 ")]),e("button",{staticClass:"menubar__button",class:{"is-active":s.heading({level:6})},on:{click:function(t){return i.heading({level:6})}}},[t._v(" H6 ")]),e("button",{staticClass:"menubar__button",class:{"is-active":s.bullet_list()},on:{click:i.bullet_list}},[e("i",{staticClass:"fas fa-list-ul"})]),e("button",{staticClass:"menubar__button",class:{"is-active":s.ordered_list()},on:{click:i.ordered_list}},[e("i",{staticClass:"fas fa-list-ol"})]),e("button",{staticClass:"menubar__button",class:{"is-active":s.blockquote()},on:{click:i.blockquote}},[e("i",{staticClass:"fas fa-quote-right"})]),e("button",{staticClass:"menubar__button",class:{"is-active":s.code_block()},on:{click:i.code_block}},[e("i",{staticClass:"fas fa-code"}),t._v("(block) ")]),e("button",{staticClass:"menubar__button",on:{click:i.horizontal_rule}},[t._v(" -- ")]),e("button",{staticClass:"menubar__button",on:{click:i.undo}},[e("i",{staticClass:"fas fa-undo"})]),e("button",{staticClass:"menubar__button",on:{click:i.redo}},[e("i",{staticClass:"fas fa-redo"})]),e("button",{staticClass:"menubar__button",on:{click:t.clearContent}},[t._v(" Clear Content ")]),e("button",{staticClass:"menubar__button copy-html",on:{click:t.copyHtml}},[t._v(" Copy HTML ")])])]}}])}),e("editor-menu-bubble",{staticClass:"menububble",attrs:{editor:t.editor},on:{hide:t.hideLinkMenu},scopedSlots:t._u([{key:"default",fn:function(n){var i=n.commands,s=n.isActive,a=n.getMarkAttrs,o=n.menu;return[e("div",{staticClass:"menububble",class:{"is-active":o.isActive},style:"left: "+o.left+"px; bottom: "+o.bottom+"px;"},[t.linkMenuIsActive?e("form",{staticClass:"menububble__form",on:{submit:function(n){return n.preventDefault(),t.setLinkUrl(i.link,t.linkUrl)}}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.linkUrl,expression:"linkUrl"}],ref:"linkInput",staticClass:"menububble__input",attrs:{type:"text",placeholder:"https://"},domProps:{value:t.linkUrl},on:{keydown:function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"esc",27,n.key,["Esc","Escape"])?null:t.hideLinkMenu(n)},input:function(n){n.target.composing||(t.linkUrl=n.target.value)}}}),e("button",{staticClass:"menububble__button",attrs:{type:"button"},on:{click:function(n){return t.setLinkUrl(i.link,null)}}},[t._v(" OK ")])]):[e("button",{staticClass:"menububble__button",class:{"is-active":s.link()},on:{click:function(n){t.showLinkMenu(a("link"))}}},[e("span",[t._v(t._s(s.link()?"Update Link":"Add Link"))]),e("i",{staticClass:"fas fa-link"})])]],2)]}}])}),e("editor-content",{staticClass:"editor__content",attrs:{id:"editor__content",editor:t.editor}})],1),e("div",{staticClass:"export"},[e("h3",[t._v("HTML")]),e("pre",[e("code",[t._v(t._s(t.beautify(t.html)))])])])])},a=[],o=e("cd42"),l=e("f23d"),c=e("325b"),r=e.n(c),u=e("9a5d"),b=e.n(u),d=e("d952"),f={components:{EditorContent:o["b"],EditorMenuBar:o["c"],EditorMenuBubble:o["d"]},data:function(){var t=this;return{editor:new o["a"]({extensions:[new l["a"],new l["c"],new l["e"],new l["f"],new l["g"]({levels:[1,2,3,4,5,6]}),new l["i"],new l["l"],new l["m"],new l["o"],new l["p"],new l["k"],new l["b"],new l["d"],new l["j"],new l["n"],new l["q"],new l["h"]],content:"\n          <h2>\n            Export HTML or JSON\n          </h2>\n          <p>\n            You are able to export your data as <code>HTML</code> or <code>JSON</code>.\n          </p>\n        ",onUpdate:function(n){var e=n.getHTML;t.html=e()}}),html:"Update content to see changes",linkUrl:null,linkMenuIsActive:!1}},methods:{copyHtml:function(){var t=this;new window.ClipboardJS(".copy-html",{text:function(){return t.beautify(t.html)}})},beautify:function(t){return r.a.format(t,{parser:"html",plugins:[b.a]})},clearContent:function(){this.editor.clearContent(!0),this.editor.focus()},showLinkMenu:function(t){var n=this;this.linkUrl=t.href,this.linkMenuIsActive=!0,this.$nextTick((function(){n.$refs.linkInput.focus()}))},hideLinkMenu:function(){this.linkUrl=null,this.linkMenuIsActive=!1},setLinkUrl:function(t,n){t({href:n}),this.hideLinkMenu()}},mounted:function(){Object(d["a"])(".copy-html",{content:"Copied",interactive:!0,trigger:"click"})}},p=f,v=(e("0488"),e("2877")),_=Object(v["a"])(p,s,a,!1,null,"82d483ec",null),h=_.exports;e("52df");i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(h)}}).$mount("#app")},e159:function(t,n,e){}});
//# sourceMappingURL=app.d01dc6ac.js.map