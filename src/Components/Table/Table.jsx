import Table1 from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Box from "./Box";

function Table(props) {
  let rows = [];

  const newArr = [];
  const array = [
    {
      vitri: 1,
      status: { có: 5, chưa: 2, đặt: 0 },
      data: {
        ke1: [
          "co",
          "chua",
          "chua",
          "co",
          "chua",
          "chua",
          "co",
          "chua",
          "chua",
          "co",
          "chua",
          "chua",
        ],
        ke2: [
          "co",
          "chua",
          "chu",
          "co",
          "chua",
          "chua",
          "co",
          "chua",
          "chua",
          "co",
          "chua",
          "chua",
        ],
      },
    },

    {
      vitri: 2,
      status: { có: 3, chưa: 7, đặt: 6 },
      data: {
        ke1: [
          "co",
          "chua",
          "chua",
          "co",
          "chua",
          "chua",
          "co",
          "chua",
          "chua",
          "co",
          "chua",
          "chua",
        ],
        ke2: [
          "co",
          "chua",
          "chu",
          "co",
          "chua",
          "chua",
          "co",
          "chua",
          "chua",
          "co",
          "chua",
          "chua",
        ],
      },
    },

    {
      vitri: 4,
      status: { có: 10, chưa: 2, đặt: 0 },
      data: {
        ke1: [
          "co",
          "chua",
          "chua",
          "co",
          "chua",
          "chua",
          "co",
          "chua",
          "chua",
          "co",
          "chua",
          "chua",
        ],
        ke2: [
          "co",
          "chua",
          "chu",
          "co",
          "chua",
          "chua",
          "co",
          "chua",
          "chua",
          "co",
          "chua",
          "chua",
        ],
      },
    },

    {
      vitri: 7,
      status: { có: 9, chưa: 12, đặt: 6 },
      data: {
        ke1: [
          "co",
          "chua",
          "chua",
          "co",
          "chua",
          "chua",
          "co",
          "chua",
          "chua",
          "co",
          "chua",
          "chua",
        ],
        ke2: [
          "co",
          "chua",
          "chu",
          "co",
          "chua",
          "chua",
          "co",
          "chua",
          "chua",
          "co",
          "chua",
          "chua",
        ],
      },
    },
  ];

  for (let i = 0; i <= 527; i++) {
    let returnData = array.find((el) => el.vitri === i);
    console.log(returnData);
    if (returnData) {
      rows.push(
        <Box
          newArr={newArr}
          data={returnData}
          gido={i}
          key={i}
          isActive={true}
        />
      );
    } else {
      rows.push(<Box newArr={newArr} gido={i} key={i} />);
    }
  }

  return (
    <>
      <Table1 sx={{ flexGrow: 1 }}>
        <Grid container spacing={0}>
          {rows}
        </Grid>
      </Table1>
    </>
    // <div className="box">{rows}</div>);
  );
}

export default Table;
