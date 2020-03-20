import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('App', ()=>{
  describe('render', ()=>{
    it('sould have one div', ()=>{
      const appContainer = shallow(<App/>)
      expect(appContainer.find('div')).toHaveLength(1)
    })

    it('should have one Header', ()=>{
      const appContainer = shallow(<App/>)
      expect(appContainer.find('div').children('Header')).toHaveLength(1)
    }) 
    
    it('sould have one button inside the div', ()=>{
      const appContainer = shallow(<App/>)
      expect(appContainer.find('div').children('button').at(0).prop('id')).toBe('btn1')
    })
  })
})

describe('Function addCard', ()=>{
  it('it should add a Card Component when onClick event in btn1 perform', () => {
    const appContainer = shallow(<App />)
    appContainer.find({ id: 'btn1' }).simulate('click');
    expect(appContainer.find('Card')).toHaveLength(2);
  })

  it('it should add two Card Component when onClick event in btn1 perform twice', () => {
    const appContainer = shallow(<App />)
    appContainer.find({ id: 'btn1' }).simulate('click').simulate('click');
    expect(appContainer.find('Card')).toHaveLength(3);
  })
})