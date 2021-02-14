# Webpack config for **Typescript** and **SCSS** with Linters
## **Includes:**
- Development and Production configs using **webpack-merge**
- Caching and optimization on development config (including the use of  **webpack-parallel**)
- ESLint (with Autofix, with Google standard using **eslint-config-google**)
- Stylelint (with Autofix, with Idiomatic order using **stylelint-config-idiomatic-order** and SASS guidelines)
- Support for **React**
- Support for **IE11** and polyfills using core.js
- Minifying for css/js in production config **only**
- Minimal output after compilation

## **Getting started:**
Install yarn first:
```
npm install -g yarn
```
Install packages with:
```
yarn install
```
For development run:
```
yarn run watch
```
(Optional) For production run:
```
yarn run production
```

## **Support for (older) browsers:**
### For .js entries:
1. Define your targeted browsers in **.browserslistrc**. [Check the documentation here.](https://github.com/browserslist/browserslist#full-list)
2. Use polyfills in your entry js file(s): [src/js/app.ts](src/js/app.ts) with:
```
/* Full polyfill */
import "core-js/stable";
import "regenerator-runtime/runtime";

/* Or start importing only required polyfills like: */
//import "core-js/es/array";
```
### For .css entries:
1. Define your targeted browsers in **.browserslistrc**. [Check the documentation here.](https://github.com/browserslist/browserslist#full-list)
2. Define your postcss config at [postcss.config.js](postcss.config.js) (currently includes autoprefixer and polyfills with [postcss-preset-env](https://github.com/csstools/postcss-preset-env#postcss-preset-env-))
```
module.exports = {
    plugins: [
		'autoprefixer',
		'postcss-preset-env',
    ]
}
```

## **Linters:**
### Disabling autofix:
In [webpack.dev.js](webpack.dev.js) and [webpack.prod.js](webpack.prod.js):
```
new StylelintPlugin({
	fix: true, /* set to false */
	files: 'src/**/*.scss',
	emitWarning: true,
}),
new ESLintPlugin({
	fix : true, /* set to false */
	extensions: ['ts', 'tsx', 'js'],
	threads: true
}),
```
### Disabling linting in specific files:
For stylelint use [the below code](https://stylelint.io/user-guide/ignore-code#within-files) but be aware of how the [fix parameter works](https://stylelint.io/user-guide/ignore-code#within-files):
```
/* stylelint-disable */
a {}
/* stylelint-enable */
```
---
For eslint use [the below code](https://eslint.org/docs/2.13.1/user-guide/configuring#disabling-rules-with-inline-comments):
```
/* eslint-disable */

alert('foo');

/* eslint-enable */
```

### Questions/suggestions on improving the configuration are more than welcome.