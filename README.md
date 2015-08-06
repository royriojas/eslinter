[![NPM Version](http://img.shields.io/npm/v/eslinter.svg?style=flat)](https://npmjs.org/package/eslinter)
[![Build Status](http://img.shields.io/travis/royriojas/eslinter.svg?style=flat)](https://travis-ci.org/royriojas/eslinter)

# eslinter
> Simple wrapper around eslint with support for globs and cache, so files that not changed can be skipped, if previous run passed

## Motivation
Eslint is a nice tool but I wanted to be able to pass `globs` to validate and use a cache to speed up the validation process.

## Features
- This module add the ability to remember which files were processed. So the next execution will only consider those files that changed.
In order to destroy the cache, just execute the command with the option `--no-use-cache` or `--use-cache=false` and the cache will be
destroyed.
- This module also accepts globs from the command line. Check the examples below

## Install

```bash
npm i -g eslinter
```

## Usage

```
Usage: eslinter [options] glob [glob1] [glob2]..[globN]

Options:
  -i, --cache-id String
      An identifier for the cache file to create. This is only needed if you want to run this task in
      parallel otherwise the next execution might get confusing results for reusing the same cache
      file.
  -f, --format String    the formatter to use to format the output of the tool. If none specified
                         this will use `eslint-friendly-formatter` - default:
                         eslint-friendly-formatter
  -u, --use-cache
      If true, this module will remember the `mtime` and `size` of the linted files that passed
      validation and only operate on the ones that changed. If false, the cache will be destroyed.
      Cache will only be kept between executions with the useCache flag set to true. - default: true
  -h, --help             Show this help
  -v, --version          Outputs the version number
  -q, --quiet            Show only the summary info - default: false
  --colored-output       Use colored output in logs
  -c, --config String
      Path to your `eslint` config, if not provided will try to use the `.eslintrc` file in your
      current working directory, if not found will use the one provided with this package. Check:
      http://eslint.org/docs/user-guide/configuring for more info about the configuration options.
```

## Examples

```bash
# validate files, easy way
eslinter src/**/*.js specs/**/*.js

# skip the cache. The next execution without the flag will create a new cache
eslinter --no-use-cache src/**/*.js

# especify a custom formatter
eslinter -f 'stylish' src/**/*.js

# especify a custom formatter from node_modules
eslinter -f 'node_modules/eslint-path-formatter' src/**/*.js
```

**Note**

The cache is only kept if the executions of the eslinter command are done without the `--no-use-cache` or `--use-cache=false` flags. If any execution include this flag the cache will be destroyed and be created again from scratch the next execution without that flag.

## [Changelog](./changelog.md)
