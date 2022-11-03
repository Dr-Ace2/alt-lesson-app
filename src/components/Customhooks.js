import React, { useEffect, useState } from "react";

// usegetdata is the custom hook!
let UseGetData = (type) => {
  let [data, setData] = useState([]);
  useEffect(() => {
    let cars = [
      {
        id: 1,
        name: "tesla",
        year: 2020,
      },

      { id: 2, name: "toyota", year: 2024 },
    ];

    //  books

    let books = [
      {
        id: 1,
        name: "harry yup",
      },
      {
        id: 2,
        name: "james dave",
      },
    ];

    if (type === "cars") {
      setData(cars);
    } else if(type==='books') {
      setData(books);
    }
     else {
      setData([]);
    }
  }, [type]);

  return [data];
};

let Customhooks = () => {
    let [data] = UseGetData('cars')
    console.log(data);
  return <div></div>;
};

export default Customhooks;
