import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slide1 from '../../../assets/swiper/slide1.jpg';
import slide2 from '../../../assets/swiper/slide2.jpg';
import slide3 from '../../../assets/swiper/slide3.jpg';
import slide4 from '../../../assets/swiper/slide4.jpg';
import slide5 from '../../../assets/swiper/slide5.jpg';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <section>
            <SectionTitle
                subHeading={"From 11:00am to 10:00pm"}
                heading={"Order Online"}
            >
            </SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h3 className='text-4xl uppercase text-center -mt-24'>Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h3 className='text-4xl uppercase text-center -mt-24'>Pizza</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h3 className='text-4xl uppercase text-center -mt-24'>Soup</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h3 className='text-4xl uppercase text-center -mt-24'>Desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h3 className='text-4xl uppercase text-center -mt-24'>Salads</h3>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;