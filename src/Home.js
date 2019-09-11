import React from 'react';
import { Route } from 'react-router-dom'
import App from './App';
import CarsList from './components/CarsList';

const Home = (props) => {
    return (
        <div>
            <Route exact path='/' component={CarsList} />
            <Route path='/car' component={App} />
        </div>
    )
}

export default Home;