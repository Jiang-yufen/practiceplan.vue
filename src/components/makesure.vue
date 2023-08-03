<template>
  <div class="base2">
    <div class="table-header">個人情報申請</div>
    <table class="applyAll">
      <!--保存したデータを使う-->
      <tr>
        <td class="short-cell">申請情報登録日<br><span class="note">必須</span></td>
        <td class="td-2">{{formData.now}}</td>
      </tr>
      <tr>
        <td class="short-cell">申請者名<br><span class="note">必須</span></td>
        <td class="td-2">{{ formData.aPLShinseisyaName }}</td>
      </tr>
      <tr>
        <td class="short-cell">住所<br><span class="note">必須</span></td>
        <td class="td-2">
          〒&nbsp;&nbsp;{{
            formData.aPLAddressYubinNo3
          }}
          &nbsp;&nbsp;-&nbsp;&nbsp;{{ formData.aPLAddressYubinNo4 }}
          <br /><br />
          <div>
            都道府県 &nbsp;&nbsp; &nbsp;&nbsp;
            {{ formData.aPLAddressTodofuken }}
          </div>
          <br />
          <div>
            市区町村 &nbsp;&nbsp; &nbsp;&nbsp;
            {{ formData.aPLAddressShikuchoson }}
          </div>
          <br />
          <div>
            字番地等 &nbsp;&nbsp; &nbsp;&nbsp; {{ formData.aPLAddressBanchi }}
          </div>
          <br />
          <div>
            都道府県カナ &nbsp;&nbsp; &nbsp;&nbsp;{{
              formData.aPLAddressTodofukenKana
            }}
          </div>
          <br />
          <div>
            市区町村カナ &nbsp;&nbsp; &nbsp;&nbsp;{{
              formData.aPLAddressShikuchosonKana
            }}
          </div>
          <br />
          <div>
            字番地等カナ &nbsp;&nbsp; &nbsp;&nbsp;{{
              formData.aPLAddressBanchiKana
            }}
          </div>
          <br />
          <div>
            マンション名 &nbsp;&nbsp; &nbsp;&nbsp;{{
              formData.aPLAddressManshon
            }}
          </div>
        </td>
      </tr>

      <tr>
        <td class="short-cell">代表者の役職<br><span class="note">必須</span></td>
        <td class="td-2">
          {{ formData.aPLDaihyoshaYakushoku }}
        </td>
      </tr>
      <tr>
        <td class="short-cell">代表者の氏名<br><span class="note">必須</span></td>
        <td class="td-2">
          {{ formData.aPLDaihyoshaName }}
        </td>
      </tr>
      <tr>
        <td class="short-cell">法人番号<br><span class="note">必須</span></td>
        <td class="td-2">
          {{ formData.aPLHojinNo }}
        </td>
      </tr>
      <tr>
        <td class="short-cell">担当者の氏名<br><span class="note">必須</span></td>
        <td class="td-2">
          {{ formData.aPLTantoshaName }}
        </td>
      </tr>
      <tr>
        <td class="short-cell">電話番号</td>
        <td class="td-2">
          {{ formData.aPLCSTEL }}
        </td>
      </tr>
      <tr>
        <td class="short-cell">FAX番号</td>
        <td class="td-2">
          {{ formData.aPLCSFAX }}
        </td>
      </tr>
      <tr>
        <td class="short-cell">担当者メールアドレス<br><span class="note">必須</span></td>
        <td class="td-2">
          {{ formData.aPLCSTantoshaMail }}
        </td>
      </tr>
      <tr>
        <td class="short-cell">確認用メールアドレス</td>
        <td class="td-2">
          {{ formData.aPLCSKakuninyoMail }}
        </td>
      </tr>
    </table>

    <br /><br />
    <div class="UserBtn">
      <el-button type="info" @click="goBack">戻る</el-button>
      <el-button type="success" @click="savetodb">確認内容</el-button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Makesure",
  data(){
    return {
      formData:{
        now: "", //当前日期
        aPLShinseisyaName: "",
        aPLAddressYubinNo3: "",
        aPLAddressYubinNo4: "",
        aPLAddressTodofuken: "",
        aPLAddressShikuchoson: "",
        aPLAddressBanchi: "",
        aPLAddressTodofukenKana: "",
        aPLAddressShikuchosonKana: "",
        aPLAddressBanchiKana: "",
        aPLAddressManshon: "",
        aPLDaihyoshaYakushoku: "",
        aPLDaihyoshaName: "",
        aPLHojinNo: "",
        aPLTantoshaName: "",
        aPLCSTEL: "",
        aPLCSFAX: "",
        aPLCSTantoshaMail: "",
        aPLCSKakuninyoMail: "",
      }
    };
  },
  created() {
// formDataのデータをゲットする
    const storedData = sessionStorage.getItem("formData");
    if (storedData){
      this.formData = JSON.parse(storedData);
      console.log("数据保存成功");
    }
  },

  methods:{
    goBack() {
      this.$router.push("/userapply");
    },
    savetodb() {
      const formData = {
        now: this.formData.now,
        aPLShinseisyaName: this.formData.aPLShinseisyaName,
        aPLAddressYubinNo3: this.formData.aPLAddressYubinNo3,
        aPLAddressYubinNo4: this.formData.aPLAddressYubinNo4,
        aPLAddressTodofuken: this.formData.aPLAddressTodofuken,
        aPLAddressShikuchoson: this.formData.aPLAddressShikuchoson,
        aPLAddressBanchi: this.formData.aPLAddressBanchi,
        aPLAddressTodofukenKana: this.formData.aPLAddressTodofukenKana,
        aPLAddressShikuchosonKana: this.formData.aPLAddressShikuchosonKana,
        aPLAddressBanchiKana: this.formData.aPLAddressBanchiKana,
        aPLAddressManshon: this.formData.aPLAddressManshon,
        aPLDaihyoshaYakushoku: this.formData.aPLDaihyoshaYakushoku,
        aPLDaihyoshaName: this.formData.aPLDaihyoshaName,
        aPLHojinNo: this.formData.aPLHojinNo,
        aPLTantoshaName: this.formData.aPLTantoshaName,
        aPLCSTEL: this.formData.aPLCSTEL,
        aPLCSFAX: this.formData.aPLCSFAX,
        aPLCSTantoshaMail: this.formData.aPLCSTantoshaMail,
        aPLCSKakuninyoMail: this.formData.aPLCSKakuninyoMail,
      };
      //データをデータベースに保存する
      axios
        .post("http://localhost:8081/project02/userapplyadd",formData)
        .then(() => {
          // 保存成功
          console.log("数据保存成功");
        })
        .catch((error) => {
          // エラーメッセージ
          console.error("数据保存失败", error);
        });
    },

  }

}
</script>

