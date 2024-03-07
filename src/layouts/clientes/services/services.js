export const createClientes = async (clientesData) => {
  try {
    const response = await fetch("http://localhost:4000/api/v1/cliente", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(clientesData),
    });
    return await response.json();
  } catch (error) {
    console.error("Error creando cliente:", error);
  }
};
export const getClientes = async () => {
  try {
    const response = await fetch("http://localhost:4000/api/v1/cliente");
    if (response.status === 200) {
      const data = await response.json();
      return data;
    } else {
      throw new Error(`Error al obtener clientes: ${response.status}`);
    }
  } catch (error) {
    console.error("Error al obtener clientes:", error);
  }
};

export const editClientes = async (id, clienteData) => {
  try {
    const response = await fetch(`http://localhost:4000/api/v1/cliente/${id}`, {
      method: "PUT",
    });
    if (!response.ok) {
      console.log("se actulizo el cliente");
    }
  } catch (error) {
    console.log("Error eliminando cliente", error);
  }
};

export const deleteClientes = async (id) => {
  try {
    const response = await fetch(`http://localhost:4000/api/v1/cliente/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      console.log("Error al eliminar el cliente:", response.status);
      return await response.json();
    } else {
      console.log("El cliente se ha eliminado exitosamente");
      return true;
    }
  } catch (error) {
    console.log("Error eliminando cliente", error);
  }
};
