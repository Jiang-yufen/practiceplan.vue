<template>
  <div class="base1">
    <!--タイトル-->
    <div class="table-header">個人情報申請</div>
    <table class="applyAll">
      <!--申請情報登録日-->
      <tr>
        <td class="short-cell">申請情報登録日</td>
        <!--日付を画面にレンダリングする-->
        <td class="td-2">{{ now }}</td>
      </tr>
      <!--申請者名-->
      <tr>
        <td class="short-cell">申請者名<br><span class="note">必須</span></td>
        <td class="td-2">
          <!--申請者名-->
          <!--v-model　双方向データバインディング（Two-way data binding）-->
          <!--@input是input框中的值变化时触发的函数。-->
          <input type="text" v-model="aPLShinseisyaName" @input="validateShiseiName"/>
          <!--v-if/v-else 条件式の評価値によって表示される要素が変わる -->
          <!--エラーメッセージ-->
          <span
          class="error-message" v-if="aPLShinseisyaNameF1"
        >申請者名は50文字以内で入力してください。</span
        ><span
          class="error-message" v-if="aPLShinseisyaNameF2"
        >申請者名は漢字で入力してください。</span>
        </td>
      </tr>
      <!--住所-->
      <tr>
        <td class="short-cell">住所<br><span class="note">必須</span></td>
        <td class="td-2">
          〒&nbsp;&nbsp;
          <input
            type="text" v-model="aPLAddressYubinNo3" @input="validateZipCode3"
            style="width: 50px" maxlength="3"/>
          &nbsp;-&nbsp;
          <input
            type="text" v-model="aPLAddressYubinNo4" @input="validateZipCode4"
            style="width: 50px" maxlength="4"/>
          <!--エラーメッセージ-->
          <span
          class="error-message"
          v-if="aPLAddressYubinNoF1 || aPLAddressYubinNoF2"
         >正しい郵便番号を入力してください。</span>

          <br /><br />
          <!--5種類：デフォルト、primary,success,info,warning,danger-->
          <el-button type="primary" class="addressbutton" @click="fetchAddress"
          >住所情報の取得</el-button>

          <br/><br>
          <!--都道府県-->
            &nbsp;&nbsp;&nbsp;&nbsp;都道府県
          <select v-model="aPLAddressTodofuken" class="addressselect">
            <option value="">選択してください</option>
            <option value="北海道">北海道</option>
            <option value="青森県">青森県</option>
            <option value="岩手県">岩手県</option>
            <option value="宮城県">宮城県</option>
            <option value="秋田県">秋田県</option>
            <option value="山形県">山形県</option>
            <option value="福島県">福島県</option>
            <option value="茨城県">茨城県</option>
            <option value="栃木県">栃木県</option>
            <option value="群馬県">群馬県</option>
            <option value="埼玉県">埼玉県</option>
            <option value="千葉県">千葉県</option>
            <option value="東京都">東京都</option>
            <option value="神奈川県">神奈川県</option>
            <option value="新潟県">新潟県</option>
            <option value="富山県">富山県</option>
            <option value="石川県">石川県</option>
            <option value="福井県">福井県</option>
            <option value="山梨県">山梨県</option>
            <option value="長野県">長野県</option>
            <option value="岐阜県">岐阜県</option>
            <option value="静岡県">静岡県</option>
            <option value="愛知県">愛知県</option>
            <option value="三重県">三重県</option>
            <option value="滋賀県">滋賀県</option>
            <option value="京都府">京都府</option>
            <option value="大阪府">大阪府</option>
            <option value="兵庫県">兵庫県</option>
            <option value="奈良県">奈良県</option>
            <option value="和歌山県">和歌山県</option>
            <option value="鳥取県">鳥取県</option>
            <option value="島根県">島根県</option>
            <option value="岡山県">岡山県</option>
            <option value="広島県">広島県</option>
            <option value="山口県">山口県</option>
            <option value="徳島県">徳島県</option>
            <option value="香川県">香川県</option>
            <option value="愛媛県">愛媛県</option>
            <option value="高知県">高知県</option>
            <option value="福岡県">福岡県</option>
            <option value="佐賀県">佐賀県</option>
            <option value="長崎県">長崎県</option>
            <option value="熊本県">熊本県</option>
            <option value="大分県">大分県</option>
            <option value="宮崎県">宮崎県</option>
            <option value="鹿児島県">鹿児島県</option>
            <option value="沖縄県">沖縄県</option>
          </select>
          <br>
          <!--市区町村-->
          &nbsp;&nbsp;&nbsp;&nbsp;市区町村
          <input
            type="text" v-model="aPLAddressShikuchoson" @input="aPLAddressShikuchosonInput"
          ><span
          class="error-message" v-if="aPLAddressShikuchosonF"
        >市区町村は40文字以内で入力してください。</span>
          <br>
          <!--字・番地等-->
          &nbsp;&nbsp;&nbsp;&nbsp;字・番地等
          <input
            type="text" v-model="aPLAddressBanchi" @input="aPLAddressBanchiInput"
          ><span
          class="error-message" v-if="aPLAddressBanchiF"
        >市区町村は40文字以内で入力してください。</span>
          <br>
          <!--都道府県カナ-->
          &nbsp;&nbsp;&nbsp;&nbsp;都道府県カナ
          <input type="text" v-model="aPLAddressTodofukenKana" @input="aPLAddressTodofukenKanaInput"
          ><span
          class="error-message" v-if="aPLAddressTodofukenKanaF1"
        >都道府県カナはカタカナで入力してください。</span
        ><span
          class="error-message" v-if="aPLAddressTodofukenKanaF2"
        >都道府県カナは50文字以内で入力してください。</span>
          <br>
          <!--市区町村カナ-->
          &nbsp;&nbsp;&nbsp;&nbsp;市区町村カナ
          <input
            type="text" v-model="aPLAddressShikuchosonKana" @input="aPLAddressShikuchosonKanaInput"
          ><span
          class="error-message" v-if="aPLAddressShikuchosonKanaF1"
        >市区町村カナはカタカナで入力してください。</span
        ><span
          class="error-message" v-if="aPLAddressShikuchosonKanaF2"
        >市区町村カナは255文字以内で入力してください。</span>
          <br>
          <!--字・番地等カナ-->
          &nbsp;&nbsp;&nbsp;&nbsp;字・番地等カナ
          <input
            type="text" v-model="aPLAddressBanchiKana" @input="aPLAddressBanchiKanaInput"
          ><span
          class="error-message" v-if="aPLAddressBanchiKanaF1"
        >字・番地等カナは正確に入力してください。</span
        ><span
          class="error-message" v-if="aPLAddressBanchiKanaF2"
        >字・番地等カナは255文字以内で入力してください。</span>
          <br>
          <!--マンション名等-->
          &nbsp;&nbsp;&nbsp;&nbsp;マンション名等
          <input
            type="text" v-model="aPLAddressManshon" @input="aPLAddressManshonInput"
          ><span
          class="error-message" v-if="aPLAddressManshonF"
        >マンション名等は255文字以内で入力してください。</span>
        </td>
      </tr>
      <!--代表者の役職-->
      <tr>
        <td class="short-cell">代表者の役職<br><span class="note">必須</span></td>
        <td class="td-2">
          <input
            type="text"
            v-model="aPLDaihyoshaYakushoku"
            @input="aPLDaihyoshaYakushokuInput"
          />
          <span
            class="error-message" v-if="aPLDaihyoshaYakushokuF"
          >代表者の役職は255文字以内で入力してください。</span>
        </td>
      </tr>
      <!--代表者の氏名-->
      <tr>
        <td class="short-cell">代表者の氏名<br><span class="note">必須</span></td>
        <td class="td-2">
          <input
            type="text"
            v-model="aPLDaihyoshaName"
            @input="aPLDaihyoshaNameInput"
          />
          <span
            class="error-message" v-if="aPLDaihyoshaNameF1"
          >代表者の氏名は漢字で入力してください。</span>
          <span
            class="error-message" v-if="aPLDaihyoshaNameF2"
          >代表者の氏名は40文字以内で入力してください。</span>
        </td>
      </tr>
      <!--法人番号-->
      <tr>
        <td class="short-cell">法人番号<br><span class="note">必須</span></td>
        <td class="td-2">
          <input
            type="text" v-model="aPLHojinNo" @input="aPLHojinNoInput">
          <span
            class="error-message" v-if="aPLHojinNoF"
          >正しい法人番号を入力してください。</span>
        </td>
      </tr>
      <!--担当者の氏名-->
      <tr>
        <td class="short-cell">担当者の氏名<br><span class="note">必須</span></td>
        <td class="td-2">
          <input
            type="text" v-model="aPLTantoshaName"
            @input="aPLTantoshaNameInput"
          /><span
          class="error-message" v-if="aPLTantoshaNameF1"
        >担当者の氏名は漢字で入力してください。</span>
          <span
            class="error-message" v-if="aPLTantoshaNameF2"
          >担当者の氏名は40文字以内で入力してください。</span>
        </td>
      </tr>
      <!--電話番号-->
      <tr>
        <td class="short-cell">電話番号</td>
        <td class="td-2">
          <input
            type="text" v-model="aPLCSTEL" @input="aPLCSTELInput">
          <span
            class="error-message" v-if="aPLCSTELF"
          >正しい電話番号を入力してください。</span>
        </td>
      </tr>
      <!--FAX番号-->
      <tr>
        <td class="short-cell">FAX番号</td>
        <td class="td-2">
          <input
            type="text" v-model="aPLCSFAX" @input="aPLCSFAXInput">
          <span
            class="error-message" v-if="aPLCSFAXF"
          >正しいFAX番号を入力してください。</span>
        </td>
      </tr>
      <!--担当者メールアドレス-->
      <tr>
        <td class="short-cell">担当者メールアドレス<br><span class="note">必須</span></td>
        <td class="td-2">
          <input
            type="text"
            v-model="aPLCSTantoshaMail"
            @input="aPLCSTantoshaMailInput"
          /><span
          class="error-message" v-if="aPLCSTantoshaMailF"
        >担当者メールアドレスは40文字以内で入力してください。</span>
        </td>
      </tr>
      <!--確認用メールアドレス-->
      <tr>
        <td class="short-cell">確認用メールアドレス</td>
        <td class="td-2">
          <input
            type="text"
            v-model="aPLCSKakuninyoMail"
            @input="aPLCSKakuninyoMailInput"
          /><span
          class="error-message" v-if="aPLCSKakuninyoMailF"
        >確認用メールアドレスは担当者メールアドレスと一致してください。</span>
        </td>
      </tr>
    </table>
    <br><br>
    <!--ボタン-->
    <div>
      <el-button type="info" @click="goBack">戻る</el-button>
      <el-button type="warning" @click="save">一時保存</el-button>
      <el-button type="success" @click="makesure">確認内容</el-button>
    </div>
    <br><br>
  </div>
  <!--  </div>-->
