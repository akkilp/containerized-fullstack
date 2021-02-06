import * as React from 'react'
import {mount} from 'enzyme'
import HomePage from '../pages/index'

describe('Pages', () => {
  describe('Index', () => {
    it('It prints out something', function () {
      const wrap = mount(<HomePage/>)
      console.log(wrap)
      expect(wrap.find(".target").text()).toBe('Halojata vaan kaikille tasapuolisesti! :-)')
    })
  })  


})