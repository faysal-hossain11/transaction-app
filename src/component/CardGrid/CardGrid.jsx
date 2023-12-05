import { useDispatch, useSelector } from "react-redux";
import SingleCard from "../SingleCard/SingleCard";
import { useEffect } from "react";
import { fetchTransaction } from "../../feature/Transactions/TransactionSlice";


const CardGrid = () => {
const {transactions, isLoding, isError} = useSelector((state) => state.transaction);
const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTransaction());
    }, [dispatch]);


    // deside what to render
    let content = null;
    if(isLoding) content = <h2>Loding...</h2>;
    if(!isLoding && isError) content = <p>There was an error occured</p>;
    if(!isLoding && !isError && transactions.length > 0) content = transactions.map((transaction) => <SingleCard key={transaction.id} transaction={transaction} />);
    if(!isLoding && !isError && transactions.length === 0) content = <p>No transaction found</p>
    return (
        <div>
            {/* <SingleCard /> */}
            {content}
        </div>
    );
};

export default CardGrid;