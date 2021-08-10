import EditTransaction from "../Components/EditTransaction";

function Edit ({ updateTransaction }) {
    return (
        <div >
            
            <EditTransaction updateTransaction={updateTransaction} />
        </div>
    );
}

export default Edit;