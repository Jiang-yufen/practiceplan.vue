<template>
  <div class="plan1">
    <div class="table-header">実施計画</div>
    <div>
      <div class="pageNameClass">Welcome,{{pageName}}</div>
    </div>
    <table class="applyAll">
      <tr>
        <td class="short-cell" rowspan="2">番号</td>
        <td class="short-cell" colspan="4">計画</td>
      </tr>
      <tr>
        <td class="short-cell">実施項目</td>
        <td class="short-cell">評価基準</td>
        <td class="short-cell">評価頻度</td>
        <td class="short-cell">実施時期</td>
      </tr>
      <tr v-for="(item, index) in rowlist" :key="index">
        <td class="td-2" type="index" >
<!--          :prop="'rowlist.'+index+'.bangou'"-->
<!--          v-model="item.bangou"-->
          <input >
<!--            {{(queryParams.pageNum-1)*queryParams.pageSize+scope.$index+1}}-->
        </td>
        <td class="td-2">
            <input type="text" v-model="plJisshiKomokuc" @input="plJisshiKomokucInput">
            <span class="error-message" v-if="plJisshiKomokucF"
            >実施項目1-1は255文字以内で入力してください。</span>
        </td>
        <td class="td-2">
            <input type="text" v-model="plHyoukaKijunc" @input="plHyoukaKijuncInput">
            <span class="error-message" v-if="plHyoukaKijuncF"
            >評価基準1-1は80文字以内で入力してください。
            </span>
        </td>
        <td class="td-2">
            <select v-model="plHyoukaHindoc" class="tdSelect">
              <option value="">選択してください</option>
              <option value="毎月">毎月</option>
              <option value="半年">半年</option>
              <option value="1年後">1年後</option>
            </select>
        </td>
        <td class="td-2">
          <div>
              &nbsp;&nbsp;<select v-model="plJisshiJikiNendoc" class="twoSelect">
                <option value="">選択してください</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
              </select>
          </div>
          <div>
              &nbsp;&nbsp;-&nbsp;&nbsp;
                <select v-model="plJisshiJikiShihankic" class="twoSelect">
                  <option value="">選択してください</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
          </div>
        </td>
        <br>
        <el-button type="primary" @click="deleteBtn(index)">削除</el-button>
      </tr>

      <br>
      <div>
        <el-button
          type="primary"
          @click="addBtn1">追加
        </el-button>
      </div>
    </table>
    <br><br>
    <table class="applyAll">
      <tr>
        <td class="short-cell">No.</td>
        <td class="short-cell">機械装置名称</td>
        <td class="short-cell">導入年度</td>
        <td class="short-cell">導入時期</td>
        <td class="short-cell">海外での購入有無</td>
        <td class="short-cell">単価</td>
        <td class="short-cell">数量</td>
        <td class="short-cell">合計金額</td>
      </tr>
      <tr>
        <td class="td-2">
          <span></span>
        </td>
        <td class="td-2">
          <input type="text" v-model="plName" @input="plNameInput">
          <span class="error-message" v-if="plNameF"
          >機械装置名称1は80文字以内で入力してください。</span>
        </td>
        <td class="td-2">
          <select class="tdSelect" v-model="plDonyuNendo__c"></select>
        </td>
        <td class="td-2">
          <select v-model="plDonyuJiki__c" class="tdSelect">
            <option value="">選択してください</option>
            <option value="1年後">1</option>
            <option value="2年後">2年後</option>
            <option value="3年後">3年後</option>
            <option value="4年後">4年後</option>
            <option value="5年後">5年後</option>
            <option value="6年後">6年後</option>
            <option value="7年後">7年後</option>
            <option value="8年後">8年後</option>
          </select>
        </td>
        <td class="td-2">
          <div class="purchase"
               @click="getPurchaseBefore()"
               :class="purchaseBefore ? 'tick' : ' '"
          ></div>
        </td>
        <td class="td-2">
          <input type="text" v-model="plPrice__c" @input="plPrice__cInput" style="text-align: right">千円
          <span class="error-message" v-if="plPrice__cF"
          >単価1は9,999,999,999以内の数字を入力してください。</span>
        </td>
        <td class="td-2">
          <input type="text" v-model="plAmount__c" @input="plAmount__cInput">
          <span class="error-message" v-if="plAmount__cF"
          >数量1は9999以内の数字を入力してください。</span>
        </td>
        <td class="td-2">{{plTotalAmount__c}}千円</td>
      </tr>
    </table>
    <br>
    <div>
      <el-button
        type="primary"
        icon="el-icon"
        size="mini"
        @click="addBtn2">追加
      </el-button>
    </div>

    <br><br>
    <div>
