(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-871f18b4"],{"0093":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"fade"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.shelfTitleVisible,expression:"shelfTitleVisible"}],staticClass:"shelf-title",class:{"hide-shadow":t.ifHideShadow}},[i("div",{staticClass:"shelf-menu-wepper"},[1===t.currentType?i("div",{staticClass:"clear-cache",on:{click:function(e){return e.stopPropagation(),t.clearCache(e)}}},[t._v(t._s(t.$t("shelf.clearCache")))]):t.isEditMode?i("div",{staticClass:"modify-group",on:{click:t.modifyGroupName}},[i("span",{staticClass:"modify-group-text"},[t._v(t._s(t.$t("shelf.editGroup")))])]):i("div",{staticClass:"back",on:{click:function(e){return e.stopPropagation(),t.back(e)}}},[i("span",{staticClass:"icon-zuo"})]),i("div",{staticClass:"title-wepper"},[i("div",{staticClass:"title"},[t._v(t._s(t.title))]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isEditMode,expression:"isEditMode"}],staticClass:"have-selected-book"},[t._v(t._s(t.selectedBookState))])]),0===t.shelfCategory.length||t.shelfCategory.itemList.length?i("div",{staticClass:"edit",on:{click:function(e){return e.stopPropagation(),t.onEditClick(e)}}},[t._v(t._s(t.isEditMode?t.$t("shelf.cancel"):t.$t("shelf.edit")))]):i("div",{staticClass:"edit-modify-group",on:{click:t.modifyGroupName}},[i("span",{staticClass:"modify-group-text"},[t._v(t._s(t.$t("shelf.editGroup")))])])])])])},o=[],r=(i("fc13"),i("9b5f"),i("e3b5"),i("ac0d")),s=i("e8ec"),a=i("101f"),c={mixins:[r["c"]],data:function(){var t=this;return{modifyGroupPopup:"",ifHideShadow:!0,modifyGroupNameBtns:[{text:this.$t("shelf.editGroupName"),type:"",click:function(){t.modifyGroupPopup.hide();var e=t.dialog({showNewGroup:!0});e.show()}},{text:this.$t("shelf.deleteGroup"),type:"danger",click:function(){t.whetherDeleteGroup()}},{text:this.$t("shelf.cancel"),type:"",click:function(){t.modifyGroupPopup.hide()}}],deleteGroupBtns:[{text:this.$t("shelf.confirm"),type:"danger",click:function(){t.deleteGroup()}},{text:this.$t("shelf.cancel"),type:"",click:function(){t.modifyGroupPopup.hide()}}]}},computed:{title:function(){return 1===this.currentType?this.$t("shelf.title"):this.shelfCategory.title},selectedBookState:function(){var t=this.shelfSelected?this.shelfSelected.length:0;return 0===t?this.$t("shelf.selectBook"):1===t?this.$t("shelf.haveSelectedBook").replace("$1",1):this.$t("shelf.haveSelectedBooks").replace("$1",t)}},methods:{onComplete:function(){var t=this;this.modifyGroupPopup.hide(),this.setShelfList(this.shelfList.filter((function(e){return e.id!==t.shelfCategory.id}))).then((function(){Object(s["l"])(t.shelfList),t.back()}))},deleteGroup:function(){this.moveOutFromGroup(this.shelfCategory.itemList,this.onComplete)},whetherDeleteGroup:function(){var t=this;this.modifyGroupPopup.hide(),setTimeout((function(){t.modifyGroupPopup=t.popup({title:t.$t("shelf.deleteGroupTitle"),btn:t.deleteGroupBtns}),t.modifyGroupPopup.show()}),200)},modifyGroupName:function(){this.modifyGroupPopup=this.popup({btn:this.modifyGroupNameBtns}),this.modifyGroupPopup.show()},back:function(){this.$router.go(-1),this.setIsEditMode(!1)},clearCache:function(){this.setIsEditMode(!1),Object(s["a"])(),Object(a["a"])(),this.setShelfList([]),this.setShelfSelected([]),this.getShelfList(),this.simpleToast(this.$t("shelf.clearCacheSuccess"))},onEditClick:function(){this.setShelfSelected([]),this.setIsEditMode(!this.isEditMode)}},watch:{offsetY:function(t){this.ifHideShadow=!(t>0)}}},l=c,h=(i("3b4b"),i("5d22")),u=Object(h["a"])(l,n,o,!1,null,"ae36fe68",null);e["a"]=u.exports},"23a5":function(t,e,i){},"24d4":function(t,e,i){},"3b4b":function(t,e,i){"use strict";i("23a5")},4108:function(t,e,i){},"432c":function(t,e,i){"use strict";i("7fff")},6509:function(t,e,i){"use strict";i("24d4")},6701:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"scrollWrapper",staticClass:"scroll-wrapper",class:{"no-scroll":t.ifNoScroll},on:{"&scroll":function(e){return t.handleScroll(e)}}},[t._t("default")],2)},o=[],r=(i("24a8"),i("fa7d")),s={props:{top:{type:Number,default:0},bottom:{type:Number,default:0},ifNoScroll:{type:Boolean,default:!1}},methods:{handleScroll:function(t){var e=t.target.scrollTop||window.pageYOffset||document.body.scrollTop;this.$emit("onScroll",e)},scrollTo:function(t,e){this.$refs.scrollWrapper.scrollTo(t,e)},refresh:function(){this.$refs.scrollWrapper&&(this.$refs.scrollWrapper.style.height=window.innerHeight-Object(r["b"])(this.top)-Object(r["b"])(this.bottom)+"px")}},mounted:function(){this.refresh()}},a=s,c=(i("6509"),i("5d22")),l=Object(c["a"])(a,n,o,!1,null,"cc99c854",null);e["a"]=l.exports},"6a61":function(t,e,i){var n=function(t){"use strict";var e,i=Object.prototype,n=i.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},r=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag";function c(t,e,i){return Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(G){c=function(t,e,i){return t[e]=i}}function l(t,e,i,n){var o=e&&e.prototype instanceof m?e:m,r=Object.create(o.prototype),s=new P(n||[]);return r._invoke=$(t,i,s),r}function h(t,e,i){try{return{type:"normal",arg:t.call(e,i)}}catch(G){return{type:"throw",arg:G}}}t.wrap=l;var u="suspendedStart",f="suspendedYield",d="executing",p="completed",v={};function m(){}function y(){}function w(){}var b={};b[r]=function(){return this};var g=Object.getPrototypeOf,k=g&&g(g(O([])));k&&k!==i&&n.call(k,r)&&(b=k);var x=w.prototype=m.prototype=Object.create(b);function S(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function C(t,e){function i(o,r,s,a){var c=h(t[o],t,r);if("throw"!==c.type){var l=c.arg,u=l.value;return u&&"object"===typeof u&&n.call(u,"__await")?e.resolve(u.__await).then((function(t){i("next",t,s,a)}),(function(t){i("throw",t,s,a)})):e.resolve(u).then((function(t){l.value=t,s(l)}),(function(t){return i("throw",t,s,a)}))}a(c.arg)}var o;function r(t,n){function r(){return new e((function(e,o){i(t,n,e,o)}))}return o=o?o.then(r,r):r()}this._invoke=r}function $(t,e,i){var n=u;return function(o,r){if(n===d)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw r;return j()}i.method=o,i.arg=r;while(1){var s=i.delegate;if(s){var a=_(s,i);if(a){if(a===v)continue;return a}}if("next"===i.method)i.sent=i._sent=i.arg;else if("throw"===i.method){if(n===u)throw n=p,i.arg;i.dispatchException(i.arg)}else"return"===i.method&&i.abrupt("return",i.arg);n=d;var c=h(t,e,i);if("normal"===c.type){if(n=i.done?p:f,c.arg===v)continue;return{value:c.arg,done:i.done}}"throw"===c.type&&(n=p,i.method="throw",i.arg=c.arg)}}}function _(t,i){var n=t.iterator[i.method];if(n===e){if(i.delegate=null,"throw"===i.method){if(t.iterator["return"]&&(i.method="return",i.arg=e,_(t,i),"throw"===i.method))return v;i.method="throw",i.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=h(n,t.iterator,i.arg);if("throw"===o.type)return i.method="throw",i.arg=o.arg,i.delegate=null,v;var r=o.arg;return r?r.done?(i[t.resultName]=r.value,i.next=t.nextLoc,"return"!==i.method&&(i.method="next",i.arg=e),i.delegate=null,v):r:(i.method="throw",i.arg=new TypeError("iterator result is not an object"),i.delegate=null,v)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function O(t){if(t){var i=t[r];if(i)return i.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,s=function i(){while(++o<t.length)if(n.call(t,o))return i.value=t[o],i.done=!1,i;return i.value=e,i.done=!0,i};return s.next=s}}return{next:j}}function j(){return{value:e,done:!0}}return y.prototype=x.constructor=w,w.constructor=y,y.displayName=c(w,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,c(t,a,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},S(C.prototype),C.prototype[s]=function(){return this},t.AsyncIterator=C,t.async=function(e,i,n,o,r){void 0===r&&(r=Promise);var s=new C(l(e,i,n,o),r);return t.isGeneratorFunction(i)?s:s.next().then((function(t){return t.done?t.value:s.next()}))},S(x),c(x,a,"Generator"),x[r]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var i in t)e.push(i);return e.reverse(),function i(){while(e.length){var n=e.pop();if(n in t)return i.value=n,i.done=!1,i}return i.done=!0,i}},t.values=O,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(L),!t)for(var i in this)"t"===i.charAt(0)&&n.call(this,i)&&!isNaN(+i.slice(1))&&(this[i]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var i=this;function o(n,o){return a.type="throw",a.arg=t,i.next=n,o&&(i.method="next",i.arg=e),!!o}for(var r=this.tryEntries.length-1;r>=0;--r){var s=this.tryEntries[r],a=s.completion;if("root"===s.tryLoc)return o("end");if(s.tryLoc<=this.prev){var c=n.call(s,"catchLoc"),l=n.call(s,"finallyLoc");if(c&&l){if(this.prev<s.catchLoc)return o(s.catchLoc,!0);if(this.prev<s.finallyLoc)return o(s.finallyLoc)}else if(c){if(this.prev<s.catchLoc)return o(s.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return o(s.finallyLoc)}}}},abrupt:function(t,e){for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var r=o;break}}r&&("break"===t||"continue"===t)&&r.tryLoc<=e&&e<=r.finallyLoc&&(r=null);var s=r?r.completion:{};return s.type=t,s.arg=e,r?(this.method="next",this.next=r.finallyLoc,v):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.finallyLoc===t)return this.complete(i.completion,i.afterLoc),L(i),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.tryLoc===t){var n=i.completion;if("throw"===n.type){var o=n.arg;L(i)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,i,n){return this.delegate={iterator:O(t),resultName:i,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},"6bee":function(t,e,i){},"76c9":function(t,e,i){"use strict";i("af0d")},"7fff":function(t,e,i){},"8adc":function(t,e,i){},"96ce":function(t,e,i){"use strict";i("4108")},9895:function(t,e,i){"use strict";i("8adc")},af0d:function(t,e,i){},b1a9:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"shelf-list",style:{top:t.shelfListTop}},[i("transition-group",{attrs:{name:"list",tag:"div",id:"shelf-list"}},t._l(t.data,(function(e){return i("div",{key:e.id,staticClass:"shelf-list-item-wrapper",on:{click:function(i){return t.onItemClick(e)}}},[i("shelf-item",{style:{height:t.itemHeight},attrs:{data:e}}),i("div",{staticClass:"shelf-list-title-wrapper"},[i("span",{staticClass:"shelf-list-title title-small"},[t._v(t._s(e.title))])]),i("div",{class:{"shelf-list-item-mask":t.isEditMode},on:{click:function(i){return i.stopPropagation(),t.onMaskClick(e)}}})],1)})),0)],1)},o=[],r=(i("24a8"),i("e3b5"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"shelf-item",class:{"shelf-item-shadow":3!=t.data.type}},[i(t.item,{tag:"component",attrs:{data:t.data}}),i("span",{staticClass:"icon-uniE917",class:{"selected-book":t.selectBook,"start-selected-book":!(t.isEditMode&&1===t.data.type)}})],1)}),s=[],a=i("ac0d"),c=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},l=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"shelf-item-add"},[i("span",{staticClass:"icon-add"})])}],h={},u=h,f=(i("96ce"),i("5d22")),d=Object(f["a"])(u,c,l,!1,null,"938012ea",null),p=d.exports,v=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"shelf-item-category"},[t.data.itemList.length>0?i("div",{staticClass:"shelf-item-category-list"},t._l(t.data.itemList,(function(t,e){return i("div",{key:e,staticClass:"shelf-item-category-item"},[i("img",{staticClass:"shelf-item-category-img",attrs:{src:t.cover,alt:""}})])})),0):i("div",{staticClass:"shelf-item-category-bg"},[i("span",{staticClass:"icon-book"})])])},m=[],y={props:{data:Object}},w=y,b=(i("ed37"),Object(f["a"])(w,v,m,!1,null,"6c2fabef",null)),g=b.exports,k=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"shelf-item-book"},[i("img",{staticClass:"shelf-item-book-cover",attrs:{src:t.data.cover}}),i("div",{directives:[{name:"show",rawName:"v-show",value:t.data.private,expression:"data.private"}],staticClass:"private-wrapper"}),i("div",{directives:[{name:"show",rawName:"v-show",value:t.data.private,expression:"data.private"}],staticClass:"private-icon-wrapper"},[i("span",{staticClass:"icon-private"})])])},x=[],S={props:{data:Object}},C=S,$=(i("432c"),Object(f["a"])(C,k,x,!1,null,"63859262",null)),_=$.exports,E={mixins:[a["c"]],props:{data:Object},computed:{item:function(){return 1===this.data.type?this.book:2===this.data.type?this.category:this.add},selectBook:function(){var t=this;return this.shelfSelected.some((function(e){return e===t.data}))}},data:function(){return{book:_,category:g,add:p}}},L=E,P=(i("e6c4"),Object(f["a"])(L,r,s,!1,null,"d7c6bf8c",null)),O=P.exports,j=i("fa7d"),G=i("da6f"),T={mixins:[a["c"]],props:{top:{type:Number,default:84},data:{type:Array}},components:{ShelfItem:O},computed:{shelfListTop:function(){return Object(j["a"])(this.top)+"rem"},itemHeight:function(){return(window.innerWidth-Object(j["b"])(120))/3/250*350+"px"}},methods:{onMaskClick:function(t){if(1===t.type){if(this.shelfSelected.some((function(e){return e===t}))){var e=this.shelfSelected;return e=e.filter((function(e){return e!==t})),this.setShelfSelected(e),""}var i=this.shelfSelected;i.push(t),this.setShelfSelected(i)}},onItemClick:function(t){1===t.type?this.showBookDetail(t):2===t.type?(this.setShelfCategory(t),this.setCurrentType(2),this.$router.push({path:"/store/category",query:{title:t.title}})):Object(G["i"])(this)}}},N=T,B=(i("76c9"),Object(f["a"])(N,n,o,!1,null,"6cf044b3",null));e["a"]=B.exports},cd7e:function(t,e,i){},e6c4:function(t,e,i){"use strict";i("cd7e")},ed37:function(t,e,i){"use strict";i("6bee")},f1f4:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"show",rawName:"v-show",value:t.isEditMode,expression:"isEditMode"}],staticClass:"shelf-footer"},t._l(t.tabs,(function(e){return i("div",{key:e.index,staticClass:"shelf-footer-tab-wrapper",on:{click:function(i){return t.onTabClick(e)}}},[i("div",{staticClass:"shelf-footer-tab",class:{"is-selected":t.isSelected}},[i("div",{staticClass:"tab-icon",class:{"icon-private":1===e.index&&!t.isPrivate,"icon-private-see":1===e.index&&t.isPrivate,"icon-download-remove":2===e.index&&t.isDownload,"icon-download":2===e.index&&!t.isDownload,"icon-move":3===e.index,"icon-shelf":4===e.index}}),i("div",{staticClass:"tab-text",class:{"remove-text":4===e.index}},[t._v(t._s(t.label(e)))])])])})),0)},o=[];i("27ae");function r(t,e,i,n,o,r,s){try{var a=t[r](s),c=a.value}catch(l){return void i(l)}a.done?e(c):Promise.resolve(c).then(n,o)}function s(t){return function(){var e=this,i=arguments;return new Promise((function(n,o){var s=t.apply(e,i);function a(t){r(s,n,o,a,c,"next",t)}function c(t){r(s,n,o,a,c,"throw",t)}a(void 0)}))}}i("fc13"),i("9b5f"),i("16ca"),i("591f"),i("feb3"),i("3337"),i("3bae"),i("e3b5"),i("6a61");var a=i("e8ec"),c=i("ac0d"),l=i("73f5"),h=i("101f"),u={mixins:[c["c"]],computed:{isPrivate:function(){return!!this.shelfSelected&&this.shelfSelected.every((function(t){return t.private}))},isSelected:function(){return this.shelfSelected&&this.shelfSelected.length>0},tabs:function(){return[{label:this.$t("shelf.private"),label2:this.$t("shelf.noPrivate"),index:1},{label:this.$t("shelf.download"),label2:this.$t("shelf.delete"),index:2},{label:this.$t("shelf.move"),index:3},{label:this.$t("shelf.remove"),index:4}]},isDownload:function(){return!!this.shelfSelected&&this.shelfSelected.every((function(t){return t.cache}))}},data:function(){return{popupMenu:null}},methods:{downloadSelectedBook:function(){var t=this;return s(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:i=0;case 1:if(!(i<t.shelfSelected.length)){e.next=8;break}return e.next=4,t.downloadBook(t.shelfSelected[i]).then((function(t){t.cache=!0}));case 4:Object(a["l"])(t.shelfList);case 5:i++,e.next=1;break;case 8:case"end":return e.stop()}}),e)})))()},downloadBook:function(t){var e=this,i="",n=this.toast({text:i});return n.continueShow(),new Promise((function(o,r){Object(l["b"])(t,(function(){n.remove(),o(t)}),r,(function(o){var r=Math.floor(o.loaded/o.total*100)+"%";i=e.$t("shelf.progressDownload").replace("$1","".concat(t.fileName,".epub(").concat(r,")")),n.updateText(i)}))}))},onComplete:function(){this.hidePopup(),this.setIsEditMode(!1),Object(a["l"])(this.shelfList)},removeSelectedBook:function(){var t=this;Promise.all(this.shelfSelected.map((function(e){return t.removeBook(e)}))).then((function(e){e.map((function(t){t.cache=!1})),Object(a["l"])(t.shelfList),t.simpleToast(t.$t("shelf.removeDownloadSuccess"))}))},removeBook:function(t){return new Promise((function(e,i){Object(a["k"])("".concat(t.categoryText,"/").concat(t.fileName,"-info")),Object(h["c"])("".concat(t.fileName)),e(t)}))},hidePopup:function(){this.popupMenu.hide()},setPrivate:function(){var t;t=!this.isPrivate,this.shelfSelected.forEach((function(e){e.private=t})),this.onComplete(),t?this.simpleToast(this.$t("shelf.setPrivateSuccess")):this.simpleToast(this.$t("shelf.closePrivateSuccess"))},setDownload:function(){var t=this;return s(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.onComplete(),!t.isDownload){e.next=5;break}t.removeSelectedBook(),e.next=8;break;case 5:return e.next=7,t.downloadSelectedBook();case 7:t.simpleToast(t.$t("shelf.setDownloadSuccess"));case 8:case"end":return e.stop()}}),e)})))()},removeSelected:function(){var t=this;this.shelfSelected.forEach((function(e){t.setShelfList(t.shelfList.filter((function(t){return t.itemList?(t.itemList=t.itemList.filter((function(t){return t.fileName!==e.fileName})),t):t})))})),this.setShelfSelected([]),this.onComplete()},label:function(t){switch(t.index){case 1:return this.isPrivate?t.label2:t.label;case 2:return this.isDownload?t.label2:t.label;default:return t.label}},onTabClick:function(t){if(!this.isSelected)return"";switch(t.index){case 1:this.showPrivate();break;case 2:this.showDownload();break;case 3:this.dialog().show();break;case 4:this.showRemove();break;default:break}},showPrivate:function(){var t=this;this.popupMenu=this.popup({title:this.isPrivate?this.$t("shelf.closePrivateTitle"):this.$t("shelf.setPrivateTitle"),btn:[{text:this.isPrivate?this.$t("shelf.close"):this.$t("shelf.open"),click:function(){t.setPrivate()}},{text:this.$t("shelf.cancel"),click:function(){t.hidePopup()}}]}).show()},showDownload:function(){var t=this;this.popupMenu=this.popup({title:this.isDownload?this.$t("shelf.removeDownloadTitle"):this.$t("shelf.setDownloadTitle"),btn:[{text:this.isDownload?this.$t("shelf.delete"):this.$t("shelf.open"),click:function(){t.setDownload()}},{text:this.$t("shelf.cancel"),click:function(){t.hidePopup()}}]}).show()},showRemove:function(){var t,e=this;t=1===this.shelfSelected.length?this.$t("shelf.removeBookTitle").replace("$1","《".concat(this.shelfSelected[0].title,"》")):this.$t("shelf.removeBookTitle").replace("$1",this.$t("shelf.selectedBooks")),this.popupMenu=this.popup({title:t,btn:[{text:this.$t("shelf.removeBook"),type:"danger",click:function(){e.removeSelected()}},{text:this.$t("shelf.cancel"),click:function(){e.hidePopup()}}]}).show()}}},f=u,d=(i("9895"),i("5d22")),p=Object(d["a"])(f,n,o,!1,null,"5d753366",null);e["a"]=p.exports}}]);
//# sourceMappingURL=chunk-871f18b4.56b0ce0a.js.map