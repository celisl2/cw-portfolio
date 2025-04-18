import styles from '../styles/Header.module.scss';

const Header = () => {
    return (
        <div className={styles.headerContainer}>
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