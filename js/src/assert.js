module.exports = function(invariant, reason) {
  if (invariant) {
    return;
  }
  if (typeof reason !== "string") {
    reason = "Assertion failed!";
  }
  throw Error(reason);
};

//# sourceMappingURL=map/assert.map
