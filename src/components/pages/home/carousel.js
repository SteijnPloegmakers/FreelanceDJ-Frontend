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
                src='https://img.freepik.com/premium-photo/dj-mixer-booth-background-dance-floor_118086-4743.jpg?w=2000'
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
                src='https://media.istockphoto.com/photos/console-picture-id1205334948?k=20&m=1205334948&s=612x612&w=0&h=Bp6ufnx0rmkSWlzKsoP-sdPxsOZZgI5dZQLWoRLFiKs='
                alt='...'
            />
        </MDBCarousel>
    );
}