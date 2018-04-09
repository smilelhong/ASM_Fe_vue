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
    <el-table :data="list" style="width: 100%">
      <el-table-column align="center" prop="serial" label="序号" width="60">
        <template slot-scope="scope">
          <span>{{scope.row.id}}</span>
        </template>
      </el-table-column>
      <el-table-column  align="center" prop="user" label="客户名称" >
        <template slot-scope="scope">
          <span>{{scope.row.user}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="本端区域">
        <el-table-column
          label="本端数据中心">
        <template slot-scope="scope">
          <span>{{scope.row.local}}</span>
        </template>
        </el-table-column>
        <el-table-column
          prop="access_switch1"
          label="本端设备">
        <template slot-scope="scope">
          <span>{{scope.row.local_e}}</span>
        </template>
        </el-table-column>
        <el-table-column
          prop="interface1"
          label="本端端口">
        <template slot-scope="scope">
          <span>{{scope.row.interface1}}</span>
        </template>
        </el-table-column>
        <!-- <el-table-column
          prop="vlan1"
          label="Vlan"
          width="80">
        </el-table-column> -->
      </el-table-column>
      <el-table-column align="center" label="对端区域">
        <el-table-column
          prop="room"
          label="数据中心">
        <template slot-scope="scope">
          <span>{{scope.row.opposite}}</span>
        </template>
        </el-table-column>
        <el-table-column
          prop="access_switch2"
          label="对端设备">
        <template slot-scope="scope">
          <span>{{scope.row.opposite_e}}</span>
        </template>
        </el-table-column>
        <el-table-column
          prop="interface2"
          label="对端端口">
        <template slot-scope="scope">
          <span>{{scope.row.interface2}}</span>
        </template>
        </el-table-column>
        <!-- <el-table-column
          prop="vlan2"
          label="Vlan"
          width="80">
        </el-table-column> -->
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { testget2 } from '@/api/table'

export default {
  data() {
    return {
      importanceOptions: ['3楼办公室', '4楼', '6楼办公室'],
      value1: '',
      value2: '',
      tableData3: [{
        serial: '1',
        user: '国信证券',
        office: '华京路1号',
        access_switch1: '华为1800-1',
        interface1: 'Ge0/1',
        room: '华京路60号',
        access_switch2: '华为1800-2',
        interface2: 'Ge0/1'
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
    test() {
      this.listLoading = true
      testget2().then(response => {
        this.list = response.data
        this.listLoading = false
        console.log(this.list)
      })
    }
  }
}
</script>
