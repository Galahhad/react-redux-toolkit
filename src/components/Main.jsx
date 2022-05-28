import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, down, clear, random } from '../actions/actions';

const Main = () => {

    const value = useSelector((state) => state.value);
    const dispatch = useDispatch();

    const handleAdd = () => {
        dispatch(add())
    }

    const handleDown = () => {
        if (value > 0) {
        dispatch(down())
        }
    }

    const handleClear = () => {
        dispatch(clear())
    }

    const handleRandom = () => {
        dispatch(random(Math.round(Math.random() * 1000)))
    }

    return (
        <div className='counter_wrap'>
            <h1>{value}</h1>
            <div className='buttons'>
                <button onClick={handleAdd}>Add</button>
                <button onClick={handleDown}>Down</button>
                <button onClick={handleClear}>Clear</button>
                <button onClick={handleRandom}>Random</button>
            </div>
        </div>
    );
};

export default Main;