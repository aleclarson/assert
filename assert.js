
function assert(invariant, reason) {
  if (!invariant) {
    if (typeof reason === 'string') {
      throw Error(reason);
    }
    throw Error('Assertion failed!');
  }
}

module.exports = assert;
