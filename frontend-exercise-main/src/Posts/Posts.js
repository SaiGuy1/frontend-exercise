import React, {Component} from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import './Posts.css';


// developing project without using useState and React Hooks. 
// Can be easily adjusted if necessary

class Posts extends Component {

    state = {
        posts: []
    }

    componentDidMount() {
        axios.get(`https://app.twochairs.com/interview-exercise/blog-data-1.json`)
          .then(res => {
            console.log(res.data.data[0]);
            const post = res.data;
            this.setState({ post });
          })
    }
    

    render() {
        return(
            <div className="card">
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
            </div>
        )
    }
}

export default Posts;