import BannerImages from "../../public/images/Banner_images.png";

export default function Banner() {
    return(
        <section className="banner bg-[#f7f2e9]">
            <div className="container  md:max-w-[1370px] md:m-auto">
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bannerText md:pt-[120px] md:pb-[120px]">
                        <h5 className="md:text-[17px] text-[#403C34]">A Best Cafe House</h5>
                        <h2 className="md:text-[60px] md:text-[#2B292B] md:leading-14 md:mt-[20px] font-bold md:mb-[20px]">Start Your Day with <br /> Morning Cofe</h2>
                        <h4 className="md:inline-block text-[#AC8435] md:text-[17px] md:pr-[50px]">Colombian Andean coffee</h4>
                        <h4 className="md:inline-block text-[#AC8435] md:text-[17px]">Ethiopian acidic coffee</h4>
                        <p className="md:text-[16px] md:pt-[20px] md:pb-[20px]">We love the idea of indulging in your health, and every <br/> item on our menu is full of lush, organic ingredients, bright <br/> flavor and beautiful color.</p>
                        <a href="#" className="md:pt-[10px] md:pb-[10px] md:pl-[25px] md:pr-[25px] bg-[#AC8435] text-[#ffffff] md:mr-[30px] md:mt-[10px] md:inline-block">Get Yours Now</a>
                        <a href="" className="md:pt-[10px] md:pb-[10px] md:pl-[25px] md:pr-[25px] border-2 text-[#2B292B] md:mr-[30px] md:mt-[10px] md:inline-block">Reservation</a>
                    </div>
                    <div className="bannerImage text-right">
                        <img src={BannerImages} alt="Banner Image" className="w-full" />
                    </div>
                </div>
            </div>
        </section>
    );
}