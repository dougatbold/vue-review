const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ``,
      lastName: ``,
      // fullname: ``,
      confirmedName: ``,
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(function () {
          that.counter = 0;
        }, 2000);
      }
    },
    // name(value) {
    //   if (value === ``) {
    //     this.fullname = ``;
    //   } else {
    //     this.fullname = value + ` ` + this.lastName;
    //   }
    // },
    // lastName(value) {
    //   if (value === ``) {
    //     this.fullname = ``;
    //   } else {
    //     this.fullname = this.name + ` ` + value;
    //   }
    // },
  },
  methods: {
    addCounter(num) {
      this.counter = this.counter + num;
    },
    minusCounter(num) {
      this.counter = this.counter - num;
    },
    setName(event, lastName) {
      this.name = event.target.value;
    },
    confirmName() {
      this.confirmedName = this.name;
    },
    resetName() {
      this.confirmedName = ``;
    },
    submitForm() {
      alert(`Submitted!`);
    },
  },
  computed: {
    fullname() {
      console.log("Running again...");
      if (this.name === `` || this.lastName === ``) {
        return ``;
      }
      return this.name + ` ` + this.lastName;
    },
  },
});

app.mount("#events");
