const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ``,
      confirmedName: ``,
    };
  },
  methods: {
    counterAdd(num) {
      this.counter = this.counter + num;
    },
    counterSubtract(num) {
      this.counter = this.counter - num;
    },
    setName(e, lastName) {
      this.name = e.target.value + ` ` + lastName;
    },
    submitForm() {
      alert(`Submitted!`);
    },
    submittedName() {
      this.confirmedName = this.name;
    },
  },
});

app.mount("#events");
