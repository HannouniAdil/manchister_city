import React from 'react';
import Featured from './featured';
import  Matches  from './matches';
import PlayInfo from './player_info';



const Home = () => {
  return (
    <div className="bck_blue">
      <Featured/>
      <Matches/>
      <PlayInfo/>
    </div>
  );
};

export default Home;