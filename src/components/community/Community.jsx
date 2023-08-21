import './community.css';
import React from 'react';

const InputComponent = () => {
    return (
        <div className="input-with-button">
        <div className="input-container">
          <input className="input-field" type="text" placeholder="Add your email here" />
          <button className="submit-button">Send</button>
        </div>
      </div>
    );
  }

  const Community = () => {
    return ( 
      <section className="community">
        <div className="container">
            <div className="community__text">
                <h2 className="community__title">
                JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO
            </h2>
            
            <div className="community__subtitle">
                Type your email down below and be young wild generation
            </div>
            
            <InputComponent />
            </div>
          
  
        </div>
      </section>
    );
  }
   
  export default Community;




