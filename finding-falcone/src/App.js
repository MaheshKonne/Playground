import React, {Component, Fragment} from 'react';
import './App.css';
import HeaderComponent from "./Components/HeaderComponent";
import CustomDropdown from "./Components/CustomDropdown";
import FooterComponent from "./Components/FooterComponent";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Mahesh Konne',
            planets: []
        }
    }

    getPlanetsAndUpdateState() {
         fetch('https://findfalcone.herokuapp.com/planets').then(response => {
            return response.json();
        }).then(planets => {
            if (planets) {
                this.setState({
                    planets
                })
            }
        }).catch(error => {
            console.log(error);
        });
    }

    componentDidMount() {
       this.getPlanetsAndUpdateState();
    }


    render() {
    return (
        <Fragment>
            <HeaderComponent />
            <div>
                <CustomDropdown title='Destination 1' dropdownValues={['Planet 1', 'Planet 2']} />
            </div>
            <FooterComponent/>
        </Fragment>
    );
  }
}

export default App;