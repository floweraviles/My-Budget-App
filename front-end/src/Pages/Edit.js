import EditTransaction from "../Components/EditTransaction";

function Edit ({ updateTransaction }) {
    return (
        <div >
            <h2>Edit</h2>
            <EditTransaction updateTransaction={updateTransaction} />
        </div>
    );
}

export default Edit;