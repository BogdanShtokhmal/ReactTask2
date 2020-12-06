import React, {Component} from 'react';

class Post extends Component {
    render() {
        let {item, onSelectPost}=this.props;
        return (
            <div>
                {item.id}-{item.title}-----
                <button onClick={()=> onSelectPost(item.id)}> Chose </button>
            </div>
        );
    }
}

export default Post;