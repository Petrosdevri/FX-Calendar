import Header from './components/Header';
import Home from './pages/Home/Home';
import './App.css';

const App = () =>{
    return (
        <div className='App d-flex flex-column justify-content-center align-items-center gap-5'>
            <Header />
            <Home />
        </div>
    )
}

export default App;