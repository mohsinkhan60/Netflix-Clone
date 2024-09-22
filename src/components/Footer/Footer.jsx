import "./Footer.css";
import youtube_icon from "../../assets/youtube_icon.png";
import twitter_icon from "../../assets/twitter_icon.png";
import instagram_icon from "../../assets/instagram_icon.png";
import facebook_icon from "../../assets/facebook_icon.png";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <img src={facebook_icon} alt="" />
        <img src={instagram_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={youtube_icon} alt="" />
      </div>

      <ul>
        <li> Audio Description</li>
        <li> Help Center</li>
        <li> Gift Card</li>
        <li> Media Center</li>
        <li> Investor Relation</li>
        <li> Jobs</li>
        <li> Terms To Use</li>
        <li> Privacy </li>
        <li> Ccokie Preferance </li>
        <li> Corporate Information </li>
        <li> Leagle Notice</li>
        <li> Contact Us</li>
      </ul>
      <div className="copyRight">@ 1997-2024 Netflix, Inc.</div>
    </div>
  );
};
export default Footer;
