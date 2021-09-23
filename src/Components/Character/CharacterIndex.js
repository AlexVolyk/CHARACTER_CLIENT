import React, { useState, useEffect, useContext } from "react";
import {Container, Row, Col} from 'reactstrap';
import CharacterTable from './CharacterTable';
import CharacterEdit from './CharEdit';
import CharCreate from './CharCreate';
import { Context } from  '../../Context';
import APIURL from "../../helpers/environment";


const CharacterIndex = (props) => {
  // const {username} = useContext(Context)

  // const {updateToken} = useContext(Context);


  const editUpdateCharacter = (character) => {
    setCharacterToUpdate(character);
    // console.log(character, '-------------------------------character');
  };
  
  useEffect(() => {
    fetchCharacters()
  }, [])

  const updateOn = () => {
    setUpdateActive(true);
  };

  const updateOff = () => {
    setUpdateActive(false);
  };
  
  const fetchCharacters = () => {
    //   console.log(sessionToken, 'paaul');
    // fetch(`http://localhost:3000/character/misha`, {
    //   console.log(sessionToken);
    fetch(`${APIURL}/character/usercharacters`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        'Authorization': `SECRET ${sessionToken}`
      }),
    })
      .then(res => res.json())
      .then(characterData => {
        setCharacters(characterData);
        // console.log(characterData, '        CharacterAppClient')
      });
  };

  // ! hooks what we have
  const [characters, setCharacters] = useState([]);
  const [updateActive, setUpdateActive] = useState(false);
  const [characterToUpdate, setCharacterToUpdate] = useState({});
  const {sessionToken} = useContext(Context);

  return (
    <Container>
        <Row>
        <Col md="9" style={{"width": "100%"}}>
          <CharacterTable
          // ! here we using props {characters}, {editUpdateCharacter}, {updateOn}, {fetchCharacters} and send them to the CharacterTable file from the CharacterIndex file (sessionToken using | Context |)
            characters={characters}
            editUpdateCharacter={editUpdateCharacter}
            updateOn={updateOn}
            fetchCharacters={fetchCharacters}
            token={sessionToken}
          />
    </Col>
    {/* Here we use Boolean{updateActive}(ternary) and get the boolean in the CharacterTable. */}
                {updateActive ? <CharacterEdit characterToUpdate={characterToUpdate}
                updateOff={updateOff} token={sessionToken} fetchCharacters={fetchCharacters}/> : <></>}
            </Row>
    </Container>
  )
}

  export default CharacterIndex;