import React from 'react';
import {
    MDBCarousel,
    MDBCarouselItem,
} from 'mdb-react-ui-kit';

export default function Carousel() {
    return (
        <MDBCarousel showControls dealy={150}>
            <MDBCarouselItem
                className='w-100 d-block'
                itemId={1}
                src='https://wallpaperaccess.com/full/1909755.jpg'
                alt='...'
            />
            <MDBCarouselItem
                className='w-100 d-block'
                itemId={2}
                src='https://wallpaper.dog/large/20482818.jpg'
                alt='...'
            />
            <MDBCarouselItem
                className='w-100 d-block'
                itemId={3}
                src='https://c4.wallpaperflare.com/wallpaper/164/751/662/dj-wallpaper-preview.jpg'
                alt='...'
            />
        </MDBCarousel>
    );
}