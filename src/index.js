const { injectBabelPlugin } = require("react-app-rewired");

function rewireClassyUi(config, env, styledComponentsPluginOptions = {}) {
  return injectBabelPlugin(
    ["classy-ui", styledComponentsPluginOptions],
    config
  );
}

module.exports = rewireClassyUi;
