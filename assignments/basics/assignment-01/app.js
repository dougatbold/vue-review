const app = Vue.createApp({
  data() {
    return {
      name: `Doug Spencer`,
      age: 31,
      randomPhoto: `https://images.sidearmdev.com/resize?url=https%3A%2F%2Fdxbhsrqyrr690.cloudfront.net%2Fsidearm.nextgen.sites%2Fsoonersports.com%2Fimages%2F2013%2F8%2F7%2FQTQHDXOVUSUMUNZ.20130807133230.jpg&height=300&type=webp`,
    };
  },
  methods: {
    addYears(years) {
      const newAge = this.age + years;
      return newAge;
    },
    randomNumber() {
      return Math.random();
    },
  },
});

app.mount("#assignment");
