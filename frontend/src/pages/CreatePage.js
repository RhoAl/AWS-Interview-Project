import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export const AddPage = () => {

    const [name, setName]         = useState('');
    const [reps, setReps]         = useState('');
    const [weight, setWeight]         = useState('');
    const [unit, setUnit]         = useState('');
    const [date, setDate]         = useState('');
    
    const history = useHistory();

    const addLog = async () => {
        const newLog = { name, reps, weight, unit, date };
        const response = await fetch('/logs', {
            method: 'post',
            body: JSON.stringify(newLog),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert("Successfully added the log!");
        } else {
            alert(`Failed to add log, status code = ${response.status}`);
        }
        history.push("/");
    };


    return (
        <>
        <article>
            <h2>Record Your Exercise</h2>
            <p>Add or edit the table.</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>What exercise are you adding?</legend>
                    <label for="name">Exercise name</label>
                    <input
                        type="text" required
                        placeholder="Name of the exercise"
                        value={name}
                        onChange={e => setName(e.target.value)} 
                        id="name" />
                    
                    <label for="reps">Number of reps</label>
                    <input
                        type="number" required
                        value={reps}
                        placeholder="Reps of the exercise"
                        onChange={e => setReps(e.target.value)} 
                        id="reps" />

                    <label for="weight">Weight of the weights used in exercise</label>
                    <input
                        type="number" required
                        value={weight}
                        placeholder="Weight of weights"
                        onChange={e => setWeight(e.target.value)} 
                        id="weight" />

                    <label for="unit">Unit of weight</label>
                    <input
                        type="text" required
                        placeholder="Unit of measurement for the weights"
                        value={unit}
                        onChange={e => setUnit(e.target.value)} 
                        id="unit" />
                    <label for="date">Date of the exercise</label>
                    <input
                        type="date" required
                        value={date}
                        placeholder="MM-DD-YY"
                        onChange={e => setDate(e.target.value)} 
                        id="date" />


                    <label for="submit">
                    <button
                        type="submit"
                        onClick={addLog}
                        id="submit"
                        
                    >Add</button> to the log</label>
                </fieldset>
                </form>
            </article>
        </>
    );
}

export default AddPage;