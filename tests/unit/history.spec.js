/*
 * @Author:harry
 * @Date: 2020-11-03 03:50:21
 * @LastEditTime: 2020-11-03 09:19:14
 * @LastEditors: harry
 * @Description: In User Settings Edit
 * @FilePath: \demo8\tests\unit\example.spec.js
 */
import { shallowMount } from "@vue/test-utils";
import history from "@/components/history";

describe("history", () => {
  it("组件被渲染后，title名字无变化", () => {
    const wrapper = shallowMount(history);
    expect(wrapper.find('.title').text()).toEqual('请求历史')
  });
  it("修改history值，列表应该被渲染", () => {
    const wrapper = shallowMount(history, {
      props: { historyList: [{}] }
    });
    expect(wrapper.vm.historyList.length).toEqual(1)
  });
  it("每隔5秒，数据被刷新", () => {
    const wrapper = shallowMount(history);
    setTimeout(() => {
      expect(wrapper.vm.historyList.length).toEqual(5)
    }, 26000);
  })
});
