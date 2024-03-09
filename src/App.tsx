import React from 'react';
import logo from './logo.svg';
import teamData from './CollegeBasketballTeams.json';
import './App.css';

const teamList = teamData.teams;

interface TeamProps {
  school: string;
  name: string;
  city: string;
  state: string;
}

function Welcome() {
  return (
    <h3>
      In honor of the upcoming March Madness Tournament, here is a list of all
      basketball teams in the NCAA. You're welcome.
    </h3>
  );
}

class Team extends React.Component<TeamProps> {
  render() {
    const oneTeam = this.props;

    return (
      <div>
        <img />
        <h2>
          School: {oneTeam.school} {oneTeam.name}
        </h2>
        <h3>City: {oneTeam.city}</h3>
        <h3>State: {oneTeam.state}</h3>
      </div>
    );
  }
}

function TeamList() {
  return (
    <div>
      {teamList.map((singleTeam) => (
        <Team {...singleTeam} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Welcome />
      <TeamList />
    </div>
  );
}

export default App;
