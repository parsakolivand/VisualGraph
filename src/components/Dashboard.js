
// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'; // useNavigate is used in v6+
import StudentIcon from '../components/Logos/teacherIcon.svg';
import CourseIcon from '../components/Logos/CoursesIcon.svg';
import UploadPage from './UploadPage';
import { Graphs, CourseSpecificGraphs } from './Graphs';






const Dashboard = () => {
  const [userRole, setUserRole] = useState('admin'); 
  const [selectedGraph, setSelectedGraph] = useState(null);
  const [totalStudents, setTotalStudents] = useState(345);
  const [totalCourses, setTotalCourses] = useState(765);
  const [showUploadPage, setShowUploadPage] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showCoursePopup, setShowCoursePopup] = useState(false);
const [selectedCourseGraph, setSelectedCourseGraph] = useState(null);
const [selectedGraphCourse, setSelectedGraphCourse] = useState('');


const handleCourseSelection = (event) => {
  setSelectedGraphCourse(event.target.value);
};





const courseGraphOptions = [
  'Grade Distribution for Math',
  'Grade Distribution for Science',
  'Grade Distribution for History',
  'Grade Distribution for Literature',

];


const handleCourseGraphSelection = (event) => {
  setSelectedCourseGraph(event.target.value);
};

  const showUploadHandler = () => {
    setShowUploadPage(true);
  };
  const navigate = useNavigate(); // useNavigate hook instead of useHistory
  const handleAdminDetailsClick = () => {
    // Navigate to the UploadPage
    navigate('/admin/upload'); // use navigate function instead of history.push
  };
  const handleCourseClick = (course) => {
    setSelectedCourse(course);
    setShowCoursePopup(true);
  };

  const graphOptions = [
    'Average Grade Over Time Line Graph Math',
    'Average Grade Over Time Line Graph Science',
    'Average Grade Over Time Line Graph History',
    'Average Grade Over Time Line Graph Literature',
    'Subject-wise Performance Bar Graph',
    'Student Attendance Pie Chart',
    'Class Rank',
    'SAT/ACT Score',
    'Demographic Performance',
    'Online vs. In-Person Performance',
    'Teacher Performance',
    'Performance by Gender'
  ];
  const graphDescriptions = {
    'Average Grade Over Time Line Graph Math': 'Line graph Tracks the change in average grades over semesters for Math',
    'Average Grade Over Time Line Graph Science': 'Line graph Tracks the change in average grades over semesters for Science',
    'Average Grade Over Time Line Graph History': 'Line graph Tracks the change in average grades over semesters for History',
    'Average Grade Over Time Line Graph Literature': 'Line graph Tracks the change in average grades over semesters for Literature',
    'Subject-wise Performance Bar Graph': 'Compares average student performance across different subjects.',
    'Student Attendance Pie Chart': 'Displays the proportion of attendance rates.',
    'Class Rank': 'Shows where students stand in percentile ranks within their class.',
    'SAT/ACT Score': 'Represents the distribution of standardized test scores.',
    'Demographic Performance': 'Illustrates the distribution of GPA scores among students ethnics.',
    'Online vs. In-Person Performance': 'Checks the number of the quizzes online or in person.',
    'Teacher Performance': 'Shows the performance of the teacher within every course.',
    'Performance by Gender': 'Shows the performance by gender.'
  };

  // 'teacher' for teacher's role
  // Dummy data for teachers and courses
  const teachers = ['Teacher 1', 'Teacher 2', 'Teacher 3','teacher 4 ','teacher 5 ','teacher 6 ','teacher 7','teacher 9']; // Replace with real data
  const courses = ['Course 1', 'Course 2', 'Course 3', 'Course 4', 'Course 5', 'Course 6', 'Course 7','Course 8']; // Replace with real data
  const teacherCourses = {
    'Teacher 1': ['Course A', 'Course B'],
    'Teacher 2': ['Course C', 'Course D'],
    'teacher 9': ['Course C', 'Course D'],
  
    // Add other teachers and their courses
  };
  const courseDetails = {
    'Course 1': {
      teachers: ['Teacher 1', 'Teacher 2'],
      students: ['Student 1', 'Student 2', 'Student 3']
    },
    'Course 4': {
      teachers: ['Teacher 1', 'Teacher 2'],
      students: ['Student 1', 'Student 2', 'Student 3']
    },
    // ... other courses
  };
  const closeCoursePopup = () => setShowCoursePopup(false);
  const CoursePopup = () => (
    <div className="popup">
      <h3>{selectedCourse}</h3>
      <h4>Teachers</h4>
      <ul>
        {courseDetails[selectedCourse]?.teachers.map(teacher => (
          <li key={teacher}>{teacher}</li>
        ))}
      </ul>
      <h4>Students</h4>
      <ul>
        {courseDetails[selectedCourse]?.students.map(student => (
          <li key={student}>{student}</li>
        ))}
      </ul>
      <button onClick={closeCoursePopup}>Close</button>
    </div>
  );
  const Popup = () => (
    <div className="popup">
      <h3>Courses by {selectedTeacher}</h3>
      <ul>
        {teacherCourses[selectedTeacher]?.map(course => (
          <li key={course}>{course}</li>
        ))}
      </ul>
      <button onClick={closePopup}>Close</button>
    </div>
  );

  const handleTeacherClick = (teacher) => {
    setSelectedTeacher(teacher);
    setShowPopup(true);
  };
  const closePopup = () => setShowPopup(false);

  const handleSectionClick = (section) => {
    console.log(`Clicked on ${section}`);
    // Here you would add the logic to navigate or open a modal, etc.
  };
  const handleGraphSelection = (event) => {
    console.log('Graph selection changed to:', event.target.value); // Log graph selection
    setSelectedGraph(event.target.value);
  };
  console.log('Selected Graph:', selectedGraph); // Log the currently selected graph


  return (
    <div className="dashboard">
      <header>
        {/* Header content */}
        <h1>Organization Name</h1>
        {userRole === 'admin' && (
          <nav>
            <NavLink to="/admin/data-explore">Data Explore</NavLink>
            <NavLink to="/admin/perspectives">Perspectives</NavLink>
            <NavLink to="/admin/upload" onClick={handleAdminDetailsClick}>Admin Details</NavLink>

          </nav>
        )}
        {userRole === 'teacher' && (
          <nav>
            <NavLink to="/teacher/data-explore">Data Explore</NavLink>
            {/* Teachers might have fewer or different nav links */}
          </nav>
        )}
      </header>
      
      <main>
      {showUploadPage ? (
          <UploadPage />
        ) : (
          <div className="content">
            {/* ... regular dashboard content */}
            {/* ... */}
          </div>
        )}

        {/* Possibly a button or trigger to set `showUploadPage` to true */}
        
        <div className="content">
            
        <div className="stats-container">
          {/* Total Students Section */}
          <div className="stat-box">
            <img src={StudentIcon} alt="Total Students" className="stat-icon" />
            <div className="stat-content">
              <h3 className="stat-title">Total Students</h3>
              <p className="stat-value">{totalStudents}</p>
            </div>
          </div>
          {/* Total Courses Section */}
          <div className="stat-box">
            <img src={CourseIcon} alt="Total Courses" className="stat-icon" />
            <div className="stat-content">
              <h3 className="stat-title">Total Courses</h3>
              <p className="stat-value">{totalCourses}</p>
            </div>
          </div>
        </div>
          <div className="section rectangle" onClick={() => handleSectionClick('teachers')}>
            <h2>Available Teachers</h2>
            <div className="scrollable-content">
            <ul>
              {teachers.map(teacher => (
                              <li key={teacher} onClick={() => handleTeacherClick(teacher)}>{teacher}</li>

              ))}
            </ul>
            </div>
          </div>
          <div className="section rectangle" onClick={() => handleSectionClick('courses')}>
            <h2>Available Courses</h2>
            <div className="scrollable-content">
            <ul>
              {courses.map(course => (
                        <li key={course} onClick={() => handleCourseClick(course)}>{course}</li>

                ))}
            </ul>
            </div>
          </div>
           {showPopup && <Popup />}
          {showCoursePopup && <CoursePopup />}


           <div className="section rectangle" onClick={() => handleSectionClick('choose-graph')}>
            <h2>Choose Graph</h2>
            <select onChange={handleGraphSelection} value={selectedGraph || ''}>
              <option value="">Select a graph...</option>
              {graphOptions.map((graphName) => (
            <option key={graphName} value={graphName}>{graphName}</option>
          ))}
            </select>
          </div>
          {selectedGraph && (
            <div className="section rectangle" onClick={() => handleSectionClick(selectedGraph)}>
              <h2>{selectedGraph}</h2>
              {/* Placeholder for graph content */}
              <div className="graph-content">Description : </div>
              <div className="graph-content">{graphDescriptions[selectedGraph]}</div>
            </div>
          )}
            {selectedGraph && (
            <div className="section rectangle" onClick={() => handleSectionClick(selectedGraph)}>
              
              <div className="graph-content">
                <Graphs selectedGraph={selectedGraph} />  
                
              </div>
            </div>
          )}

            <div className="section rectangle"style={{ marginBottom: '50px'  }}>
                                      <h2>Course Specific Graph</h2>
                                      <select onChange={handleCourseSelection} value={selectedGraphCourse || ''}>
                                        <option value="">Select a course...</option>
                                        {courses.map(course => (
                                          <option key={course} value={course}>{course}</option>
                                        ))}
                                      </select>
                                      <select onChange={handleCourseGraphSelection} value={selectedCourseGraph || ''}>
                                        <option value="">Select a graph...</option>
                                        {courseGraphOptions.map((graphName) => (
                                          <option key={graphName} value={graphName}>{graphName}</option>
                                        ))}
                                      </select>
                                      </div>
                                      
                                      {selectedCourseGraph && selectedGraphCourse && (
                                        <div className="section rectangle" style={{ }}>
                              <h2>Graph for {selectedGraphCourse}: {selectedCourseGraph}</h2>
                              <div className="graph-content">
                                <Graphs selectedCourse={selectedGraphCourse} selectedGraphType={selectedCourseGraph} />
                                <CourseSpecificGraphs selectedCourse={selectedGraphCourse} selectedGraphType={selectedCourseGraph} />

                              </div>
                            </div>
                                      )}
                                   
                             

        </div>
      </main>
    </div>
  );
};

export default Dashboard;
