import Boxc from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import { useEffect, useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "75%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  outline: "none",
  borderRadius: "10px",
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

  if (data) {
    console.log(data.shelve_1.items);
  }

  const handleClick = (input) => {
    if (input) {
      newArr.push(input);
      console.log(input);
      handleOpen();
    }
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
                  <span className="info">{data.status.available}</span>
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
                  <span className="info">{data.status.in_order}</span>
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
                  <span className="info">{data.status.in_use}</span>
                </div>
              </div>
            )}
          </div>
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Boxc sx={style}>
            {open && (
              <>
                <div className="shelfs">
                  <div className="shelfs-wrap">
                    <div className="shelf-first">
                      <span style={{ width: "5%" }}>Kệ 1</span>
                      <Grid container spacing={0}>
                        {data.shelve_1 &&
                          data.shelve_1.items.map((item, index) => {
                            return (
                              <>
                                {item.status === "available" ? (
                                  <Grid item xs={0.6}>
                                    <div className="shelf empty">
                                      {item.position}
                                    </div>
                                  </Grid>
                                ) : item.status === "Chưa" ? (
                                  <Grid item xs={0.6}>
                                    <div className="shelf no-empty">
                                      {item.position}
                                    </div>
                                  </Grid>
                                ) : (
                                  <Grid item xs={0.6}>
                                    <div className="shelf ordering">
                                      {item.position}
                                    </div>
                                  </Grid>
                                )}
                              </>
                            );
                          })}
                      </Grid>
                    </div>

                    <div className="shelf-first">
                      <span style={{ width: "5%" }}>Kệ 2</span>
                      <Grid container spacing={0}>
                        {data.shelve_2 &&
                          data.shelve_2.items.map((item, index) => {
                            return (
                              <>
                                {item.status === "available" ? (
                                  <Grid item xs={0.6}>
                                    <div className="shelf empty">
                                      {item.position}
                                    </div>
                                  </Grid>
                                ) : item.status === "Chưa" ? (
                                  <Grid item xs={0.6}>
                                    <div className="shelf no-empty">
                                      {item.position}
                                    </div>
                                  </Grid>
                                ) : (
                                  <Grid item xs={0.6}>
                                    <div className="shelf ordering">
                                      {item.position}
                                    </div>
                                  </Grid>
                                )}
                              </>
                            );
                          })}
                      </Grid>
                    </div>
                  </div>
                </div>
                {/* <button onClick={handleClose}>Cancel</button> */}
              </>
            )}
          </Boxc>
        </Modal>
      </Grid>
    </>
  );
}
export default Box;
