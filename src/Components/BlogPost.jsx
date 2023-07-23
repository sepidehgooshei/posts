import React, { Component } from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";
export default class BlogPost extends Component {


    constructor(props) {
        super(props);
        this.state = {
            posts: null,
        }

    }

    async getPosts() {
        const posts = await fetch('http://localhost:3000/posts');

        return await posts.json();
    }

    componentDidMount() {
        this.getPosts().then(posts => this.setState({ posts}))
    }
    render(){
        return(
            <>
                 <Sidebar />
                 <Content />
       
           </>
        )
    }
}