import React from "react";


export const TodoCompletedForm = ({task, toggleUncomplete }) => {
    return (
        <div className="Todo">
            <p>
                <input type="checkbox" defaultChecked={true} onClick={() => toggleUncomplete(task.id)} style={{ marginRight: '10px' }} />
                {task.task}
            </p>
        </div>
    );
};