</template>

<script>
//axiosをインポート
import axios from 'axios'
//エクスポート
export default {
  name: 'UserApply',
  //変数の値をレンダリングする
  data(){
    return{
      now:"",
      aPLShinseisyaName: "",//
      aPLAddressYubinNo3: "",//
      aPLAddressYubinNo4: "",//
      aPLAddressTodofuken: "",//
      aPLAddressShikuchoson: "",//
      aPLAddressBanchi: "",//
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
      aPLShinseisyaNameF1: false,
      aPLShinseisyaNameF2: false,
      aPLAddressYubinNoF1:false,
      aPLAddressYubinNoF2:false,
      aPLAddressShikuchosonF: false,
      aPLAddressBanchiF: false,
      aPLAddressTodofukenKanaF1: false,
      aPLAddressTodofukenKanaF2: false,
      aPLAddressShikuchosonKanaF1: false,
      aPLAddressShikuchosonKanaF2: false,
      aPLAddressBanchiKanaF1: false,
      aPLAddressBanchiKanaF2: false,
      aPLAddressManshonF: false,
      aPLDaihyoshaYakushokuF: false,
      aPLDaihyoshaNameF1: false,
      aPLDaihyoshaNameF2: false,
      aPLHojinNoF: false,
      aPLTantoshaNameF1: false,
      aPLTantoshaNameF2: false,
      aPLCSTELF: false,
      aPLCSFAXF: false,
      aPLCSTantoshaMailF: false,
      aPLCSKakuninyoMailF: false,
    }
  },
  //ライフサイクルフック
  mounted() {
    // 今日の日付をゲットする
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    this.now = `${year}年${month}月${day}日`;
    const saveData = sessionStorage.getItem('formData');
    if (saveData){
      const formData = JSON.parse(saveData);
      this.aPLShinseisyaName = formData.aPLShinseisyaName;
      this.aPLAddressYubinNo3 = formData.aPLAddressYubinNo3;
      this.aPLAddressYubinNo4 = formData.aPLAddressYubinNo4;
      this.aPLAddressTodofuken = formData.aPLAddressTodofuken;
      this.aPLAddressShikuchoson = formData.aPLAddressShikuchoson;
      this.aPLAddressBanchi = formData.aPLAddressBanchi;
      this.aPLAddressTodofukenKana = formData.aPLAddressTodofukenKana;
      this.aPLAddressShikuchosonKana = formData.aPLAddressShikuchosonKana;
      this.aPLAddressBanchiKana = formData.aPLAddressBanchiKana;
      this.aPLAddressManshon = formData.aPLAddressManshon;
      this.aPLDaihyoshaYakushoku = formData.aPLDaihyoshaYakushoku;
      this.aPLDaihyoshaName = formData.aPLDaihyoshaName;
      this.aPLHojinNo = formData.aPLHojinNo;
      this.aPLTantoshaName = formData.aPLTantoshaName;
      this.aPLCSTEL = formData.aPLCSTEL;
      this.aPLCSFAX = formData.aPLCSFAX;
      this.aPLCSTantoshaMail = formData.aPLCSTantoshaMail;
      this.aPLCSKakuninyoMail = formData.aPLCSKakuninyoMail;

      sessionStorage.setItem("aPLShinseisyaName", JSON.stringify(this.aPLShinseisyaName));
    }
  },
  //メソッド
  methods:{
    //  戻るボタン：/userはrouterの目次にあるindex.jsのpathの値と一致
    goBack(){
      this.$router.push('/user');
    },
    //一時保存ボタン
    save(){
      const formData = {
        now:this.now,
        aPLShinseisyaName: this.aPLShinseisyaName,
        aPLAddressYubinNo3: this.aPLAddressYubinNo3,
        aPLAddressYubinNo4: this.aPLAddressYubinNo4,
        aPLAddressTodofuken: this.aPLAddressTodofuken,
        aPLAddressShikuchoson: this.aPLAddressShikuchoson,
        aPLAddressBanchi: this.aPLAddressBanchi,
        aPLAddressTodofukenKana: this.aPLAddressTodofukenKana,
        aPLAddressShikuchosonKana: this.aPLAddressShikuchosonKana,
        aPLAddressBanchiKana: this.aPLAddressBanchiKana,
        aPLAddressManshon: this.aPLAddressManshon,
        aPLDaihyoshaYakushoku: this.aPLDaihyoshaYakushoku,
        aPLDaihyoshaName: this.aPLDaihyoshaName,
        aPLHojinNo: this.aPLHojinNo,
        aPLTantoshaName: this.aPLTantoshaName,
        aPLCSTEL: this.aPLCSTEL,
        aPLCSFAX: this.aPLCSFAX,
        aPLCSTantoshaMail: this.aPLCSTantoshaMail,
        aPLCSKakuninyoMail: this.aPLCSKakuninyoMail,
      };
      //jsonの格式に置き換える
      const dataString = JSON.stringify(formData);
      //sessionを使ってデータを保存する
      sessionStorage.setItem('formData', dataString);

      console.log('数据保存成功');
    },
    //確認内容ボタン
    makesure(){
      //入力ボックスに内容があれば、エラーがなければ、確認の画面に遷移する
      if (
        !this.aPLShinseisyaNameF1 &&
        !this.aPLShinseisyaNameF2 &&
        !this.aPLAddressYubinNoF1 &&
        !this.aPLAddressYubinNoF2 &&
        !this.aPLAddressShikuchosonF &&
        !this.aPLAddressBanchiF &&
        !this.aPLAddressTodofukenKanaF1 &&
        !this.aPLAddressTodofukenKanaF2 &&
        !this.aPLAddressShikuchosonKanaF1 &&
        !this.aPLAddressShikuchosonKanaF2　&&
        !this.aPLAddressBanchiKanaF1　&&
        !this.aPLAddressBanchiKanaF2　&&
        !this.aPLAddressManshonF　&&
        !this.aPLDaihyoshaYakushokuF　&&
        !this.aPLDaihyoshaNameF1　&&
        !this.aPLDaihyoshaNameF2　&&
        !this.aPLHojinNoF　&&
        !this.aPLTantoshaNameF1　&&
        !this.aPLTantoshaNameF2　&&
        !this.aPLCSTELF　&&
        !this.aPLCSFAXF　&&
        !this.aPLCSTantoshaMailF　&&
        !this.aPLCSKakuninyoMailF　&&
        this.aPLShinseisyaName.trim() !== '' &&
        this.aPLAddressYubinNo3.trim() !== '' &&
        this.aPLAddressYubinNo4.trim() !== '' &&
        this.aPLAddressTodofuken.trim() !== '' &&
        this.aPLAddressShikuchoson.trim() !== '' &&
        this.aPLAddressBanchi.trim() !== '' &&
        this.aPLAddressTodofukenKana.trim() !== '' &&
        this.aPLAddressShikuchosonKana.trim() !== '' &&
        this.aPLAddressBanchiKana.trim() !== '' &&
        this.aPLAddressManshon.trim() !== '' &&
        this.aPLDaihyoshaYakushoku.trim() !== '' &&
        this.aPLDaihyoshaName.trim() !== '' &&
        this.aPLHojinNo.trim() !== '' &&
        this.aPLTantoshaName.trim() !== '' &&
        this.aPLCSTantoshaMail.trim() !== ''
        // &&
        // this.aPLCSKakuninyoMail.trim() !== ''
      ){
        //saveのメソッドを呼び出す
        this.save();
        //確認画面に遷移する
        this.$router.push('/makesure');
        this.$message.error('');
      }else {
        //エラーメッセージ
        console.log('Please fill in all inputs correctly');
        this.$message.error('内容を全部入力してください。');
      }
    },

    validateShiseiName(){
      const name = this.aPLShinseisyaName;
      const kanjiRegex = /^[\u4E00-\u9FAF]+$/;
      //申請者名の長さをチェックする
      if (name.length > 50){
        this.aPLShinseisyaNameF1 = true;
      }else {
        this.aPLShinseisyaNameF1 = false;
      }
      //正則式で漢字であるかどうかチェックする
      if (!kanjiRegex.test(name)){
        this.aPLShinseisyaNameF2 = true;
      } else {
        this.aPLShinseisyaNameF2 = false;
      }
    },
    //郵便番号を正則式によってチェックする
    validateZipCode3() {
      const ZipCode = /^\d{1,3}$/;
      if (
        !ZipCode.test(this.aPLAddressYubinNo3) ||
        this.aPLAddressYubinNo3.length !== 3
      ) {
        this.aPLAddressYubinNoF1 = true;
      } else {
        this.aPLAddressYubinNoF1 = false;
      }
    },
//郵便番号を正則式によってチェックする
    validateZipCode4() {
      const ZipCode = /^\d{1,4}$/;
      if (
        !ZipCode.test(this.aPLAddressYubinNo4) ||
        this.aPLAddressYubinNo4.length !== 4
      ) {
        this.aPLAddressYubinNoF2 = true;
      } else {
        this.aPLAddressYubinNoF2 = false;
      }
    },
    //住所情報の取得というボタンを押すと、fetchAddressのメソッドを呼び出す
    //郵便番号によって、アドレスをゲットする
    fetchAddress() {
      if (this.aPLAddressYubinNo3 && this.aPLAddressYubinNo4) {
        const zipCode = this.aPLAddressYubinNo3 + this.aPLAddressYubinNo4;
        axios
          .get(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${zipCode}`)
          .then((response) => {
            const data = response.data;
            if (
              data.status === 200 &&
              data.results &&
              data.results.length > 0
            ) {
              const address = data.results[0];
              this.aPLAddressTodofuken = address.address1;
              this.aPLAddressShikuchoson = address.address2;
              this.aPLAddressBanchi = address.address3;
              this.aPLAddressTodofukenKana = address.kana1;
              this.aPLAddressShikuchosonKana = address.kana2;
              this.aPLAddressBanchiKana = address.kana3;
            } else {
              // アドレスが見つからない場合、エラーメッセージが表示される
              console.log("郵便番号は見つかりませんでした。正しい郵便番号を入力してください。");
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
//市区町村の値の長さをチェックする
    aPLAddressShikuchosonInput() {
      if (this.aPLAddressShikuchoson.length > 40) {
        this.aPLAddressShikuchosonF = true;
      } else {
        this.aPLAddressShikuchosonF = false;
      }
    },
//字・番地等の値の長さをチェックする
    aPLAddressBanchiInput() {
      if (this.aPLAddressBanchi.length > 255) {
        this.aPLAddressBanchiF = true;
      } else {
        this.aPLAddressBanchiF = false;
      }
    },
//都道府県カナの値の長さをチェックする。正則式によってカタカナであるかどうかチェックする
    aPLAddressTodofukenKanaInput() {
      const kanaRegex = /^[ァ-ヶｦ-ﾟ]+$/;
      if (this.aPLAddressTodofukenKana.length > 50) {
        this.aPLAddressTodofukenKanaF2 = true;
      } else {
        this.aPLAddressTodofukenKanaF2 = false;
      }

      if (!kanaRegex.test(this.aPLAddressTodofukenKana)) {
        this.aPLAddressTodofukenKanaF1 = true;
      } else {
        this.aPLAddressTodofukenKanaF1 = false;
      }
    },
//市区町村カナの値の長さをチェックする。正則式によってカタカナであるかどうかチェックする
    aPLAddressShikuchosonKanaInput() {
      const kanaRegex = /^[ァ-ヶｦ-ﾟ]+$/;
      if (this.aPLAddressShikuchosonKana.length > 255) {
        this.aPLAddressShikuchosonKanaF2 = true;
      } else {
        this.aPLAddressShikuchosonKanaF2 = false;
      }

      if (!kanaRegex.test(this.aPLAddressShikuchosonKana)) {
        this.aPLAddressShikuchosonKanaF1 = true;
      } else {
        this.aPLAddressShikuchosonKanaF1 = false;
      }
    },
//字・番地等カナの値の長さをチェックする。正則式によってカタカナであるかどうかチェックする
    aPLAddressBanchiKanaInput() {
      const kanaRegexsu = /^[ァ-ヶｦ-ﾟー－0-9]+$/;
      if (this.aPLAddressBanchiKana.length > 255) {
        this.aPLAddressBanchiKanaF2 = true;
      } else {
        this.aPLAddressBanchiKanaF2 = false;
      }

      if (!kanaRegexsu.test(this.aPLAddressBanchiKana)) {
        this.aPLAddressBanchiKanaF1 = true;
      } else {
        this.aPLAddressBanchiKanaF1 = false;
      }
    },
//マンション名等の値の長さをチェックする。
    aPLAddressManshonInput() {
      if (this.aPLAddressManshon.length > 255) {
        this.aPLAddressManshonF = true;
      } else {
        this.aPLAddressManshonF = false;
      }
    },
//代表者の役職の値の長さをチェックする。
    aPLDaihyoshaYakushokuInput() {
      if (this.aPLDaihyoshaYakushoku.length > 255) {
        this.aPLDaihyoshaYakushokuF = true;
      } else {
        this.aPLDaihyoshaYakushokuF = false;
      }
    },
//代表者の氏名の値の長さをチェックする。正則式によって漢字であるかどうかチェックする
    aPLDaihyoshaNameInput() {
      const kanaRegexsukana = /^[\u4E00-\u9FAF]+$/;
      if (this.aPLDaihyoshaName.length > 40) {
        this.aPLDaihyoshaNameF2 = true;
      } else {
        this.aPLDaihyoshaNameF2 = false;
      }

      if (!kanaRegexsukana.test(this.aPLDaihyoshaName)) {
        this.aPLDaihyoshaNameF1 = true;
      } else {
        this.aPLDaihyoshaNameF1 = false;
      }
    },
//法人番号の値の長さをチェックする。正則式によって文字の形をチェックする
    aPLHojinNoInput() {
      const kanaRegexsukane = /^[0-9a-zA-Z]+$/;
      if (this.aPLHojinNo.length > 0){
        if (this.aPLHojinNo.length > 13) {
          this.aPLHojinNoF = true;
        }else {
          this.aPLHojinNoF = !kanaRegexsukane.test(this.aPLHojinNo);
        }
      } else {
        this.aPLHojinNoF = false;
      }

      if (!kanaRegexsukane.test(this.aPLHojinNo)) {
        this.aPLHojinNoF = true;
      } else {
        this.aPLHojinNoF = false;
      }
    },
//担当者名の値の長さをチェックする。正則式によって文字の形をチェックする
    aPLTantoshaNameInput() {
      const kanaRegexsukane = /^[\u4E00-\u9FAF]+$/;
      if (this.aPLTantoshaName.length > 40) {
        this.aPLTantoshaNameF2 = true;
      } else {
        this.aPLTantoshaNameF2 = false;
      }

      if (!kanaRegexsukane.test(this.aPLTantoshaName)) {
        this.aPLTantoshaNameF1 = true;
      } else {
        this.aPLTantoshaNameF1 = false;
      }
    },
//正則式によって電話番号の値をチェックする
    aPLCSTELInput() {
      const kanaRegexsukane = /^[0-9]+$/;
      if (this.aPLCSTEL.length > 0) {
        if (this.aPLCSTEL.length > 11) {
          this.aPLCSTELF = true;
        } else {
          this.aPLCSTELF = !kanaRegexsukane.test(this.aPLCSTEL);
        }
      } else {
        this.aPLCSTELF = false;
      }
    },
    //正則式によってFAX番号の値をチェックする
    aPLCSFAXInput() {
      const kanaRegexsukane = /^[0-9]+$/;
      if (this.aPLCSFAX.length > 0) {
        if (this.aPLCSFAX.length > 11) {
          this.aPLCSFAXF = true;
        } else {
          this.aPLCSFAXF = !kanaRegexsukane.test(this.aPLCSFAX);
        }
      } else {
        this.aPLCSFAXF = false;
      }
    },
//正則式によって担当者メールアドレスの値をチェックする
    aPLCSTantoshaMailInput() {
      const mail = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
      if (this.aPLCSTantoshaMail.length > 0) {
        if (this.aPLCSTantoshaMail.length > 255) {
          this.aPLCSTantoshaMailF = true;
        } else {
          this.aPLCSTantoshaMailF = !mail.test(this.aPLCSTantoshaMail);
        }
      } else {
        this.aPLCSTantoshaMailF = false;
      }
    },
//正則式によって確認用メールアドレスの値をチェックする
    aPLCSKakuninyoMailInput() {
      if (this.aPLCSKakuninyoMail !== this.aPLCSTantoshaMail) {
        this.aPLCSKakuninyoMailF = true;
      } else {
        this.aPLCSKakuninyoMailF = false;
      }
    },
  }
}
</script>

<style>
.base1{
  /*overflow: auto;*/
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
.applyAll {
  width: 50%;
  border-collapse: collapse;
  border-radius: 20px;
  overflow: hidden;/*  隐藏溢出部分*/
}
.applyAll tr:hover td {
  background-color: rgb(237, 109, 130); /* 鼠标悬停时的背景颜色 */
}
.applyAll th {
  padding: 8px;
  /*background-color: rgb(237, 109, 130)*/
}

.applyAll td {
  background-color: pink;
  border: 1px solid rgb(249, 245, 245);
  padding: 8px;
  margin: 4px;
}
.short-cell {
  width: 180px; /* 设置第一列的宽度 */
  text-align: left;
}
.td-2 {
  text-align: left;
}
.td-2 input[type="text"] {
  border-radius: 6px;
  border-color: rgb(240, 79, 79);
  outline: none;
}
.note {
  margin-left: 50px; /* 添加间距 */
  font-size: 15px;
  color: white;
  font-weight: bold;
}
.error-message {
  color: rgb(61, 7, 88);
  margin-left: 30px;
}
.addressselect:focus {
  outline: none; /* 移除选择框的默认聚焦边框 */
}
.addressselect {
  width: 180px;
  padding: 6px 10px;
  font-size: 14px;
  border: 1px solid #e75252;
  border-radius: 4px;/* 为元素添加圆角边框。*/
}
</style>
