import Team from "./team"
// import "./teams.css"

const Teams = ({dataBase, teams}) => {
	const getTeam = teamName => dataBase.filter(user => user.Time === teamName)
	const teamsToRender = teams.map((team) => {
		const teamData = getTeam(team.name)
		return (
			(teamData.length > 0) && 
			<Team
				key={team.name}
				name={team.name}
				bg_color={team.bg_color}
				fg_color={team.fg_color}
				team={teamData}
			/>
		)
	})

	return (
		<section className="teams">
			{teamsToRender}
		</section>
	)
}

export default Teams
