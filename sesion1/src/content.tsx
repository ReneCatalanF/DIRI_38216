import React from 'react';
import ActivityItem from './activityitem'

const Content_1: React.FC = () => {
    return (
        <div className="content">
            <div className="line"></div>
            
            <ActivityItem nombree="Francisca" imagenn="francisca"
            tiempo="Hace una hora" tarea="Fui a comer con amigos"></ActivityItem>

            <ActivityItem nombree="Paco" imagenn="paco"
            tiempo="10:00 am" tarea="Leí un artículo sobre tecnología"></ActivityItem>

            <ActivityItem nombree="Quica" imagenn="quica"
            tiempo="10:00 am" tarea="Escribí notas sobre un proyecto importante"></ActivityItem>

            <ActivityItem nombree="Curro" imagenn="curro"
            tiempo="2:21 pm" tarea="Preparé la presentación para la reunión de mañana"></ActivityItem>
          </div>
    )
}

export default Content_1