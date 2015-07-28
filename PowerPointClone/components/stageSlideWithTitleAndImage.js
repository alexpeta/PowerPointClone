///<reference path="../lib/_references.d.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'react/addons'], function (require, exports, React) {
    var stageSlideTitleWithText = (function (_super) {
        __extends(stageSlideTitleWithText, _super);
        function stageSlideTitleWithText() {
            _super.apply(this, arguments);
        }
        stageSlideTitleWithText.prototype.render = function () {
            return React.jsx("\n            <div className=\"col-xs-12\">\n                <form>\n                  <div className=\"form-group space-top55\">\n                    <input type=\"email\" className=\"form-control title-input\" id=\"title-content\" placeholder=\"Click to add Title\" />\n                  </div>\n                  <div className=\"form-group space-top55\">\n                    <textarea className=\"form-control body-input\" id=\"body-content\" placeholder=\"Click to Content\"></textarea>\n                  </div>\n                </form>\n            </div>\n         ");
        };
        return stageSlideTitleWithText;
    })(React.Component);
    return stageSlideTitleWithText;
});
//# sourceMappingURL=stageSlideWithTitleAndImage.js.map