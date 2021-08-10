import Transactions from "../Components/Transactions";



const Index = ({transactions}) =>{
    let sum =0 
    transactions.forEach((transaction) => {
        sum += Number(transaction.amount)
    })

    return (
        <div>
            <h2 className="d-flex justify-content-center">Account Balance: ${Number(sum)}</h2>
            <br />
            <Transactions transactions={transactions} />
        </div>
    )
}

export default Index;