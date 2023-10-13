import Team from "./team";

import { ITeam } from "../../shared/interfaces/iteam";
import { IUser } from "../../shared/interfaces/iuser";

interface TeamsProps {
  dataBase: IUser[];
  teams: ITeam[];
}

const Teams = ({ dataBase, teams }: TeamsProps) => {
  const getTeam = (teamName: string) =>
    dataBase.filter((user: IUser) => user.Time === teamName);
  const teamsToRender = teams.map((team) => {
    const teamData = getTeam(team.name);
    return (
      teamData.length > 0 && (
        <Team
          key={team.name}
          name={team.name}
          bg_color={team.bg_color}
          fg_color={team.fg_color}
          team={teamData}
        />
      )
    );
  });

  return <section className="teams">{teamsToRender}</section>;
};

export default Teams;
