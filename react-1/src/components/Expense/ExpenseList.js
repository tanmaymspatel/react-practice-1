import ExpenseItem from "./expenseItem";

const ExpenseList = props => {

    // Conditional Content
    if (props.items.length === 0) {
        return <h2>No Records Found!</h2>;
    }

    return (
        <ul>
            {props.items.map((item) => {
                return <ExpenseItem title={item.title} date={item.date} key={item.id} />
            })}
        </ul>
    )


}

export default ExpenseList