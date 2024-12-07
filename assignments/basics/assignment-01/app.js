const app = Vue.createApp({
  data() {
    return {
      name: `Doug`,
      age: 31,
      photo: `https://thegrindfs.com/cdn/shop/files/The_Grind_Logo_Transparent_480x.png?v=1627693918`,
    };
  },
  methods: {
    ageInFive() {
      return this.age + 5;
    },
    randomNumber() {
      return Math.random();
    },
  },
});

app.mount("#assignment");
