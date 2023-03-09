const custom = require("@digitalroute/cz-conventional-changelog-for-jira/configurable");
// You can do this optionally if you want to extend the commit types
// const defaultTypes = require("@digitalroute/cz-conventional-changelog-for-jira/types");

// "types": {
//     "feat": {
//       "description": "A new feature",
//       "title": "Features"
//     },
//     "fix": {
//       "description": "A bug fix",
//       "title": "Bug Fixes"
//     },
//     "docs": {
//       "description": "Documentation only changes",
//       "title": "Documentation"
//     },
//     "style": {
//       "description": "Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)",
//       "title": "Styles"
//     },
//     "refactor": {
//       "description": "A code change that neither fixes a bug nor adds a feature",
//       "title": "Code Refactoring"
//     },
//     "perf": {
//       "description": "A code change that improves performance",
//       "title": "Performance Improvements"
//     },
//     "test": {
//       "description": "Adding missing tests or correcting existing tests",
//       "title": "Tests"
//     },
//     "build": {
//       "description": "Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)",
//       "title": "Builds"
//     },
//     "ci": {
//       "description": "Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)",
//       "title": "Continuous Integrations"
//     },
//     "chore": {
//       "description": "Other changes that don't modify src or test files",
//       "title": "Chores"
//     },
//     "revert": {
//       "description": "Reverts a previous commit",
//       "title": "Reverts"
//     }
//   }

module.exports = custom({
  types: {
    feat: {
      description: "A new feature",
      title: "Features",
    },
    fix: {
      description: "A bug fix",
      title: "Bug Fixes",
    },
    docs: {
      description: "Documentation only changes",
      title: "Documentation",
    },
    refactor: {
      description:
        "A code change that neither fixes a bug nor adds a feature (formatting, performance improvement, etc)",
      title: "Code Refactoring",
    },
    test: {
      description: "Adding missing tests or correcting existing tests",
      title: "Tests",
    },
    build: {
      description:
        "Changes that affect the build system or external dependencies (npm, webpack, typescript)",
      title: "Builds",
    },
    ci: {
      description:
        "Changes to our CI configuration files and scripts (NOTE: Does not bump the version)",
      title: "Continuous Integrations",
    },
    // chore: {
    //   description: "Other changes that don't modify src or test files",
    //   title: 'Chores'
    // },
    revert: {
      description: "Reverts a previous commit",
      title: "Reverts",
    },
    perf: {
      description: "Improvements that will make your code perform better",
      title: "Performance",
    },
  },
});
