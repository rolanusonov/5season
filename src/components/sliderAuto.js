import Slider from "react-slick";

const SliderAuto = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    }
    return (
        <div className="w-96">
            <div>
                <h2>Auto Play</h2>
                <Slider {...settings}>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                    <div>7</div>
                    <div>8</div>
                </Slider>
            </div>
        </div>
    );
};

export default SliderAuto;