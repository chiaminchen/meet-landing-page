import styles from './CTA.module.css';
import SectionDivider from '../../components/SectionDivider/SectionDivider';
import Button from '../../components/Button/Button';
import FooterBg from '../../assets/images/desktop/image-footer.jpg';

function CTA() {
  return (
    <section className={styles.cta}>
      <SectionDivider text="02" />
      <div
        className={styles.ctaContent}
        style={{
          backgroundImage: `linear-gradient(var(--color-cta-bg), var(--color-cta-bg)), url(${FooterBg})`,
        }}
      >
        <div>
          <h2>Experience more together</h2>
          <p>
            Stay connected with reliable HD meetings and unlimited one-on-one and group video
            sessions.
          </p>
          <Button color="purple">
            Download <span>v1.3</span>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default CTA;
