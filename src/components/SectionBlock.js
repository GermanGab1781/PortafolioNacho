import '../sectionBlock.css';

export default function SectionBlock({bgImg , title, description}) {
  return (
    <div className="blockContainer">
        <img className="bgImg" src={bgImg} alt={description}></img>
        <span className="blockTitle">{title}</span>
    </div>

  );
}
