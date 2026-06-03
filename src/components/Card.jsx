const defaultTitle = "Default Title";
const defaultBody = "Default Body Text";

function Card({title, body, img, skills = [], link}) {
  return (
    <div className="card">
      <img src={img} alt="Card image" />
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
        {link && 
          <a href={link} className="card-button">Read More</a>
        }
      </div>
    </div>
  );
}
export default Card;