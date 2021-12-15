btoa
===

btoa function for nodejs.

```js
(function () {
  "use strict";

  var btoa = require('btoa');
  var binary = "ආයුබෝවන්";
  var base64 = btoa(binary);

  console.log(base64); // "hrrUtt3Asco="
}());
```

Copyright and License
===

MIT