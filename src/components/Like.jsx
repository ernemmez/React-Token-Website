import React from "react";
import Chart2 from "./Chart";

export default function Like() {
  return (
    <div className="like">
      <h2 className="big-title nav-link">#Tokenomics</h2>
      <div className="container">
        <div className="content">
          <p className="token-li">Total Supply : <span>1.000.000.000</span></p>
          <p className="token-li">Burn : <span>200.000.000 (%20)</span></p>
          <p className="token-li">Team and Airdrop : <span>150.000.000 (%15)</span></p>
          <p className="token-li">Marketing : <span>150.000.000 (%15)0</span></p>
          <p className="token-li">Presale : <span>275.000.000 (%27.5)</span></p>
          <p className="token-li">Pancakeswap Liquidity : <span>225.000.000 (%22.5)</span></p>
          <br></br>
          <p className="token-li"><span>- </span><i>Transaction Fees</i></p>
          <p className="token-li">Rewards to Holders (Oasis) & Burn : <span>6%</span></p>
          <p className="token-li">Marketing Fee : <span>4%</span></p>
          <p className="token-li">Add to Liquidity : <span>3%</span></p>
        </div>
        <div className="content2">
          <div className="chart">
            <Chart2 />
          </div>
        </div>
      </div>
    </div>
  );
}
