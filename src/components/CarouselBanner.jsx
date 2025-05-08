import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const CarouselBanner = () => {
  return (
    <div className="carousel-container">
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
        <div>
          <img src="src/assets/img/bannerinicio.png" alt="Promo 1" />
          <p className="legend">¡Bienvenidos!</p>
        </div>
        <div>
          <img src="src/assets/img/Banner web horizontal promoción 2x1 minimalista y delicado rosa pastel y blanco.png" alt="Promo 2" />
          <p className="legend">2x1</p>
        </div>
        <div>
          <img src="src/assets/img/oferta_donas.png" alt="Promo 3" />
          <p className="legend">Oferas de la semana</p>
        </div>
      </Carousel>
    </div>
  )
}

export default CarouselBanner
