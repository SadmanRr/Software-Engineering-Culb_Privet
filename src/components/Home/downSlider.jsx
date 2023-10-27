import Link from "next/link";
import Carousel from "react-multi-carousel";

const data = [
    "/tehe.jpg", "/rank.jpg", "/fvrsir.jpg", "/stte.jpg"
]
const DownSlider = () => {
    return (
        <div className="container mx-auto">

            <div className="flex items-center ">
                <div className="w-1/4 text-end"> <h1 className="text-5xl font-bold ">Flagship | </h1></div>
                <div className="w-1/2"> <Carousel
                    additionalTransfrom={0}
                    arrows={false}
                    autoPlaySpeed={3000}
                    centerMode={false}
                    className=""
                    containerClass="container"
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    infinite
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    pauseOnHover
                    renderArrowsWhenDisabled={false}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    responsive={{
                        desktop: {
                            breakpoint: {
                                max: 3000,
                                min: 1024,
                            },
                            items: 4,
                        },
                        mobile: {
                            breakpoint: {
                                max: 464,
                                min: 0,
                            },
                            items: 1,
                        },
                        tablet: {
                            breakpoint: {
                                max: 1024,
                                min: 464,
                            },
                            items: 2,
                        },
                    }}
                    rewind={false}
                    rewindWithAnimation={false}
                    rtl={false}
                    shouldResetAutoplay
                    sliderClass=""
                    slidesToSlide={1}
                    swipeable
                    showDots={false}
                    autoPlay
                >
                    {
                        data.map((item, index) => <div className="mx-2" key={index}>

                            <img
                                src={item}
                                className="w-32 h-32  transition-transform transition-500 rounded-full"
                            />



                        </div>)
                    }
                </Carousel></div>
                <div className="w-1/4">
                    <h1 className="text-5xl font-bold ">|Events</h1>
                </div>
            </div>

            <div className="text-4xl font-semibold my-5 text-red-600 border py-2 px-1 "> <marquee direction="right"
             behavior="alternate"> Upcomming Event Notice. <Link href="http://google.com">google</Link> </marquee></div>
        </div>
    );
};

export default DownSlider;