import React from 'react';

const divStyle = {
	left: '0',
	right: '0'
};

class Order extends React.Component {
  render() {
    return (
    	<div> 
	    	<div className="jag-gohome"> 	
				<a href="/">   
					<svg version="1.1" id="jag-clear" x="0px" y="0px" viewBox="0 0 24 24">
					<path d="M5.7,5L5,5.7l6.3,6.3L5,18.3L5.7,19l6.3-6.3l6.3,6.3l0.7-0.7L12.7,12L19,5.7L18.3,5L12,11.3L5.7,5z"></path>
					</svg>
					<div className="jag-gohome__txt"> Home </div>
			    </a>  
			</div>
	    	<div className="jag-main-logo" style={divStyle}> 
	      		Jagna Wróblewska
	    	</div>
    	</div>
    )
  }
}

export default Order;
