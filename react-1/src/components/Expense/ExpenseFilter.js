import React from "react";

const ExpenseFilter = (props) => {

    const dropDownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    }

    return (
        <div className="d-flex justify-content-between align-items-center mb-4">
            <label className="col"><h6>Choose a year:</h6></label>
            <select value={props.selected} className="form-select col" onChange={dropDownChangeHandler}>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
            </select>
        </div>
    )
}

export default ExpenseFilter