export default {
  plugins: ["~/plugins/apollo-composition-api.js"],

  components: true,

  buildModules: ["@nuxtjs/composition-api/module"],

  build: {
    transpile: ["@vue/apollo-composable"]
  },

  modules: ["@nuxtjs/apollo"],

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: "http://localhost:1080"
      }
    }
  }
};
