<template>
  <div class="body">
    <div class="container">
      <div class="input-submit">
        <input
          v-model="address"
          placeholder="address"
          class="input-address"
        /><input v-model="port" placeholder="port" class="input-port" />

        <el-button
          type="primary"
          class="subit-btn"
          @click="cancel(address, port)"
          >断开</el-button
        >
        <el-button
          type="primary"
          class="subit-btn"
          @click="connect(address, port)"
          >连接</el-button
        >
      </div>
      <div class="task-list">
        <el-table :data="tableData" style="width: 100%" :show-header="false">
          <el-table-column prop="name" width="580"></el-table-column>
          <el-table-column align="right">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)"
                >编辑</el-button
              >
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
      <!-- 更新提示框 -->
      <el-dialog title="提示" :visible.sync="delVisible" width="300px" center>
        修改为:
        <input
          v-model="editObj.name"
          placeholder="请输入内容"
          class="input-area"
        />
        <span slot="footer" class="dialog-footer">
          <el-button @click="delVisible = false">取 消</el-button>
          <el-button type="primary" @click="handleConfirm()">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>  

<script>

export default {
  data() {
    return {
      address: "",
      port: "",
      tableData: [],
      delVisible: false,
      editObj: {
        name: "",
      },
      lastIndex: "",
    };
  },
  methods: {
    connect(address, port) {

      var host = "172.31.12.119:13188";
      
    },
    handleEdit(index, row) {
      this.delVisible = true;
      this.lastIndex = index;
      this.editObj.name = row.name;
    },
    handleConfirm() {
      let _index = this.lastIndex;

      this.tableData[_index].name = this.editObj.name;
      this.delVisible = false;
    },
    handleDelete(index, row) {
      console.log(index, row);
      this.tableData.splice(index, 1);
    },
  },
};
</script>

<style>
.container {
  max-width: 900px;
  margin: 0 auto;
}
.title {
  text-align: center;
  color: white;
  margin-bottom: 10px;
}
.input-submit {
  margin-top: 20px;
  margin-bottom: 20px;
}
.input-address {
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: none;
  padding: 0 15px;
  width: 50%;
}
.input-port {
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: none;
  padding: 0 15px;
  width: 20%;
}
.subit-btn {
  float: right;
  margin-right: 5px;
}
</style>