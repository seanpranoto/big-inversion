import React from 'react';
import './App.css';

import PersonCard from './component/myNewComponent';

const App = () => {
  return (
    <div className="App">
      <PersonCard lastName={"Doe"} firstName={"Jane"} age={45} hairColor={"black"}/>
      <PersonCard lastName={"Smith"} firstName={"John"} age={88} hairColor={"brown"}/>
      <PersonCard lastName={"Filmore"} firstName={"Millard"} age={50} hairColor={"brown"}/>
      <PersonCard lastName={"Smith"} firstName={"Maria"} age={62} hairColor={"brown"}/>
    </div>
  );
}

export default App;
