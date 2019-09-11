import React from 'react';
import { connect } from 'react-redux';

import { changeCar } from '../actions';
import Header from './Header';

const CarsList = (props) => {

    const selectCar = id => {
        props.changeCar(props.carList[id]);
        props.history.push('/car');
    }
    console.log(props)

    return (
        <div className="carBox">
            <div className="cars">
                <p>Choose a car: </p>
                {props.carList.map(car => {
                    return (
                        <div key={car.id}>
                            <Header car={car} />
                            <button onClick={() => selectCar(car.id)}> Buy This car</button>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

const mapPropsToState = state => {
    return {
        carList: state.carList
    }
}

export default connect(mapPropsToState, { changeCar })(CarsList);
