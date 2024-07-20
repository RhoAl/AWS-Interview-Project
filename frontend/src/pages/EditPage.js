import React from 'react';
import { useHistory } from "react-router-dom";
import { useState } from 'react';

export const EditPage = ({ log }) => {
 
    const [date, setDate]         = useState(log.date);
    const [dist, setDist]         = useState(log.distance);
    const [time, setTime]         = useState(log.time);

    
    const history = useHistory();

    const editLog = async () => {
        const response = await fetch(`/logs/${log._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                date: date,
                distance: dist,
                time: time
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert("Successfully edited document!");
        } else {
            const errMessage = await response.json();
            alert(`Failed to update document. Status ${response.status}. ${errMessage.Error}`);
        }
        history.push("/");
    }

    return (
        <>
        <article>
            <h2>Edit a row in the table.</h2>
            <p>Alter any value.</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>What was the date, distance, and time of your jog?</legend>
                    <label for="date">Jog Date</label>
                    <input
                        type="date" required
                        value={date}
                        onChange={e => setDate(e.target.value)} 
                        id="date" />
                    
                    <label for="dist">Distance in miles</label>
                    <input
                        type="number" required
                        value={dist}
                        onChange={e => setDist(e.target.value)} 
                        id="dist" />

                    <label for="time">Length of jog in time &#40;hh:mm:ss&#41</label>
                    <input
                        type="text" required
                        value={time}
                        onChange={e => setTime(e.target.value)} 
                        id="time" />

                    <label for="submit">
                    <button
                        onClick={editLog}
                        id="submit"
                    >Save</button> updates to the collection</label>
                </fieldset>
                </form>
            </article>
        </>
    );
}
export default EditPage;