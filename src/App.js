import './App.css';
import SpeedControlComponent from "./components/SpeedControlComponent";
import SpeedIndicatorComponent from "./components/SpeedIndicatorComponent";
import IconComponent from "./components/IconComponent";
import {BrowserRouter as Router, Link, Navigate, Route, Routes} from 'react-router-dom';
import React from "react";

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <SpeedIndicatorComponent/>
                <IconComponent/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <SpeedControlComponent/>
            </header>
        </div>
    );
}

function Root() {
    return (
        <>
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to='/demo'>Demo</Link>
                        </li>
                        <li>
                            <Link to='/test'>Test</Link>
                        </li>
                        <li>
                            <Link to='/test2'>Test2</Link>
                        </li>
                    </ul>
                </div>
                <Routes>
                    <Route path='/demo' element={
                        <>
                            <App/>
                            <h2>Footer Demo</h2>
                        </>
                    }/>
                    <Route path='/test' element={
                        <>
                            <App/>
                            <h2>Footer Test</h2>
                        </>
                    }/>
                    <Route path='/test2' element={
                        <>
                            <App/>
                            <h2>Footer Test 2</h2>
                        </>
                    }/>
                    <Route path={'/'} element={
                        <Navigate to={'/demo'}/>
                    }/>
                    <Route path={'*'} element={
                        <>
                            <h1>Not found</h1>
                        </>
                    }/>
                </Routes>
            </Router>
        </>
    );
}

export default Root;
