var React = require('react');
var Button = require('./button');

module.exports = React.createClass({
  render: function(){
    return <div className="thumbnail">
      <img src={this.props.src} />
      <div className="caption">
        <a href={this.props.link}>
          <h3>{this.props.header}</h3>
        </a>
          <p>{this.props.desc}</p>
        </div>
    </div>
  }
});
