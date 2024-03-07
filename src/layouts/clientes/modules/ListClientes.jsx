import React from "react";
import PropTypes from "prop-types";
import DataTable from "examples/Tables/DataTable";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import MDButton from "components/MDButton";
import MDBox from "components/MDBox";

function ListClientes({ clients, openModal, openModalEdit, deleteClientes }) {
  return (
    <>
      <MDBox sx={{ display: "flex", justifyContent: "flex-end", mr: 3, mt: 2 }}>
        <MDButton onClick={openModal} variant="gradient" color="info">
          Crear
        </MDButton>
      </MDBox>
      <DataTable
        table={{
          columns: [
            { Header: "Nombre", accessor: "name", width: "25%" },
            { Header: "Correo Electrónico", accessor: "email", width: "30%" },
            { Header: "Fecha Creación", accessor: "fechaCreacion" },
            {
              Header: "Acciones",
              accessor: "actions",
            },
          ],
          rows: clients.map((cliente) => ({
            id: cliente._id,
            name: cliente.nombre,
            email: cliente.email,
            fechaCreacion: cliente.fechaCreacion,
            actions: (
              <>
                <EditIcon
                  sx={{
                    "&:hover": {
                      fontSize: "large",
                      cursor: "pointer",
                    },
                  }}
                  onClick={() => openModalEdit(cliente)}
                  color="primary"
                />
                <DeleteIcon
                  sx={{
                    "&:hover": {
                      fontSize: "large",
                      cursor: "pointer",
                    },
                    marginLeft: "10px",
                  }}
                  onClick={() => deleteClientes(cliente._id)}
                  color="error"
                />
              </>
            ),
          })),
        }}
      />
    </>
  );
}

ListClientes.propTypes = {
  clients: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      nombre: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      fechaCreacion: PropTypes.string.isRequired,
    })
  ).isRequired,
  openModal: PropTypes.func.isRequired,
  openModalEdit: PropTypes.func.isRequired,
  deleteClientes: PropTypes.func.isRequired,
};

export default ListClientes;
