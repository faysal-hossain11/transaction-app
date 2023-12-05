import axios from "axios"

export const getTransaction = async () => {
    const res = await axios.get("http://localhost:3000/transaction");
    return res.data;
};

export const addTransaction = async (data) => {
    const res = await axios.post("http://localhost:3000/transaction", data);
    return res.data;
};

// export const editTransaction = async (id, data) => {
//     const res = await axios.put(`http://localhost:3000/transaction/${id}`, data);
//     return res.data;
// };

// export const deleteTransaction = async (id) => {
//     const res = await axios.delete(`http://localhost:3000/transaction/${id}`);
//     return res.data;
// };