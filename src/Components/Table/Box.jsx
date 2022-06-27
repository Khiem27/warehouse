Box.propTypes = {};

function Box(props) {
  const { gido } = props;
  const handleClick = (input) => {
    const node = document.querySelectorAll(".box-wrap");
    for (let index = input; index < input + 5; index++) {
      node[index].classList.add("active");
    }

    for (let index = input + 24; index < input + 24 + 5; index++) {
      node[index].classList.add("active");
    }
  };

  return (
    <>
      <div className="box-wrap" onClick={() => handleClick(gido)}></div>
    </>
  );
}
export default Box;
