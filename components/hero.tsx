import React from 'react';
import styles from '../styles/Hero.styles';
import { UilPhone } from "@iconscout/react-unicons";

export const Hero = () => {
    return (
        <section id="home" className={`flex md:flex-row flex-col py-6 px-8 sm: px-10 bg-segalabersih_cover bg-cover bg-no-repeat`}>
            <div className="flex flex-col  justify-content items-left w-full sm:pl-8 ">
                <h1 className={`text-white flex-1 font-poppins font-semibold ss: text-[72px] text-[52px] ss:leading-[100px] leading-[75px]`}>
                   <span className="text-logo-gradient font-bold">Healty Place</span>  
                   <br></br>
                   <span className="font-semibold">For Working Space</span>
                </h1>
                <p className="flex-1 px-1 mt-0">
                    <span className="font-normal text-white">Advance Cleaning Providing Hygiene Service for your home and Office</span>
                </p>
                <button className="whatsapp__button px-1 w-[250px] mt-4 text-white border rounded-[10px] pb-3 px-4 pt-2">
                    <div className="flex flex-row justify-between px-4">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <UilPhone /> 
                        Call Us Now !
                    </div>
                </button>
            </div>
            <div className="w-[400px] flex flex-row justify-center xs:ml-[8%] sm:mt-[35px] md:ml-[-40%]">
                <h1 className="text-logo-gradient text-[72px] font-poppins font-bold relative z-[5]">Segalabersih</h1>
                <div className="z-[2] bg-blue-500 w-[35%] h-[30%] top-[0] blue__gradient absolute"></div>
                <div className="z-[2] bg-blue-500 w-[50%] h-[50%] right-[20] bottom-[20] rounded-full cyan__gradient absolute"></div>

            </div>
        </section>

    );
}
export default Hero;