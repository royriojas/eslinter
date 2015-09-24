var path = require( 'path' );

module.exports = {
  pkgJSONPath: path.resolve( __dirname, '../package.json' ),
  configFile: {
    defaultName: '.eslintrc',
    pathToLocalConfig: path.resolve( __dirname, '../configs/eslint.json' ),
    description: 'Path to your `eslint` config, if not provided will try to use the `.eslintrc` file in your current working directory, if not found will use the one provided with this package. Check: http://eslint.org/docs/user-guide/configuring for more info about the configuration options.'
  },
  //useDefaultOptions: true,
  optionator: {
    prepend: 'Usage: eslinter [options] glob [glob1] [glob2]..[globN]',
    append: '',
    options: [
      {
        heading: 'Options'
      },
      {
        option: 'cache-id',
        alias: 'i',
        type: 'String',
        description: 'An identifier for the cache file to create. This is only needed if you want to run this task in parallel otherwise the next execution might get confusing results for reusing the same cache file.'
      },
      {
        option: 'fix',
        alias: 'x',
        type: 'Boolean',
        default: 'false',
        description: 'If true, eslint will try to fix the issues that are fixable, sometimes multiple pass will be required'
      },
      {
        option: 'format',
        alias: 'f',
        type: 'String',
        default: 'eslint-friendly-formatter',
        description: 'the formatter to use to format the output of the tool. If none specified this will use `eslint-friendly-formatter`'
      },
      {
        option: 'use-cache',
        alias: 'u',
        type: 'Boolean',
        default: 'true',
        description: 'If true, this module will remember the `mtime` and `size` of the linted files that passed validation and only operate on the ones that changed. If false, the cache will be destroyed. Cache will only be kept between executions with the useCache flag set to true.'
      }
    ]
  }
};
