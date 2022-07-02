import { NavLink } from "react-router-dom";

export default function SectionBlock({bgImg , title, description,to,setExit}) {
  return (
    <NavLink to={to} className="tblockContainer" onClick={setExit}>
        <img className="tbgImg" src={bgImg} alt={description}></img>
        <span className="tblockTitle">{title}</span>
    </NavLink>

  );
}
