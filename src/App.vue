<!--
 * @Author: harry
 * @Date: 2020-11-03 00:36:11
 * @LastEditTime: 2020-11-03 04:05:47
 * @LastEditors: harry
 * @Description: In User Settings Edit
 * @FilePath: \demo5\src\App.vue
-->
<template>
  <div id="app">
    <!--------------------------
    --      请求结果           --  
    ---------------------------->
    <div class="left">
      <result :result="result" />
    </div>
    <!--------------------------
    --      请求历史           --  
    ---------------------------->
    <div class="right">
      <history :history-list="historyList" />
    </div>
  </div>
</template>

<script>
import result from "@/components/result";
import history from "@/components/history";
import axios from "axios";
export default {
  name: "App",
  components: { result, history },
  data() {
    return {
      result: {},
      historyList: [],
      intalval: ""
    };
  },
  created() {
    this.setIntervalFn(this.getRequst);
  },
  methods: {
    getRequst() {
      //简易请求axios
      let startTime = new Date();
      axios
        .request({
          url: "https://api.github.com/?time=" + new Date().getTime(),
          timeout: 10000,
          method: "GET"
        })
        .then(res => {
          this.result = this.translateDataForRender(
            res,
            this.getTime(startTime),
            true,
            startTime
          );
          this.historyList.push(this.result);
        })
        .catch(err => {
          this.result = this.translateDataForRender(
            err.response,
            this.getTime(startTime),
            false,
            startTime
          );
          this.historyList.push(this.result);
        });
    },
    //定时执行接口。
    setIntervalFn(fnHandel) {
      setInterval(() => {
        setTimeout(() => {
          fnHandel();
        }, 0);
      }, 5000);
    },
    //格式化请求结果。
    translateDataForRender(data, time, successOrfail, startTime) {
      return {
        data: successOrfail ? data.data : data.data.message,
        url: data.config.url,
        requestTime: time,
        code: data.status,
        time: startTime
      };
    },
    getTime(startTime) {
      let endTime = new Date();
      return endTime.getTime() - startTime.getTime() + "ms";
    }
  }
};
</script>

<style lang="scss" scope>
* {
  box-sizing: border-box;
}
html,
body {
  height: 100%;
  width: 100%;
  overflow: hidden;
}
#app {
  font-size: 12px;
  font-family: '微软雅黑';
  height: 100%;
  width: 100%;
  overflow: hidden;
}
.left {
  float: left;
  width: 50%;
  height: 100%;
  padding: 20px;
}
.right {
  float: right;
  width: 50%;
  height: 100%;
  padding: 20px;
}
</style>
