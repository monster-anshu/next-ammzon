import React, { useState, useEffect } from 'react'
import { Carousel } from 'react-responsive-carousel';
import { useMediaQuery } from 'react-responsive'
import style from '../../styles/Banner.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";

type bannerMedia = {
  isSmall : boolean,
  isMedium : boolean,
  isLarge : boolean
}

const Banner : React.FC = () : JSX.Element => {
  const media : bannerMedia = {
    isSmall : useMediaQuery({query : '(max-width:500px)'}),
    isMedium: useMediaQuery({query : '(max-width:768px)'}),
    isLarge: useMediaQuery({query : '(min-width:7689x)'})
  }

  const BANNER_PUBLIC_URL = media.isSmall ? '/assets/banner/small/' : '/assets/banner/large/';

  const bannerImagesList : string[] = media.isSmall 
  ? require.context(`/public/assets/banner/small`, true).keys()
  : require.context(`/public/assets/banner/large`, true).keys()

  
  return (
    <div className={style.carousel_container}>
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={media.isSmall ? true : false}
        showArrows={media.isSmall ? false : true}
        showThumbs={false}
        interval={3000}

        className={style.carousel_wrapper}
      >
        {
          bannerImagesList.map(imgURL => (
            <div>
              <img loading='lazy' src={BANNER_PUBLIC_URL + imgURL}
                alt='Banner Image'
                className={style.carousel_image}
                key={imgURL}
              />
            </div>
            ))
          }
      </Carousel>
    </div>
  )
}

export default Banner