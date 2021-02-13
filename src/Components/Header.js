import Toaster from '../assets/toaster.png';

const Header = () => {

    return(
        <header>
        
        <h4 className="title">Job Toast</h4>
        <img src={Toaster} className="App-logo" alt="logo" />
        </header>
    )
}

export default Header