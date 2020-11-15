import React, {Component} from 'react';
import axios from 'axios';
import { Card, CardGroup, Row, Col } from 'react-bootstrap';
import './PostList.css';
import '../Posts/Posts';


// developing project without using React Hooks. 
// Can be easily adjusted if necessary. Possibly may do a resubmission tonight using hooks.


class PostList extends Component {

    state = {
        posts: [],
        next: '',
    }

    async componentDidMount() {
        
        await axios.get(`https://app.twochairs.com/interview-exercise/blog-data-1.json`)
          .then(res => {
            console.log(res.data.data);
            let post = res.data.data;
            const link = res.data.links.next
            return axios.get(link)
                    .then( res => {
                        console.log(res.data.data);
                        console.log("dfjalksjfsioj" + post)
                        this.setState({ posts: post.concat(res.data.data) });
                    })
          })  
          .catch(function (error) {
            console.log(error);
          });
        console.log(this.state)
        
    }

    render() {
        {console.log(this.state.posts + "WOWWOWVEWA")}
        return(
           <Row xs={1} md={1} lg={3} style={{justifyContent: "center"}}>
                {this.state.posts.map(el => (
                   <Row >
                    <Col >
                    <Card style={{width: '24rem', height: '26rem', margin: '3em'}}>
                   <Card.Img variant="top" src={el.image}/>
                   <Card.Body>
                     <Card.Text>
                         {el.date_created}
                     </Card.Text>
                     <Card.Title>{el.title}</Card.Title>
                     <Card.Text>
                         {el.author}
                     </Card.Text>
                   </Card.Body>
                 </Card>
                    </Col>
            </Row>
                 ))}
            </Row>
        )
    }
}

export default PostList;