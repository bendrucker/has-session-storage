'use strict'

var test = require('tape')
var poison = require('poison-get')
var proxyquire = require('proxyquire')

test(function (t) {
  t.notOk(require('./'))

  t.notOk(proxyquire('./', {
    'global/window': {
      sessionStorage: {}
    }
  }))

  t.notOk(proxyquire('./', {
    'global/window': poison({}, 'sessionStorage')
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
