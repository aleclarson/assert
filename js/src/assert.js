var isConstructor, throwFailure;

throwFailure = require("failure").throwFailure;

isConstructor = require("isConstructor");

module.exports = function(invariant, meta) {
  var error, reason;
  if (invariant) {
    return;
  }
  if (isConstructor(meta, Function)) {
    meta = meta();
  }
  if (isConstructor(meta, String)) {
    reason = meta;
    meta = {};
  } else if (isConstructor(meta, Object)) {
    reason = meta.reason;
    delete meta.reason;
  } else {
    meta = {};
  }
  error = Error(reason || "Assertion failed.");
  error.skip = meta.skip || 0;
  error.skip += 2;
  return throwFailure(error, meta);
};

//# sourceMappingURL=../../map/src/assert.map
