import React from 'react';

import List from './List';

let Listitems = () => {
    let cars = ["mazda", "golf", "peugeot"];
    let carlist = cars.map((mycars) => {
      return <li key={mycars}> {mycars}</li>;
    });
    return (
      <ol>
        <List />
        {carlist}
      </ol>
    );
  };


  export default Listitems;
