
# assert 1.0.0 ![stable](https://img.shields.io/badge/stability-stable-4EBA0F.svg?style=flat)

```coffee
assert = require "assert"

assert true, "This will never fail!"

assert false, "This always fails!"

assert x is y, "'x' must always equal 'y'!"

assert true, { a, b, c, reason: "This will never fail!" }
```
