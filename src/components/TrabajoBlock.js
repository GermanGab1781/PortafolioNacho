import '../trabajoBlock.css';

export default function SectionBlock({bgImg , title, description}) {
  return (
    <div className="tblockContainer">
        <img className="tbgImg" src={bgImg} alt={description}></img>
        <span className="tblockTitle">{title}</span>
    </div>

  );
}
