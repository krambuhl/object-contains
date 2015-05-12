# object-contains

Predicate function checking if haystack object contains needle object

## Useage

```js
var contains = require('object-contains');
var obj = { can: 'help', nope: true };

contains(obj, { nope: true }); // ==> true
contains(obj, { nope: false }); // ==> false
```
