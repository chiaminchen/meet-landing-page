import styles from '../Features/Features.module.css';
import SectionDivider from '../../components/SectionDivider/SectionDivider';
import ImageGallery from '../../components/ImageGallery/ImageGallery';

function Features() {
  return (
    <section className={styles.features}>
      <SectionDivider text="01" />
      <ImageGallery />
      <div className={styles.featuresContent}>
        <span>Built for modern use</span>
        <h2>Smarter meetings, all in one place</h2>
        <p>
          Send messages, share files, show your screen, and record your meetings — all in one
          workspace. Control who can join with invite-only team access, data encryption, and data
          export.
        </p>
      </div>
    </section>
  );
}

export default Features;
