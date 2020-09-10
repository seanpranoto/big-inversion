import React from "react";

const PersonCard = props => {
    return(
        <>
    <h2>{props.lastName}, {props.firstName} </h2>
        <p>age: {props.age}</p>
        <p>hari color: {props.hairColor}</p>
        </>
    );
}


export default PersonCard;