<!--      <el-button class="buttonSmall" type="primary" @click="deleteBtn">削除</el-button>-->
      <el-button class="buttonBig" type="info" @click="back">戻る</el-button>
      <el-button class="buttonBig" type="warning" @click="save">一時保存</el-button>
      <el-button class="buttonBig" type="success" @click="makesure1">確認内容</el-button>
    </div>
    <br><br>
  </div>
</template>

<script>
export default {
  name: "PracticePlan",
  data(){
    return {
      pageName:'',//個人情報の名前
      bangou:'',//番号
      plJisshiKomokuc:'',//実施項目
      plHyoukaKijunc:'',//評価基準
      plHyoukaHindoc:'',//評価頻度
      plJisshiJikiNendoc:'',//実施時期年度
      plJisshiJikiShihankic:'',//実施時期四半期
      plName:'',//機械装置名称
      plDonyuNendo__c:'',//導入年度
      plDonyuJiki__c:'',//導入時期
      plKaigaiKounyu__c:'',//海外での購入有無
      plPrice__c:'',//単価
      plAmount__c:'',//数量
      plTotalAmount__c:'',//合計金額
      plJisshiKomokucF: false,//実施項目
      plHyoukaKijuncF: false,//評価基準
      plNameF: false,//機械装置名称
      plPrice__cF: false,//単価
      plAmount__cF: false,//数量
      purchaseBefore: false, // 海外での購入有無(控制点击)

      rowlist: [
        {
          bangou: "",
          plJisshiKomokuc: "",
          plHyoukaKijunc: "",
          plHyoukaHindoc: "",
          plJisshiJikiNendoc: "",
        },
      ],
    }
  },

  watch:{
    plPrice__c(){
      this.plTotalAmount__c = Number(this.plPrice__c) * Number(this.plAmount__c);
    },
    plAmount__c(){
      this.plTotalAmount__c = Number(this.plPrice__c) * Number(this.plAmount__c);
    },

    // this.plTotalAmount__c = this.plTotalAmount__c.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
  },

  mounted() {
    let pageName = sessionStorage.getItem("aPLShinseisyaName");
    if (pageName != null) {
      this.pageName = JSON.parse(pageName);
    }

    const saveData = sessionStorage.getItem('planData');
    if (saveData) {
      const planData = JSON.parse(saveData);
      this.bangou = planData.bangou;
      this.plJisshiKomokuc = planData.plJisshiKomokuc;
      this.plHyoukaKijunc = planData.plHyoukaKijunc;
      this.plHyoukaHindoc = planData.plHyoukaHindoc;
      this.plJisshiJikiNendoc = planData.plJisshiJikiNendoc;
      this.plJisshiJikiShihankic = planData.plJisshiJikiShihankic;
      this.plName = planData.plName;
      this.plDonyuNendo__c = planData.plDonyuNendo__c;
      this.plDonyuJiki__c = planData.plDonyuJiki__c;
      this.plKaigaiKounyu__c = planData.plKaigaiKounyu__c;
      this.plPrice__c = planData.plPrice__c;
      this.plAmount__c = planData.plAmount__c;
      this.plTotalAmount__c = planData.plTotalAmount__c;
    }
  },
  methods:{
    // getPurchaseBefore(){
    //   this.purchaseBefore = !this.purchaseBefore; // 控制点击
    // },
    //追加
    addBtn1(){
      // if (this.addBtn1().length > 5) {
      //   this.$message.error('5行以内に追加してください。')
      //   return
      // }

      // this.formArr.rowlist.push({});

      console.log(this.rowlist)

      this.rowlist.push({
        bangou: "",
        plJisshiKomokuc: "",
        plHyoukaKijunc: "",
        plHyoukaHindoc: "",
        plJisshiJikiNendoc: "",
      },);
    },
    //删除
    deleteBtn(index){
      console.log(index)
        this.rowlist.splice(index, 1);
      // console.log(index);
      // this.formArr.rowlist.splice(index, 1)
    },
    addBtn2(){

    },
    back(){
      this.$router.push('/userapply');
    },
    save(){
      const planData = {
        bangou:this.bangou,//
        plJisshiKomokuc:this.plJisshiKomokuc,
        plHyoukaKijunc:this.plHyoukaKijunc,
        plHyoukaHindoc:this.plHyoukaHindoc,
        plJisshiJikiNendoc:this.plJisshiJikiNendoc,
        plJisshiJikiShihankic:this.plJisshiJikiShihankic,
        plName:this.plName,
        plDonyuNendo__c:this.plDonyuNendo__c,
        plDonyuJiki__c:this.plDonyuJiki__c,
        plKaigaiKounyu__c:this.plKaigaiKounyu__c,
        plPrice__c:this.plPrice__c,
        plAmount__c:this.plAmount__c,
        plTotalAmount__c:this.plTotalAmount__c
      };
      //jsonの格式に置き換える
      const dataString = JSON.stringify(planData);
      //sessionを使ってデータを保存する
      sessionStorage.setItem('planData', dataString);

      console.log('数据保存成功');
    },
    makesure1(){

    },
    plJisshiKomokucInput(){

    },
    plHyoukaKijuncInput(){

    },
    plNameInput(){

    },
    plPrice__cInput(){
      //数字だけ入力できる。
      this.plPrice__c = this.plPrice__c.replace(/[^\d]/g, "")
      //整数の前の0は保留しない。
      if (this.plPrice__c != "") {
        this.plPrice__c = parseFloat(this.plPrice__c);
      }
      //9,999,999,999内の数字を入力できる。
      if (
        this.plPrice__c < 0 ||
        this.plPrice__c > 9999999999
      ) {
        this.plPrice__cF = true;
      } else {
        this.plPrice__cF = false;
      }
      //？：表示括号只是起分隔作用，不将括号中匹配的内容存入内存中
      // 前瞻：exp1(?=exp2) 查找exp2前面的exp1
      this.plPrice__c = this.plPrice__c.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
    },
    plAmount__cInput(){
      //数字だけ入力できる。
      this.plAmount__c = this.plAmount__c.replace(/[^\d]/g, "")
      //整数の前の0は保留しない。
      if (this.plAmount__c != "") {
        this.plAmount__c = parseFloat(this.plAmount__c);
      }
      //9999内の数字を入力できる。
      if (
        this.plAmount__c < 0 ||
        this.plAmount__c > 9999
      ) {
        this.plAmount__cF = true;
      } else {
        this.plAmount__cF = false;
      }
    },

  }
}
</script>

