<template>
  <div>
    <navTop></navTop>
    <header1></header1>
    <div class="w">
      <div class="banner-area">
        <ul class="keywords-list">
          <li class="keywords-item" v-for="(items, index) in category" :key="index">
            <a class="link" target="_blank" href="./list.html?"
              v-for="(item, indexa) in items" :key="indexa">{{ item }}</a>
          </li>
        </ul>
        <banner></banner>
      </div>

      <div class="w">
        <div class="floor-wrap" v-for="(good, i) in goods" :key="i">
          <h1 class="floor-title">{{ good.title }}</h1>
          <ul class="floor-list">
            <li class="floor-item" v-for="(item, j) in good.names" :key="j">
              <a href="./list.html?categoryId=100006">
                <span class="floor-text">{{ item }}</span>
                <img
                  class="floor-img"
                  :src="getImgUrl(i + 1, j + 1)"
                  :alt="getAlt(item)"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <footer1></footer1>
  </div>
</template>  

<script>
import footer1 from "../components/footer";
import header1 from "../components/header";
import navTop from "../components/nav-top";
import banner from "../components/banner";
export default {
  components: {
    footer1,
    header1,
    navTop,
    banner,
  },
  data() {
    return {
      msg: "hello vue!",
      category: [
        ["手机", "数码"],
        ["电脑", "办公配件"],
        ["电视", "空调", "冰箱", "洗衣机"],
        ["厨卫家电", "小家电"],
        ["家具", "家装"],
        ["厨卫家电", "小家电"],
        ["个护化妆", "清洁用品", "纸品"],
        ["母婴用品", "儿童玩具", "童装童鞋"],
        ["鞋靴", "箱包", "钟表", "珠宝"],
        ["图书", "音像", "电子书"],
      ],
      goods: [
        {
          title: "F1 家用电器",
          names: ["双开门冰箱", "电视", "洗衣机", "空调"],
        },
        {
          title: "F2 数码3C",
          names: ["笔记本电脑", "手机", "平板电脑", "数码相机"],
        },
        {
          title: "F3 服装箱包",
          names: ["女装", "帽子专区", "旅行箱", "手提包"],
        },
        {
          title: "F4 食品生鲜",
          names: ["最爱零食", "生鲜", "半成品菜", "速冻专区"],
        },
        {
          title: "F5 酒水饮料",
          names: ["白酒", "红酒", "饮料", "调制鸡尾酒"],
        },
      ],
    };
  },
  methods: {
    getImgUrl(i, j) {
      return require("@/assets/image/floor/floor" + i + "-" + j + ".jpg");
    },
    getAlt(item) {
      return item;
    },
  },
};
</script>  
<style scoped>
@import "../common/layout.css";
</style>
<style>
.grid-content {
  min-height: 36px;
}

/* keywords-list */
.keywords-list {
  height: 350px;
  padding: 10px 0;
  margin-right: 10px;
  background: #666;
  color: #fff;
  float: left;
}
.keywords-list .keywords-item {
  padding-left: 10px;
  height: 35px;
  line-height: 35px;
  font-size: 14px;
}
.keywords-list .keywords-item:hover {
  background: #999;
}
.keywords-list .keywords-item .link {
  margin-right: 6px;
  color: #fff;
}
.keywords-list .keywords-item .link:hover {
  color: #c60023;
}

.floor-wrap .floor-title {
  height: 50px;
  line-height: 50px;
  color: #d58717;
  font-weight: normal;
  font-size: 20px;
  border-bottom: 1px solid #d58717;
}
/* 更改各楼层标题颜色 */
.floor-wrap:nth-child(2) .floor-title {
  color: #3b838c;
  border-bottom: 1px solid #3b838c;
}
.floor-wrap:nth-child(3) .floor-title {
  color: #a93931;
  border-bottom: 1px solid #a93931;
}
.floor-wrap:nth-child(4) .floor-title {
  color: #488bad;
  border-bottom: 1px solid #488bad;
}
.floor-wrap:nth-child(5) .floor-title {
  color: #642663;
  border-bottom: 1px solid #642663;
}
.floor-wrap .floor-list {
  margin-right: -20px;
  overflow: hidden;
}
.floor-wrap .floor-list .floor-item {
  position: relative;
  width: 255px;
  height: 260px;
  margin: 15px 20px 15px 0;
  float: left;
  cursor: pointer;
  background: #fff;
}
.floor-wrap .floor-list .floor-item:hover {
  box-shadow: 1px 1px 7px #ddd;
}
.floor-wrap .floor-list .floor-item .floor-text {
  position: absolute;
  top: 12px;
  left: 20px;
  font-size: 16px;
  color: #555;
}
.floor-wrap .floor-list .floor-item .floor-img {
  position: absolute;
  right: 15px;
  bottom: 10px;
  width: 80%;
  height: 75%;
  border: none;
}
</style>