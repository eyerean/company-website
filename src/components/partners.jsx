var React = require('react');
var Thumbnail = require('./thumbnail');

module.exports = React.createClass({
  getInitialState: function() {
    return  {
       partnersData: [{
         key: 1,
         src:"http://www.clker.com/cliparts/O/v/c/b/i/6/generic-logo.svg",
         header:"companyName1",
         link:"//example.com/"
       },{
         key: 2,
         src:"http://www.clker.com/cliparts/O/v/c/b/i/6/generic-logo.svg",
         header:"companyName2",
         link:"//example.com/"
       },{
         key: 3,
         src:"http://www.clker.com/cliparts/O/v/c/b/i/6/generic-logo.svg",
         header:"companyName3",
         link:"//example.com/"
       },{
         key: 4,
         src:"http://www.clker.com/cliparts/O/v/c/b/i/6/generic-logo.svg",
         header:"companyName4",
         link:"//example.com/"
       }]
     };
  },
  render: function(){
    var list = this.state.partnersData.map(function(thumbnailProps){
      return <Thumbnail {...thumbnailProps} />
    });
    return <div className="partners">
      {list}
    </div>

  }
});
