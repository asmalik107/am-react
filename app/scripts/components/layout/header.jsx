var React = require('react');


var header = React.createClass({

	render: function() {
		return(
		<header>
			<div className='container'>
		        <a href='#' data-activates='slide-out' className='button-collapse top-nav'>
		          <i className='mdi-navigation-menu'></i>
		        </a>
	      </div>
	      <ul id='slide-out' className='side-nav fixed'>
	        <li><a href='#!'>First Sidebar Link</a></li>
	        <li><a href='#!'>Second Sidebar Link</a></li>
	      </ul>
      </header>
      );
	}
});


module.exports = header;