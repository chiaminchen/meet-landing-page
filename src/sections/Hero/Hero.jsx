import styles from './Hero.module.css';
import Button from '../../components/Button/Button';
import AvatarTabletImage from '../../assets/images/tablet/image-hero.png';
import AvatarLeftImage from '../../assets/images/desktop/image-hero-left.png';
import AvatarRightImage from '../../assets/images/desktop/image-hero-right.png';

function Hero() {
  return (
    <section className={styles.hero}>
      <img src={AvatarTabletImage} alt="" className={styles.avatarTablet} />
      <img src={AvatarLeftImage} alt="" width={394} height={303} className={styles.avatarLeft} />
      <img src={AvatarRightImage} alt="" width={394} height={303} className={styles.avatarRight} />
      <div className={styles.heroContent}>
        <h1>Group Chat for Everyone</h1>
        <p>
          Meet makes it easy to connect with others face-to-face virtually and collaborate across
          any device.
        </p>
        <div className={styles.buttonBox}>
          <Button color="cyan">
            Download <span>v1.3</span>
          </Button>
          <Button color="purple">What is it?</Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
