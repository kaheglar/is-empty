
'use strict';

define([
  './main'
], function(isEmpty) {
  describe('Function isEmpty', function () {
    it('value=undefined is true.', function () {
      expect(isEmpty(undefined)).toEqual(true)
    })

    it('value=null is true.', function () {
      expect(isEmpty(null)).toEqual(true)
    })

    it('value="" is true.', function () {
      expect(isEmpty('')).toEqual(true)
    })

    it('value=false is false.', function () {
      expect(isEmpty(false)).toEqual(false)
    })

    it('value=true is false.', function () {
      expect(isEmpty(false)).toEqual(false)
    })

    it('value=" " is false.', function () {
      expect(isEmpty(' ')).toEqual(false)
    })

    it('value="x" is false.', function () {
      expect(isEmpty('x')).toEqual(false)
    })

    it('value=[] is false.', function () {
      expect(isEmpty([])).toEqual(false)
    })

    it('value={} is false.', function () {
      expect(isEmpty({})).toEqual(false)
    })

    it('value=function () {} is false.', function () {
      expect(isEmpty(function () {} )).toEqual(false)
    })
  })
})
