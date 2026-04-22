import Carousel from 'react-bootstrap/Carousel';
function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item className='carouselItem'>
        <img className='d-block w-100' src='https://s.alicdn.com/@sc04/kf/H4523a2b4737d44828d38dfa1a13e3561K.jpg' alt=' first Slide' />
        <Carousel.Caption>
          <h3>Fashion Collection</h3>
          <p>Upgrade your style today</p>
          <button className='btn btn-primary'> Explore</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='carouselItem'>
       <img className='d-block w-100' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS0CWQkDZ_5Cw58vfCi1rl0tlqF0ybDJQKew&s' alt=' first Slide' />
        <Carousel.Caption>
          <h3>Smart Watches</h3>
          <p>Discover the Latest smart wearables</p>
          <button className='btn btn-primary'> Explore</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='carouselItem '>
      <img className='d-block w-100' src='https://www.shutterstock.com/image-photo/white-sneakers-on-pink-background-260nw-2726484263.jpg' alt=' Third Slide' />

        <Carousel.Caption>
          <h3>Trending Sneakers</h3>
          <p>  comfort and style combind </p>
       <button className='btn btn-primary'> Explore</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;