import axios from "axios";

const url = "http://localhost:3001/todos";

export const readTodos = async () => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const createTodo = async (todo) => {
  try {
    const { data } = await axios.post(url, todo);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteTodo = async (id) => {
  try {
    await axios.delete(`${url}/delete/${id}`);
  } catch (error) {
    console.log(error);
  }
};

export const updateTodo = async (id, newUpdatedTodo) => {
  try {
    await axios.patch(`${url}/update/${id}`, newUpdatedTodo);
  } catch (error) {
    console.log(error);
  }
};
