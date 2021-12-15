(function () {
  "use strict";

  var btoa = require('./index')
    , encoded = "hrrUtt3Asco="
    , unencoded = "ආයුබෝවන්"
    ;

  if (encoded !== btoa(unencoded)) {
    console.error('FAIL', encoded, btoa(unencoded));
    return;
  }
  console.log('Test ok');
}());
