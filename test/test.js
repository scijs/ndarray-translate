"use strict"

var ndarray = require("ndarray")
var zeros = require("zeros")
var translate = require("../translate.js")

require("tap").test("ndarray-translate", function(t) {

  var x = zeros([5])
  x.set(2, 1)
  
  translate(x, [1])
  t.equals(x.get(0), 0)
  t.equals(x.get(1), 0)
  t.equals(x.get(2), 0)
  t.equals(x.get(3), 1)
  t.equals(x.get(4), 0)
  
  translate(x, [-2])
  t.equals(x.get(0), 0)
  t.equals(x.get(1), 1)
  t.equals(x.get(2), 0)
  t.equals(x.get(3), 0)
  t.equals(x.get(4), 0)
  
  translate(x, [0])
  t.equals(x.get(0), 0)
  t.equals(x.get(1), 1)
  t.equals(x.get(2), 0)
  t.equals(x.get(3), 0)
  t.equals(x.get(4), 0)
  
  translate(x, [10])
  t.equals(x.get(0), 0)
  t.equals(x.get(1), 0)
  t.equals(x.get(2), 0)
  t.equals(x.get(3), 0)
  t.equals(x.get(4), 0)
  
  t.end()
})