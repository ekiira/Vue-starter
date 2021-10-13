const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      books: [{
          title: "The Final Empire",
          author: "Yaw Baldwin",
          image: 'assets/avatar.jpeg'
        },
        {
          title: "The Final Empire II",
          author: "Yaw Baldwin",
          image: 'assets/avatar.jpeg'
        },
        {
          title: "Dumbledore",
          author: "J.K. Rowling",
          image: 'assets/avatar1.jpeg'
        }
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