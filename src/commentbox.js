/**
 * Created by taddeng on 2015/11/10.
 */
'use strict';
var data = [
    {author: 'dp', text: 'the author is dp'},
    {author: 'mz', text: 'the author is mz'}
];
//class A{
//    constructor(){
//        console.log('fdsafa');
//    }
//}
//var a=new A();
var CommentBox =React.createClass({
    getInitialState:function(){
      return {data:[]};
    },
    addComment:function(comment){
        var _data=this.state.data;
        _data.push(comment);
        this.setState(_data);
    },
    componentDidMount:function() {
        //setTimeout(function () {
            this.setState({data: data});
        //}.bind(this), 1000);
    },
    render:function() {
        return (
            <div className="commentBox">
                <h1>{this.props.title}</h1>
                <CommentBox.CommentList data={this.state.data}/>
                <CommentForm addComment={this.addComment}/>
            </div>
        );
    }
});

CommentBox.CommentList = React.createClass({
    render: function () {
        var comments = [];
        this.props.data.forEach(function (comment,index) {
            comments.push((
                <Comment key={index} id={index} author={comment.author}>
                    {comment.text}
                    <div>222</div>
                </Comment>));
        });
        return (
            <div className="commentList">
                {comments}
            </div>
        )
    }
});
var Comment = React.createClass({
    render: function () {
        return (
            <div className="comment" >
                <span >{this.props.id}</span>
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                {this.props.children}
                <CommentBox.LikeButton/>
            </div>
        )
    }
});
CommentBox.LikeButton=React.createClass({
    getInitialState:function(){
        return {
            isLike:false
        }
    },
    onLikeBtnClick:function(e){
        this.setState({
            isLike:!this.state.isLike
        });
    },
    render:function(){
        return (
            <button onClick={this.onLikeBtnClick}>{this.state.isLike? 'unlike':'like'}</button>
        )
    }
});
var CommentForm = React.createClass({
    handlerFormSubmit:function(e) {
        this.props.addComment({
            author:this.refs.author.value,
            text:this.refs.text.value
        });
    },
    getInitialState:function(){

    },
    onAuthorChange:function(){
        console.log('author change ',this.value);
    },
    render:function(){
        return (
            <div className="commentForm">
                <input type="text" name="author" ref="author" onInput={this.onAuthorChange}/>
                <br/>
                <input type="text" name="text" ref="text"/>
                <button onClick={this.handlerFormSubmit}>评论</button>
            </div>
        )
    }
});
var commentBox=ReactDOM.render(<CommentBox/>, document.querySelector('#wrapper'));