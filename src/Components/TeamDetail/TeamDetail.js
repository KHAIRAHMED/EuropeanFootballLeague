import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag, faFootballBall, faGenderless, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import "./TeamDetail.css"
import maleImg from '../../images/male.png'
import femaleImg from "../../images/female.png"
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const TeamDetail = () => {
   const {id} = useParams()
   const [team , setTeam] = useState({})
   useEffect(()=>{
    fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`)
    .then(res => res.json())
    .then(data => setTeam(data.teams[0]) )
   },[id])
   const {strCountry , strLeague, strFacebook , strGender, strInstagram, strYoutube, strTwitter , strStadiumThumb, strTeamBadge, intFormedYear  } = team

//    Conditional formating 
//    let gender;
//    if(strGender === "Male"){
//     gender = <img src={maleImg} alt="male img" />
//    }
//    else{
//        gender = <img src={femaleImg} alt="female img" />
//    }
console.log(team);
    return (
        <div>
            <div className = "teamDetailsBg" style={{backgroundImage:`url(${strStadiumThumb})`}}>
                <img className="teamLogo " src={strTeamBadge} alt="team logo" />
            </div>
           <div className="teamDetailsMain">
               <div className="teamDetailsCard">
                   <div className="cardDetails">
                       <h4>{strLeague}</h4>
                       <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Founded : {intFormedYear} </p>
                       <p><FontAwesomeIcon icon={faFlag}/> Country : {strCountry}</p>
                       <p><FontAwesomeIcon icon = {faFootballBall} /> Sports Type  : Football</p>
                       <p><FontAwesomeIcon icon={faGenderless}/> Gender : {strGender}</p>
                   </div>
                   <div className ="cardImg">
                       {
                           strGender ==="Male"?<img src={maleImg} alt="male img" /> :<img src={femaleImg} alt="female img" />
                       }
                   </div>
               </div>
               <div className="mt-5">
                   <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores esse itaque a officiis aliquid quaerat molestiae iure, dolor ea, neque cum molestias mollitia! Nesciunt voluptates dolore quia corrupti dicta quibusdam consectetur ea porro incidunt reiciendis minus ex harum accusamus laboriosam omnis blanditiis assumenda, magnam ipsum quae dolores totam libero.</p>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur sit eligendi magnam saepe tenetur, nobis sequi exercitationem inventore at beatae natus consectetur earum, cum laborum autem dolorem minima molestiae libero error reprehenderit. Illo itaque architecto nam culpa inventore consequatur ut consectetur, ipsum doloribus perspiciatis. Asperiores officia provident id quia! Facere nam libero corrupti animi!</p>
                   <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore perspiciatis possimus nam, et quas quam adipisci totam laborum, voluptatum corporis esse ea dolores. Repellat est vitae inventore incidunt fuga facere, ea, facilis nisi deleniti assumenda rem tenetur hic! Sapiente magnam perferendis atque consectetur assumenda.</p>
               </div>
               <footer className="footer">
                    <a href={strFacebook} target='_blank' rel='noreferrer'><FontAwesomeIcon style={{fontSize: "2em", color: "white"}} icon={faFacebook}/></a>
                    <a href={strInstagram} target="_blank" rel='noreferrer'><FontAwesomeIcon style={{fontSize: "2em", color: "tomato"}}  icon={faInstagram}/></a>
                    <a href={strYoutube} target="_blank" rel='noreferrer'><FontAwesomeIcon style={{fontSize: "2em", color: "red"}}  icon={faYoutube} /></a>
                    <a href={strTwitter} target="_blank" rel='noreferrer'><FontAwesomeIcon style={{fontSize: "2em", color: "#1DA1F2"}}  icon={faTwitter}/></a>
                </footer>
           </div>
        </div>
    );
};

export default TeamDetail;
