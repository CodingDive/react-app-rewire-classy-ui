const { injectBabelPlugin } = require("react-app-rewired");

function rewireClassyUi(config, env) {
  return injectBabelPlugin(["classy-ui/plugin"], config);
}

module.exports = rewireClassyUi;
