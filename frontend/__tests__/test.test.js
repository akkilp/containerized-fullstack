import * as React from 'react'
import {mount} from 'enzyme'
import HomePage from '../pages/index'

describe('Pages', () => {
  describe('Index', () => {
    it('It prints out something', function () {
      const wrap = mount(<HomePage/>)
      expect(wrap.find('div').text()).toBe('Halojata vaan kaikille tasapuolisesti!')
    })
  })  

  describe('Loading', () => {
    it('It prints out loading', function () {
      const wrap = mount(<HomePage/>)
      expect(wrap.find('div').text()).toBe('loading...')
    })
  })  
})