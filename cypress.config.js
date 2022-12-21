module.exports = {
  // projectId: 'hyb4kp',
  projectId: "15rwu3",

  //watchForFileChanges: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "vue-cli",
      bundler: "webpack",
    },
  },
};
