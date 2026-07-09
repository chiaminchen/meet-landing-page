import styles from './SectionDivider.module.css';

function SectionDivider({ text }) {
  return <div className={styles.sectionDivider}>{text}</div>;
}

export default SectionDivider;
