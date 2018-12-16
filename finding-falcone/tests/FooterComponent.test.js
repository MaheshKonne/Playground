import React from 'react';
import FooterComponent from '../src/Components/FooterComponent';
import {shallow} from "enzyme";

describe('<FooterComponent />', () => {
    const component = shallow(<FooterComponent/>);

    it('should match with snapshot', function () {
       expect(component).toMatchSnapshot();
    });
});