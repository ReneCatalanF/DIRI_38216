import { ChangeEvent, useState } from 'react';
import './App.css'
import EnrolmentForm from './components/EnrolmentForm/EnrolmentForm'
import EnrolList from './components/EnrolList/EnrolList';
import { Student } from './entity/Student';



function App() {
  //Se genera estado del programa selaccionado, por default será siempre Grado
  const [program, setProgram] = useState("UG");

  //Se genera el estado para enrolments que contendrá el número matriculas en cada programa
  //const [enrolments, setEnrolments] = useState(0);

  //El estado de estudiante
  const [student, setStudent] = useState<Student>()

  //El estado para el estudiante a editar
  const [editingStudent, setEditingStudent] = useState<Student>();

  //Ahora se generan los estados para contar las matriculas correspondiente a Grado o Postgrado
  const [ugEnrolments, setUGEnrolments] = useState(0);
  const [pgEnrolments, setPGEnrolments] = useState(0);

  //Se crea el manejador del programa
  const handleChangeProgram =
    (event: ChangeEvent<HTMLLIElement>) => {
      setProgram(event.target.value.toString());
    };

  //Manejador para actualizar el estado de enrolments
  /*const handleChangeEnrolments = (updateEnrolments: number) => {
    setEnrolments(updateEnrolments);
  };*/
  const handleChangeEnrolments = (updateEnrolments: number) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    program === "UG" ? setUGEnrolments(updateEnrolments) : setPGEnrolments(updateEnrolments);
  };

  const selectedEnrolments = (): number => {
    return program == "UG" ? ugEnrolments : pgEnrolments;
  };

  const handleStudentRemoved = (student: Student): void => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    student.program === "UG" ? setUGEnrolments(ugEnrolments - 1) :
      setPGEnrolments(pgEnrolments - 1);
  };


  return (
    <div className="App">
      <div className="programs">
        <ul className="ulEnrol">
          <li className="parentLabels"
            onChange={handleChangeProgram}>
            <input
              type="radio" value="UG"
              name="programGroup"
              defaultChecked
            />
            Grado
            <input
              type="radio"
              className="radioSel" value="PG"
              name="programGroup"
            />
            Postgrado
          </li>
        </ul>
        <div>Matriculaciones actuales {program.toString()}: {selectedEnrolments()}</div>
      </div>
      {/*
      Agregamos el componente de formulario
      Y agregar el componente de la Lista, entregandole el estado del estudiante para que escuche por cambios
      */}
      <EnrolmentForm chosenProgram={program}
        onChangeEnrolments={handleChangeEnrolments}
        currentEnrolments={selectedEnrolments()}
        onStudentChanged={setStudent}
        editingStudent={editingStudent} />
      <EnrolList student={student} onStudentRemoved={handleStudentRemoved}
      onStudentEditing={setEditingStudent} />
    </div>
  )
}

export default App