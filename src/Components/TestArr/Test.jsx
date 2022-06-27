import { useEffect, useState } from "react";

Test.propTypes = {};

function Test(props) {
  const [arr, setArr] = useState([]);
  useEffect(() => {
    const newArr = [];
    newArr.length = 1000;
    setArr(newArr);
  }, []);
  return (
    <div className="box">
      {console.log(arr)}
      {arr &&
        arr.map((item, index) => {
          return (
            <div className="box-wrap" key={index}>
              c
            </div>
          );
        })}
    </div>
  );
}

export default Test;
