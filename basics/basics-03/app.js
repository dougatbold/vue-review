const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ``,
      confirmedName: ``,
    };
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
});

app.mount("#events");
