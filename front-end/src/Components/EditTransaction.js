import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link , useHistory } from "react-router-dom";
import { apiURL } from "../util/apiURL";
const API = apiURL();

const EditTransaction = ({updateTransaction}) => {
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
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault();
        await updateTransaction(transaction, index);
        history.push(`/transactions/${index}`);
    };

  

    return (
        <div>
            <h1>Edit Transaction</h1>
            <form onSubmit={handleSubmit}>
            <label htmlFor="date">Date</label>
                <input type="date" id="date" onChange={handleTextChange} value={transaction.date} />
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" onChange={handleTextChange} value={transaction.name} />
                <label htmlFor="amount">Amount</label>
                <input type="number" id="amount" onChange={handleTextChange} value={transaction.amount} />
                <label htmlFor="from">From</label>
                <input type="text" id="from" onChange={handleTextChange} value={transaction.from} />
                <br />
                <button type="submit">Submit</button>
            </form>
            <Link to={`/transaction/${index}`}>
                <button type="submit">Submit</button>
            </Link>
        </div>
    );
};

export default EditTransaction;