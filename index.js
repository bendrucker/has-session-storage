'use strict'

var window = require('global/window')

module.exports = (function detectSessionStorage (key) {
  try {
    var sessionStorage = window.sessionStorage
    if (!sessionStorage) return false

    sessionStorage.setItem(key, key)
    sessionStorage.removeItem(key)
    return true
  } catch (_) {
    return false
  }
})('HAS_SESSIONS_STORAGE')
