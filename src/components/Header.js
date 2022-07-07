import headerLogo from '../images/logo.svg'

function Header() {
    return (
      <div className="header">
        <img src={headerLogo} alt="Лого" />
      </div>
    );
}

export default Header;