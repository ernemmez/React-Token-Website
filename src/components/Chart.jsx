import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Burn', 'Team And Airdrop', 'Marketing', 'Presale', 'PancakeSwap Liquidity',],
  datasets: [
    {
      data: [20, 15, 15, 27.5, 22.5],
      backgroundColor: [
        '#00e2f3',
        '#9a0680',
        '#EEC373',
        '#7fff00',
        '#052a6e',
      ],
      borderWidth: 0,
    },
  ],
};

export default function Chart2() {
  return (
   <div className="doughunt">
     {/* https://codepen.io/spczoe/pen/yNYdbm */}
      {/* <div className="wrapper">
          <div className="d1"><div><span>20%</span></div></div>
          <div className="d2"><div><span>15%</span></div></div>
          <div className="d3"><div><span>15%</span></div></div>
          <div className="d4"><div><span>27.5%</span></div></div>
          <div className="d5"><div><span>22.5%</span></div></div>
      </div> */}
      <Doughnut data={data} />
   </div>
  );
}