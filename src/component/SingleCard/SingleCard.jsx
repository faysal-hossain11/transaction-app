import { useDispatch } from "react-redux";
import { editActive, removeTransaction } from "../../feature/Transactions/TransactionSlice";

const SingleCard = ({ transaction }) => {
    const { name, type, amount, id} = transaction;
    const dispatch = useDispatch();
    
    const handleEdit = () => {
        dispatch(editActive(transaction))
    };
    const handleDelete = () => {
        dispatch(removeTransaction(id))
    }
    return (
        <div>
            <div className="p-3 rounded-[10px] bg-slate-300 shadow-lg shadow-blue-300 mb-5">
                <div className="flex justify-between">
                    <div className="mb-3">
                        <h2>{name}</h2>
                        <h3>{type}</h3>
                    </div>
                    <h3 className="text-[18px] font-medium">$ {amount}</h3>
                </div>
                <div className="flex gap-3">
                    <button onClick={handleEdit} className=" bg-slate-800 py-1 px-5 rounded-[10px] text-[18px] text-white">edit</button>
                    <button onClick={handleDelete} className=" bg-slate-800 py-1 px-5 rounded-[10px] text-[18px] text-white">delete</button>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;