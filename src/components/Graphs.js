// src/components/Graphs.js
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Dummy data for the Math grades over time
const dataMath = [
  { semester: 'Fall 2019', averageGrade: 70 },
  { semester: 'Spring 2020', averageGrade: 73 },
  { semester: 'Fall 2020', averageGrade: 75 },
  { semester: 'Spring 2021', averageGrade: 78 },
  { semester: 'Fall 2021', averageGrade: 80 },
  { semester: 'Spring 2022', averageGrade: 85 },
];

const Graphs = ({ selectedGraph }) => {
  console.log('Rendering graph for:', selectedGraph); // This will log whenever Graphs is called

  // You can make this component more dynamic by using selectedGraph to determine what data to display and which graph to render
  if (selectedGraph === 'Average Grade Over Time Line Graph Math') {
    return (
      <ResponsiveContainer width="95%" height={180}>
        <LineChart
          width={300}
          height={100}
          data={dataMath}
          margin={{
            top: 10,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="semester"
              stroke="navy" // Change the color of XAxis text
              />
          <YAxis stroke="navy" />
          <Tooltip
          contentStyle={{
            backgroundColor: 'grey',
            borderColor: 'white'
          }}
          itemStyle={{ color: 'white' }} />
          <Legend />
          <Line type="monotone" dataKey="averageGrade" stroke="#8884d8"  activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    );
  }
  // Return null or other graph types based on selectedGraph
  return null;
};

export default Graphs;
