
module.exports = (invariant, reason) ->
  return if invariant
  if typeof reason isnt "string"
    reason = "Assertion failed!"
  throw Error reason
