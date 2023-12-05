
const SingleCard = ({ transaction }) => {
    const { name, type, amount} = transaction;
    return (
        <div>
            <div>
                <h2>{name}</h2>
                <h3>$ {amount}</h3>
                <h3>{type}</h3>
                <div>
                    <button>edit</button>
                    <button>delete</button>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;