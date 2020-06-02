<template>
  <div class="table">
    <div class="row">
      <template v-for="n in 4">
        <div
          class="cell"
          :class="{'cell2' :arr[n].value==2, 'cell4' :arr[n].value==4, 'cell8' :arr[n].value==8,
          'cell16' :arr[n].value==16,'cell32' :arr[n].value==32,'cell64' :arr[n].value==64,
          'cell128' :arr[n].value==128,'cell256' :arr[n].value==256}"
          v-on:click="greet(arr[n])"
        >
          <template v-if="arr[n].value != 0">{{arr[n].value}}</template>
        </div>
      </template>
    </div>
    <div class="row">
      <template v-for="n in 8" v-if="n>4">
        <div
          class="cell"
          :class="{'cell2' :arr[n].value==2, 'cell4' :arr[n].value==4, 'cell8' :arr[n].value==8,
          'cell16' :arr[n].value==16,'cell32' :arr[n].value==32,'cell64' :arr[n].value==64,
          'cell128' :arr[n].value==128,'cell256' :arr[n].value==256}"
          v-on:click="greet(arr[n])"
        >
          <template v-if="arr[n].value != 0">{{arr[n].value}}</template>
        </div>
      </template>
    </div>
    <div class="row">
      <template v-for="n in 12" v-if="n>8">
        <div
          class="cell"
          :class="{'cell2' :arr[n].value==2, 'cell4' :arr[n].value==4, 'cell8' :arr[n].value==8,
          'cell16' :arr[n].value==16,'cell32' :arr[n].value==32,'cell64' :arr[n].value==64,
          'cell128' :arr[n].value==128,'cell256' :arr[n].value==256}"
          v-on:click="greet(arr[n])"
        >
          <template v-if="arr[n].value != 0">{{arr[n].value}}</template>
        </div>
      </template>
    </div>
    <div class="row">
      <template v-for="n in 16" v-if="n>12">
        <div
          class="cell"
          :class="{'cell2' :arr[n].value==2, 'cell4' :arr[n].value==4, 'cell8' :arr[n].value==8,
          'cell16' :arr[n].value==16,'cell32' :arr[n].value==32,'cell64' :arr[n].value==64,
          'cell128' :arr[n].value==128,'cell256' :arr[n].value==256}"
          v-on:click="greet(arr[n])"
        >
          <template v-if="arr[n].value != 0">{{arr[n].value}}</template>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arr: []
    };
  },
  created() {
    this.getNumber();
    var that = this;
    document.onkeyup = function(ev) {
      //向上 =38
      if (ev.keyCode == 38) {
        var moveFlag = 0;
        for (var i = 5; i <= 16; i++) {
          var index = i - 4;
          if (that.arr[i].status == 1) {
            if (
              that.arr[index].status == 1 &&
              that.arr[index].value == that.arr[i].value
            ) {
              that.arr[index].value = 2 * that.arr[i].value;
              that.$set(that.arr, index, that.arr[index]);
              that.arr[i].value = 0;
              that.arr[i].status = 0;
              that.$set(that.arr, i, that.arr[i]);
              moveFlag = 1;
            } else if (that.arr[index].status == 0) {
              while (that.arr[index].status == 0 && index > 4) {
                index = index - 4;
              }
              if (that.arr[index].status == 0) {
                that.arr[index].status = 1;
                that.arr[index].value = that.arr[i].value;
                that.$set(that.arr, index, that.arr[index]);
                that.arr[i].value = 0;
                that.arr[i].status = 0;
                that.$set(that.arr, i, that.arr[i]);
                moveFlag = 1;
              } else {
                if (that.arr[index].value == that.arr[i].value) {
                  that.arr[index].value = 2 * that.arr[i].value;
                  that.$set(that.arr, index, that.arr[index]);
                  that.arr[i].value = 0;
                  that.arr[i].status = 0;
                  that.$set(that.arr, i, that.arr[i]);
                  moveFlag = 1;
                } else {
                  index = index + 4;
                  that.arr[index].status = 1;
                  that.arr[index].value = that.arr[i].value;
                  that.$set(that.arr, index, that.arr[index]);
                  that.arr[i].value = 0;
                  that.arr[i].status = 0;
                  that.$set(that.arr, i, that.arr[i]);
                  moveFlag = 1;
                }
              }
            }
          }
        }
        if (moveFlag == 1) {
          var random = Math.round(Math.random() * (16 - 1)) + 1;
          while (that.arr[random].status == 1) {
            random = Math.round(Math.random() * (16 - 1)) + 1;
          }
          that.arr[random].status = 1;
          that.arr[random].value = 2;
          that.$set(that.arr, random, that.arr[random]);
        }
      }

      //下 = 40
      if (ev.keyCode == 40) {
        var moveFlag = 0;
        for (var i = 12; i >= 1; i--) {
          var index = i + 4;
          if (that.arr[i].status == 1) {
            if (
              that.arr[index].status == 1 &&
              that.arr[index].value == that.arr[i].value
            ) {
              that.arr[index].value = 2 * that.arr[i].value;
              that.$set(that.arr, index, that.arr[index]);
              that.arr[i].value = 0;
              that.arr[i].status = 0;
              that.$set(that.arr, i, that.arr[i]);
              moveFlag = 1;
            } else if (that.arr[index].status == 0) {
              while (that.arr[index].status == 0 && index < 13) {
                index = index + 4;
              }
              if (that.arr[index].status == 0) {
                that.arr[index].status = 1;
                that.arr[index].value = that.arr[i].value;
                that.$set(that.arr, index, that.arr[index]);
                that.arr[i].value = 0;
                that.arr[i].status = 0;
                that.$set(that.arr, i, that.arr[i]);
                moveFlag = 1;
              } else {
                if (that.arr[index].value == that.arr[i].value) {
                  that.arr[index].value = 2 * that.arr[i].value;
                  that.$set(that.arr, index, that.arr[index]);
                  that.arr[i].value = 0;
                  that.arr[i].status = 0;
                  that.$set(that.arr, i, that.arr[i]);
                  moveFlag = 1;
                } else {
                  index = index - 4;
                  that.arr[index].status = 1;
                  that.arr[index].value = that.arr[i].value;
                  that.$set(that.arr, index, that.arr[index]);
                  that.arr[i].value = 0;
                  that.arr[i].status = 0;
                  that.$set(that.arr, i, that.arr[i]);
                  moveFlag = 1;
                }
              }
            }
          }
        }
        if (moveFlag == 1) {
          var random = Math.round(Math.random() * (16 - 1)) + 1;
          while (that.arr[random].status == 1) {
            random = Math.round(Math.random() * (16 - 1)) + 1;
          }
          that.arr[random].status = 1;
          that.arr[random].value = 2;
          that.$set(that.arr, random, that.arr[random]);
        }
      }

      //右
      if (ev.keyCode == 39) {
        var moveFlag = 0;
        for (var i = 15; i >= 1; i--) {
          if (i == 4 || i == 8 || i == 12) {
            continue;
          }
          var index = i + 1;
          if (that.arr[i].status == 1) {
            if (
              that.arr[index].status == 1 &&
              that.arr[index].value == that.arr[i].value
            ) {
              that.arr[index].value = 2 * that.arr[i].value;
              that.$set(that.arr, index, that.arr[index]);
              that.arr[i].value = 0;
              that.arr[i].status = 0;
              that.$set(that.arr, i, that.arr[i]);
              moveFlag = 1;
            } else if (that.arr[index].status == 0) {
              while (
                that.arr[index].status == 0 &&
                index != 4 &&
                index != 8 &&
                index != 12 &&
                index != 16
              ) {
                index = index + 1;
              }
              if (that.arr[index].status == 0) {
                that.arr[index].status = 1;
                that.arr[index].value = that.arr[i].value;
                that.$set(that.arr, index, that.arr[index]);
                that.arr[i].value = 0;
                that.arr[i].status = 0;
                that.$set(that.arr, i, that.arr[i]);
                moveFlag = 1;
              } else {
                if (that.arr[index].value == that.arr[i].value) {
                  that.arr[index].value = 2 * that.arr[i].value;
                  that.$set(that.arr, index, that.arr[index]);
                  that.arr[i].value = 0;
                  that.arr[i].status = 0;
                  that.$set(that.arr, i, that.arr[i]);
                  moveFlag = 1;
                } else {
                  index = index - 1;
                  that.arr[index].status = 1;
                  that.arr[index].value = that.arr[i].value;
                  that.$set(that.arr, index, that.arr[index]);
                  that.arr[i].value = 0;
                  that.arr[i].status = 0;
                  that.$set(that.arr, i, that.arr[i]);
                  moveFlag = 1;
                }
              }
            }
          }
        }
        if (moveFlag == 1) {
          var random = Math.round(Math.random() * (16 - 1)) + 1;
          while (that.arr[random].status == 1) {
            random = Math.round(Math.random() * (16 - 1)) + 1;
          }
          that.arr[random].status = 1;
          that.arr[random].value = 2;
          that.$set(that.arr, random, that.arr[random]);
        }
      }

      //左 = 37
      if (ev.keyCode == 37) {
        var moveFlag = 0;
        for (var i = 2; i <= 16; i++) {
          if (i == 5 || i == 9 || i == 13) {
            continue;
          }
          var index = i - 1;
          if (that.arr[i].status == 1) {
            if (
              that.arr[index].status == 1 &&
              that.arr[index].value == that.arr[i].value
            ) {
              that.arr[index].value = 2 * that.arr[i].value;
              that.$set(that.arr, index, that.arr[index]);
              that.arr[i].value = 0;
              that.arr[i].status = 0;
              that.$set(that.arr, i, that.arr[i]);
              moveFlag = 1;
            } else if (that.arr[index].status == 0) {
              while (
                that.arr[index].status == 0 &&
                index != 1 &&
                index != 5 &&
                index != 9 &&
                index != 13
              ) {
                index = index - 1;
              }
              if (that.arr[index].status == 0) {
                that.arr[index].status = 1;
                that.arr[index].value = that.arr[i].value;
                that.$set(that.arr, index, that.arr[index]);
                that.arr[i].value = 0;
                that.arr[i].status = 0;
                that.$set(that.arr, i, that.arr[i]);
                moveFlag = 1;
              } else {
                if (that.arr[index].value == that.arr[i].value) {
                  that.arr[index].value = 2 * that.arr[i].value;
                  that.$set(that.arr, index, that.arr[index]);
                  that.arr[i].value = 0;
                  that.arr[i].status = 0;
                  that.$set(that.arr, i, that.arr[i]);
                  moveFlag = 1;
                } else {
                  index = index + 1;
                  that.arr[index].status = 1;
                  that.arr[index].value = that.arr[i].value;
                  that.$set(that.arr, index, that.arr[index]);
                  that.arr[i].value = 0;
                  that.arr[i].status = 0;
                  that.$set(that.arr, i, that.arr[i]);
                  moveFlag = 1;
                }
              }
            }
          }
        }
        if (moveFlag == 1) {
          var random = Math.round(Math.random() * (16 - 1)) + 1;
          while (that.arr[random].status == 1) {
            random = Math.round(Math.random() * (16 - 1)) + 1;
          }
          that.arr[random].status = 1;
          that.arr[random].value = 2;
          that.$set(that.arr, random, that.arr[random]);
        }
      }

      if (ev.keyCode >= 37 && ev.keyCode <= 40) {
        var isFull = true;
        for (var i = 1; i < that.arr.length; i++) {
          if (that.arr[i] == null || that.arr[i].status == 0) {
            isFull = false;
            break;
          }
        }
        if (isFull) {
          var isSame = false;
          for (var i = 1; i < that.arr.length; i++) {
            var isUpSame = i - 4 >= 1 && that.arr[i].value == that.arr[i - 4].value;
            var isDownSame = i + 4 <= 16 && that.arr[i].value == that.arr[i + 4].value;
            var isLeftSame = i - 1 >= 1 && that.arr[i].value == that.arr[i - 1].value;
            var isRightSame = i + 1 <= 16 && that.arr[i].value == that.arr[i + 1].value;
            if (isUpSame || isDownSame || isLeftSame || isRightSame) {
              isSame = true;
              break;
            }
          }
            if (!isSame) {
              alert("Game Over!");
            }
          }
      }
    };
  },

  methods: {
    greet: function(data) {
      var id = data.id;
      console.log(data);

      this.arr[id].status = 1;
      this.arr[id].value = 1 + this.arr[id].value;

      this.$set(this.arr, id, this.arr[id]);
    },
    getNumber() {
      this.arr = new Array(16);
      var random1 = Math.round(Math.random() * (16 - 1)) + 1;
      var random2 = 0;
      while (random2 == 0 || random1 == random2) {
        random2 = Math.ceil(Math.random() * (16 - 1) + 1);
      }
      for (let i = 1; i <= 16; i++) {
        var obj = new Object();
        obj.id = i;
        obj.status = 0;
        obj.value = 0;
        if (i == random1) {
          obj.value = 2;
          obj.status = 1;
        } else if (i == random2) {
          obj.value = 4;
          obj.status = 1;
        }
        this.arr[i] = obj;
      }
    }
  }
};
</script>  
    <style>
.table {
  width: 500px;
  height: 500px;
  margin: 0 auto;
  background: #bbada0;
  border-radius: 6px;
  padding: 15px;
}
.table .row {
  margin-bottom: 15px;
  overflow: hidden;
}
.cell {
  width: 113.75px;
  height: 113.75px;
  float: left;
  border-radius: 3px;
  background: rgba(238, 228, 218, 0.35);
  text-align: center;
  font-weight: bold;
  font-size: 55px;
  line-height: 113.75px;
}

.cell:not(:last-child) {
  margin-right: 15px;
}
.cell2 {
  background: #eee4da;
  color: #776e65;
}
.cell4 {
  background: #ede0c8;
  color: #776e65;
}
.cell8 {
  color: #f9f6f2;
  background: #f2b179;
}
.cell16 {
  color: #f9f6f2;
  background: #f59563;
}
.cell32 {
  color: #f9f6f2;
  background: #f67c5f;
}
.cell64 {
  color: #f9f6f2;
  background: #f65e3b;
}
.cell128 {
  color: #f9f6f2;
  background: #edcf72;
}
.cell256 {
  color: #f9f6f2;
  background: #edcc61;
}
</style>
