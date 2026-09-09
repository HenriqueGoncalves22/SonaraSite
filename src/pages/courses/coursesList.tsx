import { useState } from "react"
import { courses } from "./data/course";
import { useNavigate } from "react-router-dom";
import styles from "./coursesListStyle.module.css";

function CoursesList() {

  const navigate = useNavigate();
  return (
    <>
      <section id={styles.courses}>
        <h2>Cursos</h2>
        <div id={styles.cardsGroup}>
          {courses.map((course) => ( 
            <div className={styles.card} 
             key={course.id} onClick={() => navigate(`/cursos/${course.slug}`)}
             style={{backgroundImage: `url(${course.image})`}}>
              <h4>{course.name}</h4>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default CoursesList;