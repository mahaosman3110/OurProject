import React from 'react'
import { Box , Container , Link ,Stack , Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import "./Hero.css";
const Hero = () => {
  return (
<Container sx={{mt: 2.5,display: "flex",alignItems: "center" , gap:2}}>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
         <img src='https://t4.ftcdn.net/jpg/02/36/30/83/360_F_236308303_BxJ6bdd2xjnsVUaAAW8bbetK6pStzn41.jpg' alt=''/>
        <Box sx={{position:"absolute",left:"10%"}} >
         <Typography
         sx={{

            color:"#222"
         }}
         variant='h5'
         >

          LifeStyleCollection

         </Typography>

         <Typography
         
         sx={{color:"#222",
            fontWeight:400,
            my:1
         }}>

            Men
            </Typography> 

          <Stack
          sx={{
            justifyContent:"center"
          }}
          direction={"row"}
          alignItems={"center"}
          >
         <Typography 
         
         color={'#333'} mr={1} variant='h4'>

         Sale Up To
         </Typography>

         

         <Typography
         color='#754e4e'
         variant='h5'
         
         >
            30% Off
         </Typography>

          </Stack>


          <Typography     sx={{
               color:"#000",
               fontWeight:300,
               my:1,
            }}
            variant="body1"
            >
               Get free Shipping on orders over $99.00
          </Typography>















        </Box>
        </SwiperSlide>
        <SwiperSlide>
         <img src='https://t4.ftcdn.net/jpg/04/64/71/65/360_F_464716593_LD9IBzIJwlRMwQzjqVwHLL7XeupROIlS.jpg' alt=''/>
        </SwiperSlide>
        <SwiperSlide>
         <img src='https://www.shutterstock.com/image-photo/fashion-concept-stylish-children-posing-600nw-2453517273.jpg' alt='' />
        </SwiperSlide>
      </Swiper>



<Box sx={{display: { xs: "none" , md: "block" ,minWidth: "26.7%"}}} > 

<Box sx={{position:"relative" ,width:"30%", display:"flex",flexDirection:"column", gap:"1"}}>

       <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRcC_1W8ii09zyjokeVem0Z94D4NRdNFs4ZlvcCN9_y4VVqrAkFR-hfvZbwTceMR3wwLXWSOa929OEhGRIC_C6Q8XNSCR93PQKF87_fnLWrMNlNHHRRo-lAnYzUk0kEx5nQ&usqp=CAc" alt="" style={{width:'100%', height:"300px"}}/>



 <Stack sx={{position:'absolute',top:'50%',transform:"translateY(-50%)", left: 31  }} >
 
 <Typography 
 variant="caption"
 sx={{
    color: "#141414",
    fontSize: "18px"
 }}
 >
New Arrivals
 </Typography>
 <Typography
 variant='h6'
 sx={{
    color:"#292928",
    lineHeight:"16px",
    mt:1,
 }}
 >
Winter
 </Typography>
 <Typography
 variant='h6'
 sx={{color:'#363532'}}
 >
Sale 20% Off
 </Typography>
 <Link sx={{color:"#3b3b3b",
       display: 'flex',
       alignItems:'center',
       gap:"5px",
       transition:'0.2s',

 }}
 
      href="#"
      underline='none'
 >
 
 Shop Now
 <ArrowForwardIcon sx={{fontSize:"13px"}}/>
 </Link>
 </Stack>
 </Box>
<Box  sx={{position:"relative"}}> 
    
       <img src="https://m.media-amazon.com/images/I/7185dG1YMoL._AC_SX522_.jpg" alt="" style={{width:'100%', height:"300px"}}/>

 <Stack sx={{position:'absolute',top:'50%',transform:"translateY(-50%)", left: 31  }} >
 
 <Typography 
 variant="caption"
 sx={{
    color: "#2c2c2b",
    fontSize: "18px"
 }}
 >
Gaming 4k
 </Typography>
 <Typography
 variant='h6'
 sx={{
    color:"#333331",
    lineHeight:"16px",
    mt:1,
 }}
 >
Desktop &

 </Typography>
 <Typography
 variant='h6'
 sx={{color:'#303133'}}
 >
Laptops

 </Typography>

 <Link sx={{color:"#494947",
       display: 'flex',
       alignItems:'center',
       gap:"5px",
       transition:'0.2s',

 }}
 
      href="#"
      underline='none'
 >
 
 Shop Now
 <ArrowForwardIcon sx={{fontSize:"13px"}}/>
 </Link>
 </Stack>

</Box>
</Box>
</Container>

)
}

export default Hero
