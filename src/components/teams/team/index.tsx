import { IUser } from "shared/interfaces/iuser";

import Card from "./card";

import "./team.css";

interface TeamProps {
  name: string;
  team: IUser[];
  fg_color: string;
  bg_color: string;
}

const Team = ({ name, team, fg_color, bg_color }: TeamProps) => {
  const sectionCss = {
    backgroundColor: bg_color,
  };
  const h3Css = {
    borderColor: fg_color,
  };
  let cards = team.map((user) => {
    return (
      <Card
        key={user.Nome + user.Cargo}
        name={user.Nome}
        role={user.Cargo}
        image={user.Imagem}
        fg_color={fg_color}
      />
    );
  });
  return (
    <section className="team" style={sectionCss}>
      <h3 style={h3Css}>{name}</h3>
      <div className="cards"> {cards} </div>
    </section>
  );
};

export default Team;
