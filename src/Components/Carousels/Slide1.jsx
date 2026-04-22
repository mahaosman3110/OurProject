import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Slide.css';
function Slide1() {
const s = { height: '480px', objectFit: 'contain', width: '100%', backgroundColor: 'white' };

return (
    <div className='bgc'>
<Carousel fade indicators={false} nextLabel="" prevLabel="">

<Carousel.Item>
<img style={s} src="https://media.glamourmagazine.co.uk/photos/63fe380f3ca80ea448782a09/4:3/w_1704,h_1278,c_limit/BROWN%20MASCARAS%20280223.jpg" alt="img1" />
<Carousel.Caption style={{left: '50%', transform: 'translateX(-50%)', bottom: '5%', textAlign: 'center', width: '100%'}}>
<h1 style={{fontSize: '40px', fontWeight: 'bold', textShadow: '2px 2px 5px #ff1493', color: '#e7d9d9'}}>New Collection</h1>
<p style={{fontSize: '18px', textShadow: '1px 1px 3px #ff1493', color: '#e7e0e0'}}>Get the cutest latest makeup trends</p>
</Carousel.Caption>
</Carousel.Item>

<Carousel.Item>
<img style={s} src="https://www.thespruce.com/thmb/DX_5mVlUuVFjmy-BJMN-QlPLPyE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Snapinsta.app_186735701_222745125949234_18604228533187570_n_1080-dbce5fc7c43a44888884ab174507bf31.jpg" alt="img2" />
<Carousel.Caption style={{left: '50%', transform: 'translateX(-50%)', bottom: '5%', textAlign: 'center', width: '100%'}}>
<h1 style={{fontSize: '40px', fontWeight: 'bold', textShadow: '2px 2px 5px #ff1493', color: '#dfd6d6'}}>furniture</h1>
<p style={{fontSize: '18px', textShadow: '1px 1px 3px #ff1493', color: '#dad3d3'}}>Soft and stylish furniture vibes</p>
</Carousel.Caption>
</Carousel.Item>

<Carousel.Item>
<img style={s} src="https://static.vecteezy.com/system/resources/previews/012/845/317/large_2x/fresh-fruits-and-vegetables-on-pink-background-healthy-eating-concept-flat-lay-copy-space-photo.jpg" alt="img3" />
<Carousel.Caption style={{left: '50%', transform: 'translateX(-50%)', bottom: '5%', textAlign: 'center', width: '100%'}}>
<h1 style={{fontSize: '40px', fontWeight: 'bold', textShadow: '2px 2px 5px #ff1493', color: '#dbd6d6'}}>All foods</h1>
<p style={{fontSize: '18px', textShadow: '1px 1px 3px #ff1493', color: '#f5e2e2'}}>Daily fresh groceries</p>
</Carousel.Caption>
</Carousel.Item>

</Carousel>
</div>
);
}

export default Slide1;
