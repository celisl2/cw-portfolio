import Header from '../components/Header';
import styles from '../styles/Layout.module.scss';
import Slider from '../components/Slider';

const sliderSource = [
  {src: './../public/assets/accordion/lc.JPG', alt: 'laura'},
  {src: '/../public/assets/accordion/neck.jpg', alt: 'neck'}
];

export default function Home() {
  return (
    <div>
      <Header/>
      <div className={styles.layout}>
        {/* <Slider /> */}
      </div>
    </div>
  )
}
