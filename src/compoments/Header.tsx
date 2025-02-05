import styles from './Header.module.css';

import pageLogo from '../assets/ignite-logo.svg';

export default function Header() {
  return (
    <header className={styles.header}>
        <img src={pageLogo} alt="Logo ignite" />
        <strong>Ignite Feed</strong>
   </header>

  );
}
