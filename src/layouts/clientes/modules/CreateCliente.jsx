import React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import FormControl from "@mui/material/FormControl";
import { TextField, Box } from "@mui/material";
import MDTypography from "components/MDTypography";

const CreateCliente = ({ openModal, closeModal, setClienteForm, form, createCliente }) => {
  const style = {
    position: "absolute",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    alignItems: "center",
    gap: "15px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal open={openModal} aria-labelledby="modal-title" aria-describedby="modal-description">
      <Box sx={style}>
        <MDTypography variant="h6" color="info">
          Crear Cliente
        </MDTypography>
        <FormControl sx={{ display: "flex", gap: "10px" }}>
          <form onSubmit={(e) => createCliente(e)}>
            <TextField
              required
              id="outlined-required"
              label="Nombre"
              variant="outlined"
              value={form.nombre}
              onChange={(e) => {
                setClienteForm("nombre", e);
              }}
            />
            <TextField
              required
              type="email"
              id="outlined-required"
              label="Email"
              variant="outlined"
              value={form.email}
              onChange={(e) => {
                setClienteForm("email", e);
              }}
            />
            <Button sx={{ width: "50%" }} variant="contained" color="error" type="submit">
              Crear
            </Button>
            <Button sx={{ width: "50%" }} onClick={closeModal} variant="contained" color="error">
              Cerrar
            </Button>
          </form>
        </FormControl>
        <Box sx={{ display: "flex", gap: "10px" }}></Box>
      </Box>
    </Modal>
  );
};

CreateCliente.propTypes = {
  openModal: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  setClienteForm: PropTypes.func.isRequired,
  createCliente: PropTypes.func.isRequired,
  form: PropTypes.func.isRequired,
};

export default CreateCliente;
