import React from "react"
import { Link } from "react-router-dom";

const ISSUES = '//jsonplaceholder.typicode.com/posts';

class Blog extends React.Component {

  constructor () {
    super();
    this.state = {
      posts: []
    }
 
  }

  async componentDidMount (){

    const postsUrl = ISSUES;

    var response = await fetch(postsUrl);

    this.setState({
      posts: await response.json()
    })
  }
 
  render() {

    
    return (
      <div className="container">
          {(this.state.posts.length && this.state.posts.slice(0, 10).map((v,k)=><p key={k}><Link to={"/blog/"+v.id+"/"}>{v.title}</Link></p>)) || "Loading..."}
      </div>
    );
  }
}

export default Blog;