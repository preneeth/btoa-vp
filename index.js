(function () {
  "use strict";

  function btoa (binaryString) {
    var buffer = (binaryString instanceof Buffer) ? binaryString : Buffer.from(binaryString.toString(), 'binary');
    return buffer.toString('base64');
  }

  module.exports = btoa;
}());
