const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  watch: {
    // counter(value) {
    //   if (value > 37) {
    //     const that = this;
    //     setTimeout(function () {
    //       that.counter = 0;
    //     }, 5000);
    //   }
    // },
    counterStatus() {
      const that = this;
      setTimeout(function () {
        that.counter = 0;
      }, 5000);
    },
  },
  methods: {
    addCounter(num) {
      this.counter = this.counter + num;
    },
    minusCounter(num) {
      this.counter = this.counter - num;
    },
  },
  computed: {
    counterStatus() {
      if (this.counter < 37) {
        return `Not there yet...`;
      } else if (this.counter > 37) {
        return `Too much!`;
      } else {
        return `That's it!`;
      }
    },
  },
});

app.mount("#assignment");
