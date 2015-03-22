[![NPM Version](http://img.shields.io/npm/v/eslinter.svg?style=flat)](https://npmjs.org/package/eslinter)
[![Build Status](http://img.shields.io/travis/royriojas/eslinter.svg?style=flat)](https://travis-ci.org/royriojas/eslinter)

# eslinter
> Simple wrapper around eslint with support for globs and cache, so files that not changed can be skipped, if previous run passed

## Motivation

`eslint` cli 

## Install

```bash
npm i -g eslinter
```

## Usage

```
Usage: eslinter [options] glob [glob1] [glob2]..[globN]

Options:
  -f, --format String  the formatter to use to format the output of the tool. If none specified this
                       will use `eslint-friendly-formatter` - default: eslint-friendly-formatter
  -u, --useCache
      If true, this module will remember the `mtime` and `size` of the linted files that passed
      validation and only operate on the ones that changed. If false, the cache will be destroyed.
      Cache will only be kept between executions with the useCache flag set to true.
  -h, --help           Show this help
  -v, --version        Outputs the version number
  -q, --quiet          Show only the summary info
  -c, --config String
      Path to your `eslint` config, if not provided will try to use the `.eslintrc` file in your
      current working directory, if not found will use the one provided with this package. Check:
      http://eslint.org/docs/user-guide/configuring for more info about the configuration options.
```

## Examples

```bash
# validate files, easy way
eslinter src/**/*.js specs/**/*.js

# validate files using cache
eslinter -u src/**/*.js 

# especify a custom formatter
eslinter -f 'stylish' src/**/*.js 

# especify a custom formatter from node_modules
eslinter -f 'node_modules/eslint-path-formatter' src/**/*.js
```

**Note**

The cache is only kept if the executions of the eslinter command are done with the `-u` flag. If any execution omit this flag
The cache will be destroyed and be created again from scratch the next time the `-u` flag is provided

## [Changelog](./changelog.md)