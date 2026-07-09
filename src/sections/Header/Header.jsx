import styles from './Header.module.css';
import Logo from '../../components/Logo/Logo';
import LogoIcon from '../../assets/icons/logo.svg';

function Header() {
  return (
    <header className={styles.header}>
      <Logo image={LogoIcon} alt="Meet logo" />
    </header>
  );
}

export default Header;
