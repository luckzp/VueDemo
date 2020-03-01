<template>
  <div>
    <navSimple></navSimple>
    <div class="login">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="login-form"
      >
        <h2 class="text">用户登录</h2>
        <el-form-item label="账号" prop="userName">
          <el-col :span="18">
            <el-input v-model.number="ruleForm.userName" placeholder="请输入用户名"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="密码" prop="pass" style="margin-top:20px">
          <el-col :span="18">
            <el-input
              type="password"
              v-model="ruleForm.pass"
              autocomplete="off"
              placeholder="请输入密码"
            ></el-input>
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-col :span="18">
            <el-button class="btn" @click="submitForm('ruleForm')">提交</el-button>
          </el-col>
        </el-form-item>
      </el-form>
    </div>
    <footer1></footer1>
  </div>
</template>  

<script>
import footer1 from "../components/footer";
import navSimple from "../common/nav-simple";

export default {
  components: {
    footer1,
    navSimple
  },
  data() {
    var checkUserName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请输入账号"));
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    return {
      ruleForm: {
        pass: "",
        userName: ""
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        userName: [{ validator: checkUserName, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  }
};
</script>  
<style scoped>
@import "../common/layout.css";
</style>
<style>
.login {
  background: #c60023;
  padding-top: 100px;
  padding-bottom: 100px;
}
.login-form {
  width: 500px;
  margin: 0 auto;
  padding-top: 50px;
  padding-bottom: 50px;
  background: #fff;
  text-align: center;
}
.login-form .text {
  margin-bottom: 30px;
  color: #3c3c3c;
  font-weight: bold;
}
.login-form .btn {
  margin-top: 20px;
  width: 100%;
}
</style>