import React from 'react';
import LogRow from './LogRow';

function LogTable({ logs, onDelete, onEdit }) {
    return (
        <table id="logs">
            <caption>Record Your Workout Plan</caption>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Distance Ran &#40;Miles&#41;</th>
                    <th>Time Ran &#40;hh:mm:ss&#41;</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {logs.map((log, i) => 
                    <LogRow 
                        log={log} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}
            </tbody>
        </table>
    );
}

export default LogTable;
