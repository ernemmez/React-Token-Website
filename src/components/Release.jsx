import React from "react";
import release1 from "../assets/char1.png";
import release2 from "../assets/char2.png";
import release3 from "../assets/char3.png";

export default function Release() {
  return (
    <div className="releases">
      <h1 className="big-title nav-link">Our Roadmap</h1>
      {/* PHASE 1 */}
      <div className="release orange mobile-sections box-shadow">
        <div className="content">
          <h2 className="title">Phase 1</h2>
          <li className="roadmap-li">
               Pancakeswap Listing
           </li>
           <li className="roadmap-li">
            Community Building
           </li>
           <li className="roadmap-li">
           Influcing
           </li>
           <li className="roadmap-li">
             200 Hold
           </li>
           <li className="roadmap-li">
             CoinmarketCap & CoinGecko Listing
           </li>
           <li className="roadmap-li">
           Pancakeswap Farm
           </li>
        </div>
        <div className="image">
          <img src={release1} alt="release" className="roadmap-img" />
          <div className="ellipse pink"></div>
        </div>
      </div>
      {/* PHASE 1 END */}

      {/* PHASE 2 */}
      <div className="release green mobile-sections box-shadow">
        <div className="image">
            <img src={release2} alt="release" className="roadmap-img" />
            <div className="ellipse green"></div>
        </div>
        <div className="content">
          <h2 className="title">Phase 2</h2>
          <li className="roadmap-li">
            Cex Listing
           </li>
           <li className="roadmap-li">
           Game Development
           </li>
           <li className="roadmap-li">
             NFT Designs
           </li>
           <li className="roadmap-li">
              Website Designs
           </li>
           <li className="roadmap-li">
             NFT Market
           </li>
           <li className="roadmap-li">
            Stake
           </li>
           <li className="roadmap-li">
            Strategic Partnership
           </li>
        </div>
      </div>
      {/* PHASE 2 END */}

      {/* PHASE 3 */}
      <div className="release orange mobile-sections box-shadow">
        <div className="content">
          <h2 className="title">Phase 3</h2>
          <li className="roadmap-li">
           Gate.io Listing
           </li>
           <li className="roadmap-li">
           Massive Marketing Campaign
           </li>
           <li className="roadmap-li">
          Bridge or ETH and SOL Networks
           </li>
           <li className="roadmap-li">
           Play To Earn Cyrpto-Mobile Game
           </li>
           <li className="roadmap-li">
             CoinmarketCap & CoinGecko Listing
           </li>
           <li className="roadmap-li">
           Pancakeswap Farm
           </li>
        </div>
        <div className="image">
          <img src={release3} alt="release" className="roadmap-img"  />
          <div className="ellipse pink"></div>
        </div>
      </div>
      {/* PHASE 3 END */}

    </div>
  );
}
