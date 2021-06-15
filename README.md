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

# US State Capitals and Names

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> US state capitals and names.

<section class="installation">

## Installation

```bash
npm install @stdlib/datasets-us-states-capitals-names
```

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

To use the module as a general utility, install the module globally

```bash
npm install -g @stdlib/datasets-us-states-capitals-names
```

</section>

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


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/datasets-us-states-capitals-names.svg
[npm-url]: https://npmjs.org/package/@stdlib/datasets-us-states-capitals-names

[test-image]: https://github.com/stdlib-js/datasets-us-states-capitals-names/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/datasets-us-states-capitals-names/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/datasets-us-states-capitals-names/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/datasets-us-states-capitals-names?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/datasets-us-states-capitals-names
[dependencies-url]: https://david-dm.org/stdlib-js/datasets-us-states-capitals-names/main

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/datasets-us-states-capitals-names/main/LICENSE

[pddl-1.0]: http://opendatacommons.org/licenses/pddl/1.0/

[cc0]: https://creativecommons.org/publicdomain/zero/1.0

[apache-license]: https://www.apache.org/licenses/LICENSE-2.0

[csv]: https://tools.ietf.org/html/rfc4180

</section>

<!-- /.links -->
