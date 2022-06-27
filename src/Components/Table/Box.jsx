import Boxc from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
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

function Box(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { gido, newArr, isActive, data } = props;
  useEffect(() => {
    const node = document.querySelectorAll(".box-wrap");
    if (isActive) {
      node[gido].classList.add("active");
    }
  }, [isActive, gido]);
  const handleClick = (input) => {
    if (input) {
      newArr.push(input);
      console.log(input);
      setOpen(!open);
    }
    // for (let index = input + 24; index < input + 29; index++) {
    //   node[index].classList.add("active");
    // }
  };

  return (
    <>
      <Grid item xs={0.5}>
        <div className="box-wrap" onClick={() => handleClick(data)}>
          <div className="image-box">
            {isActive && (
              <div className="image-box-wrap">
                <div className="empty">
                  <div className="icon">
                    <span class="icon-empty">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                      <span class="path5"></span>
                      <span class="path6"></span>
                    </span>
                  </div>
                  <span className="info">{data.status.có}</span>
                </div>

                <div className="no-empty">
                  <div className="icon">
                    <span class="icon-not-empty">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                      <span class="path5"></span>
                      <span class="path6"></span>
                      <span class="path7"></span>
                      <span class="path8"></span>
                      <span class="path9"></span>
                      <span class="path10"></span>
                      <span class="path11"></span>
                      <span class="path12"></span>
                      <span class="path13"></span>
                    </span>
                  </div>
                  <span className="info">{data.status.chưa}</span>
                </div>

                <div className="ordering">
                  <div className="icon">
                    <span class="icon-ordering">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                      <span class="path5"></span>
                      <span class="path6"></span>
                      <span class="path7"></span>
                      <span class="path8"></span>
                    </span>
                  </div>
                  <span className="info">{data.status.đặt}</span>
                </div>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Boxc sx={style}>
                    {open && (
                      <div>
                        <h1>{data.vitri}</h1>
                        <h2>{data.vitri}</h2>
                        <button onClick={handleClose}>Cancel</button>
                      </div>
                    )}
                  </Boxc>
                </Modal>
              </div>
            )}
          </div>
        </div>
      </Grid>
    </>
  );
}
export default Box;
