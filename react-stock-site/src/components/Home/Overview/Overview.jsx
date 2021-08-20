import { classes } from "istanbul-lib-coverage";
import React, { Component } from "react";
import Slider from "react-slick";
import dif from './Style.module.css'
export default class SimpleSlider extends Component {
    render() {
        const settings = {
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear",
            pauseOnHover: false,
            responsive: [
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
        };
        return (
            <div>
                <Slider className={dif.container} {...settings}>
                        <div className={dif.sDiv}>
                            <img src="https://rstheme.com/products/html/reobiz/assets/images/casestudies/8.jpg" alt="" />
                          
                        </div>
                        <div className={dif.sDiv}>
                            <img src="https://rstheme.com/products/html/reobiz/assets/images/casestudies/7.jpg" alt="" />
                        </div>
                        <div className={dif.sDiv}>
                            <img src="https://rstheme.com/products/html/reobiz/assets/images/casestudies/6.jpg" alt="" />
                        </div>
                        <div className={dif.sDiv}>
                            <img src="https://rstheme.com/products/html/reobiz/assets/images/casestudies/4.jpg" alt="" />
                        </div>
                        <div className={dif.sDiv}>
                            <img src="https://rstheme.com/products/html/reobiz/assets/images/casestudies/3.jpg" alt="" />
                        </div>
                        <div className={dif.sDiv}>
                            <img src="https://rstheme.com/products/html/reobiz/assets/images/casestudies/5.jpg" alt="" />
                        </div>
                </Slider>
            </div>
        );
    }
}