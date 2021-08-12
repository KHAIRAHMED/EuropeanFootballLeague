import React, { useEffect } from 'react';
import { useState } from 'react';
import Teams from '../Teams/Teams';
import "./Home.css";
// import bgImg from '../../images'
const Home = () => {
    const[teams , setTeams] = useState([]);
    useEffect(()=>{
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
        .then(res => res.json())
        .then(data => setTeams(data.teams))
    },[])
    return (
        <main>
            
            <div className="homeBg" >
                <h3 className="text-white my-5 py-5">SPORTS MANIA</h3>
            </div>

            <div className="homeBody">
               <div className="teamArea">
                    {
                        teams.map((team)=> <Teams team = {team} key={team.idTeam}></Teams>)
                    }
               </div>
            </div>
            
        </main>
    );
};

export default Home;