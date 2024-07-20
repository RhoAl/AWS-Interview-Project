import React from 'react';
import { MdDeleteForever, MdEdit } from 'react-icons/md';

function LogRow({ log, onEdit, onDelete }) {
    return (
        <tr>
            <td>{log.date}</td>
            <td>{log.distance}</td>
            <td>{log.time}</td>
            <td><MdDeleteForever onClick={() => onDelete(log._id)} /></td>
            <td><MdEdit onClick={() => onEdit(log)} /></td>
        </tr>
    );
}

//Original long row function
// function LogRow({ log, onEdit, onDelete }) {
//     return (
//         <tr>
//             <td>{log.name}</td>
//             <td>{log.reps}</td>
//             <td>{log.weight}</td>
//             <td>{log.unit}</td>
//             <td>{log.date}</td>
//             <td><MdDeleteForever onClick={() => onDelete(log._id)} /></td>
//             <td><MdEdit onClick={() => onEdit(log)} /></td>
//         </tr>
//     );
// }

export default LogRow;