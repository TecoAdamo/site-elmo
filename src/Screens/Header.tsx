import './Header.css';
import Elmo from '../assets/Elmo.png';

function Header() {
    return (
        <div>
            <header className="box-header">
                <img src={Elmo} alt="Logo" />
                <ul>
                    <li>Home</li>
                    <li>Sobre</li>
                    <li>Contato</li>
                    <li>Serviços</li>
                </ul>
            </header>
        </div>
    );
}

export default Header;
