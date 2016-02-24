/**
 * Created by taddeng on 2016/2/24.
 */
var Comment = React.createClass({
    render: function () {
        return React.createElement("div", null);
    }
});
var comment = ReactDOM.render(React.createElement(Comment, { "custom-attr": "123" }), document.querySelector('#wrapper'));