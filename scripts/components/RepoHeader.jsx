window.repo = window.repo || {};
window.repo.RepoHeader = React.createClass({
  toggleNav: function() {
    var nav = document.querySelector('nav');
    if (nav) {
      nav.classList.toggle('open');
    }
  },
  render: function() {
    return (
      <header>
        <h1 className="title"><ReactRouter.Link to="/">NMS Information Repository</ReactRouter.Link></h1>
        <div className="button-container">
          <button type="button" className="menu" onClick={this.toggleNav}>
            <img src="res/menu.svg" alt="Navigation" />
          </button>
        </div>
      </header>
    );
  }
});
