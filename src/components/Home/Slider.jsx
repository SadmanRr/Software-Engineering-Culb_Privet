
import Image from "next/image";
import Carousel from "react-multi-carousel";
const data = [
    {
        title: "",
        content: "",
        img: "/rank.jpg"
    },
    {
        title: "Software  Engineering Club",
        content: "DIU SEC is the most primitive and extensive club is one of the biggest club in Daffodil International University. We work together to explore every field of Computer Science",
        img: "/teacherr.jpg"
    },
    {
        title: "Software Engineering Club",
        content: "DIU SEC is the most primitive and extensive club is one of the biggest club in Daffodil International University. We work together to explore every field of Computer Science",
        img: "/fvrsirr.jpg"
    },
    {
        title: "Software  Engineering Club",
        content: "DIU SEC is the most primitive and extensive club is one of the biggest club in Daffodil International University. We work together to explore every field of Computer Science",
        img: "/aa.jpg"
    },
]
const Slider = () => {
    return (
        <div className="container mx-auto">
            <Carousel 
            autoPlay
                additionalTransfrom={0}
               showDots={false}
                customDot={false}
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
                        items: 1,
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
                        items: 1,
                    },
                }}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
             
                sliderClass=""
                slidesToSlide={1}
                swipeable
            >
                {data.map((item, index) => <div className="relative" key={index}>
                    <img src={item?.img} alt="loading..." className="w-full h-3/5" />
                    <div className="absolute text-black bottom-12 left-14">
                        <div className="text-white ">
                            <h1 className="text-5xl text-blue-700">  {item.title}
                            </h1>
                            <p className="text-xl">{item.content}</p>
                        </div>
                    </div>
                </div>)}
            </Carousel>
        </div>
    );
};

export default Slider;