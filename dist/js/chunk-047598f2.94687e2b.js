(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-047598f2"],{"0650":function(t,e,s){},1432:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"detail-title-wrapper",class:{"hide-shadow":t.ifHideShadow}},[s("div",{staticClass:"title-left-wrapper",on:{click:t.back}},[s("span",{staticClass:"icon-zuo"})]),s("div",{staticClass:"title-right-wrapper"},[t.showShelf?s("span",{staticClass:"icon-book icon",on:{click:t.showBookShelf}}):s("span",{staticClass:"icon-share"})]),t.title?s("div",{staticClass:"title-text"},[t._v(" "+t._s(t.title)+" ")]):t._e()])},r=[],o={props:{title:String,showShelf:{type:Boolean,default:!0}},data:function(){return{ifHideShadow:!0}},methods:{showBookShelf:function(){this.$router.push("/store/shelf")},showShadow:function(){this.ifHideShadow=!1},hideShadow:function(){this.ifHideShadow=!0},back:function(){this.$emit("back")}}},c=o,a=(s("3c19"),s("5d22")),l=Object(a["a"])(c,i,r,!1,null,"95cefc66",null);e["a"]=l.exports},"24d4":function(t,e,s){},"3c19":function(t,e,s){"use strict";s("a4d0")},6509:function(t,e,s){"use strict";s("24d4")},6701:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"scrollWrapper",staticClass:"scroll-wrapper",class:{"no-scroll":t.ifNoScroll},on:{"&scroll":function(e){return t.handleScroll(e)}}},[t._t("default")],2)},r=[],o=(s("24a8"),s("fa7d")),c={props:{top:{type:Number,default:0},bottom:{type:Number,default:0},ifNoScroll:{type:Boolean,default:!1}},methods:{handleScroll:function(t){var e=t.target.scrollTop||window.pageYOffset||document.body.scrollTop;this.$emit("onScroll",e)},scrollTo:function(t,e){this.$refs.scrollWrapper.scrollTo(t,e)},refresh:function(){this.$refs.scrollWrapper&&(this.$refs.scrollWrapper.style.height=window.innerHeight-Object(o["b"])(this.top)-Object(o["b"])(this.bottom)+"px")}},mounted:function(){this.refresh()}},a=c,l=(s("6509"),s("5d22")),n=Object(l["a"])(a,i,r,!1,null,"cc99c854",null);e["a"]=n.exports},a4d0:function(t,e,s){},bf02:function(t,e,s){"use strict";s("0650")},c470:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"cover-title-wrapper"},[s("div",{staticClass:"cover-title-left-wrapper"},[s("img",{staticClass:"cover-img",attrs:{src:t.cover}})]),s("div",{staticClass:"cover-title-right-wrapper"},[s("div",{staticClass:"detail-cover-title-wrapper"},[s("div",{staticClass:"cover-title-text"},[t._v(t._s(t.title))])]),s("div",{staticClass:"cover-author-wrapper"},[s("div",{staticClass:"cover-author-text"},[t._v(t._s(t.author))])]),s("div",{staticClass:"detail-cover-description-wrapper"},[s("div",{staticClass:"detail-cover-description-text"},[t._v(t._s(t.desc))])])])])},r=[],o={props:{cover:String,title:String,author:String,desc:String}},c=o,a=(s("bf02"),s("5d22")),l=Object(a["a"])(c,i,r,!1,null,"21df8ef4",null);e["a"]=l.exports},d447:function(t,e,s){"use strict";var i=s("bbee"),r=s("baa9"),o=s("7ce6"),c=s("2e38"),a="toString",l=RegExp.prototype,n=l[a],f=o((function(){return"/a/b"!=n.call({source:"a",flags:"b"})})),u=n.name!=a;(f||u)&&i(RegExp.prototype,a,(function(){var t=r(this),e=String(t.source),s=t.flags,i=String(void 0===s&&t instanceof RegExp&&!("flags"in l)?c.call(t):s);return"/"+e+"/"+i}),{unsafe:!0})}}]);
//# sourceMappingURL=chunk-047598f2.94687e2b.js.map