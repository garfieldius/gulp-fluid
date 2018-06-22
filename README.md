# Fluid template engine for gulp

This module allows to use the [fluid](https://github.com/TYPO3/Fluid) template engine with gulp.

## Installation

Use your favourite package manager to add to your project:

```bash
# NPM
npm install --save gulp-fluid

# Yarn
yarn add gulp-fluid
```

## Usage

Use the module like any other gulp plugin:

```js

const gulp = require("gulp")
const fluid = require("gulp-fluid")
const vars = require("./data.json")

gulp.task("templates", () => {
  return gulp.src("./src/templates/*.html")
    .pipe(fluid({variables: vars}))
    .pipe(gulp.dest("./build/html"))
})
```

The function takes a simple object for configuration. It can have the following properties:

| Property     | Description                                                          |
|--------------|----------------------------------------------------------------------|
| php          | Path to php executeable, defaults to "php"                           |
| variables    | Any object that can be JSON serialized, passed as variables to fluid |
| layoutPaths  | Array of strings, containing path(s) to layout files                 |
| partialPaths | Array of strings, containing path(s) to partial files                |

## License

Apache License 2.0

Please see the file LICENSE, which is part of this package, or visit <https://www.apache.org/licenses/LICENSE-2.0>
