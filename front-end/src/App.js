import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {apiURL} from "./util/apiURL";
import axios from 'axios';
import NavBar from './Components/NarBar';
import NewTransaction from './Components/NewTransaction';
import Edit from './Pages/Edit';
import TransactionDetails from './Components/TransactionDetails';
import Index from './Pages/Index';
import Home from './Pages/Home';

// import Transactions from './Components/Transactions'; 

const API = apiURL();
function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = async (newTransaction) => {
    let res;
    try {
      res = await axios.post(`${API}/transactions`, newTransaction);
      setTransactions((prevTransactions) => [...prevTransactions, res.data]);
    } catch (error) {
      console.log(error);
    }
  };

  const updateTransaction = async (updatedTransactions, index) => {
    try {
      await axios.put(`${API}/transactions/${index}`, updatedTransactions);
      const NewTransactions = [...transactions];
      NewTransactions[index] = updatedTransactions;
      setTransactions(NewTransactions);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteTransaction = async (index) => {
    try {
      await axios.delete(`${API}/transactions/${index}`)
      const prevState = [...transactions]
      prevState.splice(index, 1)
    } catch (error) {
      console.log(error)
    }
  };

  const fetchTransactions = async () => {
    let res; 
    try {
      res = await axios.get(`${API}/transactions`)
      setTransactions(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);


  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
        <Route exact path="/">
            <Home />
        </Route>
          <Route exact path={"/transactions"}>
            <Index transactions={transactions} />
          </Route>
          <Route exact path={"/transactions/new"}>
            <NewTransaction addTransaction={addTransaction} />
          </Route>
          <Route exact path={"/transactions/:index"}>
            <TransactionDetails deleteTransaction={deleteTransaction} />
          </Route>
          <Route exact path={"/transactions/:index/edit"}>
            <Edit updateTransaction={updateTransaction}> </Edit>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
