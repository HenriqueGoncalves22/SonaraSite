import { useParams } from "react-router-dom";
import { courses } from "./data/course";
import styles from "./courseStyle.module.css";
import { teachers } from "./data/teacher";

function CoursePage() {

  const { slug } = useParams();
  const course = courses.find((course) => course.slug === slug);

  if (!course) {
    return <h1>Curso Não Encontrado!</h1>
  }

  const teacher = teachers.filter((teacher) => course.teacherId.includes(teacher.id));


  return (
    <section id={styles.course}>
      <h2>{course.name}</h2>
      <div id={styles.courseContent}>
        <img src={course.image} alt="" />
        <div id={styles.courseDescription}>
          <p>{course.description}</p>
        </div>
      </div>
      <div style={{ display: 'flex' }}>
        <table id={styles.courseTable}>
          <tbody>
            <tr><td><strong>Faixa Etária</strong></td><td>{course.classification}</td></tr>
            <tr><td><strong>Duração da Aula</strong></td><td>{course.duration}</td></tr>
            <tr><td><strong>Quantidade de Aulas</strong></td><td>{course.quantity}</td></tr>
            <tr><td><strong>Tipo de Aula</strong></td><td>{course.type}</td></tr>
          </tbody>
        </table>
        <div id={styles.teacherContent}>
          <h4>Professores</h4>
          <div id={styles.teacherGroup}>
            {teacher.map((teacher) =>
              <div key={teacher.id}>
                <img src={teacher.photo} alt="" />
                <h5>{teacher.name}</h5>
              </div>
            )}
          </div>
        </div>
      </div>

    </section>

  );
}

export default CoursePage;