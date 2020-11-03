<!--
 * @Author: harry
 * @Date: 2020-11-03 00:47:29
 * @LastEditTime: 2020-11-03 02:23:38
 * @LastEditors: harry
 * @Description: In User Settings Edit
 * @FilePath: \demo5\src\components\history\index.vue
-->
<template>
  <div class="result">
    <p>响应结果：</p>
    <p>{{ result.data }}</p>
    <p>请求时间：</p>
    <p>{{ result.time }}</p>
  </div>
</template>
<script>
export default {
  props: {
    result: {
      type: Object,
      default: () => { }
    }
  }
};
</script>
<style lang="scss" scoped></style>
