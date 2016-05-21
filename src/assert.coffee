
{ throwFailure } = require "failure"

isConstructor = require "isConstructor"

module.exports = (invariant, meta) ->

  return if invariant

  if isConstructor meta, Function
    meta = meta()

  if isConstructor meta, String
    reason = meta
    meta = {}

  else if isConstructor meta, Object
    reason = meta.reason
    delete meta.reason

  else meta = {}

  error = Error reason or "Assertion failed."
  error.skip = meta.skip or 0
  error.skip += 2

  throwFailure error, meta
