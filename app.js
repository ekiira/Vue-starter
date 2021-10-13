const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      books: [
        { title: "The Final Empire", author: "Yaw Baldwin" },
        { title: "The Final Empire II", author: "Yaw Baldwin" },
        { title: "Dumbledore", author: "J.K. Rowling" }
      ],
    };
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
  },
});

app.mount("#app");
