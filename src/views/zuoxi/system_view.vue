<template>
  <div class="app-container calendar-list-container">
    <div class="filter-container">
      <el-cascader
      class="filter-item"
      style="width:300px"
      placeholder="交换机"
      :options="options"
      filterable
      change-on-select>
      </el-cascader>
      <el-button class="filter-item" type="primary"  icon="el-icon-search" @click="test">搜索</el-button>
      <el-button class="filter-item" type="primary"  icon="el-icon-edit" >添加</el-button>
      <el-button class="filter-item" type="primary"  icon="el-icon-download" >导出</el-button>
    </div>
    <el-table  :data="tableData4" :span-method="objectSpanMethod" border fit highlight-current-row style="width: 100%">
      <el-table-column align="center" label="序号" width="65">
        <template slot-scope="scope">
          <span>{{scope.row.id}}</span>
        </template>
      </el-table-column>
      <el-table-column width="220px"  align="center" label="设备">
        <template slot-scope="scope">
          <span>{{scope.row.equipment}}</span>
        </template>
      </el-table-column>
      <el-table-column min-width="100px" align="center"  label="端口">
        <template slot-scope="scope">
          <span>{{scope.row.interface}}</span>
        </template>
      </el-table-column>
      <el-table-column width="100px" align="center"  label="vlan">
        <template slot-scope="scope">
          <span>{{scope.row.vlan}}</span>
        </template>
      </el-table-column>
      <el-table-column width="100px"  align="center"  label="用户">
        <template slot-scope="scope">
          <span>{{scope.row.user}}</span>
        </template>
      </el-table-column>
      <el-table-column width="80px"  label="状态">
        <template slot-scope="scope">
          <span>{{scope.row.status}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center"  label="区域" width="250">
        <template slot-scope="scope">
          <span>{{scope.row.area}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="operations" label="操作" width="230" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button type="primary"  @click="handleUpdate(scope.row)" size="mini" >编辑</el-button>
          <el-button size="mini" type="danger" >删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
      <el-form :rules="rules" ref="dataForm" :model="temp" label-position="left" label-width="70px" style='width: 400px; margin-left:50px;'>
        <el-form-item label="设备" prop="equipment">
          <el-input v-model="temp.equipment"></el-input>
        </el-form-item>
        <el-form-item label="接口" prop="interface">
          <el-input v-model="temp.interface"></el-input>
        </el-form-item>
        <el-form-item label="vlan" prop="vlan">
          <el-input v-model="temp.vlan"></el-input>
        </el-form-item>
        <el-form-item label="用户" prop="user">
          <el-input v-model="temp.user"></el-input>
        </el-form-item>
        <el-form-item label="状态" prop="status">
          <el-input v-model="temp.status"></el-input>
        </el-form-item>
        <el-form-item label="区域" prop="area">
          <el-input v-model="temp.area"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="updateData">确认</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { testget } from '@/api/table'

export default {
  data() {
    return {
      textMap: {
        update: 'Edit',
        create: 'Create'
      },
      temp: {
        id: undefined,
        equipment: '',
        interface: '',
        vlan: '',
        user: '',
        status: '已使用',
        area: '',
        button: undefined
      },
      dialogFormVisible: false,
      dialogStatus: '',
      tableData4: [{
        id: '1',
        equipment: 'zuoxi-1',
        interface: 'fa0/1',
        vlan: '10',
        user: 'xxxx',
        status: '已用',
        area: '三楼',
        button: '1'
      },{
        id: '2',
        equipment: 'zuoxi-1',
        interface: 'fa0/2',
        vlan: '10',
        user: 'xxxx',
        status: '已用',
        area: '三楼',
        button: '1'
      },{
        id: '3',
        equipment: 'zuoxi-1',
        interface: 'fa0/3',
        vlan: '10',
        user: 'xxxx',
        status: '已用',
        area: '三楼',
        button: '1'
      },{
        id: '4',
        equipment: 'zuoxi-1',
        interface: 'fa0/4',
        vlan: '10',
        user: 'xxxx',
        status: '已用',
        area: '三楼',
        button: '1'
      }
      ],
      options: [
        {
          value: 'jishudasha',
          label: '技术大厦数据中心',
          children: [{
            value: 'shejiyuanze',
            label: 'ZUOXI_JSDS_102-1'
          },
          {
            value: 'shejiyuanze',
            label: 'ZUOXI_JSDS_102-2'
          },
          {
            value: 'shejiyuanze',
            label: 'ZUOXI_JSDS_102-3'
          }]
        }, {
          value: 'ningqiaolu',
          label: '宁桥路数据中心',
          children: [
            {
            value: 'shejiyuanze',
            label: 'ZUOXI_NQL_302-1'
          },
          {
            value: 'shejiyuanze',
            label: 'ZUOXI_NQL_402-2'
          },
          {
            value: 'shejiyuanze',
            label: 'ZUOXI_NQL_1502-3'
          }
          ]
        }, {
          value: 'ziyuan',
          label: '华信北机房',
          children: [{
            value: 'shejiyuanze',
            label: 'ZUOXI_HXB_2102-1'
          },
          {
            value: 'shejiyuanze',
            label: 'ZUOXI_HXB_1012-2'
          },
          {
            value: 'shejiyuanze',
            label: 'ZUOXI_HXB_10D2-3'
          }]
        }
      ],
      list: null,
      listLoading: true
    }
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    handleUpdate(row) {
      this.temp = Object.assign({}, row) // copy obj
      this.dialogStatus = 'update'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {

    },
    test() {
      this.listLoading = true
      testget().then(response => {
        this.list = response.data
        this.listLoading = false
        console.log(this.list)
      })
    }
  }
}
</script>
