import { useDispatch } from "react-redux";
import { editActive } from "../../feature/Transactions/TransactionSlice";

const SingleCard = ({ transaction }) => {
    const { name, type, amount} = transaction;
    const dispatch = useDispatch();
    
    const handleEdit = () => {
        dispatch(editActive(transaction))
    }
    return (
        <div>
            <div>
                <h2>{name}</h2>
                <h3>$ {amount}</h3>
                <h3>{type}</h3>
                <div>
                    <button onClick={handleEdit}>edit</button>
                    <button>delete</button>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;