import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTransaction, createTransaction } from "../../feature/Transactions/TransactionSlice";

const FormInput = () => {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [type, setType] = useState('');
    const [editMode, setEditMode] = useState(false);


    const dispatch = useDispatch();
    
    const {  isLoding, isError } = useSelector((state) => state.transaction);
    const {editing} = useSelector((state)=> state.transaction);
    //listen for edit mode active
    useEffect(() => {
    const {id, name, type, amount} = editing || {};
    if(id){
        setEditMode(true);
        setName(name);
        setType(type);
        setAmount(amount);
    }else{
        reset()
    }
    }, [editing]);
    const cancelEditMode = () => {
        reset();
        setEditMode(false);
    };

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
    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(changeTransaction({
            id: editing.id,
            data: {
                name: name,
                type: type,
                amount: amount,
            }
        }));
        setEditMode(false);
        reset();
    }
    return (
        <div className=" bg-slate-400 p-7 rounded-[10px] h-[330px]">
            <form onSubmit={editMode ? handleUpdate : handleTransaction}>
                <div className="mb-3">
                    <label htmlFor="" >Name</label>
                    <input type="text" 
                    placeholder='type your name'
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full py-2 px-2 rounded-md outline-none focus:outline-none"
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
                <div className="mb-3">
                    <label htmlFor="">Amount</label>
                    <input type="number"
                    placeholder="type your amount"
                    required
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full py-2 px-2 rounded-md outline-none focus:outline-none"
                    />
                </div>
                <button type="submit" className=" bg-blue-700 text-white py-2 px-3 w-full font-medium rounded-[10px] mb-2">{editMode? 'Update Transaction' : 'Add Transaction'}</button>
                {editMode && <button onClick={cancelEditMode} className=" bg-red-600 text-white py-2 px-3 w-full font-medium rounded-[10px] mb-2">cancel</button>}
                {!isLoding && isError && <p className=" text-red-400">there was an error occured</p>}
            </form>

        </div>
    );
};

export default FormInput;