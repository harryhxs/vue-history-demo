<!--
 * @Author: harry
 * @Date: 2020-11-03 01:34:20
 * @LastEditTime: 2020-11-03 04:14:05
 * @LastEditors: harry
 * @Description: In User Settings Edit
 * @FilePath: \demo5\src\components\status\index.vue
-->
<template>
  <span class="span"
        :class="status == 200 ? 'success-bg' : 'error-bg'" />
</template>
<script>
export default {
  props: {
    status: {
      type: Number,
      default: 200
    }
  }
};
</script>
<style lang="scss" scoped>
.success-bg {
  background-color: green;
}
.error-bg {
  background-color: red;
}
.span {
  height: 10px;
  width: 10px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 5px;
}
</style>
