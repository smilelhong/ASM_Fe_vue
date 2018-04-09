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
    <el-table :key='tableKey' :data="list"  v-loading="listLoading" element-loading-text="给我一点时间" border fit highlight-current-row style="width: 100%">
      <el-table-column align="center" label="序号" width="65">
        <template slot-scope="scope">
          <span>{{scope.row.id}}</span>
        </template>
      </el-table-column>
      <el-table-column width="220px"  align="center" label="设备名称">
        <template slot-scope="scope">
          <span>{{scope.row.equipment}}</span>
        </template>
      </el-table-column>
      <el-table-column min-width="100px" align="center"  label="IP地址">
        <template slot-scope="scope">
          <span>{{scope.row.ip}}</span>
        </template>
      </el-table-column>
      <el-table-column width="100px" align="center"  label="型号">
        <template slot-scope="scope">
          <span>{{scope.row.model}}</span>
        </template>
      </el-table-column>
      <el-table-column width="100px"  align="center"  label="用途">
        <template slot-scope="scope">
          <span>{{scope.row.purpose}}</span>
        </template>
      </el-table-column>
      <el-table-column width="80px"  label="数据中心">
        <template slot-scope="scope">
          <span>{{scope.row.datacenter}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center"  label="位置" width="80px">
        <template slot-scope="scope">
          <span>{{scope.row.area}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center"  label="U位" width="80px">
        <template slot-scope="scope">
          <span>{{scope.row.u}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center"  label="电口" width="80px">
        <template slot-scope="scope">
          <span>{{scope.row.dian}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center"  label="光口" width="80px">
        <template slot-scope="scope">
          <span>{{scope.row.guang}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="operations" label="操作" width="180" class-name="small-padding fixed-width">
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
import { testget1 } from '@/api/table'

export default {
  data() {
    return {
      tableKey: 0,
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
    this.test()
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
      testget1().then(response => {
        this.list = response.data
        this.listLoading = false
        console.log(this.list)
      })
    }
  }
}
</script>
