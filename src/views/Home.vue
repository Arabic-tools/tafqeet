<template>
  <v-container>
    <v-row style="height:30vh" align="center">
      <v-col style="text-align: center;">
        <h2 style="font-size:3rem">
          تحويل الأعداد العربية إلى ما يقابلها كتابةً
        </h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6" md="4">
        <v-text-field v-model="prefix" outlined label="أدخل الكلام السابق">
        </v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <v-text-field
       
          v-model="arabicNumber"
         
          outlined
          label="أدخل الرقم"
        >
        </v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <v-text-field v-model="suffix" outlined label="أدخل الكلام اللاحق">
        </v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <p>{{ output }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { tafqeet } from "../scripts/tafqeet";
export default {
  name: "Home",
  watch : {
    arabicNumber(){
      //  @input="changeArbic(arabicNumber)"
    this.arabicNumber = this.changeArbic(this.arabicNumber)
    }

  },
  methods: {
    changeArbic(num) {
      console.log("hi")
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
      return this.prefix + " " + tafqeet(this.arabicNumber) + " " + this.suffix;
    },
  },
  data() {
    return {
      arabicNumber: "",
      prefix: "فقط",
      suffix: "لا غير",
    };
  },
  components: {},
};
</script>
