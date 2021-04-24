<template>
  <v-container>
    <v-row style="min-height: 30vh" align="center">
      <v-col style="text-align: center">
        <h2 style="font-size: 2.8rem">
          تحويل الأعداد العربية إلى ما يقابلها كتابةً
        </h2>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="6" sm="4" md="3">
        <v-text-field
          color="indigo base"
          v-model="arabicNumber"
          outlined
          label="أدخل الرقم"
        >
        </v-text-field>
      </v-col>
      <v-col cols="6" sm="4" md="3">
        <v-autocomplete
          v-model="countee"
          :items="types"
          clearable
          outlined
          :item-value="itemValue"
          label="أدخل المعدود"
        >
        </v-autocomplete>
      </v-col>

      <v-col cols="6" sm="4" md="2">
        <v-text-field v-model="prefix" outlined label="أدخل الكلام السابق">
        </v-text-field>
      </v-col>
      <v-col cols="6" sm="4" md="2">
        <v-text-field v-model="suffix" outlined label="أدخل الكلام اللاحق">
        </v-text-field>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="10" class="output ma-2">
        <div class="copy-btn">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-bind="attrs" v-on="on" icon fab>
                <v-icon v-clipboard:copy="output"> mdi-content-copy </v-icon>
              </v-btn>
            </template>
            <span>إضغط هنا للنسخ</span>
          </v-tooltip>
        </div>

        <p>{{ output }}</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col style="text-align:center;color:#e2e2e2;"
        >تفقيط, تحويل الأرقام إلى كلمات, تحويل الأعداد الى كلمات, تحويل الأرقام
        إلى حروف, أو كتابة الارقام بالكلمات العربية.</v-col
      >
    </v-row>
  </v-container>
</template>

<style lang="scss">
.output {
  position: relative;
  background-color: #f5f5f5;
  border-radius: 10px;

  .copy-btn {
    position: absolute;
    left: 5px;
    bottom: 5px;
  }
}
</style>
<script>
import { tafqeet } from "../scripts/tafqeet";
const { types } = require("./data.json");
export default {
  name: "Home",
  watch: {
    arabicNumber() {
      //  @input="changeArbic(arabicNumber)"
      this.arabicNumber = this.changeArbic(this.arabicNumber);
    },
  },
  methods: {
    itemValue(item) {
      return item;
    },

    getTafqeetwithCountee(number, countee) {
      console.log(number, countee);
      let x = parseInt(number);
      return (
        (x > 2 ? tafqeet(number) + " " : "") +
        (countee != null ? this.getCountee(countee, number) : "")
      );
    },
    getCountee(countee, number) {
      let x = parseInt(number);
      if (x === 1) return countee.text;
      else if (x === 2) return countee["2"];
      else if (x > 2 && x < 11) return countee["3"];
      else return countee["11"];
    },
    changeArbic(num) {
      let arabicArr = {
        "٠": 0,
        "١": 1,
        "٢": 2,
        "٣": 3,
        "٤": 4,
        "٥": 5,
        "٦": 6,
        "٧": 7,
        "٨": 8,
        "٩": 9,
      };

      let output = new String(num);
      let out = "";
      for (let i = 0; i < output.length; i++) {
        let arabicD = output[i];
        let digit = arabicArr[arabicD];
        if (digit >= 0) {
          let number = new String(digit);
          out += number;
        } else {
          out += output[i];
        }
      }
      return out;
    },
  },
  computed: {
    output() {
      let main = this.arabicNumber;

      if (main) {
        let sub = this.countee
          ? (main - Math.floor(main)).toFixed(2) * this.countee.base
          : null;
        return (
          this.prefix +
          " " +
          this.getTafqeetwithCountee(this.arabicNumber, this.countee) +
          (sub
            ? " و" + this.getTafqeetwithCountee(sub, this.countee.sub)
            : "") +
          " " +
          this.suffix
        );
      } else return this.prefix + " " + this.suffix;
    },
  },
  data() {
    return {
      countee: null,
      types,
      arabicNumber: "",
      prefix: "فقط",
      suffix: "لا غير",
    };
  },
};
</script>
