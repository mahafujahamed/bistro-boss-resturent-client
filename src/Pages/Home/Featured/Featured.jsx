import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredimg from "../../../assets/swiper/featured.jpg";
import "./featured.css"
const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle
            heading="Featured Item"
            subHeading="Check it out"
            ></SectionTitle>
            <div className="md:flex justify-center bg-slate-500 bg-opacity-40 items-center py-8 px-16">
                <div>
                    <img src={featuredimg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2021</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni commodi eum molestias accusamus fugiat ut dolores harum quia facere ex explicabo iste voluptatem eaque error doloribus non mollitia cupiditate blanditiis deserunt esse, eveniet quam. Hic ipsam quasi repudiandae dolor modi?</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;