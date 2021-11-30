import IconSocials from './iconSocials';
import styles from '../../styles/Home.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.logo}>
        <IconSocials />
      </span>
    </footer>
  );
}
export default Footer;
