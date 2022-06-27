import Box from "./Box";

function Table(props) {
  let rows = [];
  for (let i = 0; i <= 767; i++) {
    rows.push(<Box gido={i} key={i} />);
  }

  return <div className="box">{rows}</div>;
}

export default Table;
