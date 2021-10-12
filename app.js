const app = Vue.createApp({
  data() {
    return {
      title: "The Final Empire",
      author: "Yaw Baldwin",
      age: "54"
    };

  },
  methods: {
      changeTitle(title) {
          this.title = title
      }
  }
});

app.mount("#app");
