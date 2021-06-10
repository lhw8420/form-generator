module.exports = {
  printWidth: 120,
  tabWidth: 2,
  tabs: false,
  semi: true,
  singleQuote: true,
  quoteProps: 'as-needed',
  tailingComma: 'all',
  bracketSpacing: true,
  jsxBracketSameLine: false,
  arrowParens: 'always',
  endOfLine: 'auto', // 在对象或数组最后一个元素后面是否加逗号（在ES5中加尾逗号）
  'prettier.tslintIntegration': false, // 不让prettier使用tslint的代码格式进行校验
};
