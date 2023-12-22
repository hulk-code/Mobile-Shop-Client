import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from '../../../../assets/istockphoto-1029185928-1024x1024.jpg';
import img2 from '../../../../assets/istockphoto-1181593055-1024x1024.jpg';
import img3 from '../../../../assets/istockphoto-1208585923-1024x1024.jpg';
import img4 from '../../../../assets/istockphoto-1413233989-1024x1024.jpg';
import img5 from '../../../../assets/istockphoto-1419703575-1024x1024.jpg';
import img6 from '../../../../assets/istockphoto-1728292801-1024x1024.jpg';

const Banner = () => {
    return (
        <Carousel  >
            <div >
                <img  src={img1} />
                <div className='absolute top-1/2 left-1/2 '>
                <h1 className='text-6xl font-bold text-orange-500 mb-3' >Search Your Phone</h1>
                <input type="text" placeholder="Enter Brand Name" className="input input-bordered input-primary w-full max-w-xs" />
                </div>
               
            </div>
            <div>
                <img src={img2} />
                <div className='absolute top-1/2 left-1/2 '>
                <h1 className='text-6xl font-bold text-orange-500 mb-3' >Search Your Phone</h1>
                <input type="text" placeholder="Enter Brand Name" className="input input-bordered input-primary w-full max-w-xs" />
                </div>
            </div>
            <div>
                <img src={img3} />
                <div className='absolute top-1/2 left-1/2 '>
                <h1 className='text-6xl font-bold text-orange-500 mb-3' >Search Your Phone</h1>
                <input type="text" placeholder="Enter Brand Name" className="input input-bordered input-primary w-full max-w-xs" />
                </div>
            </div>
            <div>
                <img src={img4} />
                <div className='absolute top-1/2 left-1/2 '>
                <h1 className='text-6xl font-bold text-orange-500 mb-3' >Search Your Phone</h1>
                <input type="text" placeholder="Enter Brand Name" className="input input-bordered input-primary w-full max-w-xs" />
                </div>
            </div>
            <div>
                <img src={img5} />
                <div className='absolute top-1/2 left-1/2 '>
                <h1 className='text-6xl font-bold text-orange-500 mb-3' >Search Your Phone</h1>
                <input type="text" placeholder="Enter Brand Name" className="input input-bordered input-primary w-full max-w-xs" />
                </div>
            </div>
            <div>
                <img src={img6} />
                <div className='absolute top-1/2 left-1/2 '>
                <h1 className='text-6xl font-bold text-orange-500 mb-3' >Search Your Phone</h1>
                <input type="text" placeholder="Enter Brand Name" className="input input-bordered input-primary w-full max-w-xs" />
                </div>
            </div>
        </Carousel>
    );
};

export default Banner;