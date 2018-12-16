import React, {Component} from 'react';

class CustomDropdown extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {title, dropdownValues} = this.props;
        return (
            <div>
            <label>{title}</label>
            <select>
                {dropdownValues.map(item => (<option key={item}>{item}</option>))}
            </select>
            </div>
        );
    }
}

export default CustomDropdown;