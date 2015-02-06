/** @jsx React.DOM */
var React = require('react');
var Header = require('./header.jsx');
var Content = require('./content.jsx');


React.render(<div> 
				<Header></Header>
				<Content></Content>
				<footer></footer>
			</div>, document.body);

 