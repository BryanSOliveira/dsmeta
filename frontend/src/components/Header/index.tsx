import logo from '../../assets/img/logo.svg';

import './styles.css';

function Header() {
  return (
    <header>
      <div className="dsmeta-logo-container">
        <img src={logo} alt="DSMeta" />
        <h1>DSMeta</h1>
        <p>
          Desenvolvido por&nbsp;
          <a href="https://www.linkedin.com/in/bryansantos13/" target="_blank">Bryan Santos</a>
        </p>
      </div>
    </header>
  )
}

export default Header;
