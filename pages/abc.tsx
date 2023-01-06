import React, { useEffect, useState } from "react";

const Abc = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // (async () => {
    //   var requestOptions: any = {
    //     method: "GET",
    //     redirect: "follow",
    //   };

    //   fetch("http://localhost:3000/api/dsad/dsad", requestOptions)
    //     .then((response) => response.text())
    //     .then((result) => console.log(result))
    //     .catch((error) => console.log("error", error));
    // })();
  }, []);

  return (
    <div>
      {data.map((item: any) => (
        <div key={item._id}> {item.name}</div>
      ))}
    </div>
  );
};
export default Abc;
