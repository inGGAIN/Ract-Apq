import React from "react";
import "./xampleComp.css";

const XampleComp = (props) => {
  return (
    <div className="xample-wrapper">
      <div className="img-thumb">
        <img src="http://i.ytimg.com/vi/ixe0wnxwSLg/2.jpg" alt="" />
        <p className="time">{props.time}</p>
      </div>
      <div className="title">
        <p>{props.title}</p>
      </div>
      <div className="desc">
        <p>{props.desc}</p>
      </div>
    </div>
  )
}

XampleComp.defaultProps = {
    time:'00.00',
    title:'Untitle',
    desc:'0x ditonton, 0x dibagikan'
}

export default XampleComp;
