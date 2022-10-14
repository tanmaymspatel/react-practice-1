import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false);


    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        props.onAddExpense(expenseData)
        setIsEditing(false);
    }

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const EndEditingHandler = () => {
        setIsEditing(false);
    }

    return (
        <div>
            <div className="my-5">
                {!isEditing && <button className="btn btn-primary" onClick={startEditingHandler}>Add New Expense</button>}
            </div>
            <div className="bg-white mb-5 rounded-3">
                {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelClick={EndEditingHandler} />}
            </div>
        </div>
    )
};

export default NewExpense