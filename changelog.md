
# eslinter - Changelog
## v2.3.3
- **Bug Fixes**
  - properly expand globs that contains globs with exclude patterns - [23cdd38]( https://github.com/royriojas/eslinter/commit/23cdd38 ), [royriojas](https://github.com/royriojas), 16/08/2015 21:20:37

    
## v2.3.2
- **Build Scripts Changes**
  - update clix dep to get nicer log output - [85f2a4c]( https://github.com/royriojas/eslinter/commit/85f2a4c ), [royriojas](https://github.com/royriojas), 11/08/2015 17:40:47

    
## v2.3.1
- **Build Scripts Changes**
  - Update to latest clix - [21414ec]( https://github.com/royriojas/eslinter/commit/21414ec ), [royriojas](https://github.com/royriojas), 11/08/2015 14:43:32

    
## v2.3.0
- **Build Scripts Changes**
  - update clix dep to get nicer log output - [7c8ddbb]( https://github.com/royriojas/eslinter/commit/7c8ddbb ), [royriojas](https://github.com/royriojas), 09/08/2015 18:25:23

    
## v2.2.0
- **Features**
  - Add cacheId option to specify an identifier for the cache file to use - [8651032]( https://github.com/royriojas/eslinter/commit/8651032 ), [royriojas](https://github.com/royriojas), 05/08/2015 19:47:22

    
## v2.1.0
- **Build Scripts Changes**
  - Remove `bumpery` in favor of npm scripts - [2aad65f]( https://github.com/royriojas/eslinter/commit/2aad65f ), [royriojas](https://github.com/royriojas), 28/07/2015 13:51:30

    added `bump-major` `bump-minor` and `bump-patch` scripts.
    
    Run then like
    
    ```bash
    npm run bump-patch
    ```
    
  - Update deps - [56eef83]( https://github.com/royriojas/eslinter/commit/56eef83 ), [royriojas](https://github.com/royriojas), 28/07/2015 13:50:25

    
- **Enhancements**
  - Enable by default `eqeqeq` as error - [671be63]( https://github.com/royriojas/eslinter/commit/671be63 ), [royriojas](https://github.com/royriojas), 28/07/2015 13:38:08

    
## v2.0.6
- **Enhancements**
  - Add token to ignore global `mockquire` function injected by browsyquire - [5980ea1]( https://github.com/royriojas/eslinter/commit/5980ea1 ), [royriojas](https://github.com/royriojas), 21/07/2015 19:41:25

    
## v2.0.5
- **Enhancements**
  - Cache is now enabled by default. - [1db5cef]( https://github.com/royriojas/eslinter/commit/1db5cef ), [royriojas](https://github.com/royriojas), 12/07/2015 21:27:01

    To disable it. Pass the flag `--no-use-cache` or `--use-cache=false`
    
    This will destroy the cache. A new one will be created the next execution without those flags
    
## v2.0.4
- **Refactoring**
  - Normalize info about this module options - [e929182]( https://github.com/royriojas/eslinter/commit/e929182 ), [royriojas](https://github.com/royriojas), 12/07/2015 20:35:26

    
## v2.0.3
- **Build Scripts Changes**
  - Automate generation of changelog and commit message for it - [8041291]( https://github.com/royriojas/eslinter/commit/8041291 ), [royriojas](https://github.com/royriojas), 12/07/2015 19:43:14

    
## v2.0.2
- **Build Scripts Changes**
  - Update module deps to remove colored output - [9e202e0]( https://github.com/royriojas/eslinter/commit/9e202e0 ), [royriojas](https://github.com/royriojas), 12/07/2015 19:37:54

    If colored output is required export the following variable
    
    ```bash
    export __CLIX_COLORED_OUTPUT__=true
    ```
    
## v2.0.0
- **Features**
  - Add `eslint-plugin-react` and enable es6 flags - [4a353cb]( https://github.com/royriojas/eslinter/commit/4a353cb ), [royriojas](https://github.com/royriojas), 16/06/2015 02:07:52

    
- **Build Scripts Changes**
  - update changelogx dep - [82a27a2]( https://github.com/royriojas/eslinter/commit/82a27a2 ), [royriojas](https://github.com/royriojas), 07/06/2015 01:20:44

    
## v1.0.3
- **Bug Fixes**
  - Warnings are only being shown when there are also errors. Fix [#1](https://github.com/royriojas/eslinter/issues/1) - [f837773]( https://github.com/royriojas/eslinter/commit/f837773 ), [royriojas](https://github.com/royriojas), 07/06/2015 01:18:21

    
## v1.0.2
- **Build Scripts Changes**
  - Update deps for eslint - [b858c38]( https://github.com/royriojas/eslinter/commit/b858c38 ), [royriojas](https://github.com/royriojas), 17/05/2015 11:14:11

    
## v1.0.1
- **Build Scripts Changes**
  - Update eslint dependency - [3a006c0]( https://github.com/royriojas/eslinter/commit/3a006c0 ), [royriojas](https://github.com/royriojas), 16/05/2015 10:26:16

    
## v1.0.0
#### main-module
- **Features**
  - Eslinter first working version - [3ac2d05]( https://github.com/royriojas/eslinter/commit/3ac2d05 ), [Roy Riojas](https://github.com/Roy Riojas), 21/03/2015 22:26:14

    
