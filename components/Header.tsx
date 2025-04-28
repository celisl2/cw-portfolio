import Link from 'next/link';
import styles from '../styles/Header.module.scss';
import { useState } from 'react';
import MobileWindowWidth from '../utils/windowDimensions';

const MAX_MOBILE_WIDTH: number = 699;
const MAX_SMALL_MOBILE_WIDTH: number = 300;

const Header = () => {
    const [isMobileNavigationExpanded, setIsMobileNavigationExpanded] = useState(false);
    const isMobileWidth = MobileWindowWidth(MAX_MOBILE_WIDTH);
    const isSmallMobileWidth = MobileWindowWidth(MAX_SMALL_MOBILE_WIDTH);

    return (
        <div className={styles.headerContainer}>
            <nav>
                <div className={styles.nav}>
                    <div className={styles.titles}>
                        <Link href="/" className={styles.title}>Courtney Woodward</Link>
                        {/* dont show if is small and expanded */}
                        { !(isMobileNavigationExpanded && isSmallMobileWidth) && 
                            <h1 className={styles.specialHeader}>Illustrator</h1>
                        }
                    </div>
                
                    <div className={styles.responsiveNav}>
                        { (isMobileWidth && isMobileNavigationExpanded) ? 
                            <button className={styles.close} onClick={() => setIsMobileNavigationExpanded(false)}>&#735;</button> 
                            : 
                            <button className={styles.hamburger} onClick={() => setIsMobileNavigationExpanded(true)}>&#9776;</button>
                        }
                    </div>
                </div>
                { (isMobileNavigationExpanded || !isMobileWidth) &&
                    <div className={styles.links}>
                        <Link href="/gallery">Gallery</Link>
                        <Link href="/contact">Contact</Link>
                        <Link href="/about">About</Link>
                    </div>
                }
            </nav>
        </div>
    )
}

export default Header;