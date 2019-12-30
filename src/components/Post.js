import React, { Component } from 'react'

export class Post extends Component {
    render() {
        const { author, content, image, video} = this.props.post
        return (
            <div>
                <h1>
                   {author} 
                </h1>
                <div>
                    {content}
                    <img alt="userimg" src={image}/>
                    {/* <iframe alt="uservid" src={video}/> */}
                </div>
            </div>
        )
    }
}

export default Post
