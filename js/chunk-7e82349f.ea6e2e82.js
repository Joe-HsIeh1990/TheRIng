(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e82349f"],{1799:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{attrs:{"aria-label":"Page navigation example"}},[a("ul",{staticClass:"pagination mb-0"},[a("li",{staticClass:"page-item",class:{disabled:!t.pages.has_pre}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(e){return e.preventDefault(),t.getPages(t.pages.current_page-1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._l(t.pages.total_pages,(function(e){return a("li",{key:e,staticClass:"page-item",class:{active:t.pages.current_page===e},attrs:{pages:e}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.getPages(e)}}},[t._v(t._s(e))])])})),a("li",{staticClass:"page-item",class:{disabled:!t.pages.has_next}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(e){return e.preventDefault(),t.getPages(t.pages.current_page+1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)])},o=[],i={name:"Pagination",props:{pages:{type:Object,default:function(){}}},methods:{getPages:function(t){this.$emit("emitPages",t)}}},r=i,c=a("2877"),l=Object(c["a"])(r,s,o,!1,null,null,null);e["a"]=l.exports},afb9:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),a("div",{staticClass:"text-right mt-4"},[a("button",{staticClass:"btn btn-primary",on:{click:function(e){return t.openModal(!0)}}},[t._v(" 建立新商品 ")])]),a("table",{staticClass:"table mt-4"},[t._m(0),a("tbody",t._l(t.products,(function(e){return a("tr",{key:e.id},[a("td",[t._v(t._s(e.category))]),a("td",[t._v(t._s(e.title))]),a("td",{staticClass:"text-right"},[t._v(" "+t._s(t._f("currency")(e.origin_price))+" ")]),a("td",{staticClass:"text-right"},[t._v(" "+t._s(t._f("currency")(e.price))+" ")]),a("td",[e.is_enabled?a("span",{staticClass:"text-success"},[t._v("啟用")]):a("span",[t._v("未啟用")])]),a("td",[a("button",{staticClass:"btn btn-outline-primary btn-sm",on:{click:function(a){return t.openModal(!1,e)}}},[t._v(" 編輯 ")])]),a("td",[a("button",{staticClass:"btn btn-outline-primary btn-sm",on:{click:function(a){return t.delmodal(e)}}},[t._v(" 刪除 ")])])])})),0)]),a("Pagination",{attrs:{pages:t.pagination},on:{emitPages:t.getProducts}}),a("div",{staticClass:"modal fade",attrs:{id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[a("div",{staticClass:"modal-header bg-dark text-white"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[a("span",{staticClass:"modal-text"},[t._v(t._s(t.modaltext))])]),t._m(1)]),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-4"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"image"}},[t._v("輸入圖片網址")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.imageUrl,expression:"tempProduct.imageUrl"}],staticClass:"form-control",attrs:{id:"image",type:"text",placeholder:"請輸入圖片連結"},domProps:{value:t.tempProduct.imageUrl},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"imageUrl",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"customFile"}},[t._v(" 或 上傳圖片 "),t.status.fileUploading?a("i",{staticClass:"fas fa-spinner fa-spin"}):t._e()]),a("input",{ref:"files",staticClass:"form-control",attrs:{id:"customFile",type:"file"},on:{change:t.uploadFile}})]),a("img",{staticClass:"img-fluid",attrs:{img:"https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=828346ed697837ce808cae68d3ddc3cf&auto=format&fit=crop&w=1350&q=80",src:t.tempProduct.imageUrl,alt:""}})]),a("div",{staticClass:"col-sm-8"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"title"}},[t._v("標題")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.title,expression:"tempProduct.title"}],staticClass:"form-control",attrs:{id:"title",type:"text",placeholder:"請輸入標題"},domProps:{value:t.tempProduct.title},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"title",e.target.value)}}})]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"category"}},[t._v("分類")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.category,expression:"tempProduct.category"}],staticClass:"form-control",attrs:{id:"category",type:"text",placeholder:"請輸入分類"},domProps:{value:t.tempProduct.category},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"category",e.target.value)}}})]),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"price"}},[t._v("單位")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.unit,expression:"tempProduct.unit"}],staticClass:"form-control",attrs:{id:"unit",type:"unit",placeholder:"請輸入單位"},domProps:{value:t.tempProduct.unit},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"unit",e.target.value)}}})])]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"origin_price"}},[t._v("原價")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.origin_price,expression:"tempProduct.origin_price"}],staticClass:"form-control",attrs:{id:"origin_price",type:"number",placeholder:"請輸入原價"},domProps:{value:t.tempProduct.origin_price},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"origin_price",e.target.value)}}})]),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"price"}},[t._v("售價")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.price,expression:"tempProduct.price"}],staticClass:"form-control",attrs:{id:"price",type:"number",placeholder:"請輸入售價"},domProps:{value:t.tempProduct.price},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"price",e.target.value)}}})])]),a("hr"),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"description"}},[t._v("產品描述")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.description,expression:"tempProduct.description"}],staticClass:"form-control",attrs:{id:"description",type:"text",placeholder:"請輸入產品描述"},domProps:{value:t.tempProduct.description},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"description",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"content"}},[t._v("說明內容")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.content,expression:"tempProduct.content"}],staticClass:"form-control",attrs:{id:"content",type:"text",placeholder:"請輸入產品說明內容"},domProps:{value:t.tempProduct.content},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"content",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.is_enabled,expression:"tempProduct.is_enabled"}],staticClass:"form-check-input",attrs:{id:"is_enabled",type:"checkbox","true-value":1,"false-value":1},domProps:{checked:Array.isArray(t.tempProduct.is_enabled)?t._i(t.tempProduct.is_enabled,null)>-1:t._q(t.tempProduct.is_enabled,1)},on:{change:function(e){var a=t.tempProduct.is_enabled,s=e.target,o=(s.checked,1);if(Array.isArray(a)){var i=null,r=t._i(a,i);s.checked?r<0&&t.$set(t.tempProduct,"is_enabled",a.concat([i])):r>-1&&t.$set(t.tempProduct,"is_enabled",a.slice(0,r).concat(a.slice(r+1)))}else t.$set(t.tempProduct,"is_enabled",o)}}}),a("label",{staticClass:"form-check-label",attrs:{for:"is_enabled"}},[t._v("是否啟用")])])])])])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v(" 取消 ")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.updateProduct(e)}}},[t._v(" 確認 ")])])])])]),a("div",{staticClass:"modal fade",attrs:{id:"delProductModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[t._m(2),a("div",{staticClass:"modal-body"},[t._v(" 是否刪除 "),a("strong",{staticClass:"text-danger"},[t._v(t._s(t.tempProduct.title))]),t._v(" 商品(刪除後將無法恢復)。 ")]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v(" 取消 ")]),a("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.deldataProduct}},[t._v(" 確認刪除 ")])])])])])],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{attrs:{width:"120"}},[t._v(" 分類 ")]),a("th",[t._v("產品名稱")]),a("th",{attrs:{width:"120"}},[t._v(" 原價 ")]),a("th",{attrs:{width:"120"}},[t._v(" 售價 ")]),a("th",{attrs:{width:"100"}},[t._v(" 是否啟用 ")]),a("th",{attrs:{width:"80"}},[t._v(" 編輯 ")]),a("th",[t._v("刪除")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header bg-danger text-white"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[a("span",[t._v("刪除產品")])]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],i=(a("99af"),a("1799")),r=a("1157"),c=a.n(r),l={components:{Pagination:i["a"]},data:function(){return{modaltext:"",products:[],pagination:{},tempProduct:{},isNew:!1,isLoading:!1,status:{fileUploading:!1}}},created:function(){this.getProducts()},methods:{getProducts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=this,a="".concat("https://vue-course-api.hexschool.io/","api/").concat("maker","/products?page=").concat(t);e.isLoading=!0,e.$http.get(a).then((function(t){e.isLoading=!1,e.products=t.data.products,e.pagination=t.data.pagination}))},openModal:function(t,e){t?(this.modaltext="新增產品",this.tempProduct={},this.isNew=!0):(this.modaltext="編輯產品",this.tempProduct=Object.assign({},e),this.isNew=!1),c()("#productModal").modal("show")},delmodal:function(t){this.tempProduct=t,c()("#delProductModal").modal("show")},deldataProduct:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io/","api/").concat("maker","/admin/product/").concat(this.tempProduct.id);t.$http.delete(e).then((function(e){e.data.success,c()("#delProductModal").modal("hide"),t.getProducts()}))},updateProduct:function(){var t="".concat("https://vue-course-api.hexschool.io/","api/").concat("maker","/admin/product"),e="post",a=this;a.isNew||(t="".concat("https://vue-course-api.hexschool.io/","api/").concat("maker","/admin/product/").concat(a.tempProduct.id),e="put"),a.$http[e](t,{data:a.tempProduct}).then((function(t){t.data.success,c()("#productModal").modal("hide"),a.getProducts()}))},uploadFile:function(){var t=this.$refs.files.files[0],e=this,a=new FormData;a.append("file-to-upload",t);var s="".concat("https://vue-course-api.hexschool.io/","api/").concat("maker","/admin/upload");e.status.fileUploading=!0,e.$http.post(s,a,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){e.status.fileUploading=!1,t.data.success?e.$set(e.tempProduct,"imageUrl",t.data.imageUrl):e.$bus.$emit("message:push",t.data.message,"danger")}))}}},n=l,d=a("2877"),u=Object(d["a"])(n,s,o,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-7e82349f.ea6e2e82.js.map