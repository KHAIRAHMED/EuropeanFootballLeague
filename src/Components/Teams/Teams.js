import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Teams.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight} from '@fortawesome/free-solid-svg-icons'
import {useHistory} from "react-router-dom"

const Teams = (props) => {
    const history = useHistory()
    const {strLeague , strTeamBadge ,idTeam} = props.team
    const handleExplore =(id)=>{
      history.push(`/teamDetails/${id}`)

    }
    return (
      <Card className ="text-center cardArea" style={{ width: '18rem' }}>
      <Card.Img variant="top" className="cardImg mt-4 text-center" src={strTeamBadge} style={{width : "50%"}} />
      <Card.Body>
        <Card.Title>{strLeague}</Card.Title>
        <Card.Text>
          Sports Type : Football
        </Card.Text>
        <Button onClick={()=> handleExplore(idTeam)} variant="primary">Explore <FontAwesomeIcon icon={faArrowAltCircleRight} /></Button>
      </Card.Body>
    </Card>
    );

};

export default Teams;