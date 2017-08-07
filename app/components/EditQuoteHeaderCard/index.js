/**
*
* EditQuoteHeaderCard
*
*/

import React from 'react';
// import styled from 'styled-components';
import {Glyphicon } from 'react-bootstrap/lib';

class EditQuoteHeaderCard extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  
  render() {
    return (
      <div className="card  margin" >
        <div className="card-icon"><Glyphicon className="cartIcon" glyph='shopping-cart' /></div>
        <div className="card-detail">
          <div>
            <div  className="cartFont">Q-00116 - <span style={{marginTop: '0px', fontSize: '20px'}}>$150,000.00</span></div>
          </div>
        </div>
      </div>
      
    );
  }
}

EditQuoteHeaderCard.propTypes = {

};

export default EditQuoteHeaderCard;
