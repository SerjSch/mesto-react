
import logo from '../images/logo-vector.svg';

function Header() {
  return (
    <header className="header">
    <img className="logo" src={logo} alt="Логотип сайта Mesto" />
</header>
  );}

export default Header;