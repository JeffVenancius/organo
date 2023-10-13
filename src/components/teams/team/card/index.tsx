import "./card.css";

interface CardProps {
  image: string;
  name: string;
  role: string;
  fg_color: string;
}

const Card = ({ image, name, role, fg_color }: CardProps) => {
  return (
    <div className="card">
      <div className="header" style={{ backgroundColor: fg_color }}>
        <img src={image} alt={"foto de perfil de " + name} />
      </div>
      <div className="footer">
        <h4>{name}</h4>
        <h5>{role}</h5>
      </div>
    </div>
  );
};

export default Card;
