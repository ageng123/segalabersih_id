import React from 'react';
const ServiceCard = ({children, ServiceName}) => {
    return(
           <div className="bg-white pl-[2rem] pr-[2rem] pt-[10px] pb-[20px] Plan__Card font-poppins">
                <h2 className="bg-[#fdbd4a] pb-[1em] pt-[1.2em] font-[27px] font-[600] text-center">{ServiceName}</h2>
                <div className="bg-[#fdbd4a] p-[0.2rem 1.2rem] pricing">
                    <p className="text-center pb-[1.2em]">Rp 100000</p>
                    <div></div>
                </div>
                <div className="feature mt-[1.2em]">
                    {children}
                </div>
            {/* {children} */}
           </div>
    );
}
export const TopServices = () => {
    return(
        <>
         <section id="top_service" className=" box-border w-full flex flex-col p-6 pr-9 z-[3]">
            <div className="w-full grid sm:grid-cols-3 gap-10 mt-[10em] xs:grid-cols-1 z-[3]"> 
                <ServiceCard ServiceName="Cuci Sofa">
                    <ol>
                        <li>lorem ipsum</li>
                        <li>lorem ipsum</li>
                        <li>lorem ipsum</li>
                    </ol>
                </ServiceCard>
                <ServiceCard ServiceName="Cuci Jok Mobil">
                    <ol>
                        <li>lorem ipsum</li>
                        <li>lorem ipsum</li>
                        <li>lorem ipsum</li>
                    </ol>
                </ServiceCard>
                <ServiceCard ServiceName="Cuci Kursi">
                    <ol>
                        <li>lorem ipsum</li>
                        <li>lorem ipsum</li>
                        <li>lorem ipsum</li>
                    </ol>
                </ServiceCard>
            </div>
            <div className="w-full text-white p-4 text-center">
                More of Our Services ? <button className="cta"><span className="hover-underline-animation font-bold">Click Here !</span></button>
            </div>
         </section>
        </>
    );
}
export default TopServices;