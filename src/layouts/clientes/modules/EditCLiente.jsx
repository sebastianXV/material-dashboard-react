import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MDTypography from "components/MDTypography";
import Modal from "@mui/material/Modal";
import MDInput from "components/MDInput";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const EditCliente = ({
  openModal,
  closeModal,
  cliente: { nombre = "", email = "" },
  setClienteSelect,
}) => {
  return (
    <>
      <Modal
        open={openModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <MDTypography variant="h6" color="info">
            Editar Cliente
          </MDTypography>
          <MDInput type="text" label="Nombre" value={nombre} />
          <MDInput type="email" label="Email" value={email} />
          <Button onClick={closeModal} variant="contained" color="error">
            Cancelar
          </Button>
        </Box>
      </Modal>
    </>
  );
};

EditCliente.propTypes = {
  openModal: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  setClienteSelect: PropTypes.func.isRequired,
  cliente: PropTypes.shape({
    nombre: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default EditCliente;
