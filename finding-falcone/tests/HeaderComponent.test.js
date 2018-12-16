import React from 'react';
import HeaderComponent from '../src/Components/HeaderComponent';
import { shallow } from "enzyme";

describe('<HeaderComponent />', function () {
    const component = shallow(<HeaderComponent/>);

    it('should match with snapshot', function () {
        global.fetch = jest.fn();
        expect(component).toMatchSnapshot();
    });
});