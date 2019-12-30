import React, { Component } from 'react'
import Post from './Post'

export class PostIndex extends Component {
    render() {
        return (
            <div>
                {
                    this.props.posts.map((postObj)=> < Post 
                    post={postObj} key={postObj.id}/>)
                }
            </div>
        )
    }
}

export default PostIndex
