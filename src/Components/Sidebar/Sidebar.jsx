import React from "react";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
 
} from "react-icons/ai";
import styled from "./Sidebar.module.css";
const SideBar = () => {
  return (
    <div className={styled.fix}>
      <a className={styled.color3} target = "_blank" href="https://github.com/Shashanksinha20">
        <AiFillGithub className={styled.color1} />
        <br />
      </a>
      <a className={styled.color3} target = "_blank" href="https://twitter.com/shashanksinha93">
        <AiFillTwitterCircle className={styled.color} />
        <br />
      </a>{" "}
      <a
        className={styled.color3} target = "_blank"
        href="https://www.linkedin.com/in/shashank-sinha-030408155"
      >
        <AiFillLinkedin className={styled.color} />
        <br />
      </a>{" "}
     
    </div>
  );
};

export default SideBar;
