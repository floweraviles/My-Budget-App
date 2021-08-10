import { useState } from "react";
import { useHistory } from "react-router";

const NewTransaction = ({ addTransaction }) => {
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

  const handleSubmit = (event) => {
    event.preventDefault();
    addTransaction(transaction);
    history.push("/transactions");
  };

  // const { date, name, amount, from } = transaction

  return (
    <div>
      <h1>Add a new item</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="date" className="col-form-label-lg">
              Date:{" "}
            </label>
            <input
              className="form-control"
              type="date"
              id="date"
              value={transaction.date}
              onChange={handleTextChange}
            />
          </div>
          <br />
          <div className="form-group col-md-6">
            <label htmlFor="name">Name: </label>
            <input
              className ="form-control"
              type="text"
              id="name"
              value={transaction.name}
              onChange={handleTextChange}
            />
          </div>
          <br />
          <div className="form-group col-md-6">
            <label htmlFor="amount">Amount: </label>
            <input
              className = "form-control"
              type="number"
              id="amount"
              value={transaction.amount}
              onChange={handleTextChange}
            />
          </div>
          <br />
          <div className="form-group col-md-6">
            <label htmlFor="from">From: </label>
            <input
            className="form-control"
              type="text"
              id="from"
              value={transaction.from}
              onChange={handleTextChange}
            />
          </div>
        </div>
        <br></br>
        <button type="submit" className="btn btn-success text-dark">Create New Item</button>
      </form>
    </div>
  );
};

export default NewTransaction;
