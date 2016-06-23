import React from 'react';
import Link from 'react-router/lib/Link';
import InfoSpotlight from './components/InfoSpotlight';
import InfoCardList from './components/InfoCardList';
import helper from './helper';

export class CategoryListPage extends React.Component {
  render() {
    var self = this;

    var category = this.props.route.categories.find(function(cat) {
      return self.props.routeParams.category === helper.modTitle(cat.title);
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

    var content = [];

    if (!category) {
      var spotlight = {
        title: 'Category Not Found',
        text: [
          'Unfortunately, we weren\'t able to find the category you listed',
          'If you came from outside the Information Repository, please check the URL and make sure it\'s valid'
        ],
        spoiler: true
      }
      content.push(<InfoSpotlight key="spotlight" data={spotlight} />)
    } else {
      content.push(<h2 key="list-title">Category: {category.title}</h2>);
      content.push(<InfoCardList key="list" info={categoryList} link={'/categories/' + encodeURIComponent(helper.modTitle(category.title))} />);
    }

    content.push(<h2 key="nav-title">Other</h2>)
    content.push(
      <div key="back" className="card">
        <Link to="/categories">
          <div className="header">
            <h3 className="card-title">Back to Categories</h3>
          </div>
        </Link>
      </div>
    );

    return (
      <div class="page category-page">
        {content}
      </div>
    );
  }
});
