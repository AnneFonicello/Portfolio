import { FaArrowRight } from "react-icons/fa";
const defaultTitle = "Default Title";
const defaultBody = "Default Body Text";

function Card({title, body, img, skills = [], link}) {
  return (
    <div className="card">
      {link && 
        <a href={link} target="_blank" className="card-link-img">
          <FaArrowRight className="arrowIcon" />
          <img src={img} alt="Card image link" />
        </a>
      }
      {!link &&
        <img src={img} alt="Card image link" />
      }
      <div className="card-content">
        <div className="card-title">{title}</div>
        <div className="card-text">
          {body}
        </div>
        <ul className="card-list">
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Card;