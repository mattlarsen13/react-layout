import "../css/SlideShow.css";
import {useState} from "react";

const SlideShow = () => { 
    const [imageIndex, setImageIndex] = useState(0);

    const importAll = (resource) => {
        return resource.keys().map(resource);
    }

    const images = importAll(
        require.context("../images/slideshow", false, /\.(png|jpe?g|svg$)/)
    );

    const showNextImage = () => {
        setImageIndex(imageIndex == images.length - 1 ? 0 : imageIndex + 1);
    }

    const showPrevImage = () => {
        setImageIndex(imageIndex == 0 ? images.length - 1: imageIndex -1);
    }

    return (
        <div id="slideshow">
            <img src={images[imageIndex]} alt={images[imageIndex]} />
            <button onClick={showPrevImage}>Previous</button>
            <button onClick={showNextImage}>Next</button>

        </div>
    )
};

export default SlideShow;