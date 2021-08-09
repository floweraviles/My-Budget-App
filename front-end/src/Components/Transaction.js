import { Link } from "react-router-dom"; 


const Transaction = ({ transaction, index }) => {
    return (

        <tbody>
           <tr>
                <td>{transaction.date}</td>  
                <td><Link to={`/transactions/${index}`}>{transaction.name} </Link></td> 
                <td>${transaction.amount}</td>
           </tr>

        </tbody>
    );   
};

export default Transaction; 