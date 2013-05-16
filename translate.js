"use strict"

var ndarray = require("ndarray")
var ops = require("ndarray-ops")
var pool = require("typedarray-pool")

function translateZeroBC(arr, t) {
  var shape = arr.shape
    , d = shape.length
    , v = new Array(d)
    , u = new Array(d)
    , i, j
  for(i=0; i<d; ++i) {
    if(Math.abs(t[i]) >= shape[i]) {
      ops.assigns(arr, 0)
      return arr
    }
    j = -Math.round(t[i])|0
    if(j > 0) {
      v[i] = j
      u[i] = shape[i] - j
    } else {
      v[i] = 0
      u[i] = shape[i]
    }
  }
  var q = arr.lo.apply(arr, v)
    , p = arr.hi.apply(arr, u)
  for(i=0; i<d; ++i) {
    j = -Math.round(t[i])|0
    if(j < 0) {
      v[i] = q.shape[i] + j
      u[i] = -j
    } else {
      v[i] = q.shape[i]
      u[i] = 0
    }
  }
  q = q.hi.apply(q, v)
  p = p.lo.apply(p, u)
  var y_t = pool.malloc(ndarray.size(q), ndarray.dtype(arr))
    , y = ndarray.ctor(y_t, q.shape, ndarray.stride(q.shape, ndarray.order(q)), 0)
  ops.assign(y, q)
  ops.assigns(arr, 0)
  ops.assign(p, y)
  pool.free(y_t)
  return arr
}

module.exports = translateZeroBC
