var React = require('react');
var Thumbnail = require('./thumbnail');

// var options= {
//   partnersData: [{
//     src:"http://www.clker.com/cliparts/O/v/c/b/i/6/generic-logo.svg",
//     header:"companyName",
//     link:"example.com/"
//   },{
//     src:"http://www.clker.com/cliparts/O/v/c/b/i/6/generic-logo.svg",
//     header:"companyName",
//     link:"example.com/"
//   }]
// };

module.exports = React.createClass({
  render: function(){

    // console.log('props in partners: ', this.props);
    // var list = this.props.partnersData.map(function(thumbnailProps){
    //   return <Thumbnail {...thumbnailProps} />
    // });
    //
    // return <div>
    //   {list}
    // </div>

    return <div>
      <h2>Partners</h2>
        <div className="row">
          <div className="col-md-4">
            <Thumbnail
            src="http://www.clker.com/cliparts/O/v/c/b/i/6/generic-logo.svg"
            header="companyName"
            link="example.com/"
            />
          </div>
          <div className="col-md-4">
            <Thumbnail
            src="http://www.clker.com/cliparts/O/v/c/b/i/6/generic-logo.svg"
            header="companyName"
            link="example.com/"
            />
          </div>
          <div className="col-md-4">
            <Thumbnail
            src="http://www.clker.com/cliparts/O/v/c/b/i/6/generic-logo.svg"
            header="companyName"
            link="example.com/"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <Thumbnail
            src="http://www.clker.com/cliparts/O/v/c/b/i/6/generic-logo.svg"
            header="companyName"
            link="example.com/"
            />
          </div>
          <div className="col-md-4">
            <Thumbnail
            src="http://www.clker.com/cliparts/O/v/c/b/i/6/generic-logo.svg"
            header="companyName"
            link="example.com/"
            />
          </div>
        </div>
      </div>

  }
});
