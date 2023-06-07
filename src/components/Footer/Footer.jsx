import React from "react";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <div className="footerContainer">
      <h3>Theme by Colorlib Powered by WordPress</h3>
      <div className="footerIcons">
        <FacebookIcon className="footerIcon " />
        <TwitterIcon className="footerIcon" />
        <LinkedInIcon className="footerIcon" />
        <InstagramIcon className="footerIcon" />
        <YouTubeIcon className="footerIcon" />
      </div>
    </div>
  );
};

export default Footer;
