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
        <div className="d-flex flex-md-column align-items-md-center">
            <h2 className="d-flex align-items-center justify-content-center">Name: {transaction.name}</h2>
            <h4 className="d-flex align-items-center justify-content-center">Date: {transaction.date}</h4>
            <h4 className="d-flex align-items-center justify-content-center">Amount: ${transaction.amount}</h4>
            <h4 className="d-flex align-items-center justify-content-center">From: {transaction.from} </h4>
            <div className="d-flex align-items-center justify-content-center">
            <Link to={`/transactions`}>
                <button type="button" className="btn btn-primary text-dark" >Back</button>
            </Link>
            <Link to={`/transactions/${index}/edit`}>
                <button type="button" className="btn btn-warning text-dark">Edit</button>
            </Link>
            <button type="button" onClick={handleDelete} className="btn btn-danger text-dark">Delete</button>

            </div>
        </div>
    );

};

export default TransactionDetails;