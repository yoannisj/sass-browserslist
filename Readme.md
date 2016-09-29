# sass-browserslist

Use [browserslist](https://github.com/ai/browserslist) in your Libsass/node-sass modules.

## Usage

sass-browserslist is a node-js module that delegates to the `browserslist()` function, and formats the results as expected by various sass libraries managing browsers support. To actually get the formatted browsers list in sass, use node-sass's [function](https://github.com/sass/node-sass#functions--v300---experimental) option, or use a custom importer such as [node-sass-import-once](https://github.com/at-import/node-sass-import-once).

    var sass = require('node-sass');
    var sassBrowserslist = require('sass-browserslist');

    sass.render({
    /* ... */,
    functions: {
      'sass-browserslist': sassBrowserslist.supportFor
    }
    });

### support-for()

Returns the list of minimum browsers versions, as understood by sass's [support-for](https://github.com/JohnAlbin/support-for) module. Accepts the same parameters as the `browserslist()` function.

    var sassBrowserslist = require('sass-support-for');
    sassBrowserslist.supportFor();