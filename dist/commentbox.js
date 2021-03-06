/**
 * Created by taddeng on 2015/11/10.
 */
'use strict';

var data = [{ author: 'dp', text: 'the author is dp' }, { author: 'mz', text: 'the author is mz' }];
//class A{
//    constructor(){
//        console.log('fdsafa');
//    }
//}
//var a=new A();
var CommentBox = React.createClass({
    getInitialState: function getInitialState() {
        return { data: [] };
    },
    addComment: function addComment(comment) {
        var _data = this.state.data;
        _data.push(comment);
        this.setState(_data);
    },
    componentDidMount: function componentDidMount() {
        //setTimeout(function () {
        this.setState({ data: data });
        //}.bind(this), 1000);
    },
    render: function render() {
        return React.createElement(
            'div',
            { className: 'commentBox' },
            React.createElement(
                'h1',
                null,
                this.props.title
            ),
            React.createElement(CommentBox.CommentList, { data: this.state.data }),
            React.createElement(CommentForm, { addComment: this.addComment })
        );
    }
});

CommentBox.CommentList = React.createClass({
    render: function render() {
        var comments = [];
        this.props.data.forEach(function (comment, index) {
            comments.push(React.createElement(
                Comment,
                { key: index, id: index, author: comment.author },
                comment.text,
                React.createElement(
                    'div',
                    null,
                    '222'
                )
            ));
        });
        return React.createElement(
            'div',
            { className: 'commentList' },
            comments
        );
    }
});
var Comment = React.createClass({
    render: function render() {
        return React.createElement(
            'div',
            { className: 'comment' },
            React.createElement(
                'span',
                null,
                this.props.id
            ),
            React.createElement(
                'h2',
                { className: 'commentAuthor' },
                this.props.author
            ),
            this.props.children,
            React.createElement(CommentBox.LikeButton, null)
        );
    }
});
CommentBox.LikeButton = React.createClass({
    getInitialState: function getInitialState() {
        return {
            isLike: false
        };
    },
    onLikeBtnClick: function onLikeBtnClick(e) {
        this.setState({
            isLike: !this.state.isLike
        });
    },
    render: function render() {
        return React.createElement(
            'button',
            { onClick: this.onLikeBtnClick },
            this.state.isLike ? 'unlike' : 'like'
        );
    }
});
var CommentForm = React.createClass({
    handlerFormSubmit: function handlerFormSubmit(e) {
        this.props.addComment({
            author: this.refs.author.value,
            text: this.refs.text.value
        });
    },
    onAuthorChange: function onAuthorChange() {
        console.log('author change ', this.value);
    },
    render: function render() {
        return React.createElement(
            'div',
            { className: 'commentForm' },
            React.createElement('input', { type: 'text', name: 'author', ref: 'author', onInput: this.onAuthorChange }),
            React.createElement('br', null),
            React.createElement('input', { type: 'text', name: 'text', ref: 'text' }),
            React.createElement(
                'button',
                { onClick: this.handlerFormSubmit },
                '评论'
            )
        );
    }
});
var commentBox = ReactDOM.render(React.createElement(CommentBox, null), document.querySelector('#wrapper'));
//# sourceMappingURL=commentbox.js.map
