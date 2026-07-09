import styles from './Button.module.css';

function Button({ color, children }) {
  return (
    <button className={styles.button} data-color={color}>
      {children}
    </button>
  );
}

export default Button;
