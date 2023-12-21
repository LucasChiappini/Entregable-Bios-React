import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Stack,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const ModalPopUp = ({
  id,
  handleClose,
  add,
  title,
  labelOne,
  labelTwo,
  labelThree,
  labelFour,
  labelFive,
}) => {
  const [open, openchange] = useState(false);
  const [inputOne, setInputOne] = useState("");
  const [inputTwo, setInputTwo] = useState("");
  const [inputThree, setInputThree] = useState("");
  const [inputFour, setInputFour] = useState("");
  const [inputFive, setInputFive] = useState("");

  useEffect(() => {
    openchange(true);
  }, [open]);

  const handleEdit = () => {
    const newData = {
      id: id,
      inputOne: inputOne,
      inputTwo: inputTwo,
      inputThree: inputThree,
      inputFour: inputFour,
      inputFive: inputFive,
    };
    add(newData);
    handleClose();
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>
          {" "}
          {title}{" "}
          <IconButton onClick={handleClose} style={{ float: "right" }}>
            <CloseIcon color="primary"></CloseIcon>
          </IconButton>{" "}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>are you sure you want to edit? </DialogContentText>
          <Stack spacing={2} margin={2}>
            <TextField
              variant="outlined"
              label={labelOne}
              onChange={(e) => {
                setInputOne(e.target.value);
              }}
            ></TextField>
            <TextField
              variant="outlined"
              label={labelTwo}
              onChange={(e) => {
                setInputTwo(e.target.value);
              }}
            ></TextField>
            <TextField
              variant="outlined"
              label={labelThree}
              onChange={(e) => {
                setInputThree(e.target.value);
              }}
            ></TextField>
            <TextField
              variant="outlined"
              label={labelFour}
              onChange={(e) => {
                setInputFour(e.target.value);
              }}
            ></TextField>
            <TextField
              variant="outlined"
              label={labelFive}
              onChange={(e) => {
                setInputFive(e.target.value);
              }}
            ></TextField>
            <Button
              sx={{ bgcolor: "#FFC009" }}
              variant="contained"
              onClick={handleEdit}
            >
              Edit
            </Button>
          </Stack>
        </DialogContent>
      </Dialog>
    </div>
  );
};
ModalPopUp.propTypes = {
  id: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
  add: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  labelOne: PropTypes.string.isRequired,
  labelTwo: PropTypes.string.isRequired,
  labelThree: PropTypes.string.isRequired,
  labelFour: PropTypes.string.isRequired,
  labelFive: PropTypes.string.isRequired,
};

export default ModalPopUp;
