import Table1 from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import { GroupItem } from "../../Api/GroupItem";
import Box from "./Box";

function Table(props) {
  let rows = [];

  const newArr = [];

  const [groupItem, setGroupItem] = useState([]);

  useEffect(() => {
    const getAllGroupItem = async () => {
      const getAll = await GroupItem.getAll();
      setGroupItem(getAll.data);
      console.log(getAll.data);
    };
    getAllGroupItem();
  }, []);

  if (groupItem.length) {
    for (let i = 0; i <= 527; i++) {
      let returnData = groupItem.find((el) => el.position === i);
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
  }

  return (
    <>
      <Table1 sx={{ flexGrow: 1 }}>
        <Grid container spacing={0}>
          {rows}
        </Grid>
      </Table1>
    </>
  );
}

export default Table;
