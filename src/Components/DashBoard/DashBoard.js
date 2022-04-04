import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, ComposedChart, Legend, Line, RadialBar, RadialBarChart, Tooltip, XAxis, YAxis } from 'recharts';

const DashBoard = () => {
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('data.json').then(res => res.json()).then(data => setData(data))
    },[])
    return (
       <div className='grid justify-items-center grid-cols-1 lg:grid-cols-2 mt-10 md:mt-20'>
         <div>
         <AreaChart width={400} height={250} data={data}
  margin={{ top: 10, right: 30, left: 20, bottom: 10 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="investment" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
  <Area type="monotone" dataKey="revenue" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
</AreaChart>
         </div>
         <div> 
         <ComposedChart width={400} height={250} data={data} margin={{ top: 10, right: 30, left: 20, bottom: 10 }}>
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <CartesianGrid stroke="#f5f5f5" />
  <Area type="monotone" dataKey="revenue" fill="#8884d8" stroke="#8884d8" />
  <Bar dataKey="investment" barSize={20} fill="#413ea0" />
  <Line type="monotone" dataKey="investment" stroke="#ff7300" />
</ComposedChart>
         </div>
         <div>
         <RadialBarChart
  width={400} 
  height={250} 
  innerRadius="10%" 
  outerRadius="80%" 
  data={data} 
  startAngle={180} 
  endAngle={0}
>
  <RadialBar minAngle={15} label={{ fill: '#666', position: 'insideStart' }} background clockWise={true} dataKey='investment' />
  <Legend iconSize={5} width={20} height={140} layout='vertical' verticalAlign='middle' align="right" />
  <Tooltip />
</RadialBarChart>
         </div>
         <div>
         <BarChart width={400} height={250} data={data} margin={{ top: 10, right: 30, left: 20, bottom: 10 }}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="investment" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey="investment" fill="#8884d8" />
  <Bar dataKey="revenue" fill="#82ca9d" />
</BarChart>
         </div>
       </div>
       
    );
};

export default DashBoard;