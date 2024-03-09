import React from 'react';
import logo from './logo.svg';
import teamData from './CollegeBasketballTeams.json';
import './App.css';

const teamList = teamData.teams;

//give the Team component some properties
interface TeamProps {
  school: string;
  name: string;
  city: string;
  state: string;
}

//show header message
function Welcome() {
  return (
    <div>
      <h2 className="App">
        In honor of the upcoming March Madness Tournament, here is a list of all
        basketball teams in the NCAA.
      </h2>
      <h2>You're welcome.</h2>
      <br />
      <br />
    </div>
  );
}

//create the Team component
class Team extends React.Component<TeamProps> {
  render() {
    const oneTeam = this.props;

    return (
      <div className="team-container">
        <h2>
          School: {oneTeam.school} {oneTeam.name}
        </h2>
        <h3>City: {oneTeam.city}</h3>
        <h3>State: {oneTeam.state}</h3>
      </div>
    );
  }
}

//display all the teams in the list
function TeamList() {
  return (
    <div className="team-list-container">
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
