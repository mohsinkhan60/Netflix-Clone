import Navbar from "../../components/Navbar/Navbar";
import "./Home.css";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCard from "../../components/TitleCard/TitleCard";
import Footer from "../../components/Footer/Footer";

export const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="" className="banner-img" />
        <div className="hero-caption">
          <img src={hero_title} alt="" className="caption-img" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi,
            quia a hic nam repellendus cumque quos dolorem dolorum beatae iste
            consequuntur recusandae.
          </p>
          <div className="hero-btn">
            <button className="btn"><img src={play_icon} alt="" />Play</button>
            <button className="btn dark-btn"><img src={info_icon} alt="" />More info</button>
          </div>
          <TitleCard />
        </div>
      </div>
      <div className="more-cards">
        <TitleCard title={"BlockBuster Movies"} />
        <TitleCard title={"Only on Netflix"} />
        <TitleCard title={"Upcomig"} />
        <TitleCard title={"Top Pics For You"} />
      </div>
      <Footer />
    </div>
  );
};
export default Home;
