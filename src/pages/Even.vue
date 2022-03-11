<template>
  <div class="main">
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item>
        <el-input v-model="search" class="search_name" size="mini" placeholder="输入姓名查询">
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="text" @click="onSearch()" class="el-icon-search">
          查询
        </el-button>
      </el-form-item>
      <el-form-item>
        <el-button class="el-icon-refresh" type="text" @click="refreshData">
          刷新
        </el-button>
      </el-form-item>
      <el-form-item >
        <el-button type="text" @click="dialogVisible = true" class="el-icon-circle-plus-outline">
          新增
        </el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData"  stripe  highlight-current-row border  style="width: 100%">
      <el-table-column label="事件名称">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="right">
            <p>人物1：{{scope.row.evenPerson1}}</p>
            <p>人物2：{{scope.row.evenPerson2}}</p>
            <p>人物3：{{scope.row.evenPerson3}}</p>
            <p>人物4：{{scope.row.evenPerson4}}</p>
            <p>人物5：{{scope.row.evenPerson5}}</p>
            <p>人物6：{{scope.row.evenPerson6}}</p>
            <div slot="reference" class="name-wrapper">
              <el-button type="text">{{ scope.row.evenName }}</el-button>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="事件时间">
        <template slot-scope="scope">
          <div slot="reference" class="time-wrapper">
            <el-button type="text" >{{ scope.row.evenTime }}</el-button>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="事件地点">
        <template slot-scope="scope">
          <div slot="reference" class="addr-wrapper">
            <el-button type="text" >{{ scope.row.evenAddr }}</el-button>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="事件起因">
        <template slot-scope="scope">
          <div slot="reference" class="beg-wrapper">
            <el-button type="text" >{{ scope.row.evenBeg }}</el-button>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="事件经过">
        <template slot-scope="scope">
          <div slot="reference" class="min-wrapper">
            <el-button type="text" >{{ scope.row.evenMin }}</el-button>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="事件结果">
        <template slot-scope="scope">
          <div slot="reference" class="society-wrapper">
            <el-button type="text" >{{ scope.row.evenEnd }}</el-button>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="操作" fixed="right"  width="200">
        <template slot-scope="scope">
          <el-button size="mini" icon="el-icon-edit" @click="handleEdit(scope.$index, scope.row)">
            编辑</el-button>
          <el-button size="mini" icon="el-icon-delete" @click="handleDelete(scope.$index, scope.row)" type="danger">
            删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="70px" class="demo-ruleForm" size="medium">
      <el-dialog title="新增" :append-to-body='true' :visible.sync="dialogVisible" width="80%" :before-close="handleClose">
        <el-row>
          <el-col :span="8">
            <el-form-item label="事件名称" porp="evenName">
              <el-input v-model="ruleForm.evenName"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="事件时间">
              <el-input v-model="ruleForm.evenTime"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="事件地点">
              <el-input v-model="ruleForm.evenAddr"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="人物1">
              <el-input v-model="ruleForm.evenPerson1"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="人物2">
              <el-input v-model="ruleForm.evenPerson2"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="人物3">
              <el-input v-model="ruleForm.evenPerson3"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="人物4">
              <el-input v-model="ruleForm.evenPerson4"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="人物5">
              <el-input v-model="ruleForm.evenPerson5"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="人物6">
              <el-input v-model="ruleForm.evenPerson6"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="起因">
              <el-input v-model="ruleForm.evenBeg"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="经过">
              <el-input v-model="ruleForm.evenMin"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="结果">
              <el-input v-model="ruleForm.evenBeg"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="详情">
              <el-input v-model="ruleForm.evenMin" type="textarea" rows="5"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-input type="hidden" v-model="ruleForm.evenId"></el-input>
        <el-input type="hidden" v-model="ruleForm.evenPerson7" value=""></el-input>
        <span slot="footer" class="dialog-footer">
            <el-button @click="cancel()" size="medium">取 消</el-button>
            <el-button @click="addEven()" type="primary" size="medium">确 定</el-button>
        </span>
      </el-dialog>
    </el-form>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="70px" class="demo-ruleForm" size="medium">
      <el-dialog title="编辑" :append-to-body='true' :visible.sync="dialogUpdate" width="80%" :before-close="handleClose">
        <el-row>
          <el-col :span="8">
            <el-form-item label="事件名称">
              <el-input v-model="ruleForm.evenName"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="事件时间">
              <el-input v-model="ruleForm.evenTime"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="事件地点">
              <el-input v-model="ruleForm.evenAddr"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="人物1">
              <el-input v-model="ruleForm.evenPerson1"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="人物2">
              <el-input v-model="ruleForm.evenPerson2"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="人物3">
              <el-input v-model="ruleForm.evenPerson3"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="人物4">
              <el-input v-model="ruleForm.evenPerson4"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="人物5">
              <el-input v-model="ruleForm.evenPerson5"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="人物6">
              <el-input v-model="ruleForm.evenPerson6"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="起因">
              <el-input v-model="ruleForm.evenBeg"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="经过">
              <el-input v-model="ruleForm.evenMin"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="结果">
              <el-input v-model="ruleForm.evenBeg"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="详情">
              <el-input v-model="ruleForm.evenMin" type="textarea" rows="5"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-input type="hidden" v-model="ruleForm.evenId"></el-input>
        <el-input type="hidden" v-model="ruleForm.evenPerson7" value=""></el-input>
        <span slot="footer" class="dialog-footer">
            <el-button @click="cancel()" size="medium">取 消</el-button>
            <el-button @click="updateEven()" type="primary" size="medium">确 定</el-button>
        </span>
      </el-dialog>
    </el-form>
    <div class="pages">
      <el-pagination
        background
        :disabled = "disablePage"
        :current-page.sync="currentPage"
        small
        layout="prev, pager, next"
        :page-size="pageSize"
        :total="total"
        @current-change="handleCurrentChange">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ruleForm: {
        evenId: '',
        relNo: '',
        evenName: '',
        evenTime: '',
        evenAddr: '',
        evenPerson1: '',
        evenPerson2: '',
        evenPerson3: '',
        evenPerson4: '',
        evenPerson5: '',
        evenPerson6: '',
        evenPerson7: '',
        evenBeg: '',
        evenMin: '',
        evenEnd: '',
        evenSum: ''
      },
      rules: {
        evenName: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
          { min: 2, max: 7, message: '长度在 2 到 7 个字符', trigger: 'blur' }
        ]
      },
      tableData: [],
      search: '',
      dialogVisible: false,
      dialogUpdate: false,
      pageSize: 7,
      currentPage: 1,
      total: 0, // 总页数，需要传输Integer数据
      disablePage: false,
      options: []
    }
  },
  methods: {
    handleEdit (index, row) {
      this.dialogUpdate = true
      this.ruleForm = Object.assign({}, row)
    },
    cancel () {
      this.dialogUpdate = false
      this.dialogVisible = false
      this.emptyData()
    },
    emptyData () {
      this.ruleForm = {
        evenId: '',
        evenName: '',
        relNo: '',
        evenTime: '',
        evenBeg: '',
        evenEnd: '',
        evenMin: '',
        evenAddr: '',
        evenPerson1: '',
        evenPerson2: '',
        evenPerson3: '',
        evenPerson4: '',
        evenPerson5: '',
        evenPerson6: '',
        evenPerson7: '',
        evenSum: ''
      }
    },
    getOptName (val) {
      console.log(val)
      let postData = this.qs.stringify({
        keyName: val
      })
      this.axios({
        method: 'post',
        url: 'http://127.0.0.1:8888/dic/getOptName',
        data: postData
      }).then(response => {
        this.options = response.data
      }).catch(error => {
        console.log(error)
      })
    },
    addEven () {
      let postData = this.qs.stringify({
        evenName: this.ruleForm.evenName,
        evenTime: this.ruleForm.evenTime,
        evenAddr: this.ruleForm.evenAddr,
        evenPerson1: this.ruleForm.evenPerson1,
        evenPerson2: this.ruleForm.evenPerson2,
        evenPerson3: this.ruleForm.evenPerson3,
        evenPerson4: this.ruleForm.evenPerson4,
        evenPerson5: this.ruleForm.evenPerson5,
        evenPerson6: this.ruleForm.evenPerson6,
        evenPerson7: this.ruleForm.evenPerson7,
        evenBeg: this.ruleForm.evenBeg,
        evenMin: this.ruleForm.evenMin,
        evenEnd: this.ruleForm.evenEnd,
        evenSum: this.ruleForm.evenSum
      })
      let postData1 = this.qs.stringify({
        page: 1
      })
      this.axios({
        method: 'post',
        url: 'http://127.0.0.1:8888/even/insertEven',
        data: postData
      }).then(response => {
        this.axios({
          method: 'post',
          url: 'http://127.0.0.1:8888/even/findByPage',
          data: postData1
        }).then(response => {
          this.tableData = response.data
          this.currentPage = 1
          this.$message({
            type: 'success',
            message: '已添加!请完善人物信息'
          })
        }).catch(error => {
          console.log(error)
        })
        this.getPages()
        this.cancel()
        this.refreshData()
        console.log(response)
      }).catch(error => {
        console.log(error)
      })
    },
    updateEven () {
      let postData = this.qs.stringify({
        evenId: this.ruleForm.evenId,
        evenName: this.ruleForm.evenName,
        evenTime: this.ruleForm.evenTime,
        evenAddr: this.ruleForm.evenAddr,
        evenPerson1: this.ruleForm.evenPerson1,
        evenPerson2: this.ruleForm.evenPerson2,
        evenPerson3: this.ruleForm.evenPerson3,
        evenPerson4: this.ruleForm.evenPerson4,
        evenPerson5: this.ruleForm.evenPerson5,
        evenPerson6: this.ruleForm.evenPerson6,
        evenPerson7: this.ruleForm.evenPerson7,
        evenBeg: this.ruleForm.evenBeg,
        evenMin: this.ruleForm.evenMin,
        evenEnd: this.ruleForm.evenEnd,
        evenSum: this.ruleForm.evenSum
      })
      this.axios({
        method: 'post',
        url: 'http://127.0.0.1:8888/even/updateById',
        data: postData
      }).then(response => {
        this.handleCurrentChange()
        this.cancel()
        this.$message({
          type: 'success',
          message: '更新成功!'
        })
        console.log(response)
      }).catch(error => {
        this.$message({
          type: 'success',
          message: '更新失败!'
        })
        console.log(error)
      })
    },
    getPages () {
      this.axios.post('http://127.0.0.1:8888/even/count').then(response => {
        this.total = response.data
      }).catch(error => {
        console.log(error)
      })
    },
    handleCurrentChange () {
      console.log(`当前页: ${this.currentPage}`)
      let postData = this.qs.stringify({
        page: this.currentPage
      })
      this.axios({
        method: 'post',
        url: 'http://127.0.0.1:8888/even/findByPage',
        data: postData
      }).then(response => {
        this.tableData = response.data
      }).catch(error => {
        console.log(error)
      })
    },
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },
    handleDelete (index, row) {
      console.log(index, row)
      this.$confirm('删除操作, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let postData = this.qs.stringify({
          evenId: row.evenId
        })
        this.axios({
          method: 'post',
          url: 'http://127.0.0.1:8888/even/deleteById',
          data: postData
        }).then(response => {
          this.getPages()
          this.currentPage = 1
          this.axios.post('http://127.0.0.1:8888/even/findByPage').then(response => {
            this.tableData = response.data
          }).catch(error => {
            console.log(error)
          })
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
          this.refreshData()
          console.log(response)
        }).catch(error => {
          console.log(error)
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    onSearch () {
      let postData = this.qs.stringify({
        evenName: this.search
      })
      console.log(postData)
      this.axios({
        method: 'post',
        url: 'http://127.0.0.1:8888/even/getByName',
        data: postData
      }).then(response => {
        this.tableData = response.data
        this.disablePage = true
      }).catch(error => {
        console.log(error)
      })
    },
    refreshData () {
      location.reload()
    }
  },
  created () {
    let personEven = this.$route.query.personEven
    let relNo = ''
    if (personEven !== undefined) {
      relNo = personEven
    }
    console.log(personEven)
    console.log(relNo)
    let postData = {page: 1, relNo: relNo}
    this.axios({
      method: 'post',
      url: 'http://127.0.0.1:8888/even/findByPage',
      data: postData
    }).then(response => {
      this.tableData = response.data
    }).catch(error => {
      console.log(error)
    })
    this.axios.post('http://127.0.0.1:8888/even/count').then(response => {
      this.total = response.data
    }).catch(error => {
      console.log(error)
    })
  }
}
</script>
<style scoped>
  .search_name{
    width: 200px;
  }
  .pages{
    margin: 0px;
    padding: 0px;
    text-align: right;
  }
  .main {
    position: absolute;
    top: 155px;
    left: 200px;
    bottom: 0px;
    right: 0px;  /* 距离右边0像素 */
    padding: 0px 0px 600px 0px;
    /*overflow-y: auto; !* 当内容过多时y轴出现滚动条 *!*/
    /* background-color: red; */
  }
</style>
