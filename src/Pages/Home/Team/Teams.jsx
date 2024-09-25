import { useEffect, useState } from "react";
import TeamCard from "./TeamCard";


const Teams = () => {

  const [teams, setTeams] = useState([]);
  useEffect(()=>{
    fetch('teams.json')
    .then(res => res.json())
    .then(data => setTeams(data))
  },[])

  return (
    <div className="text-center space-y-5">
      <h2 className="mt-32 text-orange-500 font-bold">Team</h2>
      <h2 className="text-4xl font-bold">Meet Our Team</h2>
      <p className="mb-16">The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable.</p>
      
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
      {
        teams.map(team => <TeamCard
        key={team.id}
        team={team}
        ></TeamCard>)
      }
      </div>
    </div>
  );
};

export default Teams;