<style>
.plan1{
  overflow: auto;
  height: 105vh;
  display: flex;/*Flex是Flexible Box的缩写，意为"弹性布局"*/
  flex-direction: column;/*flex-direction:column; 让元素沿垂直主轴从上到下垂直排列*/
  align-items: center;
  background-image: url("../assets/images/background.jpg");
  background-size: 100%;
}
.table-header{
  margin-top: 30px;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 20px;
}
.applyAll{
  width: 50%;
  border-collapse: collapse;
  border-radius:20px;
  overflow: hidden;
}
.applyAll td{
  background-color: white;
  border: 1px solid rgb(0, 0, 100);;
  padding: 4px;
  margin:2px;
}
.short-cell{
  width: 180px;
  text-align: center;
}
.td-2{
  text-align: left;
}
.td-2 input[type="text"]{
  height: 25px;
  border-radius: 6px;
  border-color: cornflowerblue;
  outline: none;
}
.error-message{
  color: #e64848;
}
.tdSelect{
  width: 160px;
  padding: 6px 5px;
  font-size: 8px;
  border: 1px solid;
  border-radius: 4px;
}
.twoSelect{
  width: 80px;
  padding: 3px 2px;
  font-size: 4px;
  border: 1px solid;
  border-radius: 4px;
}

.purchase {
  position: relative;
  width: 20px;
  height: 20px;
  margin: 0 6px;
  border: 1px solid !important;
  border-radius: 2px;
}
.tick::after {
  content: " ";
  position: absolute;
  display: inline-block;
  width: 12px;
  height: 6px;
  border-width: 0 0 2px 2px;
  overflow: hidden;
  border-color: #e64848;
  border-style: solid;
  -webkit-transform: rotate(-50deg);
  transform: rotate(-50deg);
  left: 3px;
  top: 4px;
}
.pageNameClass{
  text-align: right;
  color: #e64848;
}
</style>
