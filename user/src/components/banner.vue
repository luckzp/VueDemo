<template>
  <div class="banner-con">
    <el-carousel indicator-position="outside" :height="imgHeight+'px'">
      <el-carousel-item v-for="(img, index) in imgurl" :key="index">
        <img ref="image" style="width:100%;" v-bind:src="img.url" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {

  data() {
    return {
      imgurl: [
        { url: require("../assets/image/banner/banner1.jpg") },
        { url: require("../assets/image/banner/banner2.jpg") },
        { url: require("../assets/image/banner/banner3.jpg") },
        { url: require("../assets/image/banner/banner4.jpg") }
      ],
      imgHeight: ""
    };
  },
  methods: {
    imgLoad() {
      this.$nextTick(function() {
        // 获取窗口宽度*图片的比例，定义页面初始的轮播图高度
        // this.imgHeight = document.body.clientWidth*1/4
        this.imgHeight = 370;
      });
    }
  },
  mounted() {
    this.imgLoad();
    // 监听窗口变化，使得轮播图高度自适应图片高度
    window.addEventListener("resize", () => {
      this.imgHeight = this.$refs.image[0].height;
      console.log(this.imgHeight);
    });
  }
};
</script>  

<style>
.banner-con {
  height: 370px;
  background: #eee;
}
.banner-con .img {
  width: 100%;
}
</style>