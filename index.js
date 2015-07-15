'use strict'

var window = require('global/window')

module.exports = (function detectSessionStorage (sessionStorage, data) {
  if (!sessionStorage) return false
  try {
    sessionStorage.setItem(data, data)
    sessionStorage.removeItem(data)
    return true
  } catch (_) {
    return false
  }
})(window.sessionStorage, 'HAS_SESSIONS_STORAGE')
