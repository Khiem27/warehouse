import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Test(props) {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    const newArr = [];
    newArr.length = 1000;
    setArr(newArr);
  }, []);
  return (
    <div className="box">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0}>
          <Grid item xs={0.5}>
            <Item>xs=8</Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Test;
