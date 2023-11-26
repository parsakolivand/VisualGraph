// src/components/Graphs.js
import React from 'react';
import {Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,RadialBar, RadialBarChart,Cell, PieChart, Pie,BarChart, Bar,LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const COLORS = ['#000080','#FF8042','#0088FE','#00C49F', '#FFBB28', '#FF8042','#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];


// Dummy data for the Math grades over time
const dataMath = [
  { semester: 'Fall 2019', averageGrade: 70 },
  { semester: 'Spring 2019', averageGrade: 73 },
  { semester: 'Fall 2020', averageGrade: 75 },
  { semester: 'Spring 2020', averageGrade: 78 },
  { semester: 'Fall 2021', averageGrade: 80 },
  { semester: 'Spring 2021', averageGrade: 85 },
  { semester: 'Fall 2022', averageGrade: 85 },
  { semester: 'Spring 2022', averageGrade: 85 },
  { semester: 'Fall 2023', averageGrade: 85 },
  { semester: 'Spring 2023', averageGrade: 5 },


];
const dataScience = [
  { semester: 'Fall 2019', averageGrade: 70 },
  { semester: 'Spring 2019', averageGrade: 73 },
  { semester: 'Fall 2020', averageGrade: 75 },
  { semester: 'Spring 2020', averageGrade: 78 },
  { semester: 'Fall 2021', averageGrade: 80 },
  { semester: 'Spring 2021', averageGrade: 85 },
  { semester: 'Fall 2022', averageGrade: 85 },
  { semester: 'Spring 2022', averageGrade: 85 },
  { semester: 'Fall 2023', averageGrade: 85 },
  { semester: 'Spring 2023', averageGrade: 5 },
];
const dataHistory = [
  { semester: 'Fall 2019', averageGrade: 70 },
  { semester: 'Spring 2019', averageGrade: 73 },
  { semester: 'Fall 2020', averageGrade: 75 },
  { semester: 'Spring 2020', averageGrade: 78 },
  { semester: 'Fall 2021', averageGrade: 80 },
  { semester: 'Spring 2021', averageGrade: 85 },
  { semester: 'Fall 2022', averageGrade: 85 },
  { semester: 'Spring 2022', averageGrade: 85 },
  { semester: 'Fall 2023', averageGrade: 85 },
  { semester: 'Spring 2023', averageGrade: 15 },
];

const dataLiterature = [
  { semester: 'Fall 2019', averageGrade: 70 },
  { semester: 'Spring 2019', averageGrade: 73 },
  { semester: 'Fall 2020', averageGrade: 75 },
  { semester: 'Spring 2020', averageGrade: 78 },
  { semester: 'Fall 2021', averageGrade: 80 },
  { semester: 'Spring 2021', averageGrade: 85 },
  { semester: 'Fall 2022', averageGrade: 85 },
  { semester: 'Spring 2022', averageGrade: 85 },
  { semester: 'Fall 2023', averageGrade: 85 },
  { semester: 'Spring 2023', averageGrade: 85 },
];


const dataSubjectPerformance = [
  { subject: 'Math', averageGrade: 75 },
  { subject: 'Science', averageGrade: 70 },
  { subject: 'History', averageGrade: 80 },
  { subject: 'Literature', averageGrade: 78 },
  
  // ... add more subjects as needed
];

const dataStudentAttendance = [
  { name: 'Online', value: 100 },
  { name: 'In Person', value: 400 },

  // ... add more categories as needed
];
const dataClassRank = [
  { className: 'Class A', averageGPA: 3.8 },
  { className: 'Class B', averageGPA: 3.6 },
  { className: 'Class C', averageGPA: 3.4 },
  // ... other classes
];


const dataSATScores = [
  { scoreRange: '400-800', studentCount: 10 },
  { scoreRange: '800-1000', studentCount: 20 },
  { scoreRange: '1000-1200', studentCount: 50 },
  { scoreRange: '1200-1400', studentCount: 40 },
  { scoreRange: '1400-1600', studentCount: 30 },
  // ... add more ranges if needed
];
const dataEthnicPerformance = [
  { ethnicity: 'Black', averageGPA: 4.25 },
  { ethnicity: 'Indian', averageGPA: 3.4 },
  { ethnicity: 'White', averageGPA: 3.1 },
  { ethnicity: 'Asian', averageGPA: 3.3 },
  { ethnicity: 'Middle East', averageGPA: 3.4 },
  // ... other ethnicities
];
const dataOnlinePerformance = [
  { time: 'Jan', score: 70 },
  { time: 'Feb', score: null }, // Null value to demonstrate AreaChartConnectNulls
  { time: 'Mar', score: 75 },
  // ... other months
];

const dataInPersonPerformance = [
  { time: 'Jan', score: 65 },
  { time: 'Feb', score: 68 },
  { time: 'Mar', score: null }, // Null value
  // ... other months
];

const dataTeacherPerformance = [
  { name: 'Teacher 1', performance: 85 },
  { name: 'Teacher 2', performance: 90 },
  { name: 'Teacher 3', performance: 75 },
  { name: 'Teacher 4', performance: 80 },
  { name: 'Teacher 5', performance: 95 },
  { name: 'Teacher 6', performance: 70 },
  // ... add more teachers if needed
];
const dataGenderCoursePerformance = [
  { course: 'Math', Male: 85, Female: 90 },
  { course: 'Science', Male: 80, Female: 85 },
  { course: 'Literature', Male: 78, Female: 88 },
  { course: 'History', Male: 88, Female: 87 },
  // ... add more courses as needed
];

const dataOnlineInPersonPerformance = [
  { name: 'Course 1', Online: 70, InPerson: 75 },
  { name: 'Course 2', Online: 65, InPerson: 80 },
  { name: 'Course 3', Online: 78, InPerson: 85 },
  // ... add more courses as needed
];


const dataCoursePerformance = [
  { name: 'Assignments', value: 300 },
  { name: 'Exams', value: 200 },
  { name: 'Participation', value: 100 },
  { name: 'Projects', value: 150 },
  // ... add more categories as needed
];


const gradeDistributions = {
  'Course 1': {
    'Math': [{ grade: 'A', students: 10 }, { grade: 'B', students: 15 }, { grade: 'C', students: 5 }, { grade: 'D', students: 3 }],
    'Science': [{ grade: 'A', students: 12 }, { grade: 'B', students: 14 }, { grade: 'C', students: 6 }, { grade: 'D', students: 2 }],
    'Literature': [{ grade: 'A', students: 12 }, { grade: 'B', students: 14 }, { grade: 'C', students: 6 }, { grade: 'D', students: 2 }],
    'History': [{ grade: 'A', students: 10 }, { grade: 'B', students: 15 }, { grade: 'C', students: 5 }, { grade: 'D', students: 3 }],
    // ... other subjects
  },
  'Course 2': {
    'Math': [{ grade: 'A', students: 8 }, { grade: 'B', students: 18 }, { grade: 'C', students: 7 }, { grade: 'D', students: 4 }],
    'Science': [{ grade: 'A', students: 9 }, { grade: 'B', students: 16 }, { grade: 'C', students: 10 }, { grade: 'D', students: 1 }],
    'Literature': [{ grade: 'A', students: 9 }, { grade: 'B', students: 16 }, { grade: 'C', students: 10 }, { grade: 'D', students: 1 }],
    'History': [{ grade: 'A', students: 2 }, { grade: 'B', students: 1 }, { grade: 'C', students: 1 }, { grade: 'D', students: 4 }],
    // ... other subjects
  },

  // ... other courses
};
const gradeColors = {
  'A': '#28ff3e', 
  'B': '#f8ff28', 
  'C': '#ff9e28', 
  'D': '#ff2828', 
  // Add more grades and colors as needed
};

 export const Graphs = ({ selectedGraph }) => {
    // This will log whenever Graphs is called
    console.log('Rendering graph for:', selectedGraph); 
  
    switch (selectedGraph) {
      case 'Average Grade Over Time Line Graph Math':
        return (
          <ResponsiveContainer width="95%" height={180}>
            <LineChart
              data={dataMath}
              margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="semester" stroke="navy" />
              <YAxis stroke="navy" />
              <Tooltip contentStyle={{ backgroundColor: 'grey', borderColor: 'white' }}
                       itemStyle={{ color: 'white' }} />
              <Legend />
              <Line type="monotone" dataKey="averageGrade" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        );
  
      case 'Average Grade Over Time Line Graph Science':
        return (
          <ResponsiveContainer width="95%" height={180}>
            <LineChart
              data={dataScience}
              margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="semester" stroke="navy" />
              <YAxis stroke="navy" />
              <Tooltip contentStyle={{ backgroundColor: 'grey', borderColor: 'white' }}
                       itemStyle={{ color: 'white' }} />
              <Legend />
              <Line type="monotone" dataKey="averageGrade" stroke="#82ca9d" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        );
  
        case 'Average Grade Over Time Line Graph History':
          return (
            <ResponsiveContainer width="95%" height={180}>
              <LineChart
                data={dataHistory}
                margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="semester" stroke="navy" />
                <YAxis stroke="navy" />
                <Tooltip contentStyle={{ backgroundColor: 'grey', borderColor: 'white' }}
                         itemStyle={{ color: 'white' }} />
                <Legend />
                <Line type="monotone" dataKey="averageGrade" stroke="#ffc658" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          );
              
                  case 'Average Grade Over Time Line Graph Literature':
                    return (
                      <ResponsiveContainer width="95%" height={180}>
                        <LineChart
                          data={dataLiterature}
                          margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="semester" stroke="navy" />
                          <YAxis stroke="navy" />
                          <Tooltip contentStyle={{ backgroundColor: 'grey', borderColor: 'white' }}
                                   itemStyle={{ color: 'white' }} />
                          <Legend />
                          <Line type="monotone" dataKey="averageGrade" stroke="#8884d8" activeDot={{ r: 8 }} />
                        </LineChart>
                      </ResponsiveContainer>
                    );
                    case 'Subject-wise Performance Bar Graph':
                      return (
                        <ResponsiveContainer width="95%" height={180}>
                          <BarChart
                            data={dataSubjectPerformance}
                            margin={{ top: 10, right: 0, left: 0, bottom: 5 }}
                          >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="subject" stroke="navy" /> {/* Make sure this key matches your data key */}
                            <YAxis stroke="navy"/>
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="averageGrade">
                              {
                                dataSubjectPerformance.map((entry, index) => (
                                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))
                              }
                            </Bar>
                          </BarChart>
                        </ResponsiveContainer> 
                      );
                      case 'Student Attendance Pie Chart':
                        return (
                          <ResponsiveContainer width="50%" height={200}>
                            <PieChart margin={{ top: 1, right: 1, left: 1, bottom: 1 }} >
                              <Pie
                                data={dataStudentAttendance}
                                cx="40%"
                                cy="40%"
                                labelLine={false}
                                label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                                outerRadius={70}
                                fill="#8884d8"
                                dataKey="value"
                                >
                                {dataStudentAttendance.map((entry, index) => (
                                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                              </Pie>
                              <Tooltip />
                              <Legend />
                            </PieChart>
                          </ResponsiveContainer>
                        );
                         case 'Class Rank':
                            return (
                              <ResponsiveContainer width="95%" height={300}>
                                <BarChart
                                  data={dataClassRank}
                                  layout="vertical" // This makes it a horizontal bar chart
                                  margin={{ top: 0, right: 0, left: 0, bottom:110 }}   >
                                  <CartesianGrid strokeDasharray="3 3" />
                                  <XAxis type="number" /> // X-axis now represents the numerical values
                                  <YAxis type="category" dataKey="className" stroke="navy" /> // Y-axis for class names
                                  <Tooltip />
                                  <Legend />
                                  <Bar dataKey="averageGPA" fill="#000080 ">
                                    {
                                      dataClassRank.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                      ))
                                    }
                                  </Bar>
                                </BarChart>
                              </ResponsiveContainer>
                            );
                            case 'SAT/ACT Score':
                              return (
                                <ResponsiveContainer width="95%" height={200}>
                                  <BarChart
                                    data={dataSATScores}
                                    margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                                  >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="scoreRange" stroke="navy" />
                                    <YAxis stroke="navy"/>
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="studentCount">
                                      {
                                        dataSATScores.map((entry, index) => (
                                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))
                                      }
                                    </Bar>
                                  </BarChart>
                                </ResponsiveContainer>
                              );
                              case 'Demographic Performance':
                                return (
                                  <ResponsiveContainer width="100%" height={220}>
                                    <PieChart>
                                      <Pie
                                        data={dataEthnicPerformance}
                                        cx="50%"
                                        cy="50%"
                                        labelLine={false}
                                        label={({ ethnicity, averageGPA }) => `${ethnicity}: ${averageGPA.toFixed(2)}`}
                                        outerRadius={70}
                                        fill="#8884d8"
                                        dataKey="averageGPA"
                                      >
                                        {dataEthnicPerformance.map((entry, index) => (
                                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                      </Pie>
                                      <Tooltip />
                                      <Legend />
                                    </PieChart>
                                  </ResponsiveContainer>
                                );
                                case 'Teacher Performance':
                                  return (
                                    <ResponsiveContainer width="90%" height={300}>
                                      <RadialBarChart
                                        innerRadius="20%"
                                        outerRadius="100%"
                                        data={dataTeacherPerformance}
                                        startAngle={180}
                                        endAngle={0}
                                      >
                                        <RadialBar
                                            minAngle={15}
                                            label={{ position: 'insideStart', fill: '#fff' }}
                                            background
                                            clockWise={true}
                                            dataKey="performance"
                                          >
                                            {dataTeacherPerformance.map((entry, index) => (
                                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                            ))}
                                          </RadialBar>
                                          <Legend iconSize={10} layout="vertical" verticalAlign="up" align="right" />
                                        </RadialBarChart>
                                      </ResponsiveContainer>
                                  );
                                  case 'Performance by Gender':
                                    return (
                                      <ResponsiveContainer width="95%" height={200}>
                                        <LineChart
                                          data={dataGenderCoursePerformance}
                                          margin={{ top: 0, right: 0, left: 0, bottom: 5 }}
                                        >
                                          <CartesianGrid strokeDasharray="3 3" />
                                          <XAxis dataKey="course" padding={{ left: 20, right: 20 }} />
                                          <YAxis />
                                          <Tooltip />
                                          <Legend />
                                          <Line type="monotone" dataKey="Male" stroke="#000080" />
                                          <Line type="monotone" dataKey="Female" stroke="#FFA500" />
                                        </LineChart>
                                      </ResponsiveContainer>
                                    );

                                    case 'Online vs. In-Person Performance':
                                      return (
                                        <ResponsiveContainer width="100%" height={180}>
                                          <BarChart
                                            data={dataOnlineInPersonPerformance}
                                            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                                          >
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="name" />
                                            <YAxis />
                                            <Tooltip />
                                            <Bar dataKey="Online" fill="orange" />
                                            <Bar dataKey="InPerson" fill="navy" />
                                          </BarChart>
                                        </ResponsiveContainer>
                                      );



                  default:
                    return null;
                }
              };

            
              export const CourseSpecificGraphs = ({ selectedCourse, selectedGraphType }) => {
                const renderBarGraph = () => {
                  const subject = selectedGraphType.replace('Grade Distribution for ', '');
                  const data = gradeDistributions[selectedCourse]?.[subject];
              
                  if (!data) {
                    return <p>No data available for this subject in the selected course.</p>;
                  }
              
                  return (
                    <ResponsiveContainer width="100%" height={140}>
                      <BarChart data={data}
                       margin={{ top: 0, right: 10, left: -32, bottom: 5 }}
                       >
                        
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="grade" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="students" fill="#2f0ba3" >
                                          {
                              data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={gradeColors[entry.grade]} />
                              ))
                            }
                   </Bar>
                      </BarChart>
                      
              
                    </ResponsiveContainer>
                  );
                };
              
                switch (selectedGraphType) {
                  case 'Grade Distribution for Math':
                  case 'Grade Distribution for Science':
                  case 'Grade Distribution for History':
                  case 'Grade Distribution for Literature':
                    return renderBarGraph();
                  // ... other graph types
                  default:
                    return <div>No graph type selected</div>;
                }
              };