import "./card.css"

const Card = ({image, name, role, fg_color}) => {
	return (
		<div className="card">
			<div className="header" style={{backgroundColor:fg_color}}>
				<img src={image} alt={"foto de perfil de " + name}/>
			</div>
			<div className="footer">
				<h4>{name}</h4>
				<h5>{role}</h5>
		</div>
		</div>
	)
}

export default Card
