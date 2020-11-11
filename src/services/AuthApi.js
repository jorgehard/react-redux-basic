import axios from "axios";

const connection = axios.create({
  baseURL: "http://localhost:3333",
  headers: {
    "Content-Type": "application/json",
  },
});

const implantations = {
  async loginUser(user) {
    try {
      const response = await connection.post(`/login`, user);
      if (response.status !== 200) {
        return {
          error: true,
          data: "",
        };
      }
      return {
        error: false,
        details: "Usuario atualizado com sucesso!",
        data: response.data,
      };
    } catch (err) {
      console.error(err);
      return {
        error: true,
        details: err.message,
      };
    }
  },
};

export { connection, implantations };
