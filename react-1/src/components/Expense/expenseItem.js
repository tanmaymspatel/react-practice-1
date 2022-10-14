import React, { useState } from 'react'

import './expenseItem.css'

function ExpenseItem(props) {

    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle("Updated!")
    }

    return (
        <li className='d-flex align-items-center justify-content-around my-2'>
            <h2 className='title'>
                {title}
            </h2>
            <h5 className='mb-0 me-3'>
                {props.date.toISOString()}
            </h5>
            <button className='btn btn-primary' onClick={clickHandler}>Change Title</button>
        </li>
    )
}

export default ExpenseItem;