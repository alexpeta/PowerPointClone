var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'react/addons', '../DAL/RepositoryManager'], function (require, exports, React, RepositoryManager) {
    var ImageViewer = (function (_super) {
        __extends(ImageViewer, _super);
        function ImageViewer() {
            _super.apply(this, arguments);
        }
        ImageViewer.prototype.render = function () {
            var repositoryManager = RepositoryManager.RepositoryManager.GetInstance();
            var slide = repositoryManager.GetSlide(this.props.slideId);
            return React.jsx("<div className=\"photos\">\n            <h1>{slide.title}</h1>\n\t\t\t<React.addons.CSSTransitionGroup transitionName=\"photo\">\n\t\t\t\t<img key={this.props.index} \n\t\t\t\t     src={\"photos/\"+this.props.index+'.jpg'} />\n\t\t\t</React.addons.CSSTransitionGroup>\n\t\t</div>");
        };
        ImageViewer.defaultProps = { index: 0 };
        return ImageViewer;
    })(React.Component);
    ImageViewer.propTypes = { index: React.PropTypes.number.isRequired };
    return ImageViewer;
});
//# sourceMappingURL=imageViewer.js.map