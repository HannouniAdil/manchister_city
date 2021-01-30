import React from 'react';
import PromotionAnimation from './PromotionAnimation';
import Enrollment from './Enrollment';

const Promotion = () => {
  return (
    <div className="promotion_wrapper" style={{background:'#ffffff'}}>
      <div className="container">
        <PromotionAnimation/>
        <Enrollment/>
      </div>
    </div>
  );
};

export default Promotion;