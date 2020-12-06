import React, {Component} from 'react';
import Post from "../Post/Post";

class Allposts extends Component {

state={posts:[], chosen: null};


onSelectPost=(id)=>{
    let {posts}=this.state;
    let find=posts.find(value=>value.id===id);
    this.setState({chosen:find});
}
    render() {
        let {posts, chosen}=this.state;
        return (
            <div>
                {
                    posts.map(post=> <Post item={post} key={post.id} onSelectPost={this.onSelectPost}/>)
                }
                {
                    chosen && <h1> <Post item={chosen}/></h1>
                }


            </div>
        );
    }

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/posts')
            .then(value=>value.json())
            .then(posts=>{
            this.setState({posts})
            });
    }




}

export default Allposts;