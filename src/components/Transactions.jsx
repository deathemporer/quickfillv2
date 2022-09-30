import Table from "react-bootstrap/Table";
import "./Transactions.css";
import NavBar from "./NavBar";

const transactionData = {
  transactions: [
    { id: 1, amount: 200, time: "16:30", paymentTo: "HSR", toFrom: true },
    { id: 2, amount: 100, time: "17:30", paymentTo: "Sarjapur", toFrom: true },
    { id: 3, amount: 250, time: "16:30", paymentTo: "HSR", toFrom: false },
    { id: 4, amount: 20, time: "16:30", paymentTo: "Whitefield", toFrom: true },
    { id: 5, amount: 207, time: "16:30", paymentTo: "HSR", toFrom: false },
    { id: 6, amount: 240, time: "16:30", paymentTo: "HSR", toFrom: true },
  ],
};

function Transactions() {
  return (
    <>
    <NavBar/>
      <Table variant="dark" striped bordered hover style={{textAlign:"center", width:"70%", marginLeft:"15%", marginRight:"15%", marginTop:"50px"}}>
        <thead>
          <tr>
            <th colSpan={4} style={{ textAlign: "center" }}>
              <h3>Your Transactions</h3>
            </th>
          </tr>
        </thead>
        <thead>
          <tr>
            <th>#</th>
            <th>Time</th>
            <th>Payment To</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactionData.transactions.map((transaction) => {
            if(transaction.toFrom){
                return (<tr>
                    <td>{transaction.id}</td>
                    <td>{transaction.time}</td>
                    <td>{transaction.paymentTo}</td>
                    <td id="amountTrue">-{transaction.amount}</td>
                  </tr>)
            }
            else{
                return (<tr>
                    <td>{transaction.id}</td>
                    <td>{transaction.time}</td>
                    <td>-</td>
                    <td id="amountFalse">+{transaction.amount}</td>
                  </tr>)
            }
            
          })}
        </tbody>
      </Table>
    </>
  );
}

export default Transactions;