<style>
.base2 {
  overflow: auto;
  height: 105vh;
  display: flex;
  flex-direction: column; /* 垂直方向排列 */
  /* justify-content: center; 垂直方向居中对齐 */
  align-items: center; /* 水平方向居中对齐 */
  background-image: url("../assets/images/background.jpg");
  background-size: 100%;
}

.table-header {
  margin-top: 20px;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 20px;
}
.applyAll {
  width: 60%;
  border-collapse: collapse;
  border-radius: 20px;
  overflow: hidden;
}
.applyAll tr:hover td {
  background-color: rgb(237, 109, 130); /* 鼠标悬停时的背景颜色 */
}
.applyAll th {
  padding: 8px;
  background-color: rgb(237, 109, 130);
}

.applyAll td {
  background-color: pink;
  border: 1px solid rgb(249, 245, 245);
  padding: 8px;
  margin: 4px;
}
.short-cell {
  width: 200px; /* 设置第一列的宽度 */
  text-align: left;
}
.td-2 {
  text-align: left;
}
.td-2 input[type="text"] {
  border-radius: 6px;
  border-color: rgb(240, 79, 79);
}
.note {
  margin-left: 55px; /* 添加间距 */
  font-size: xx-small;
  background: rgb(240, 79, 79);
  color: white;
  border-radius: 5px;
}
.error-message {
  color: rgb(61, 7, 88);
  margin-left: 30px;
}
.addressselect:focus {
  outline: none; /* 移除选择框的默认聚焦边框 */
  border-color: plum; /* 修改选择框的聚焦边框颜色 */
  box-shadow: 0 0 5px rgba(0, 0, 255, 0.5);
}
.addressselect {
  width: 180px;
  padding: 8px 12px;
  font-size: 14px;
  border: 1px solid #e75252;
  border-radius: 4px;
}
.UserBtn {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* 设置容器高度为视窗的高度 */
  margin-left: 100px;
}

.UserBtn .el-button {
  width: 150px;
  margin-right: 100px; /* 设置按钮之间的右侧间距 */
}

</style>
