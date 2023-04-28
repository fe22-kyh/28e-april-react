import { useState, useEffect } from "react"
import userService from "../../service/userService.js";
import AccountComponent from "./AccountComponent.js";
import BillingComponent from "./BillingComponent.js";



export default function ProfileComponent() {
  const [balance, setBalance] = useState(0);



  return (
    <div>
      <AccountComponent />
      <BillingComponent />
    </div>
  )
}