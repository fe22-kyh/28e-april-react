import { useState, useEffect } from 'react';
import userService from './../../service/userService.js';
import UserFieldComponent from './UserFieldComponent.js';
 
export default function BillingComponent() {
  const [debitCard, setDebitCard] = useState('');
  const [address, setAddress] = useState('');
  const [balance, setBalance] = useState(0);

  /* Setup function - used when rendering page */
  useEffect(() => {
    const fetchBillingData = async () => {
      let [balance, address, debitCard] = await Promise.all([
        userService.getBalance(),
        userService.getAddress(),
        userService.getDebitCard()
      ]);

      setBalance(balance);
      setAddress(address);
      setDebitCard(debitCard);
    }

    fetchBillingData();
  }, []); /* empty array --> useEffect called only on initialization */


  return (
    <>
      <h2>Billing profile</h2>
      <UserFieldComponent fieldName={"Debit card"} fieldValue={debitCard}/>
      <UserFieldComponent fieldName={"Address"} fieldValue={address}/>
      <p>Balance: {balance}</p>

      <button>Add balance</button>
    </>
  )
}