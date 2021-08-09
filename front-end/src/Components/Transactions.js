import Transaction from "../Components/Transaction"
// import "./Transactions.css"
// import { useParams } from "react-router-dom";

const Transactions = ({transactions}) => {
    // const { index } = useParams()

    return (
        <div className="container mb-5 mt-3">
          <table className= "table table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col"> Date </th>
                        <th scope="col"> Name </th>
                        <th scope="col"> Amount </th>
                        
                    </tr>
                </thead>
                <tbody>
                        {transactions.map((transaction, index) =>{
                        return <Transaction key={index} transaction={transaction} index={index} />

                    })}
                    
                </tbody> 
            </table>
         </div>
    )
}

export default Transactions;