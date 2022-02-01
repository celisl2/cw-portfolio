import styles from '../styles/Header.module.scss';
//https://www.youtube.com/watch?v=lPJVi797Uy0&ab_channel=Fireship
const Header = () => {
    return (
        <div>
            <nav className={styles.nav}>
                <a href='/'>
                    <div>
                        <h1 className={styles.title}>Courtney Woodward</h1>
                        <h1 className={styles.specialHeader}>Illustrator</h1>
                    </div>
                </a>
                <div>
                    <h2><a href='/gallery'>Gallery</a></h2>
                </div>
            </nav>
        </div>
        )
    }
export default Header;