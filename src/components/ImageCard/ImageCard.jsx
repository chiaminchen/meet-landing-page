import styles from './ImageCard.module.css';

function ImageCard({ image, width, height }) {
  return (
    <img
      src={image}
      alt=""
      width={width}
      height={height}
      loading="lazy"
      className={styles.imageCard}
    />
  );
}

export default ImageCard;
