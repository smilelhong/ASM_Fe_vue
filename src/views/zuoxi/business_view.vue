<template>
  <div class="app-container calendar-list-container">
    <div class="filter-container">
      <el-input style="width: 200px;" class="filter-item" placeholder="客户名称" >
      </el-input>
      <el-select clearable style="width: 150px" v-model="value1" class="filter-item"  placeholder="办公室">
        <el-option v-for="item in importanceOptions" :key="item" :label="item" :value="item">
        </el-option>
      </el-select>
      <el-select clearable style="width: 150px" v-model="value2" class="filter-item"  placeholder="机房">
        <el-option v-for="item in importanceOptions" :key="item" :label="item" :value="item">
        </el-option>
      </el-select>
      <el-button class="filter-item" type="primary"  icon="el-icon-search" @click="test">搜索</el-button>
      <el-button class="filter-item" type="primary"  icon="el-icon-search" >导出</el-button>
    </div>
    <el-table :data="tableData3" style="width: 100%">
      <el-table-column align="center" prop="serial" label="序号" width="60">
      </el-table-column>
      <el-table-column  align="center" prop="user" label="客户名称" >
      </el-table-column>
      <el-table-column align="center" label="办公区域">
        <el-table-column
          prop="office"
          label="办公室">
        </el-table-column>
        <el-table-column
          prop="access_switch1"
          label="接入交换机">
        </el-table-column>
        <el-table-column
          prop="interface1"
          label="端口">
        </el-table-column>
        <el-table-column
          prop="vlan1"
          label="Vlan"
          width="80">
        </el-table-column>
      </el-table-column>
      <el-table-column align="center" label="机房区域">
        <el-table-column
          prop="room"
          label="机房">
        </el-table-column>
        <el-table-column
          prop="access_switch2"
          label="接入交换机">
        </el-table-column>
        <el-table-column
          prop="interface2"
          label="端口">
        </el-table-column>
        <el-table-column
          prop="vlan2"
          label="Vlan"
          width="80">
        </el-table-column>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { testget } from '@/api/table'

export default {
  data() {
    return {
      importanceOptions: ['3楼办公室', '4楼', '6楼办公室'],
      value1: '',
      value2: '',
      tableData3: [{
        serial: '1',
        user: '国信证券',
        office: '3楼办公室',
        access_switch1: 'zuoxi-nql-2960-1',
        interface1: 'fa0/1',
        vlan1: '10',
        room: '6楼机房',
        access_switch2: 'zuoxi-nql-2960-1',
        interface2: 'fa0/1',
        vlan2: '10'
      }, {
        serial: '2',
        user: '国信证券',
        office: '3楼办公室',
        access_switch1: 'zuoxi-nql-2960-1',
        interface1: 'fa0/1',
        vlan1: '10',
        room: '6楼机房',
        access_switch2: 'zuoxi-nql-2960-1',
        interface2: 'fa0/1',
        vlan2: '10'
      }, {
        serial: '3',
        user: '国信证券',
        office: '3楼办公室',
        access_switch1: 'zuoxi-nql-2960-1',
        interface1: 'fa0/1',
        vlan1: '10',
        room: '6楼机房',
        access_switch2: 'zuoxi-nql-2960-1',
        interface2: 'fa0/1',
        vlan2: '10'
      }, {
        serial: '4',
        user: '国信证券',
        office: '3楼办公室',
        access_switch1: 'zuoxi-nql-2960-1',
        interface1: 'fa0/1',
        vlan1: '10',
        room: '6楼机房',
        access_switch2: 'zuoxi-nql-2960-1',
        interface2: 'fa0/1',
        vlan2: '10'
      }, {
        serial: '5',
        user: '国信证券',
        office: '3楼办公室',
        access_switch1: 'zuoxi-nql-2960-1',
        interface1: 'fa0/1',
        vlan1: '10',
        room: '6楼机房',
        access_switch2: 'zuoxi-nql-2960-1',
        interface2: 'fa0/1',
        vlan2: '10'
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
  methods: {
    test() {
      this.listLoading = true
      testget().then(response => {
        this.list = response.data.name
        this.listLoading = false
        console.log(this.list)
      })
    }
  }
}
</script>
