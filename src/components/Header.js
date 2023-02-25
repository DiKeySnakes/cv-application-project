import logo from '../logo.svg';

function Header() {
  return (
    <header className='App-header'>
      <div id='logo'>
        <img src={logo} className='App-logo' alt='logo' />
      </div>
      <p id='title'>CV Application Project</p>
    </header>
  );
}

export default Header;
