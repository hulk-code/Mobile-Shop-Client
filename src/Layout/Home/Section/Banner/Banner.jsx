import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img3 from '../../../../assets/cardmapr-nl-pwxESDWRwDE-unsplash.jpg';
import img2 from '../../../../assets/blake-wisz-Xn5FbEM9564-unsplash.jpg';
import img1 from '../../../../assets/clay-banks-XvS-uKUoUao-unsplash.jpg';
import img4 from '../../../../assets/marvin-meyer-SYTO3xs06fU-unsplash.jpg';
import img5 from '../../../../assets/onur-binay-9jLI9Ux6IFo-unsplash.jpg';
import img6 from '../../../../assets/blake-wisz-Xn5FbEM9564-unsplash.jpg';

const Banner = () => {
    return (
        <Carousel  >
            <div >
                <img  src={img1} />
              
               
            </div>
            <div>
                <img src={img2} />
                
            </div>
            <div>
                <img src={img3} />
              
            </div>
            <div>
                <img src={img4} />
               
            </div>
            <div>
                <img src={img5} />
                
            </div>
            <div>
                <img src={img6} />
              
            </div>
        </Carousel>
    );
};

export default Banner;