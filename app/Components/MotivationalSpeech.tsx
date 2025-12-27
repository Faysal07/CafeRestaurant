import BackImage from "../../public/images/backgroung_img_motiv.png";

export default function MotivationalSpeech() {
    return(
            <section className="motive bg-[url(../../public/images/backgroung_img_motiv.png)] w-full">
                <div className="continer md:max-w-[1370px] md:m-auto">
                    <div className="grid md:grid-col-1 gap-6">
                        <h2 className="md:text-[35px] font-bold md:pt-[100px] md:pb-[100px] md:pr-[100px] md:pl-[100px] text-center capitalize text-[#AC8435]">Coffee is a way of stealing time <br /> which should by rights belong to <br /> your older self.</h2>
                    </div>
                </div>
            </section>
    );
}