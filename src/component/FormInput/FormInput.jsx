import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTransaction } from "../../feature/Transactions/TransactionSlice";
import Header from "../header/Header";

// const {  isLoding, isError } = useSelector((state) => state.transaction);
const FormInput = () => {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [type, setType] = useState('');
    const dispatch = useDispatch();

    const reset = () => {
        setName('');
        setAmount('');
        setType('');
    };
    const handleTransaction = (e) => {
        e.preventDefault();
        dispatch(createTransaction({
            name,
            type,
            amount: Number(amount),
        }));
        reset();
    }
    return (
        <div>
            <form onSubmit={handleTransaction}>
                <div>
                    <label htmlFor="">Name</label>
                    <input type="text" 
                    placeholder='type your name'
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>
               <div>
                    <label className="container">
                        Income
                        <input 
                            type="radio" 
                            name="radio" 
                            value="income"
                            checked={type === "income"}
                            onChange={(e) => setType("income")} 
                        />
                        <span className="checkmark"></span>
                    </label>
                    <label className="container">
                        Expense
                        <input 
                            type="radio" 
                            name="radio"
                            required
                            value="expense"
                            checked={type === "expense"}
                            onChange={(e) => setType("expense")}
                        
                        />
                        <span className="checkmark"></span>
                    </label>
                </div>
                <div>
                    <label htmlFor="">Amount</label>
                    <input type="number"
                    placeholder="type your amount"
                    required
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    />
                </div>
                <button type="submit" className=" bg-slate-400">Add Transaction</button>
                {/* {!isLoding && isError && <p className=" text-red-400">there was an error occured</p>} */}
            </form>

        </div>
    );
};

export default FormInput;