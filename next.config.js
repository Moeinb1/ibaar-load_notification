const path = require("path");
const tailwind = require("tailwindcss");
const autoPreFix = require("autoprefixer");

module.exports = {
  webpack: (config) => {
    config.resolve.modules.push(path.resolve("./app"));
    return config;
  },

  // experimental: {
  //   appDir: true,
  // },
  corePlugins: {
    preflight: false,
  },
  style: {
    postcss: {
      plugins: [tailwind, autoPreFix],
    },
  },
};
