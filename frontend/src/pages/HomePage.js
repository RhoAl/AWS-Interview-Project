import React from 'react';
import LogTable from '../components/LogTable';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function HomePage({ setLog }) {
    // Use the history for updating
    const history = useHistory();

    // Use state to bring in the data
    const [logs, setLogs] = useState([]);

    // RETRIEVE the list of logs
    const loadLogs = async () => {
        const response = await fetch('/logs');
        const logs = await response.json();
        setLogs(logs);
    } 
    

    // UPDATE a log
    const onEditLog = async log => {
        setLog(log);
        history.push("/edit-log");
    }


    // DELETE a log  
    const onDeleteLog = async _id => {
        const response = await fetch(`/logs/${_id}`, { method: 'DELETE' });
        if (response.status === 204) {
            const getResponse = await fetch('/logs');
            const logs = await getResponse.json();
            setLogs(logs);
        } else {
            console.error(`Failed to delete log with _id = ${_id}, status code = ${response.status}`)
        }
    }

    // LOAD the logs
    useEffect(() => {
        loadLogs();
    }, []);

    // DISPLAY the logs
    return (
        <>
            <article>
                <h2>Jogging Table</h2>
                <p>Record your jogging details.</p>
                <LogTable
                    logs={logs} 
                    onEdit={onEditLog} 
                    onDelete={onDeleteLog} 
                />
            </article>
        </>
    );
}

export default HomePage;