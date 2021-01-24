import React from 'react';
import Featured from './featured';
import  Matches  from './matches';
import PlayInfo from './player_info';
import Promotion from './promotion';



const Home = () => {
  return (
    <div className="bck_blue">
      <Featured/>
      <Matches/>
      <PlayInfo/>
      <Promotion/>
    </div>
  );
};

export default Home;