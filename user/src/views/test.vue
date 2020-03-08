<template>


<el-row>
  <el-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></el-col>
</el-row>

</template>

<script>
import { XCircle,XHeader } from "vux";
import { Tabbar, TabbarItem } from "vux";
import { XTable, LoadMore } from "vux";
export default {
  components: {
    XCircle,
    Tabbar,
    TabbarItem,
    XTable,
    LoadMore,
    XHeader
  },
  data() {
    return {
      percent1: 20,
      percent2: 80
    };
  }
};
</script>

<style scoped>
.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>

