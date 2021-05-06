//此时我们还没有微应用，所以app为空
const apps = [
    /**
   * name: 微应用名称 - 具有唯一性
   * entry: 微应用入口 - 通过该地址加载微应用
   * container: 微应用挂载节点 - 微应用加载完成后将挂载在该节点上
   * activeRule: 微应用触发的路由规则 - 触发路由规则后将加载该微应用
   */
  {
    name: "child",
    entry: "//localhost:10200",
    container: "#frame",
    activeRule: "#/child-vue",
  },
  {
    name: "child-react16",
    entry: "//localhost:7100",
    container: "#frame",
    activeRule: "#/child-react",
  },
]
export default apps