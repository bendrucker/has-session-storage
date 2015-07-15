'use strict'

var test = require('tape')
var proxyquire = require('proxyquire')

test(function (t) {
  t.notOk(require('./'))
  t.notOk(proxyquire('./', {
    'global/window': {
      sessionStorage: {}
    }
  }))
  t.ok(proxyquire('./', {
    'global/window': {
      sessionStorage: {
        setItem: function () {},
        removeItem: function () {}
      }
    }
  }))
  t.end()
})
