import React from 'react';
import { Route } from 'react-router-dom'
import App from './App';
import CarsList from './components/CarsList';
import NavBar from './components/Navbar';

const Home = () => {
    return (
        <div>
            <NavBar />
            <Route exact path='/' component={CarsList} />
            <Route path='/car' component={App} />
        </div>
    )
}

export default Home;