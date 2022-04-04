import React, { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, RadialBar, RadialBarChart, Tooltip, XAxis, YAxis } from 'recharts';

const DashBoard = () => {
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('data.json').then(res => res.json()).then(data => setData(data))
    },[])
    return (
       <div className='grid grid-cols-2'>
         <div>
         <LineChart width={400} height={400} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
           <Line  dataKey={'investment'} stroke="#82ca9d" />
           <Line dataKey={'revenue'} stroke="#8884d8" />
           <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
           <Tooltip></Tooltip>
           <XAxis dataKey='month'></XAxis>
           <YAxis></YAxis>
           <Legend></Legend>
       </LineChart>
         </div>
         <div> 
         <BarChart width={730} height={250} data={data}  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
  <CartesianGrid strokeDasharray="3 3" />
  
  <XAxis dataKey='month'></XAxis>
<YAxis></YAxis>
  <Tooltip />
  <Legend />
  <Bar dataKey="investment" fill="#82ca9d" />
  <Bar dataKey="revenue" fill="#8884d8" />
</BarChart>
         </div>
         <div>
         <RadialBarChart 
  width={730} 
  height={250} 
  innerRadius="10%" 
  outerRadius="80%" 
  data={data} 
  startAngle={180} 
  endAngle={0}
>
  <RadialBar minAngle={15} label={{ fill: '#666', position: 'insideStart' }} background clockWise={true} dataKey='sell' />
  <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right" />
  <Tooltip />
</RadialBarChart>
         </div>
       </div>
       
    );
};

export default DashBoard;