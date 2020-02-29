import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

export class Show extends Component {
  
    render() {
      
      const { name, image, kind, details, zip} = this.props.spot
      let spot = this.props.spot
      let skaterId = this.props.loggedInUserId
      let post = this.props.post
      console.log(post)
        return (
          !post ?
            <div onClick={(evt)=>this.props.handleClick(evt.target)} className="show">
            {<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={image} />
  <Card.Body>
        <Card.Title>{name}</Card.Title>
    <Card.Text>
      <label>
          <b>
            Type:
          </b>
      </label>
      {kind}
      <br/>

      <label>
          <b>
            Zip:
          </b>
      </label>
      {zip}
      <br/>

      <label>
          <b>
          Details:
          </b>  
      </label>
      {details}
      <br/>
      
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
          
      {spot.posts.map((post) => {
      return <ListGroupItem >
        <b>
        {`${post.author} says: `}
        </b>
        {post.content}
        {<img alt="postimg" src={post.image} style={{ width: '16rem' }}/>}

        </ListGroupItem>
      }
      )}

      

   
  </ListGroup>
  <Card.Body>
    <form onSubmit={(evt)=> this.props.postForm(
      evt.preventDefault(),
      evt.target["name"].value,
      evt.target["content"].value,
      evt.target["image"].value,
      evt.target["video"].value,
      skaterId,
      spot)}>

                    <label>Name:</label>
                    <input type="text" name={"name"}></input>
                    <br/>
                    <label>Content:</label>
                    <input type="text" name={"content"}></input>
                    <br/>
                    <label>Image Url:</label>
                    <input type="text" name={"image"}></input>
                    <br/>
                    <label>Video Link:</label>
                    <input type="text" name={"video"}></input>
                    <br/>
                    
                    <button type="submit">Post</button>
                </form>
  </Card.Body>
</Card>}

     </div>
     :
     <div onClick={(evt)=>this.props.handleClick(evt.target)} className="show">
            {<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={image} />
  <Card.Body>
        <Card.Title>{name}</Card.Title>
    <Card.Text>
      <label>
          <b>
            Type:
          </b>
      </label>
      {kind}
      <br/>

      <label>
          <b>
            Zip:
          </b>
      </label>
      {zip}
      <br/>

      <label>
          <b>
          Details:
          </b>  
      </label>
      {details}
      <br/>
      
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
          {spot.posts.push(post)}
      {spot.posts.map((post) => {
      return <ListGroupItem >
        <b>
        {`${post.author} says: `}
        </b>
        {post.content}
        {<img alt="postimg" src={post.image} style={{ width: '16rem' }}/>}

        </ListGroupItem>
      }
      )}

      

   
  </ListGroup>
  <Card.Body>
    <form onSubmit={(evt)=> this.props.postForm(
      evt.preventDefault(),
      evt.target["name"].value,
      evt.target["content"].value,
      evt.target["image"].value,
      evt.target["video"].value,
      skaterId,
      spot)}>

                    <label>Name:</label>
                    <input type="text" name={"name"}></input>
                    <br/>
                    <label>Content:</label>
                    <input type="text" name={"content"}></input>
                    <br/>
                    <label>Image Url:</label>
                    <input type="text" name={"image"}></input>
                    <br/>
                    <label>Video Link:</label>
                    <input type="text" name={"video"}></input>
                    <br/>
                    
                    <button type="submit">Post</button>
                </form>
  </Card.Body>
</Card>}

     </div>    
       
        )
    }
}


export default Show
