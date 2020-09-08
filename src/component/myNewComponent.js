import React, { Component } from "react";

class PersonCard extends Component {
    render() {
        const { firstName, lastName, age, hairColor } = this.props;
        return (
            <>
            <h1>{lastName}, {firstName}</h1>
            <p>age: {age}</p>
            <p>hair color: {hairColor}</p>
            </>
        );
    }
}

export default PersonCard;