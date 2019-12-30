// const sometext = "hey"
const { name, image, kind, details, zip} = this.props.spot
const spot = this.props.spot
return (
    <div onClick={(evt)=>this.props.handleClick(evt.target)}>
    {<Card style={{ width: '12rem' }}>
<Card.Img variant="top" src={image} />
<Card.Body>
<Card.Title>{name}</Card.Title>
<Card.Text>
{kind}
<br/>
{details}
{zip}
</Card.Text>
</Card.Body>
<ListGroup className="list-group-flush">
{spot.posts.map((post) => {
return <ListGroupItem>{post.content},{<img alt="postimg" src={post.image} style={{ width: '16rem' }}/>}</ListGroupItem>
}
)}
{/* <ListGroupItem>dsfvdfs</ListGroupItem>
<ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
<ListGroupItem>Vestibulum at eros</ListGroupItem> */}
</ListGroup>
<Card.Body>
<Card.Link href="#">Card Link</Card.Link>
<Card.Link href="#">Another Link</Card.Link>
</Card.Body>
</Card>}
{/* {<Post/>} */}
</div>      
)