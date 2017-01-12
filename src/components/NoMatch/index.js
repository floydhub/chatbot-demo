import React from 'react';
import { Link } from 'react-router';
import { ButtonOutline } from 'rebass';

const NoMatch = (props) => {
  return (
    <div style={{width:'100%', marginTop:'100px', textAlign:'center'}}>
      <h3>404</h3>
      <h5>Uh oh, can't find what you're looking for.</h5>
      <br />
      <Link to="/">
        <ButtonOutline color="primary" pill big style={{fontWeight:'400'}}>
          Go back to Chat
        </ButtonOutline>
      </Link>
    </div>
  );
};

export default NoMatch;


