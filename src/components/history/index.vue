<!--
 * @Author: harry
 * @Date: 2020-11-03 00:47:29
 * @LastEditTime: 2020-11-03 04:29:59
 * @LastEditors: harry
 * @Description: In User Settings Edit
 * @FilePath: \demo5\src\components\history\index.vue
-->
<template>
  <div class="history">
    <p class="title">
      请求历史
    </p>
    <div class="scroll">
      <table class="table"
             border="1"
             cellpadding="0"
             cellspacing="0">
        <th>请求路径</th>
        <th>请求时长</th>
        <th>状态</th>
        <tbody class="body">
          <tr v-for="(items, index) in historyList"
              :key="index">
            <td>{{ items.url }}</td>
            <td>{{ items.requestTime }}</td>
            <td>
              <status :status="items.code" />{{ items.code }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import status from "@/components/status";
export default {
  components: { status },
  props: {
    historyList: {
      type: Array,
      default: () => []
    }
  }
};
</script>
<style lang="scss" scoped>
.history {
  height: 100%;
  width: 100%;
  .scroll {
    height: 90%;
    overflow-y: auto;
  }
}
.table {
  width: 100%;
  th {
    background: grey;
    padding: 3px;
    color: white;
  }
  td {
    text-align: center;
    padding: 3px;
  }
}
</style>
