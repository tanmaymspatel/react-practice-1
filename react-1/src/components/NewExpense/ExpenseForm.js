import React, { useState } from "react";

const ExpenseForm = (props) => {

    const [enteredTitle, SetEnteredTitle] = useState("");
    const [enteredDate, SetEnteredDate] = useState("");


    const titleChangeHandler = event => {
        SetEnteredTitle(event.target.value);
    }

    const dateChangeHandler = event => {
        SetEnteredDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData);

        SetEnteredTitle('');
        SetEnteredDate('');
    }


    return (
        <form className="p-4" onSubmit={submitHandler}>
            <div className="row justify-content-between">
                <div className="col-6">
                    <input type="text" value={enteredTitle} className="form-control" placeholder="Enter Title" onChange={titleChangeHandler} />
                </div>
                <div className="col-6">
                    <input type="date" value={enteredDate} className="form-control" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="d-flex mt-4 justify-content-end">
                <button type="button" className="btn btn-danger" onClick={props.onCancelClick}>Cancel</button>
                <button type="submit" className="ms-3 btn btn-primary ">Submit</button>
            </div>
        </form>
    )
}


export default ExpenseForm;