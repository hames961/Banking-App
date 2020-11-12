import React from 'react';
import logo from './download.png';

import './App.css';

class App extends React.Component {           //just copy directly
  constructor(props) {
      super(props);
      this.state = { userdata: [],
        accountdata: [],
        transactiondata: [] };
      }
      fetchuserData(){
        fetch("http://localhost:8000/user/all")           //type html of local host blah blah blah
        .then((r) => r.json())
        .then(result => {
          //console.log("user Data", result);
          this.setState({ userdata: result});
        })
      }
  
      fetchAccountData(){
        fetch("http://localhost:8000/account/all")
        .then((r) => r.json())
      
        .then(result => {
          //console.log("account Data", result);
          this.setState({ accountdata: result});
        })
      }
  
      fetchTransactionData(){
        fetch('http://localhost:8000/transaction/all')
        .then((r) => r.json())
        .then(result => {
          //console.log("transaction Data", result);
          this.setState({ transactiondata: result});
        })
      }
 
 

  componentDidMount() {  //when the component starts running
            this.fetchuserData();  
            this.fetchTransactionData();
            this.fetchAccountData();          //will execute the callAPIserver() method after the component mounts. 
      //console.log(this.serverResObjArr);

  }
  /* Replace the table with paragraph below if you need paragraph
    <p className="App-intro">{JSON.stringify(this.state.data)}</p>
  */

  render() {
      return (
          <div className="App">
              <header className="App-header" >
                  <img src={logo} className="App-logo" alt="logo" />
                  <h1 className="App-title">Bridgewater Associates(James and Ramesh)
                  
                  </h1>
              </header>


              <table className="paleBlueRows">
           <thead>
             <td> Name</td>
             <td> Mobile</td>
             <td>Password</td>
             <td>ICnumber</td>
           </thead>
                <tbody>
                    {(this.state.userdata).map( (item) => {    //state data means every data from server
                    return (
                      <tr key={item.id}>         
                            <td> {item.Name} </td>
                            <td> {item.mobile} </td>
                            <td> {item.password}  </td>
                            <td> {item.icnumber} </td>
                      </tr>
                      )}
                    )}
                    </tbody>
                </table>

              <table className="paleBlueRows">
                <thead>

                <td>Account_number</td>
                <td>Account_type</td>
                <td>Balance</td>
                <td>Max_limit</td>
                <td>Date_created</td>
                <td>User_id</td>
                </thead>
                <tbody>
                    {(this.state.accountdata).map( (item) => {    //state data means every data from server
                      return (
      
                      <tr key={item.id}>         
                            <td> {item.account_number} </td>
                            <td> {item.account_type} </td>
                            <td> {item.balance}  </td>
                            <td> {item.max_limit} </td>
                            <td> {item.date_created} </td>
                            <td> {item.userid} </td>
                      </tr>
                      )}
                    )}
                    </tbody>
                </table>

                <table className="paleBlueRows">
                <thead>
                 <td>Transactionid</td>
                 <td>Transaction_type</td>
                 <td>Account_number</td>
                 <td>Amount</td>
                 <td>Data Created</td>
            </thead> 
                <tbody>
                    {(this.state.transactiondata).map( (item) => {    //state data means every data from server
                    return (
                      <tr key={item.id}>         
                            <td> {item.transactionid} </td>
                            <td> {item.transaction_type}  </td>
                            <td> {item.account_number}  </td>
                            <td> {item.amount}  </td>
                            <td> {item.datacreated}  </td>
                      </tr>
                      )}
                    )}
                    </tbody>
                </table>

                
          </div>
      );
  }
}




export default App;
