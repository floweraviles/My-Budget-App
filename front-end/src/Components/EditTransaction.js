import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { apiURL } from "../util/apiURL";
const API = apiURL();

const EditTransaction = ({ updateTransaction }) => {
  let { index } = useParams();
  const [transaction, setTransaction] = useState({
    date: "",
    name: "",
    amount: "",
    from: "",
  });

  const history = useHistory();

  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  const fetchTransactions = async () => {
    try {
      const res = await axios.get(`${API}/transactions/${index}`);
      setTransaction(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await updateTransaction(transaction, index);
    history.push(`/transactions/${index}`);
  };

  return (
    <div>
      <h1>Edit Transaction</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form group col-md-6">
            <label htmlFor="date">Date:</label>
            <input
              className="form-control"
              type="date"
              id="date"
              onChange={handleTextChange}
              value={transaction.date}
            />
          </div>
          <div className="form group col-md-6">
            <label htmlFor="name">Name:</label>
            <input
              className="form-control"
              type="text"
              id="name"
              onChange={handleTextChange}
              value={transaction.name}
            />
          </div>
          <div className="form group col-md-6">
            <label htmlFor="amount">Amount:</label>
            <input
              className="form-control"
              type="number"
              id="amount"
              onChange={handleTextChange}
              value={transaction.amount}
            />
          </div>
          <div className="form group col-md-6">
            <label htmlFor="from">From:</label>
            <input
              className="form-control"
              type="text"
              id="from"
              onChange={handleTextChange}
              value={transaction.from}
            />
          </div>
        </div>
        <br />
        <button type="submit" className="btn btn-success text-dark">
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditTransaction;
