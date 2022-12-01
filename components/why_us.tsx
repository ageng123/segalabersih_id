import { UilUserCheck,UilUsdCircle,UilAngleDoubleRight,UilCog } from "@iconscout/react-unicons";

export const WhyUsCard = ({title = '', description = '', index = 0, icon = any}) => {
    const toggleOpen = (event: React.MouseEvent) => {
        let siblings  = document.getElementsByClassName('WhyUs__Card');
        for(let i of siblings){
            i.classList.remove('active');
        }
        event.target.parentElement.classList.toggle('active');
        console.log(event.target.parentElement)
    }
    const defaultClass = ( index == 1 ? `active` : '');
    return(
        <div key={index}  className={`card ${index == 0 ? `` : `mt-[1em]` } WhyUs__Card ${defaultClass}`}>
            <div onMouseEnter={toggleOpen} className="header text-white">
                <h1 className="mt-[5.5px] mr-2">{icon}</h1>
                <h1 className="font-poppins text-white text-semibold title">{title}</h1>
            </div>
            <div className="content ">
                <p className="text-white">{description}</p>
            </div>
        </div>
    );
}
const WhyUsData = [
    {title: 'Professional', description: '1', icon: <UilUserCheck />},
    {title: 'Fast', description: '2', icon: <UilAngleDoubleRight />},
    {title: 'Adorable Price', description: '2', icon: <UilUsdCircle />},
];
export const WhyUs = () => {
    const dataLength = WhyUsData.length;
    const gridCols = dataLength < 3 ? 'grid-cols-'+dataLength : 'grid-cols-3';
    return(
        <section className="w-full min-h-[50vh] mt-[20em] grid grid-cols-3 gap-1">
             <div className="text-white justify-center items-center col-span-2 flex flex-col">
                <div className="font-semibold text-[10em] w-full items-center flex shadow_blue_whyUs z-[1]"></div>
                <div className="w-full text-center justify-center flex z-[2]"><UilCog className="w-[50%] h-[50%]" /></div>
                <h1 className="flex-1 text-[1.7em] relative font-poppins top-[-8em] font-bold">We Will Handle All Cleaning Jobs For You</h1>
            </div>
            <div className={`box-border px-6 pr-9 flex flex-col justify-center`}>
                {WhyUsData.map((value, index) => (
                    <WhyUsCard key={index} icon={value?.icon} title={value.title} index={index} description={value.description} />
                ))}
            </div>
           
        </section>
    );
}
export default WhyUs;