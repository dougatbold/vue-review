const app = Vue.createApp({
  data() {
    return { counter: 0 };
  },
  watch: {
    // Updated watch (watching computed property)
    counterCheck() {
      const that = this;
      setTimeout(function () {
        that.number = 0;
      }, 5000);
    },

    // Original watcher
    counter(value) {
      if (value >= 37) {
        const that = this;
        setTimeout(function () {
          that.counter = 0;
        }, 5000);
      }
    },
  },
  computed: {
    counterCheck() {
      if (this.counter < 37) {
        return "Not there yet";
      } else if (this.counter === 37) {
        return 37;
      } else {
        return "Too much!";
      }
    },
  },
  methods: {
    // More versatile method
    addNumber(num) {
      this.counter = this.counter + num;
    },

    // Original methods
    // addOne() {
    //   this.counter = this.counter + 1;
    // },

    // addFive() {
    //   this.counter = this.counter + 5;
    // },
  },
});

app.mount("#assignment");
