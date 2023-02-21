import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import DashboardHeader from "../../header/DashboardHeader"
import DashSide from "../../pages/dashside/DashSide"
import { useState } from 'react'
import "./charts.css"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
function Charts() {
    const miData = [
        {
          id: 1,
          content: "comments",
          userGain: 3,
          userLost: 1,
        },
        {
          id: 2,
          content:"users",
          userGain: 6,
          userLost: 2,
        },
        {
          id: 3,
          content:"blogs",
          userGain: 7,
          userLost: 5,
        },
      ];
      
      const data = [
        {
          name: 'post A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
      


    const [userData,setUserData]=useState({
        labels:miData.map((data)=>data.content),
        datasets:[{
label:"users Gain",
data:miData.map((data)=>data.userGain),
   backgroundColor:['teal','grey','brown'],
  
        },],
    });
  return (
    <div>
        
<DashboardHeader/>

<DashSide/>
<div className="chart" style={{width:'50vw',position:'absolute',top:'15rem',left:'30rem',border:'groove'}}>
    
   <Bar data={userData}/>
   
</div>

<div className="graph2">
<LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
          <Legend />
          <Line yAxisId="left" type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line yAxisId="right" type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
</div>


    </div>
  )
}

export default Charts

