// 子コンポーネント
import { useState } from 'react';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

const BmiGraph = (props)=>{   

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
  const options = {
    responsive: false,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };
  
   let labels = props.bmiList.slice(-7).map((obj) => obj.strDate);
  
  let data = {
  labels,
  datasets: [
    {
      label: 'BMI',
      data: props.bmiList.slice(-7).map((obj) => obj.bmi),
      borderColor: 'rgb(143, 157, 242)',
      backgroundColor: 'rgb(143, 157, 242)',
    },
  ],
};

  return(
    <Line options={options} data={data}  width={686} height={343} />
  )
}
export default BmiGraph