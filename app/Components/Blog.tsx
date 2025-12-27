//Blog Image Load Here
import BlogTwo  from "../../public/images/Rectangle2.png";
import BlogOne  from "../../public/images/Rectangle1.png";
import BlogThree from "../../public/images/Rectangle3.png";

//Frame Image Load Here
import BlogFeameOne  from "../../public/images/Frame12.png";
import BlogFeameTwo  from "../../public/images/Frame13.png";
import BlogFeameThree  from "../../public/images/Frame14.png";

//image 
import BestCofe from "../../public/images/iceCreame.png";


export default function Blog() {
    return(
        <section className="bg-[#f7f2e9] md:pt-[50px] md:pb-[40px]">
            <div className="container md:max-w-[1370px] md:m-auto">
                <div className="grid md:grid-cols-3 gap-4 md:pt-[70px] md:pb-[70px]">
                    <div className="md:w-full md:max-w-[477px] md:max-h-[477px]">
                        <img src={BlogFeameOne} alt="" className="w-full h-full inline-block"/>
                    </div>
                    <div className="md:w-full md:max-w-[477px] md:max-h-[477px]">
                        <img src={BlogFeameTwo} alt="" className="w-full h-full inline-block"/>
                    </div>
                    <div className="md:w-full md:max-w-[477px] md:max-h-[477px]">
                        <img src={BlogFeameThree} alt="" className="w-full h-full inline-block"/>
                    </div>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:w-full md:max-w-[417px] md:max-h-[417px]">
                        <img src={BlogTwo} alt="" className="w-full h-full"/>
                    </div>
                    <div className="md:w-full md:max-w-[417px] md:max-h-[417px]">
                        <img src={BlogOne} alt="" className="w-full h-full"/>
                    </div>
                    <div className="md:w-full md:max-w-[417px] md:max-h-[417px]">
                        <img src={BlogThree} alt="" className="w-full h-full"/>
                    </div>
                </div>
                <div className="grid md:grid-cols-3 gap-6 md:pt-[70px] md:pb-[70px]">
                    <div className="col-span-2 md:pt-[70px] md:pb-[30px]">
                        <h2 className="text-[40px] font-bold pb-[10px]">We’re a dedicated gluten-free café.</h2>
                        <h6 className="text-[18px] pb-[10px]">But you’d never know if we didn’t mention it.</h6>
                        <p className="text-[17px] pb-[20px]">You see, our creations redefine what gluten-free means. Impossibly moist layer cakes, decadent desserts, pillowy rolls, tender crumbs—everything we make is a reflection of our commitment to flavor, texture and artistry of the highest caliber. Informed by classical French pastry technique and inspired by California’s spirit of creativity, we bake because life’s too short for anyone to skip cake.</p>
                        <a href="#" className="md:pt-[10px] md:pb-[10px] md:pl-[25px] md:pr-[25px] bg-[#AC8435] text-[#ffffff] md:mr-[30px] md:mt-[10px] md:inline-block">Read More</a>
                    </div>
                    <div className="place-items-center">
                        <img src={BestCofe} alt="" className="border-2 text-[#000000] p-[10px]"/>
                    </div>
                </div>
            </div>
        </section>
    );
}