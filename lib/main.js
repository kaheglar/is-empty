
'use strict';

define(function () {
  // export
  return function isEmpty (value) {
    return value === undefined || value === null || (typeof value === 'string' ?  value.length < 1 : false)
  }
})
