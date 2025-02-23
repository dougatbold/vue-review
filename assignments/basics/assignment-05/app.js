const app = Vue.createApp({
  data() {
    return {
      enteredTaskValue: ``,
      tasks: [],
      listVisible: true,
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredTaskValue);
    },
    toggleList() {
      this.listVisible = !this.listVisible;
    },
  },
  computed: {
    buttonCaption() {
      return this.listVisible ? `Hide List` : `Show List`;
    },
  },
});

app.mount(`#assignment`);
