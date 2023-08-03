<!--<template>-->
<!--&lt;!&ndash;  <div>&ndash;&gt;-->
<!--&lt;!&ndash;    user&ndash;&gt;-->
<!--&lt;!&ndash;  </div>&ndash;&gt;-->
<!--  <div class="form-group" style="margin-left: 4.6%">-->
<!--    <table style="border-collapse: separate;border-spacing: 10px" v-for="(item, index) in tableData">-->
<!--      <thead>-->
<!--      <tr>-->
<!--        <td><span>选择银行：</span></td>-->
<!--        <td>-->
<!--          <select class="selectpicker show-tick form-control" style="width: 95%;">-->
<!--            <option v-for="bankType in bankTypes" :value="bankType.value">{{bankType.text}}</option>-->
<!--          </select>-->
<!--        </td>-->
<!--        <td><span>输入限额：</span></td>-->
<!--        <td><input class="form-control" type="text" placeholder="单笔限额" style="width: 95%;"/></td>-->
<!--        <td><span>费率类型：</span></td>-->
<!--        <td>-->
<!--          <select class="selectpicker show-tick form-control" v-model="item.feeType" style="width: 95%;">-->
<!--            <option v-for="feeType in feeTypes" :value="feeType.value">{{feeType.text}}</option>-->
<!--          </select>-->
<!--        </td>-->
<!--        <td><a class="btn btn-primary" @click="tableAdd"><i class="fa fa-plus"></i>&nbsp;新增</a></td>-->
<!--        <td><a class="btn btn-primary" @click="tableRemove(index)"><i class="fa fa-trash-o"></i>&nbsp;删除</a></td>-->
<!--      </tr>-->
<!--      <tr v-if="item.feeType=='1'">-->
<!--        <td><span>固定金额：</span></td>-->
<!--        <td>-->
<!--          <input class="form-control" type="text" v-model="item.amtRate" placeholder="元/笔" style="width: 95%; display: inline"/>-->
<!--          <label><span style="color: red; display: inline">*</span></label>-->
<!--        </td>-->
<!--      </tr>-->
<!--      <tr v-if="item.feeType=='2'">-->
<!--        <td><span>固定费率：</span></td>-->
<!--        <td>-->
<!--          <input class="form-control" type="text" v-model="item.amtRate" placeholder="%/笔" style="width: 95%; display: inline"/>-->
<!--          <label><span style="color: red; display: inline">*</span></label>-->
<!--        </td>-->
<!--        <td><span>最小：</span></td>-->
<!--        <td><input class="form-control" type="text" v-model="item.minAmt" placeholder="元/笔" style="width: 95%;"/></td>-->
<!--        <td><span>最大：</span></td>-->
<!--        <td><input class="form-control" type="text" v-model="item.maxAmt" placeholder="元/笔" style="width: 95%;"/></td>-->
<!--      </tr>-->
<!--      <tr v-if="item.feeType=='3'">-->
<!--        <td><span> </span></td>-->
<!--        <td><span>阶梯金额</span></td>-->
<!--        <td><span>最小：</span></td>-->
<!--        <td><input class="form-control" type="text" v-model="item.minAmt" placeholder="元/笔" style="width: 95%;"/></td>-->
<!--        <td><span>最大：</span></td>-->
<!--        <td><input class="form-control" type="text" v-model="item.maxAmt" placeholder="元/笔" style="width: 95%;"/></td>-->
<!--      </tr>-->
<!--      <tr v-if="item.feeType=='3'" v-for="(data, i) in item.trData">-->
<!--        <td><span> </span></td>-->
<!--        <td><span> </span></td>-->
<!--        <td><span>区间：</span></td>-->
<!--        <td>-->
<!--          <input class="form-control" type="text" v-model="data.below" placeholder="****元以下" style="width: 95%; display: inline"/>-->
<!--          <label><span style="color: red; display: inline">*</span></label>-->
<!--        </td>-->
<!--        <td><span>费率：</span></td>-->
<!--        <td>-->
<!--          <input class="form-control" type="text" v-model="data.single" placeholder="**元/笔" style="width: 95%; display: inline"/>-->
<!--          <label><span style="color: red; display: inline">*</span></label>-->
<!--        </td>-->
<!--        <td><a class="btn btn-primary" @click="trAdd(index)">&nbsp;新增</a></td>-->
<!--        <td><a class="btn btn-primary" @click="trRemove(index, i)">&nbsp;删除</a></td>-->
<!--      </tr>-->
<!--      <tr v-if="item.feeType=='3'">-->
<!--        <td><span> </span></td>-->
<!--        <td><span> </span></td>-->
<!--        <td><span>其他：</span></td>-->
<!--        <td>-->
<!--          <input class="form-control" type="text" placeholder="**元/笔" v-model="item.other" style="width: 95%; display: inline"/>-->
<!--          <label><span style="color: red; display: inline">*</span></label>-->
<!--        </td>-->
<!--      </tr>-->
<!--      </thead>-->
<!--    </table>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  name: "User",-->
<!--  data(){-->
<!--    //银行类型-->
<!--    bankTypes: [-->
<!--      {text: '招商银行', value: '1'}-->
<!--    ],-->
<!--    //费率类型-->
<!--    feeTypes: [-->
<!--      {text: '固定金额', value: '1'},-->
<!--      {text: '固定费率', value: '2'},-->
<!--      {text: '阶梯区间', value: '3'}-->
<!--    ],-->
<!--    //表格数据-->
<!--    tableData: [{-->
<!--      index: 0,-->
<!--      feeType: null,-->
<!--      amtRate: null,-->
<!--      minAmt: null,-->
<!--      maxAmt: null,-->
<!--      other: null,-->
<!--      trData: [{index: 0, below: null, single: null}]-->
<!--    }]-->
<!--  },-->
<!--  //自定义方法-->
<!--  methods: {-->
<!--    //查询-->
<!--    query: function () {-->
<!--      vm.reload();-->
<!--    },-->
<!--    //新增表格-->
<!--    tableAdd: function () {-->
<!--      console.log("新增表格之前：" + JSON.stringify(this.tableData));-->
<!--      vm.tableData.push({-->
<!--        index: this.tableData.length,-->
<!--        feeType: null,-->
<!--        amtRate: null,-->
<!--        minAmt: null,-->
<!--        maxAmt: null,-->
<!--        other: null,-->
<!--        trData: [{index: 0, below: null, single: null}]-->
<!--      });-->
<!--      console.log("新增表格之后：" + JSON.stringify(this.tableData));-->
<!--    },-->
<!--    //移除表格  参数为表格索引-->
<!--    tableRemove: function (index) {-->
<!--      console.log("删除表格第" + index + "行");-->
<!--      console.log("删除表格之前：" + JSON.stringify(this.tableData));-->
<!--      if (index === 0) {-->
<!--        alert("第一行无法删除");-->
<!--        return;-->
<!--      }-->
<!--      //从第 index 行删除，删除 1 行-->
<!--      this.tableData.splice(index, 1);-->
<!--      //删除之后，重组索引，不然会出错-->
<!--      console.log("删除表格之后，重组索引之前：" + JSON.stringify(this.tableData));-->
<!--      for (var i in this.tableData) {-->
<!--        this.tableData[i].index = i;-->
<!--      }-->
<!--      console.log("删除表格之后，重组索引之后：" + JSON.stringify(this.tableData));-->
<!--    },-->
<!--    //新增表格行  参数为表格索引-->
<!--    trAdd: function (index) {-->
<!--      console.log("新增表格行之前：" + JSON.stringify(this.tableData[index].trData));-->
<!--      this.tableData[index].trData.push({index: this.tableData[index].trData.length, below: null, single: null});-->
<!--      console.log("新增表格行之后：" + JSON.stringify(this.tableData[index].trData));-->
<!--    },-->
<!--    //移除表格行-->
<!--    trRemove: function (index, i) {-->
<!--      console.log("删除表格行第" + i + "行");-->
<!--      console.log("删除表格行之前：" + JSON.stringify(this.tableData[index].trData));-->
<!--      if (i === 0) {-->
<!--        alert("第一行无法删除");-->
<!--        return;-->
<!--      }-->
<!--      //从第 index 行删除，删除 1 行-->
<!--      this.tableData[index].trData.splice(i, 1);-->
<!--      //删除之后，重组索引，不然会出错-->
<!--      console.log("删除表格行之后，重组索引之前：" + JSON.stringify(this.tableData[index].trData));-->
<!--      for (var j in this.tableData[index].trData) {-->
<!--        this.tableData[index].trData[j].index = j;-->
<!--      }-->
<!--      console.log("删除表格行之后，重组索引之后：" + JSON.stringify(this.tableData[index].trData));-->
<!--    },-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->

<!--</style>-->
