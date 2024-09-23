import "./Navbar.css";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search_icon.svg";
import bell_icon from "../../assets/bell_icon.svg";
import profile_img from "../../assets/profile_img.png";
import caret_icon from "../../assets/caret_icon.svg";
import { useEffect, useRef } from "react";
import { logout } from "../../firebase";

export const Navbar = () => {
   const navRef = useRef();

   useEffect(() => {
      const handleScroll = () => {
         if (window.scrollY >= 80) {
            navRef.current.classList.add("nav-dark");
         } else {
            navRef.current.classList.remove("nav-dark");
         }
      };

      window.addEventListener("scroll", handleScroll);

      // Cleanup function to remove the event listener
      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, []);

   return (
      <div ref={navRef} className="navbar">
         <div className="navbar-left">
            <img src={logo} alt="" />
            <ul>
               <li>Home</li>
               <li>Tv Shows</li>
               <li>Movies</li>
               <li>New & Popular</li>
               <li>My List</li>
               <li>Browse & Languages</li>
            </ul>
         </div>
         <div className="navbar-right">
            <img src={search_icon} className="icons" alt="" />
            <p>Children</p>
            <img src={bell_icon} alt="" className="icons" />
            <div className="navbar-profile">
               <img src={profile_img} alt="" className="profile" />
               <img src={caret_icon} alt="" />
               <div className="dropdown">
                  <button onClick={() => {logout()}}>Sign Out</button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Navbar;
