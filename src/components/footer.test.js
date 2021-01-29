import React from 'react';
import { shallow } from 'enzyme';
import Footer from './footer.js'

it('should render copyright', () => {
    const wrapper = shallow(<Footer/>);
    const div = wrapper.find('div');
    const result = div.text();

    expect(result).toBe('COPYRIGHT (c) NAL - 2020');
})