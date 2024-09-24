import React from 'react'
 import { PieChart, Pie,Cell } from 'recharts'
function GraphPercentage() {

  const data = [
    { name: 'User 1', value: 4, percentage: (4/5)*100 },
    { name: 'User 2', value: 3, percentage: (3/5)*100 },
    { name: 'User 3', value: 2, percentage: (2/5)*100 },
    { name: 'User 4', value: 3, percentage: (3/5)*100 },
    { name: 'User 5', value: 0, percentage: (0/5)*100 },
  ];

  const colors = ['#008000', '#FF0000', '#0000FF', '#FFFF00', '#808080'];

  return (
    <>
    <div className="graph-2">
    <h3>Graph of percentage of completed task by Individual user</h3>
    <PieChart width={500} height={400}>
      <Pie
        data={data}
        cx="50%"
        cy="45%"
        outerRadius={100}
        fill="#8884d8"
        dataKey="value"
        label={({ name, percentage }) => `${name} (${percentage}%)`}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index]} />
        ))}
      </Pie>
    </PieChart>
    
    </div>
   
    </>
  )
}

export default GraphPercentage
