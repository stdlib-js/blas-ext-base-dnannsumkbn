<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

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

# dnannsumkbn

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Calculate the sum of double-precision floating-point strided array elements, ignoring `NaN` values and using an improved Kahan–Babuška algorithm.

<section class="intro">

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import dnannsumkbn from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-dnannsumkbn@esm/index.mjs';
```

#### dnannsumkbn( N, x, strideX, out, strideOut )

Computes the sum of double-precision floating-point strided array elements, ignoring `NaN` values and using an improved Kahan–Babuška algorithm.

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs';

var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
var out = new Float64Array( 2 );

var v = dnannsumkbn( x.length, x, 1, out, 1 );
// returns <Float64Array>[ 1.0, 3 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: input [`Float64Array`][@stdlib/array/float64].
-   **strideX**: index increment for `x`.
-   **out**: output [`Float64Array`][@stdlib/array/float64] whose first element is the sum and whose second element is the number of non-NaN elements.
-   **strideOut**: index increment for `out`.

The `N` and `stride` parameters determine which elements are accessed at runtime. For example, to compute the sum of every other element in `x`,

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs';
import floor from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@esm/index.mjs';

var x = new Float64Array( [ 1.0, 2.0, NaN, -7.0, NaN, 3.0, 4.0, 2.0 ] );
var out = new Float64Array( 2 );
var N = floor( x.length / 2 );

var v = dnannsumkbn( N, x, 2, out, 1 );
// returns <Float64Array>[ 5.0, 2 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs';
import floor from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@esm/index.mjs';

var x0 = new Float64Array( [ 2.0, 1.0, NaN, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var out0 = new Float64Array( 4 );
var out1 = new Float64Array( out0.buffer, out0.BYTES_PER_ELEMENT*2 ); // start at 3rd element

var N = floor( x0.length / 2 );

var v = dnannsumkbn( N, x1, 2, out1, 1 );
// returns <Float64Array>[ 5.0, 4 ]
```

#### dnannsumkbn.ndarray( N, x, strideX, offsetX, out, strideOut, offsetOut )

Computes the sum of double-precision floating-point strided array elements, ignoring `NaN` values and using an improved Kahan–Babuška algorithm and alternative indexing semantics.

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs';

var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
var out = new Float64Array( 2 );

var v = dnannsumkbn.ndarray( x.length, x, 1, 0, out, 1, 0 );
// returns <Float64Array>[ 1.0, 3 ]
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.
-   **offsetOut**: starting index for `out`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying `buffer`, the `offset` parameter supports indexing semantics based on a starting index. For example, to calculate the sum of every other value in `x` starting from the second value

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs';
import floor from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@esm/index.mjs';

var x = new Float64Array( [ 2.0, 1.0, NaN, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
var out = new Float64Array( 4 );
var N = floor( x.length / 2 );

var v = dnannsumkbn.ndarray( N, x, 2, 1, out, 2, 1 );
// returns <Float64Array>[ 0.0, 5.0, 0.0, 4 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return a sum equal to `0.0`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@esm/index.mjs';
import round from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-round@esm/index.mjs';
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs';
import dnannsumkbn from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-dnannsumkbn@esm/index.mjs';

var x;
var i;

x = new Float64Array( 10 );
for ( i = 0; i < x.length; i++ ) {
    if ( randu() < 0.2 ) {
        x[ i ] = NaN;
    } else {
        x[ i ] = round( randu()*100.0 );
    }
}
console.log( x );

var out = new Float64Array( 2 );
dnannsumkbn( x.length, x, 1, out, 1 );
console.log( out );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

* * *

<section class="references">

## References

-   Neumaier, Arnold. 1974. "Rounding Error Analysis of Some Methods for Summing Finite Sums." _Zeitschrift Für Angewandte Mathematik Und Mechanik_ 54 (1): 39–51. doi:[10.1002/zamm.19740540106][@neumaier:1974a].

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/blas/ext/base/dnannsum`][@stdlib/blas/ext/base/dnannsum]</span><span class="delimiter">: </span><span class="description">calculate the sum of double-precision floating-point strided array elements, ignoring NaN values.</span>
-   <span class="package-name">[`@stdlib/blas/ext/base/dnannsumkbn2`][@stdlib/blas/ext/base/dnannsumkbn2]</span><span class="delimiter">: </span><span class="description">calculate the sum of double-precision floating-point strided array elements, ignoring NaN values and using a second-order iterative Kahan–Babuška algorithm.</span>
-   <span class="package-name">[`@stdlib/blas/ext/base/dnannsumors`][@stdlib/blas/ext/base/dnannsumors]</span><span class="delimiter">: </span><span class="description">calculate the sum of double-precision floating-point strided array elements, ignoring NaN values and using ordinary recursive summation.</span>
-   <span class="package-name">[`@stdlib/blas/ext/base/dnannsumpw`][@stdlib/blas/ext/base/dnannsumpw]</span><span class="delimiter">: </span><span class="description">calculate the sum of double-precision floating-point strided array elements, ignoring NaN values and using pairwise summation.</span>
-   <span class="package-name">[`@stdlib/blas/ext/base/dsumkbn`][@stdlib/blas/ext/base/dsumkbn]</span><span class="delimiter">: </span><span class="description">calculate the sum of double-precision floating-point strided array elements using an improved Kahan–Babuška algorithm.</span>
-   <span class="package-name">[`@stdlib/blas/ext/base/gnannsumkbn`][@stdlib/blas/ext/base/gnannsumkbn]</span><span class="delimiter">: </span><span class="description">calculate the sum of strided array elements, ignoring NaN values and using an improved Kahan–Babuška algorithm.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-ext-base-dnannsumkbn.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-ext-base-dnannsumkbn

[test-image]: https://github.com/stdlib-js/blas-ext-base-dnannsumkbn/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/blas-ext-base-dnannsumkbn/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-ext-base-dnannsumkbn/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-ext-base-dnannsumkbn?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-ext-base-dnannsumkbn.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-ext-base-dnannsumkbn/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-ext-base-dnannsumkbn/tree/deno
[umd-url]: https://github.com/stdlib-js/blas-ext-base-dnannsumkbn/tree/umd
[esm-url]: https://github.com/stdlib-js/blas-ext-base-dnannsumkbn/tree/esm

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-ext-base-dnannsumkbn/main/LICENSE

[@stdlib/array/float64]: https://github.com/stdlib-js/array-float64/tree/esm

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@neumaier:1974a]: https://doi.org/10.1002/zamm.19740540106

<!-- <related-links> -->

[@stdlib/blas/ext/base/dnannsum]: https://github.com/stdlib-js/blas-ext-base-dnannsum/tree/esm

[@stdlib/blas/ext/base/dnannsumkbn2]: https://github.com/stdlib-js/blas-ext-base-dnannsumkbn2/tree/esm

[@stdlib/blas/ext/base/dnannsumors]: https://github.com/stdlib-js/blas-ext-base-dnannsumors/tree/esm

[@stdlib/blas/ext/base/dnannsumpw]: https://github.com/stdlib-js/blas-ext-base-dnannsumpw/tree/esm

[@stdlib/blas/ext/base/dsumkbn]: https://github.com/stdlib-js/blas-ext-base-dsumkbn/tree/esm

[@stdlib/blas/ext/base/gnannsumkbn]: https://github.com/stdlib-js/blas-ext-base-gnannsumkbn/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
