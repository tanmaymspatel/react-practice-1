import React, { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";


function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState("2020");
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
        console.log("expense.js", selectedYear);
    }

    const filteredExpenses = props.items.filter((expense) => {
        return expense?.date?.getFullYear().toString() === filteredYear
    })



    return (
        <div>
            <ExpenseFilter seleted={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpenseList items={filteredExpenses} />
        </div>
    )
}

export default Expenses;