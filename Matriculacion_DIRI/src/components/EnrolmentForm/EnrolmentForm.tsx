import React, { FormEvent, useRef, useState } from 'react'
import './EnrolmentForm.css'
import { Student } from '../../entity/Student';

interface EnrolmentFormProps {
    //Para recibir el prop del programa seleccionado y pintarlo en el título
    chosenProgram: string;
    //Para recbir por prop la cantidad de veces que se presionó registrar
    currentEnrolments: number;
    //Para actualizar el valor enrolment
    onChangeEnrolments: (updateEnrolments: number) => void;
    //Para recargar la lista de estudiantes
    onStudentChanged: (student: Student) => void;
}

function EnrolmentForm(props: EnrolmentFormProps) {
    //Referencia a elemento html
    const nameInputRef = useRef<HTMLInputElement>(null);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [welcomeMessage, setWelcomeMessage] = useState("");


    //Manejador del submit
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        //Modificamos el estado de mensaje con el nombre y el apellido del estudiante agregado
        setWelcomeMessage(`Bienvenido/a ${firstName} ${lastName}`);
        //Se apunta a la función para indicar que el enrolments a cambiado(le sumamos 1)
        props.onChangeEnrolments(props.currentEnrolments + 1);

        const student: Student = {
            firstName: firstName,
            lastName: lastName,
            program: props.chosenProgram
        };
        props.onStudentChanged(student);


        // Vaciamos el formulario una vez registrado el estudiante
        event.currentTarget.reset();
        //Hacemos focus en el elemento referenciado
        nameInputRef.current?.focus();
        //Evitamos que se recargue la página
        event.preventDefault();
    };
    return (
        <div>
            <form className="enrolForm" onSubmit={handleSubmit}>
                <h1>Datos del estudiante - {props.chosenProgram}</h1>
                <label>Nombre:</label>
                <input type="text" name="fname"
                    onBlur={(event) => setFirstName(event.target.value)}
                    ref={nameInputRef}
                />
                <label>Apellidos:</label>
                <input type="text" name="lname"
                    onBlur={(event) => setLastName(event.target.value)}
                />
                <input type="submit" value="Registrar" />
                <label id="studentMsg"
                    className="message">{welcomeMessage}</label>
            </form>
        </div>
    );
}
export default EnrolmentForm