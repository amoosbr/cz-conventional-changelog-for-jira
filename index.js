const custom = require("@digitalroute/cz-conventional-changelog-for-jira/configurable");

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
      description: "A code change that neither fixes a bug nor adds a feature",
      title: "Code Refactoring",
    },
    test: {
      description: "Adding missing tests or correcting existing tests",
      title: "Tests",
    },
    build: {
      description:
        "Changes that affect the build system or external dependencies (npm, pip, ts, gradle)",
      title: "Builds",
    },
    ci: {
      description:
        "Changes to our CI configuration files and scripts (NOTE: Does not bump the version)",
      title: "Continuous Integrations",
    },
    style: {
      description:
        "Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)",
      title: "Style",
    },
    perf: {
      description: "A code change that improves performance",
      title: "Performance",
    },
    revert: {
      description: "Reverts a previous commit",
      title: "Reverts",
    },
    chore: {
      description: "Other changes that don't modify src or test files",
      title: "Chores",
    },
  },
  jiraLocation: "pre-type",
});
