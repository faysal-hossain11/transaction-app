import { useSelector } from "react-redux";


const TopHeader = () => {
    const {transactions} = useSelector(state => state.transaction);

    const calculateIncome = (transactions) => {
        let income = 0;
        transactions.forEach(transaction => {
            const {type, amount} = transaction;
            if(type === "income"){
                income += amount;
            }else{
                income -= amount;
            }
        });
        return income;
    }
    return (
        <div className=" bg-blue-700 text-white py-5 px-4 rounded-[10px] mb-5">
            <h1 className=" text-3xl font-bold">
                <span>$</span>{" "}
                {transactions?.length > 0 ? (<span>{calculateIncome(transactions)}</span>) : 0}
            </h1>
        </div>
    );
};

export default TopHeader;