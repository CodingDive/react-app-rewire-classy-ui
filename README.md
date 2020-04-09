# `react-app-rewire-styled-components`

Add the `babel-plugin-classy-ui` to your `create-react-app` app via [`react-app-rewired`](https://github.com/timarney/react-app-rewired).

No need to use `classy-ui/macro`.

## Installation

```sh
yarn add react-app-rewire-styled-components

# alternatively if you're using npm
npm install --save react-app-rewire-styled-components
```

## Usage

In the `config-overrides.js` you created for `react-app-rewired` add this code:

```JS
const rewireClassyUi = require('react-app-rewire-classy-ui');

/* config-overrides.js */
module.exports = function override(config, env) {
  config = rewireClassyUi(config, env);
  return config;
}
```

That's it. Your app is now using the `classy-ui` Babel plugin.

## License

Licensed under the MIT License, Copyright ©️ 2020 Mikey Stengel. See [LICENSE.md](LICENSE.md) for more information.
