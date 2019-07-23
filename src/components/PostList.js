import React, { Component } from 'react'
import axios from 'axios'
import './appStyle.css'

class PostList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            errorMsg: ''
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts1')
            .then(response => {
                this.setState({ posts: response.data })
            })
            .catch(error => {
                console.log(error)
                this.setState({
                    errorMsg: 'Error on retriving data'
                })
            })
    }

    render() {
        const { posts, errorMsg } = this.state
        return (
            <div>
                <h1>Http Request in reactjs</h1>
                {
                    posts.length ? posts.map(post => <div key={post.id}> {post.title} </div>) : null
                }
                {
                    errorMsg ? <h1 className = 'error'>{errorMsg}</h1> : null
                }
            </div>
        )
    }
}

export default PostList
