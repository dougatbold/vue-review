const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    outputFullname() {
      if (this.name === "") {
        return "";
      }

      return this.name + " Spencer";
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = ``;
    },
  },
});

console.log("Initializing Vue app...");
const vm = app.mount("#events");
console.log("Vue app mounted, current name:", vm.name);
