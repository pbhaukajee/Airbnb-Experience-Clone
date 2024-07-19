import Star from "../images/star.png";

export default function Card(props) {
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img className="card--image" src={props.item.coverImg} alt="katie" />
      <div className="card--stats">
        <img className="card--star" src={Star} alt="star" />
        <span>{props.item.stats.rating}</span>
        <span className="gray">({props.item.stats.reviewCount}) •</span>
        <span className="gray">{props.item.location}</span>
      </div>
      <h2>{props.item.title}</h2>
      <p>
        <span className="bold">From ${props.item.price}</span> / person
      </p>
    </div>
  );
}
