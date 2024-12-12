const app = Vue.createApp({
  data() {
    return {
      taskValue: "",
      tasks: [],
      taskListIsVisible: true,
    };
  },
  computed: {
    buttonCaption() {
      return this.taskListIsVisible ? "Hide List" : "Show List";
    },
  },
  methods: {
    addTask() {
      this.tasks.push(this.taskValue);
    },
    toggleTaskList() {
      this.taskListIsVisible = !this.taskListIsVisible;
    },
  },
});

app.mount("#assignment");
