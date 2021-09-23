import React, { useContext } from "react";
import { Table, Button } from "reactstrap";
import { Context } from '../../Context';
import APIURL from "../../helpers/environment";


const CharacterTable = (props, character) => {
  const {username} = useContext(Context);
  const {sessionToken} = useContext(Context);
  
  const deleteCharacter = (character) => {
      // console.log(props.token)
    fetch(`${APIURL}/character/delete/${character.id}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        'Authorization': `SECRET ${sessionToken}`,
      }),
    }).then(() => {
        // console.log("Guten Tag")
        props.fetchCharacters()});
  };


  const characterMapper = () => {
    // ! here we using Array{props.characters}
    // ! so we will showing all elements from Array(characters)
    // ! index it's only a position number of character ↓↓↓↓↓↓↓↓↓↓
    // ! all what exist in map() method will be display for all elements from the Array{props.characters}
    // ! in the end of this file on line 87
    return props.characters.map((character, index) => {
      return (
        // ! in <tr> we need key={index} because it help React render faster and better
        <tr key={index}>
          <th scope="row">{character.id}</th>
          <td>{character.characterName}</td>
          <td>{character.characterClass}</td>
          <td>{character.race}</td>
          <td>
            <Button
            // ! here we using Obj{props.editUpdateCharacter} and Boolean{props.updateOn}(ternary)
              style={{ backgroundColor: "grey", margin: "3px" }} onClick={() => {props.editUpdateCharacter(character); props.updateOn()}}
              size="sm">
              Edit
            </Button>{" "}
            <Button
              style={{ backgroundColor: "grey", margin: "3px" }} onClick={() => {deleteCharacter(character)}}
              size="sm">
              Delete
            </Button>
          </td>
        </tr>
      );
    });
  };

  return (
    <>
      <h1
        style={{
          textAlign: "center",
          color: "white",
          padding: "50px",
          fontWeight: "bold",
        }}
      >
        Your Account
      </h1>
      <Table
        style={{
          borderRadius: "5px",
          width: "85%",
          backgroundColor: "#F17D2A",
          opacity: ".9",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        borderless>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Class</th>
            <th>Race</th>
            <th>Edit or Delete</th>
          </tr>
        </thead>
        <tbody>{characterMapper()}</tbody>
      </Table>
      
    </>
            //! right here we call function characterMapper() what include map() method
  );
};

export default CharacterTable;