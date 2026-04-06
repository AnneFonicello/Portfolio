const defaultTitle = "Default Title";
const defaultBody = "Default Body Text";

function Card({title, body, img}) {
  return (
    <div className="card">
      <img src={img} alt="Card image" />
      <div className="card-content">
        <div className="card-title">{title}</div>
        <div className="card-text">
          {body}
        </div>
        <a href="#" className="card-button">Read More</a>
      </div>
    </div>
  );
}
export default Card;