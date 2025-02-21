const app = Vue.createApp({
  data() {
    return {
      enteredGoalValue: ``,
      goals: [`Testing`],
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalValue);
    },
  },
});

app.mount(`#user-goals`);
