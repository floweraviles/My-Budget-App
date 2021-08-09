import { useState, useEffect } from "react"
import { Link, useParams, useHistory} from "react-router-dom";
import axios from "axios"
import { apiURL} from "../util/apiURL"
const API = apiURL();

const TransactionDetails = (props) => {
    const { deleteTransaction } = props;
    const [transaction, setTransaction] = useState([]);
    let { index } = useParams();
    let history = useHistory();

    const fetchTransactions = async () => {
        try {
            const res = await axios.get(`${API}/transactions/${index}`)
            setTransaction(res.data)
        } catch (error) {
            console.log(error)
        }
    }
    
    useEffect(() => {
        fetchTransactions();
    }, [])

    const handleDelete = () => {
        deleteTransaction(index);
        history.pushState("/transactions")
    };

    return (
        <div>
            <h1> Transaction </h1>
            <p>{transaction.date}</p>
            <p>{transaction.name}</p>
            <p>{transaction.amount}</p>
            <p>{transaction.from} </p>
            <Link to={`/transactions`}>
                <button className="ms-2 btn btn-outline-light">Back</button>
            </Link>
            <Link to={`/transactions/${index}/edit`}>
                <button className="ms-2 btn btn-warning btn-outline-light text-dark">Edit</button>
            </Link>
            <button onClick={handleDelete} className="ms-2 btn btn-danger btn-outline-light text-dark">Delete</button>
        </div>
    );

};

export default TransactionDetails;