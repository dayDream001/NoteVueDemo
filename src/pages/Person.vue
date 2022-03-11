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
      <el-table-column label="姓名">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="right">
            <p>参照人物：{{scope.row.personRole}}</p>
            <p>性别：{{scope.row.personSex}}</p>
            <p>年龄：{{scope.row.personAge}}</p>
            <p>种族：{{scope.row.personRace}}</p>
            <p>职业：{{scope.row.personJob}}</p>
            <p>等级：{{scope.row.personLev}}</p>
            <div slot="reference" class="name-wrapper">
              <el-button type="text">{{ scope.row.personName }}</el-button>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="关联外貌编号">
        <template slot-scope="scope">
          <div slot="reference" class="look-wrapper">
            <el-button type="text" >{{ scope.row.personLook }}</el-button>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="关联组织编号">
        <template slot-scope="scope">
          <div slot="reference" class="team-wrapper">
            <el-button type="text">{{ scope.row.personTeam }}</el-button>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="关联事件编号">
        <template slot-scope="scope">
          <div slot="reference" class="even-wrapper">
            <router-link :to="{path:'/even',query:{personEven: scope.row.personEven}}">
              <el-button type="text" >{{ scope.row.personEven }}</el-button>
            </router-link>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="关联家庭编号">
        <template slot-scope="scope">
          <div slot="reference" class="family-wrapper">
            <el-button type="text" >{{ scope.row.personFamily }}</el-button>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="关联社会编号">
        <template slot-scope="scope">
          <div slot="reference" class="society-wrapper">
            <el-button type="text" >{{ scope.row.personSociety }}</el-button>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="关联能力编号">
        <template slot-scope="scope">
          <div slot="reference" class="personAbility-wrapper">
            <el-button type="text" >{{ scope.row.personAbility }}</el-button>
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
            <el-form-item label="姓名">
              <el-input v-model="ruleForm.personName"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="性别">
              <el-select v-model="ruleForm.personSex" placeholder="请选择性别"  @change="getOptName($event)">
                <el-option label="请选择" value="SEX"></el-option>
                <el-option v-for="item in options" :key="item" :label="item" :value="item"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="职业">
              <el-select v-model="ruleForm.personJob" placeholder="请选择职业" @change="getOptName($event)">
                <el-option label="请选择" value="JOB"></el-option>
                <el-option v-for="item in options" :key="item" :label="item" :value="item"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="参照人物">
              <el-input v-model="ruleForm.personRole"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="年龄">
              <el-select v-model="ruleForm.personAge" placeholder="请选择年龄" @change="getOptName($event)">
                <el-option label="请选择" value="AGE"></el-option>
                <el-option v-for="item in options" :key="item" :label="item" :value="item"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="种族">
              <el-select v-model="ruleForm.personRace" placeholder="请选择种族" @change="getOptName($event)">
                <el-option label="请选择" value="RACE"></el-option>
                <el-option v-for="item in options" :key="item" :label="item" :value="item"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="性格">
              <el-input v-model="ruleForm.personDisposition"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="重要程度">
              <el-select v-model="ruleForm.personLev" placeholder="请选择">
                <el-option label="龙套" value="龙套"></el-option>
                <el-option label="主角" value="主角"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-input type="hidden" v-model="ruleForm.personId"></el-input>
        <el-input type="hidden" v-model="ruleForm.personTeam"></el-input>
        <el-input type="hidden" v-model="ruleForm.personFamily"></el-input>
        <el-input type="hidden" v-model="ruleForm.personEven"></el-input>
        <el-input type="hidden" v-model="ruleForm.personSociety"></el-input>
        <el-input type="hidden" v-model="ruleForm.personLook"></el-input>
        <el-input type="hidden" v-model="ruleForm.personAbility"></el-input>
        <span slot="footer" class="dialog-footer">
            <el-button @click="cancel()" size="medium">取 消</el-button>
            <el-button @click="addUser()" type="primary" size="medium">确 定</el-button>
        </span>
      </el-dialog>
    </el-form>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="70px" class="demo-ruleForm" size="medium">
      <el-dialog title="编辑" :append-to-body='true' :visible.sync="dialogUpdate" width="80%" :before-close="handleClose">
        <el-row>
          <el-col :span="8">
            <el-form-item label="姓名">
              <el-input v-model="ruleForm.personName"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="性别">
              <el-select v-model="ruleForm.personSex" placeholder="请选择性别"  @change="getOptName($event)">
                <el-option label="请选择" value="SEX"></el-option>
                <el-option v-for="item in options" :key="item" :label="item" :value="item"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="职业">
              <el-select v-model="ruleForm.personJob" placeholder="请选择职业" @change="getOptName($event)">
                <el-option label="请选择" value="JOB"></el-option>
                <el-option v-for="item in options" :key="item" :label="item" :value="item"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="参照人物">
              <el-input v-model="ruleForm.personRole"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="年龄">
              <el-select v-model="ruleForm.personAge" placeholder="请选择年龄" @change="getOptName($event)">
                <el-option label="请选择" value="AGE"></el-option>
                <el-option v-for="item in options" :key="item" :label="item" :value="item"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="种族">
              <el-select v-model="ruleForm.personRace" placeholder="请选择种族" @change="getOptName($event)">
                <el-option label="请选择" value="RACE"></el-option>
                <el-option v-for="item in options" :key="item" :label="item" :value="item"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="性格">
              <el-input v-model="ruleForm.personDisposition"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="重要程度">
              <el-select v-model="ruleForm.personLev" placeholder="请选择">
                <el-option label="龙套" value="龙套"></el-option>
                <el-option label="主角" value="主角"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-input type="hidden" v-model="ruleForm.personId"></el-input>
        <el-input type="hidden" v-model="ruleForm.personTeam"></el-input>
        <el-input type="hidden" v-model="ruleForm.personFamily"></el-input>
        <el-input type="hidden" v-model="ruleForm.personEven"></el-input>
        <el-input type="hidden" v-model="ruleForm.personSociety"></el-input>
        <el-input type="hidden" v-model="ruleForm.personLook"></el-input>
        <el-input type="hidden" v-model="ruleForm.personAbility"></el-input>
        <span slot="footer" class="dialog-footer">
            <el-button @click="cancel()" size="medium">取 消</el-button>
            <el-button @click="updatePerson()" type="primary" size="medium">确 定</el-button>
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
        personId: '',
        personName: '',
        personRole: '',
        personSex: '',
        personAge: '',
        personRace: '',
        personJob: '',
        personTeam: '',
        personLook: '',
        personSociety: '',
        personFamily: '',
        personEven: '',
        personAbility: '',
        personDisposition: '',
        personLev: ''
      },
      rules: {
        personName: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
          { min: 2, max: 7, message: '长度在 2 到 7 个字符', trigger: 'blur' }
        ],
        personJob: [
          { required: true, message: '请输入住址', trigger: 'blur' },
          { min: 5, message: '长度大于 5 个字符', trigger: 'blur' }
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
        personName: '',
        personRole: '',
        personSex: '',
        personAge: '',
        personRace: '',
        personJob: '',
        personTeam: '',
        personLook: '',
        personSociety: '',
        personFamily: '',
        personEven: '',
        personAbility: '',
        personDisposition: '',
        personLev: ''
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
    addUser () {
      let postData = this.qs.stringify({
        personName: this.ruleForm.personName,
        personRole: this.ruleForm.personRole,
        personSex: this.ruleForm.personSex,
        personAge: this.ruleForm.personAge,
        personRace: this.ruleForm.personRace,
        personJob: this.ruleForm.personJob,
        personTeam: this.ruleForm.personTeam,
        personLook: this.ruleForm.personLook,
        personSociety: this.ruleForm.personSociety,
        personFamily: this.ruleForm.personFamily,
        personEven: this.ruleForm.personEven,
        personAbility: this.ruleForm.personAbility,
        personDisposition: this.ruleForm.personDisposition,
        personLev: this.ruleForm.personLev
      })
      let postData1 = this.qs.stringify({
        page: 1
      })
      this.axios({
        method: 'post',
        url: 'http://127.0.0.1:8888/person/insertPerson',
        data: postData
      }).then(response => {
        this.axios({
          method: 'post',
          url: 'http://127.0.0.1:8888/person/findByPage',
          data: postData1
        }).then(response => {
          this.tableData = response.data
          this.currentPage = 1
          this.$message({
            type: 'success',
            message: '已添加!'
          })
        }).catch(error => {
          console.log(error)
        })
        this.getPages()
        this.cancel()
        console.log(response)
      }).catch(error => {
        console.log(error)
      })
    },
    updatePerson () {
      let postData = this.qs.stringify({
        personId: this.ruleForm.personId,
        personName: this.ruleForm.personName,
        personRole: this.ruleForm.personRole,
        personSex: this.ruleForm.personSex,
        personAge: this.ruleForm.personAge,
        personRace: this.ruleForm.personRace,
        personJob: this.ruleForm.personJob,
        personTeam: this.ruleForm.personTeam,
        personLook: this.ruleForm.personLook,
        personSociety: this.ruleForm.personSociety,
        personFamily: this.ruleForm.personFamily,
        personEven: this.ruleForm.personEven,
        personAbility: this.ruleForm.personAbility,
        personDisposition: this.ruleForm.personDisposition,
        personLev: this.ruleForm.personLev
      })
      this.axios({
        method: 'post',
        url: 'http://127.0.0.1:8888/person/updateById',
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
      this.axios.post('http://127.0.0.1:8888/person/count').then(response => {
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
        url: 'http://127.0.0.1:8888/person/findByPage',
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
          personId: row.personId
        })
        this.axios({
          method: 'post',
          url: 'http://127.0.0.1:8888/person/deleteById',
          data: postData
        }).then(response => {
          this.getPages()
          this.currentPage = 1
          this.axios.post('http://127.0.0.1:8888/person/findByPage').then(response => {
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
        personName: this.search
      })
      console.log(postData)
      this.axios({
        method: 'post',
        url: 'http://127.0.0.1:8888/person/getByName',
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
    let postData = this.qs.stringify({
      page: 1
    })
    this.axios({
      method: 'post',
      url: 'http://127.0.0.1:8888/person/findByPage',
      data: postData
    }).then(response => {
      this.tableData = response.data
    }).catch(error => {
      console.log(error)
    })
    this.axios.post('http://127.0.0.1:8888/person/count').then(response => {
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
