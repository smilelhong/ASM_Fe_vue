webpackJsonp([5],{xONr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("aA9S"),n=a.n(l),i=a("OVQD"),s={data:function(){return{textMap:{update:"Edit",create:"Create"},temp:{id:void 0,equipment:"",interface:"",vlan:"",user:"",status:"已使用",area:"",button:void 0},dialogFormVisible:!1,dialogStatus:"",tableData4:[{id:"1",equipment:"zuoxi-1",interface:"fa0/1",vlan:"10",user:"xxxx",status:"已用",area:"三楼",button:"1"},{id:"2",equipment:"zuoxi-1",interface:"fa0/2",vlan:"10",user:"xxxx",status:"已用",area:"三楼",button:"1"},{id:"3",equipment:"zuoxi-1",interface:"fa0/3",vlan:"10",user:"xxxx",status:"已用",area:"三楼",button:"1"},{id:"4",equipment:"zuoxi-1",interface:"fa0/4",vlan:"10",user:"xxxx",status:"已用",area:"三楼",button:"1"}],options:[{value:"jishudasha",label:"技术大厦数据中心",children:[{value:"shejiyuanze",label:"ZUOXI_JSDS_102-1"},{value:"shejiyuanze",label:"ZUOXI_JSDS_102-2"},{value:"shejiyuanze",label:"ZUOXI_JSDS_102-3"}]},{value:"ningqiaolu",label:"宁桥路数据中心",children:[{value:"shejiyuanze",label:"ZUOXI_NQL_302-1"},{value:"shejiyuanze",label:"ZUOXI_NQL_402-2"},{value:"shejiyuanze",label:"ZUOXI_NQL_1502-3"}]},{value:"ziyuan",label:"华信北机房",children:[{value:"shejiyuanze",label:"ZUOXI_HXB_2102-1"},{value:"shejiyuanze",label:"ZUOXI_HXB_1012-2"},{value:"shejiyuanze",label:"ZUOXI_HXB_10D2-3"}]}],list:null,listLoading:!0}},filters:{statusFilter:function(e){return{published:"success",draft:"gray",deleted:"danger"}[e]}},created:function(){this.fetchData()},methods:{handleUpdate:function(e){var t=this;this.temp=n()({},e),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick(function(){t.$refs.dataForm.clearValidate()})},objectSpanMethod:function(e){e.row,e.column,e.rowIndex,e.columnIndex},test:function(){var e=this;this.listLoading=!0,Object(i.a)().then(function(t){e.list=t.data,e.listLoading=!1,console.log(e.list)})}}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container calendar-list-container"},[a("div",{staticClass:"filter-container"},[a("el-cascader",{staticClass:"filter-item",staticStyle:{width:"300px"},attrs:{placeholder:"交换机",options:e.options,filterable:"","change-on-select":""}}),e._v(" "),a("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.test}},[e._v("搜索")]),e._v(" "),a("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-edit"}},[e._v("添加")]),e._v(" "),a("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-download"}},[e._v("导出")])],1),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData4,"span-method":e.objectSpanMethod,border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:"序号",width:"65"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.id))])]}}])}),e._v(" "),a("el-table-column",{attrs:{width:"220px",align:"center",label:"设备"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.equipment))])]}}])}),e._v(" "),a("el-table-column",{attrs:{"min-width":"100px",align:"center",label:"端口"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.interface))])]}}])}),e._v(" "),a("el-table-column",{attrs:{width:"100px",align:"center",label:"vlan"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.vlan))])]}}])}),e._v(" "),a("el-table-column",{attrs:{width:"100px",align:"center",label:"用户"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.user))])]}}])}),e._v(" "),a("el-table-column",{attrs:{width:"80px",label:"状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.status))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"区域",width:"250"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.area))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"operations",label:"操作",width:"230","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){e.handleUpdate(t.row)}}},[e._v("编辑")]),e._v(" "),a("el-button",{attrs:{size:"mini",type:"danger"}},[e._v("删除")])]}}])})],1),e._v(" "),a("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{rules:e.rules,model:e.temp,"label-position":"left","label-width":"70px"}},[a("el-form-item",{attrs:{label:"设备",prop:"equipment"}},[a("el-input",{model:{value:e.temp.equipment,callback:function(t){e.$set(e.temp,"equipment",t)},expression:"temp.equipment"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"接口",prop:"interface"}},[a("el-input",{model:{value:e.temp.interface,callback:function(t){e.$set(e.temp,"interface",t)},expression:"temp.interface"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"vlan",prop:"vlan"}},[a("el-input",{model:{value:e.temp.vlan,callback:function(t){e.$set(e.temp,"vlan",t)},expression:"temp.vlan"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"用户",prop:"user"}},[a("el-input",{model:{value:e.temp.user,callback:function(t){e.$set(e.temp,"user",t)},expression:"temp.user"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"状态",prop:"status"}},[a("el-input",{model:{value:e.temp.status,callback:function(t){e.$set(e.temp,"status",t)},expression:"temp.status"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"区域",prop:"area"}},[a("el-input",{model:{value:e.temp.area,callback:function(t){e.$set(e.temp,"area",t)},expression:"temp.area"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.updateData}},[e._v("确认")])],1)],1)],1)},staticRenderFns:[]},o=a("/Xao")(s,r,!1,null,null,null);t.default=o.exports}});