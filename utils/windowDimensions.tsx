import { useState, useEffect } from "react";

//listens to browser window width via value that can be used in components
const MobileWindowWidth = (screenWidth: number) => {
    const [isMobileWidth, setIsMobileWidth] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileWidth(window.innerWidth <= screenWidth);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [screenWidth]);

    return isMobileWidth;
};

export default MobileWindowWidth;