// src/components/Dashboard.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import StudentIcon from '../components/Logos/teacherIcon.svg';
import CourseIcon from '../components/Logos/CoursesIcon.svg';
import Graphs from './Graphs'; // make sure the path is correct based on your file structure




const Dashboard = () => {
  const [userRole, setUserRole] = useState('admin'); 
  const [selectedGraph, setSelectedGraph] = useState(null);
  const [totalStudents, setTotalStudents] = useState(345);
  const [totalCourses, setTotalCourses] = useState(765);

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
  const teachers = ['Teacher 1', 'Teacher 2', 'Teacher 3','teacher 4 ','teacher 5 ','teacher 6 ','teacher 7']; // Replace with real data
  const courses = ['Course 1', 'Course 2', 'Course 3', 'Course 4', 'Course 5', 'Course 6', 'Course 7']; // Replace with real data

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
            <NavLink to="/admin/details">Admin Details</NavLink>
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
                <li key={teacher}>{teacher}</li>
              ))}
            </ul>
            </div>
          </div>
          <div className="section rectangle" onClick={() => handleSectionClick('courses')}>
            <h2>Available Courses</h2>
            <div className="scrollable-content">
            <ul>
              {courses.map(course => (
                <li key={course}>{course}</li>
              ))}
            </ul>
            </div>
          </div>
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
                             

        </div>
      </main>
    </div>
  );
};

export default Dashboard;
