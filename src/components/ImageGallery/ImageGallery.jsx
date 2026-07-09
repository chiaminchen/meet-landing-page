import styles from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';
import WomanInVideocall from '../../assets/images/desktop/image-woman-in-videocall.jpg';
import WomanVideochatting from '../../assets/images/desktop/image-women-videochatting.jpg';
import MenInMeeting from '../../assets/images/desktop/image-men-in-meeting.jpg';
import MenTexting from '../../assets/images/desktop/image-man-texting.jpg';

function ImageGallery() {
  return (
    <div className={styles.imageGallery}>
      <ImageCard image={WomanInVideocall} width={300} height={300} />
      <ImageCard image={WomanVideochatting} width={300} height={300} />
      <ImageCard image={MenInMeeting} width={300} height={300} />
      <ImageCard image={MenTexting} width={300} height={300} />
    </div>
  );
}

export default ImageGallery;
