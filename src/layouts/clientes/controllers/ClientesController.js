import React, { useEffect, useState } from "react";
import ListClientes from "../modules/ListClientes";
import { getClientes, createClientes, deleteClientes } from "../services/services";
import CreateCliente from "../modules/CreateCliente";
import EditCliente from "../modules/EditCLiente";
import { Alert } from "@mui/material";

function ClientesController() {
  const [clientes, setClientes] = useState([]);
  const [clienteSelect, setClienteSelect] = useState({
    nombre: "",
    email: "",
  });

  const [openCreate, setOpenCreate] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  const handleOpenCreate = () => setOpenCreate(true);
  const handleCloseCreate = () => setOpenCreate(false);

  const handleOpenEdit = (cliente) => {
    setClienteSelect(cliente);
    setOpenEdit(true);
  };
  const handleCloseEdit = () => setOpenEdit(false);

  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("success");
  const [formCliente, setForm] = useState({
    nombre: "sss",
    email: "",
  });

  const handleAlertClose = () => {
    setAlertMessage("");
  };

  const resetForm = () => {
    setForm({ nombre: "", email: "" });
  };

  const requestClientes = async () => {
    try {
      const result = await getClientes();
      if (result) {
        setClientes(result);
      } else {
        alert("Error al obtener la información de los clientes" + result.error);
      }
    } catch (error) {
      console.error("Error al obtener la información de los clientes", error);
      alert("Error al obtener la información de los clientes");
    }
  };

  const requestCreateCliente = async () => {
    try {
      const response = await createClientes(formCliente);
      if (response) {
        console.log("El cliente se ha creado");
        setAlertMessage("El cliente se ha creado exitosamente");
        setAlertType("success");
      } else {
        console.log("error al crear");
        setAlertMessage("Error al crear el cliente");
        setAlertType("error");
      }
    } catch (error) {
      console.log("erorr", error);
      setAlertMessage("Ocurrió un error al crear el cliente");
      setAlertType("error");
    }
    requestClientes();
    resetForm();
  };

  const requestDeleteCliente = async (id) => {
    try {
      const respuesta = await deleteClientes(id);
      if (respuesta) {
        setAlertMessage("El cliente se ha eliminado exitosamente");
        setAlertType("success");
      } else {
        console.log("error al eliminar");
        setAlertMessage("Error al eliminar el cliente");
        setAlertType("error");
      }
    } catch (err) {
      console.log(err);
      setAlertMessage("Ocurrió un error al eliminar el cliente");
      setAlertType("error");
    }
    requestClientes();
  };

  const setField = (field, e) => {
    setForm({ ...formCliente, [field]: e.target.value });
  };

  const setFieldEdit = (field, e) => {
    setClienteSelect({ ...formClienteSelect, [field]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    requestCreateCliente();
    setOpenCreate(false);
  };

  useEffect(() => {
    requestClientes();
  }, []);

  return (
    <>
      {alertMessage && (
        <Alert severity={alertType} onClose={handleAlertClose}>
          {alertMessage}
        </Alert>
      )}
      <ListClientes
        clients={clientes}
        openModal={handleOpenCreate}
        openModalEdit={handleOpenEdit}
        deleteClientes={requestDeleteCliente}
      ></ListClientes>

      <CreateCliente
        openModal={openCreate}
        closeModal={handleCloseCreate}
        setClienteForm={setField}
        form={formCliente}
        createCliente={handleSubmit}
      ></CreateCliente>

      <EditCliente
        openModal={openEdit}
        closeModal={handleCloseEdit}
        cliente={clienteSelect}
        setClienteSelect={setFieldEdit}
      ></EditCliente>
    </>
  );
}

export default ClientesController;
