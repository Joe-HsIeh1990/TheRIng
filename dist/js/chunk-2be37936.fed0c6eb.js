(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2be37936"],{"08d0":function(t,e,a){},1799:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{attrs:{"aria-label":"Page navigation example"}},[a("ul",{staticClass:"pagination mb-0"},[a("li",{staticClass:"page-item",class:{disabled:!t.pages.has_pre}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(e){return e.preventDefault(),t.getPages(t.pages.current_page-1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._l(t.pages.total_pages,(function(e){return a("li",{key:e,staticClass:"page-item",class:{active:t.pages.current_page===e},attrs:{pages:e}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.getPages(e)}}},[t._v(t._s(e))])])})),a("li",{staticClass:"page-item",class:{disabled:!t.pages.has_next}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(e){return e.preventDefault(),t.getPages(t.pages.current_page+1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)])},o=[],n={props:{pages:{type:Object,default:function(){}}},methods:{getPages:function(t){this.$emit("emitPages",t)}}},i=n,l=a("2877"),r=Object(l["a"])(i,s,o,!1,null,null,null);e["a"]=r.exports},6309:function(t,e,a){"use strict";var s=a("08d0"),o=a.n(s);o.a},a379:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),a("div",{staticClass:"text-right mt-4"},[a("button",{staticClass:"btn btn-primary",on:{click:function(e){return t.openModal(!0)}}},[t._v("建立新的優惠券")])]),a("table",{staticClass:"table mt-5 mb-6 table-responsive-lg"},[t._m(0),a("tbody",t._l(t.SortCoupons,(function(e){return a("tr",{key:e.id},[a("td",{staticClass:"text-nowrap"},[t._v(t._s(e.title))]),a("td",{staticClass:"text-nowrap"},[t._v(t._s(e.percent))]),a("td",{staticClass:"text-nowrap"},[a("span",{class:{"overdue mr-2":t.currentTime>e.due_date}},[t._v(t._s(t._f("timecurrency")(e.due_date)))]),t.currentTime>e.due_date?a("span",[t._v("已失效")]):t._e()]),a("td",{staticClass:"text-nowrap"},[1==e.is_enabled?a("span",{staticClass:"text-success"},[t._v("啟用")]):a("span",{staticClass:"text-danger"},[t._v("未啟用")])]),a("td",{staticClass:"text-nowrap"},[a("div",{staticClass:"btn-group",attrs:{role:"group","aria-label":"Basic example"}},[a("button",{staticClass:"btn btn-outline-primary btn-sm",on:{click:function(a){return t.openModal(!1,e)}}},[t._v("編輯")]),a("button",{staticClass:"btn btn-outline-primary btn-sm",on:{click:function(a){return t.delopenModal(e)}}},[t._v("刪除")])])])])})),0)]),a("div",{staticClass:"modal fade",attrs:{id:"CouponsModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-md",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[a("div",{staticClass:"modal-header bg-dark text-white"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t.isNew?a("span",[t._v("新增優惠券")]):a("span",[t._v("修改優惠券")])]),t._m(1)]),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"title"}},[t._v("標題")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.temCoupons.title,expression:"temCoupons.title"}],staticClass:"form-control",attrs:{type:"text",id:"title",placeholder:"請輸入標題"},domProps:{value:t.temCoupons.title},on:{input:function(e){e.target.composing||t.$set(t.temCoupons,"title",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"code"}},[t._v("優惠碼")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.temCoupons.code,expression:"temCoupons.code"}],staticClass:"form-control",attrs:{type:"text",id:"code",placeholder:"輸入優惠碼"},domProps:{value:t.temCoupons.code},on:{input:function(e){e.target.composing||t.$set(t.temCoupons,"code",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"due_date"}},[t._v("到期日")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.temCoupons.due_date,expression:"temCoupons.due_date"}],staticClass:"form-control",attrs:{type:"text",id:"due_date",placeholder:"輸入到期日"},domProps:{value:t.temCoupons.due_date},on:{input:function(e){e.target.composing||t.$set(t.temCoupons,"due_date",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"percent"}},[t._v("折扣百分比")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.temCoupons.percent,expression:"temCoupons.percent"}],staticClass:"form-control",attrs:{type:"text",id:"percent",placeholder:"輸入折扣"},domProps:{value:t.temCoupons.percent},on:{input:function(e){e.target.composing||t.$set(t.temCoupons,"percent",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.temCoupons.is_enabled,expression:"temCoupons.is_enabled"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"is_enabled","true-value":1,"false-value":0},domProps:{checked:Array.isArray(t.temCoupons.is_enabled)?t._i(t.temCoupons.is_enabled,null)>-1:t._q(t.temCoupons.is_enabled,1)},on:{change:function(e){var a=t.temCoupons.is_enabled,s=e.target,o=s.checked?1:0;if(Array.isArray(a)){var n=null,i=t._i(a,n);s.checked?i<0&&t.$set(t.temCoupons,"is_enabled",a.concat([n])):i>-1&&t.$set(t.temCoupons,"is_enabled",a.slice(0,i).concat(a.slice(i+1)))}else t.$set(t.temCoupons,"is_enabled",o)}}}),a("label",{staticClass:"form-check-label",attrs:{for:"is_enabled"}},[t._v(" 是否啟用 ")])])])])])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.updateCoupons}},[t._v("確認優惠券")])])])])]),a("Pagination",{staticClass:"d-flex justify-content-center",attrs:{pages:t.pagination},on:{thePage:t.getCoupons}}),a("AdminDeleteModal",{attrs:{deleteName:t.temCoupons},on:{deletethis:t.deleteCoupons}})],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("th",[t._v("名稱")]),a("th",{staticClass:"text-nowrap"},[t._v("折扣百分比")]),a("th",[t._v("到期日")]),a("th",{staticClass:"text-nowrap",attrs:{width:"150"}},[t._v("是否啟用")]),a("th",{attrs:{width:"150"}},[t._v("編輯")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])}],n=(a("99af"),a("4160"),a("159b"),a("1157")),i=a.n(n),l=a("1799"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"modal fade",attrs:{id:"deleteModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[a("div",{staticClass:"modal-header bg-danger text-white"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t.deleteName.price?a("span",[t._v("刪除商品")]):t._e(),t.deleteName.percent?a("span",[t._v("刪除優惠券")]):t._e()]),t._m(0)]),a("div",{staticClass:"modal-body"},[t._v(" 是否刪除 "),a("strong",{staticClass:"text-danger"},[t._v(t._s(t.deleteName.title)+" ")]),t._v(" "),t.deleteName.price?a("span",[t._v("商品")]):t._e(),t.deleteName.percent?a("span",[t._v("優惠券")]):t._e(),t._v("(刪除後將無法恢復)。 ")]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),a("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.deleteit}},[t._v("確認刪除")])])])])])])},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])}],d={props:{deleteName:{type:Object,default:function(){}}},methods:{deleteit:function(){this.$emit("deletethis")}}},u=d,p=a("2877"),m=Object(p["a"])(u,r,c,!1,null,null,null),v=m.exports,C={components:{Pagination:l["a"],AdminDeleteModal:v},data:function(){return{Coupons:[],pagination:{},temCoupons:{},isNew:!1,isLoading:!1}},methods:{getCoupons:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a="".concat("https://vue-course-api.hexschool.io/","api/").concat("maker","/admin/coupons?page=").concat(e),s=this;s.isLoading=!0,s.$http.get(a).then((function(e){s.isLoading=!1,s.Coupons=e.data.coupons,s.pagination=e.data.pagination,s.Coupons.forEach((function(e){t.currentTime>e.due_date&&(e.is_enabled=0)}))}))},openModal:function(t,e){t?(this.temCoupons={},this.isNew=!0):(this.temCoupons=Object.assign({},e),this.isNew=!1),i()("#CouponsModal").modal("show")},updateCoupons:function(){var t="".concat("https://vue-course-api.hexschool.io/","api/").concat("maker","/admin/coupon"),e="post",a=this;a.isNew||(t="".concat("https://vue-course-api.hexschool.io/","api/").concat("maker","/admin/coupon/").concat(a.temCoupons.id),console.log(t),e="put"),this.$http[e](t,{data:a.temCoupons}).then((function(t){t.data.success?(i()("#CouponsModal").modal("hide"),a.getCoupons()):a.getCoupons()}))},delopenModal:function(t){this.temCoupons=Object.assign({},t),i()("#deleteModal").modal("show")},deleteCoupons:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io/","api/").concat("maker","/admin/coupon/").concat(t.temCoupons.id);this.$http.delete(e).then((function(e){e.data.success?(i()("#deleteModal").modal("hide"),t.getCoupons()):t.getCoupons()}))}},computed:{currentTime:function(){return(new Date).valueOf()/1e3},SortCoupons:function(){var t=this,e=[];return t.Coupons.length&&(e=t.Coupons.sort((function(t,e){return t.due_date<e.due_date?1:-1}))),e}},created:function(){this.getCoupons()}},_=C,b=(a("6309"),Object(p["a"])(_,s,o,!1,null,null,null));e["default"]=b.exports}}]);
//# sourceMappingURL=chunk-2be37936.fed0c6eb.js.map