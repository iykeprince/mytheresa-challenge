module.exports = {
  verbose: true,
  roots: ["<rootDir>/src/"],
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(css|sass)$": "identity-obj-proxy",
  },
}