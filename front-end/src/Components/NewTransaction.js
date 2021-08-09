import { useState } from "react";
import { useHistory } from "react-router";



const NewTransaction = ({addTransaction}) => {
    const [transaction, setTransaction] = useState({
        date: "", 
        name: "",
        amount: "", 
        from: "",
    })

    const history = useHistory()

    const handleTextChange = (event) => {
        setTransaction({...transaction, [event.target.id]: event.target.value})
    }

    

    const handleSubmit = (event) => {
        event.preventDefault()
        addTransaction(transaction)
        history.push("/transactions")
    }

    // const { date, name, amount, from } = transaction

    return (
        <div className="container">
            <h1>Add a new item</h1>
            <form className="mb-3"onSubmit={handleSubmit}>
                <div className="form-group">
                <label htmlFor="date" className="col-form-label-lg">Date: </label>
                <input class="form-control" 
                type="date" id="date" 
                value={transaction.date} 
                onChange={handleTextChange}/>
                </div>
                <br />
                <div className="form-group">
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" 
                value={transaction.name} 
                onChange={handleTextChange} />
                </div>
                <br />
                <div className="form-group">
                <label htmlFor="amount">Amount: </label>
                <input type="number" id="amount" 
                value={transaction.amount} 
                onChange={handleTextChange} />
                </div>
                <br />
                <div>
                <label htmlFor="from">From: </label>
                <input type="text" id="from" 
                value={transaction.from} 
                onChange={handleTextChange} />
                </div>
                <br></br>
                <button type="submit">Create New Item</button>
            </form>
        </div>
    );
};

export default NewTransaction;