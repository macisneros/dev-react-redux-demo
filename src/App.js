import './App.css';
import SpeedControlComponent from "./components/SpeedControlComponent";
import SpeedIndicatorComponent from "./components/SpeedIndicatorComponent";
import IconComponent from "./components/IconComponent";

function App() {
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

export default App;
