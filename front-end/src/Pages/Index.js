import Transactions from "../Components/Transactions";



const Index = ({transactions}) =>{
    let sum =0 
    transactions.forEach((transaction) => {
        sum += Number(transaction.amount)
    })

    return (
        <div>
            <h1>Account Balance: ${Number(sum)}</h1>
            <br />
            <Transactions transactions={transactions} />
        </div>
    )
}

export default Index;