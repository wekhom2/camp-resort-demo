import React from "react";

const Title = ({ title, subTitle }) => {
  return (
    <div className="section-heading">
      <div className="sub__cont">
        <div className="section-line"></div>
        <h5>{subTitle}</h5>
        <div className="section-line"></div>
      </div>

      <h2>{title}</h2>
    </div>
  );
};

export default Title;
