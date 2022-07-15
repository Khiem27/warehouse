import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
function Home(props) {
  const { register, handleSubmit } = useForm();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);
  const [arr, setArr] = useState();
  const arrBox = useRef([]);
  const getPos = () => {
    let e = window.event;

    let posXC = e.clientX;
    let posYC = e.clientY;
    console.log("x:", posXC, "y: ", posYC);
    setPosX(posXC);
    setPosY(posYC);
  };

  const onSubmit = (data) => {
    let newArr = data;
    setArr(newArr);
    arrBox.current.push(newArr);
    console.log(arrBox.current);
  };

  return (
    <div className="homewrap">
      <div className="content" onClick={getPos}>
        {arrBox.current.length
          ? arrBox.current.map((item, index) => {
              return (
                <div
                  key={index}
                  className="box"
                  style={{ top: `${item.posY}px`, left: `${item.posX}px` }}
                ></div>
              );
            })
          : null}
      </div>
      <div className="container">
        <button onClick={handleOpen}>Thêm sào</button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                id="outlined-basic"
                label="Toạ độ X"
                variant="outlined"
                {...register("posX", { required: true })}
              />

              <TextField
                id="outlined-basic"
                label="Toạ độ Y"
                variant="outlined"
                {...register("posY", { required: true })}
              />
              <button type="submit">Thêm</button>
            </form>
          </Box>
        </Modal>
      </div>
    </div>
  );
}

export default Home;
