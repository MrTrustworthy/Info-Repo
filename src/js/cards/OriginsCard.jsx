import origins from '../origins';

export default class OriginsCard extends React.Component {
  static get defaultProps() {
    return {
      data: {
        _id: '0',
        name: 'Unknown Discovery',
        score: 0,
        type: 'Unknown',
        _images: []
      }
    };
  }

  render() {
    var data = this.props.data;
    // Create the main
    var classes = [
      'card',
      'origins-card'
    ];

    // Set header stuff
    var headerList = [
      (<h3 className="card-title" key="header-title">{data.name}</h3>),
      <div className="score">{data.score}</div>
    ];

    if (data._images && data._images.length) {
      var bgstyle = {
        backgroundImage: `url(${data._images[0].fileurl.thumb})`
      };
      headerList.push(<div className="bgimg" style={bgstyle} key="bgimg"></div>);
    }

    return (
      <div className={classes.join(' ')}>
        <a href={`${origins.baseURL}/discovery/${data._id}`}>
          <div className="header">
            {headerList}
          </div>
        </a>
      </div>
    );

  }
}
