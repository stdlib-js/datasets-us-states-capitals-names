<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# US State Capitals and Names

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> US state capitals and names.

<section class="installation">

## Installation

```bash
npm install @stdlib/datasets-us-states-capitals-names
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).
-   To use as a general utility for the command line, install the corresponding [CLI package][cli-section] globally.

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var table = require( '@stdlib/datasets-us-states-capitals-names' );
```

#### table()

Returns an object mapping US state capitals to state names.

```javascript
var t = table();
/* returns
    {
        'Montgomery': 'Alabama',
        'Juneau': 'Alaska',
        'Phoenix': 'Arizona',
        'Little Rock': 'Arkansas',
        'Sacramento': 'California',
        'Denver': 'Colorado',
        'Hartford': 'Connecticut',
        'Dover': 'Delaware',
        'Tallahassee': 'Florida',
        'Atlanta': 'Georgia',
        'Honolulu': 'Hawaii',
        'Boise': 'Idaho',
        'Springfield': 'Illinois',
        'Indianapolis': 'Indiana',
        'Des Moines': 'Iowa',
        'Topeka': 'Kansas',
        'Frankfort': 'Kentucky',
        'Baton Rouge': 'Louisiana',
        'Augusta': 'Maine',
        'Annapolis': 'Maryland',
        'Boston': 'Massachusetts',
        'Lansing': 'Michigan',
        'Saint Paul': 'Minnesota',
        'Jackson': 'Mississippi',
        'Jefferson City': 'Missouri',
        'Helena': 'Montana',
        'Lincoln': 'Nebraska',
        'Carson City': 'Nevada',
        'Concord': 'New Hampshire',
        'Trenton': 'New Jersey',
        'Santa Fe': 'New Mexico',
        'Albany': 'New York',
        'Raleigh': 'North Carolina',
        'Bismarck': 'North Dakota',
        'Columbus': 'Ohio',
        'Oklahoma City': 'Oklahoma',
        'Salem': 'Oregon',
        'Harrisburg': 'Pennsylvania',
        'Providence': 'Rhode Island',
        'Columbia': 'South Carolina',
        'Pierre': 'South Dakota',
        'Nashville': 'Tennessee',
        'Austin': 'Texas',
        'Salt Lake City': 'Utah',
        'Montpelier': 'Vermont',
        'Richmond': 'Virginia',
        'Olympia': 'Washington',
        'Charleston': 'West Virginia',
        'Madison': 'Wisconsin',
        'Cheyenne': 'Wyoming'
    }
*/
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var capitalize = require( '@stdlib/string-capitalize' );
var table = require( '@stdlib/datasets-us-states-capitals-names' );

var tbl = table();

function getState( capital ) {
    var state;
    var parts;
    var i;

    // Ensure the first letter of each word comprising a capital is capitalized...
    parts = capital.split( ' ' );
    for ( i = 0; i < parts.length; i++ ) {
        parts[ i ] = capitalize( parts[ i ] );
    }
    // Get the state name:
    state = tbl[ parts.join( ' ' ) ];

    // Ensure a valid capital name was provided...
    if ( state === void 0 ) {
        throw new Error( 'unrecognized capital. Value: `' + capital + '`.' );
    }
    return state;
}

console.log( getState( 'Jefferson City' ) );
// => 'Missouri'

console.log( getState( 'Trenton' ) );
// => 'New Jersey'

console.log( getState( 'Sacramento' ) );
// => 'California'
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="installation">

## Installation

To use as a general utility, install the CLI package globally

```bash
npm install -g @stdlib/datasets-us-states-capitals-names-cli
```

</section>

<!-- CLI usage documentation. -->

<section class="usage">

### Usage

```text
Usage: us-states-capitals-names [options]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="notes">

### Notes

-   Data is written to `stdout` as comma-separated values ([CSV][csv]), where the first line is a header line.

</section>

<!-- /.notes -->

<section class="examples">

### Examples

```bash
$ us-states-capitals-names
capital,name
Montgomery,Alabama
Juneau,Alaska
Phoenix,Arizona
...
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- <license> -->

## License

The data files (databases) are licensed under an [Open Data Commons Public Domain Dedication & License 1.0][pddl-1.0] and their contents are licensed under [Creative Commons Zero v1.0 Universal][cc0]. The software is licensed under [Apache License, Version 2.0][apache-license].

<!-- </license> -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/datasets-us-states-capitals`][@stdlib/datasets/us-states-capitals]</span><span class="delimiter">: </span><span class="description">A list of US state capitals in alphabetical order according to state name.</span>
-   <span class="package-name">[`@stdlib/datasets-us-states-names`][@stdlib/datasets/us-states-names]</span><span class="delimiter">: </span><span class="description">A list of US state names in alphabetical order.</span>
-   <span class="package-name">[`@stdlib/datasets-us-states-names-capitals`][@stdlib/datasets/us-states-names-capitals]</span><span class="delimiter">: </span><span class="description">US state names and capitals.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/datasets-us-states-capitals-names.svg
[npm-url]: https://npmjs.org/package/@stdlib/datasets-us-states-capitals-names

[test-image]: https://github.com/stdlib-js/datasets-us-states-capitals-names/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/datasets-us-states-capitals-names/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/datasets-us-states-capitals-names/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/datasets-us-states-capitals-names?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/datasets-us-states-capitals-names.svg
[dependencies-url]: https://david-dm.org/stdlib-js/datasets-us-states-capitals-names/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[cli-section]: https://github.com/stdlib-js/datasets-us-states-capitals-names#cli
[cli-url]: https://github.com/stdlib-js/datasets-us-states-capitals-names/tree/cli
[@stdlib/datasets-us-states-capitals-names]: https://github.com/stdlib-js/datasets-us-states-capitals-names/tree/main

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/datasets-us-states-capitals-names/tree/deno
[deno-readme]: https://github.com/stdlib-js/datasets-us-states-capitals-names/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/datasets-us-states-capitals-names/tree/umd
[umd-readme]: https://github.com/stdlib-js/datasets-us-states-capitals-names/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/datasets-us-states-capitals-names/tree/esm
[esm-readme]: https://github.com/stdlib-js/datasets-us-states-capitals-names/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/datasets-us-states-capitals-names/blob/main/branches.md

[pddl-1.0]: http://opendatacommons.org/licenses/pddl/1.0/

[cc0]: https://creativecommons.org/publicdomain/zero/1.0

[apache-license]: https://www.apache.org/licenses/LICENSE-2.0

[csv]: https://tools.ietf.org/html/rfc4180

<!-- <related-links> -->

[@stdlib/datasets/us-states-capitals]: https://github.com/stdlib-js/datasets-us-states-capitals

[@stdlib/datasets/us-states-names]: https://github.com/stdlib-js/datasets-us-states-names

[@stdlib/datasets/us-states-names-capitals]: https://github.com/stdlib-js/datasets-us-states-names-capitals

<!-- </related-links> -->

</section>

<!-- /.links -->
