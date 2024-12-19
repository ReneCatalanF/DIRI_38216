import React from 'react';

const ActivityItem: React.FC = (props) => {
    return (
        <div className="item">
              <div className="avatar">
                <img
                  alt={props.nombree}
                  src={`/images/${props.imagenn}.jpg`}
                />
              </div>
              <span className="time">{props.tiempo}</span>
              <p>{props.tarea}</p>
            </div>
    )
}

export default ActivityItem