const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      books: [{
          id: 1,
          title: "The Final Empire",
          author: "Yaw Baldwin",
          image: 'assets/avatar.jpeg',
          isFav: true
        },
        {
          id: 2,
          title: "The Final Empire II",
          author: "Yaw Baldwin",
          image: 'assets/avatar.jpeg',
          isFav: false
        },
        {
          id: 3,
          title: "Dumbledore",
          author: "J.K. Rowling",
          image: 'assets/avatar1.jpeg',
          isFav: true
        }
      ],
    };
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    toggleFav(book) {
      book.isFav = !book.isFav
      // this.books?.filter((book) => {
      //   if (book.id === id) {
      //     book.isFav = !book.isFav
      //   }
      // })
    }
  },
  computed: {
    filteredBooks() {
     return this.books?.filter((book) => book.isFav)
    }
  }
});

app.mount("#app");