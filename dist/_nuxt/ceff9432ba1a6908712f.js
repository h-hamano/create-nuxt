(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{192:function(t,e,n){var content=n(205);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("6bf9bc58",content,!0,{sourceMap:!1})},204:function(t,e,n){"use strict";var o=n(192);n.n(o).a},205:function(t,e,n){(t.exports=n(15)(!1)).push([t.i,".archiveTitle{font-size:26px;font-weight:700;text-align:center;margin-bottom:60px}.newsButton{margin-top:60px}",""])},220:function(t,e,n){"use strict";n.r(e);var o={layout:"post",computed:{posts:function(){return this.$store.getters["post/getPosts"]}}},r=(n(204),n(3)),component=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"contents"},[n("div",[n("h1",{staticClass:"archiveTitle"},[t._v("\n      投稿一覧ページ\n    ")]),t._v(" "),n("div",{staticClass:"c-postList"},t._l(t.posts,function(e){return n("div",{staticClass:"c-postList_node"},[n("nuxt-link",{key:""+e.id,attrs:{to:"/post/"+e.id}},[n("img",{attrs:{src:e._embedded["wp:featuredmedia"][0].source_url,alt:e.title.rendered}}),t._v(" "),n("p",[t._v(t._s(e.title.rendered))])])],1)}),0),t._v(" "),n("nuxt-link",{staticClass:"c-button newsButton",attrs:{to:"/"}},[t._v("トップページ")])],1)])},[],!1,null,null,null);e.default=component.exports}}]);