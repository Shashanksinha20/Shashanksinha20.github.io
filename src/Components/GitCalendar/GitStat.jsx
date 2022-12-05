import React from "react";
import Githubcalendar from "react-github-calendar";
import './GitStat.css'
export default function GitStat(){
//   const colourTheme = {
//     // background: "transparent",
//     text: "#ffffff",
//     grade4: "#8400b8",
//     grade3: "#b22ff4",
//     grade2: "#b265f6",
//     grade1: "#c084f5",
//     grade0: "#ecd9fc"
    
//   };
const gitStyle = {
    margin : "0 auto",
    padding : "10px 15px"
}

const gitStats = {
  display : "flex",
  flexWrap : "wrap",
  justifyContent : "space-around",
  margin : "30px auto"
}

const selectLastHalfYear = contributions => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 6;
  
    return contributions.filter(day => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();
  
      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };
  return (
    <>
      <div className="section" data-aos="fade-right">
        <h2 className="section__title">
          Git <span className="different"> Stats</span>
        </h2>
        <Githubcalendar
          username="Shashanksinha20"
          transformData={selectLastHalfYear}
          blockSize={15}
          blockMargin={5}
          style = {gitStyle}
          fontSize={16}
        />
      </div>
          
      <div className="section" data-aos="fade-right" style = {gitStats}>
      <img
  src="https://github-readme-streak-stats.herokuapp.com/?user=Shashanksinha20&theme=default"
    alt = "git-streak"
    style = {{maxWidth : "92%", minHeight : "207px"}}
  />
      <img
    alt="ShashankSinha's Github Stats"
    src="https://github-readme-stats.vercel.app/api?username=Shashanksinha20&theme=default"
     style = {{maxWidth : "92%", minHeight : "207px"}}/>
  
      </div>
      
    </>
  );
};
