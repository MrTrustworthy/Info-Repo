window.repo = window.repo || {};
window.repo.CategorySpotlightPage = React.createClass({
  render: function() {
    var self = this;

    var category = this.props.route.categories.find(function(cat) {
      return self.props.routeParams.category === repo.modTitle(cat.title);
    });

    var spotlight = this.props.route.info.find(function(info) {
      return self.props.routeParams.info === repo.modTitle(info.title);
    });

    var categoryList;
    if (category) {
      categoryList = this.props.route.info.filter(function(info) {
        if (info.categories) {
          return info.categories.find(function(cat) {
            return cat.title === category.title;
          });
        } else {
          return false;
        }
      });
    }

    if (!category) {
      spotlight = {
        title: 'Category Not Found',
        text: [
          'Unfortunately, we weren\'t able to find the category you listed',
          'If you came from outside the Information Repository, please check the URL and make sure it\'s valid'
        ],
        spoiler: true
      }
    } else if (!spotlight) {
      spotlight = {
        title: 'Info Not Found',
        text: [
          'Unfortunately, we weren\'t able to find any information on what you were looking for',
          'If you came from outside the Information Repository, please check the URL and make sure it\'s valid'
        ],
        spoiler: true
      }
    }

    var content = [
      <repo.InfoSpotlight key="spotlight" data={spotlight} link="/info" />
    ];

    if (categoryList && categoryList.length) {
      content.push(<h2 key="list-title">Category: {category.title}</h2>);
      content.push(<repo.InfoCardList key="list" info={categoryList} link={'/categories/' + encodeURIComponent(repo.modTitle(category.title))} />)
    }

    content.push(<h2 key="nav-title">Other</h2>)
    content.push(
      <div key="back" className="card">
        <ReactRouter.Link to="/categories">
          <div className="header">
            <h3 className="card-title">Back to Categories</h3>
          </div>
        </ReactRouter.Link>
      </div>
    );

    return (
      <div class="page category-page">
        {content}
      </div>
    );
  }
});
