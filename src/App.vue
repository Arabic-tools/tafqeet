<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <h1>تفقيط .كوم</h1>
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
    <v-footer>
      <v-container>
        <v-row style="text-align:center">
          <v-col  cols="12" md="6">
            <p>
              تفقيط.كوم لتحويل الارقام العربية إلى ما يقابلها كتابة، مع مراعاة
              التذكير والتأنيث . <br />

              الطريقة المثلى لكتابة الارقام بالحروف عند كتابة الشيكات. <br />
            </p>
          </v-col>
          <v-col cols="12" md="6">
            <p>
              للإتصال بنا: Tafqet@inboxeen.com <br />
              Tafqet is mumbers to Words Converter
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  mounted() {
    this.$vuetify.rtl = true;
  },

  components: {},

  data: () => ({
    //
  }),
};
</script>
<style>
* {
  font-family: "Tajawal", sans-serif;
  font-weight: 400;
}
</style>
