//Components Link Here
import Banner from "~/Components/Banner";
import Blog from "~/Components/Blog";
import Foodies from "~/Components/Foodies";
import MotivationalSpeech from "~/Components/MotivationalSpeech";
import PopularCofe from "~/Components/PopularCofe";


export default function Home () {
  return(
    <>
      <Banner></Banner>
      <MotivationalSpeech></MotivationalSpeech>
      <Blog></Blog>
      <PopularCofe></PopularCofe>
      <Foodies></Foodies>
    </>
  );
}
