# generator v.s. async/await performance

## Introduction

A [simple test](https://medium.com/@markherhold/generators-vs-async-await-performance-806d8375a01a) to compare generator v.s. async/await performance.

## Result

    async/await is much faster than generator.

## Run

    $ node -v
    v7.7.1

    $ npm install
    $ node index.js 
    co x 98,861 ops/sec ±3.58% (73 runs sampled)
    async/await x 204,399 ops/sec ±2.30% (76 runs sampled)
    Fastest is async/await


## References

* [Generators VS Async/Await Performance](https://medium.com/@markherhold/generators-vs-async-await-performance-806d8375a01a)

