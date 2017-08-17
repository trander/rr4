import React from 'react';
import { Route, Link } from 'react-router-dom';

const Post = ({match}) => {
    return (
        <div>
            <h2>
                {match.params.title}
            </h2>
        </div>
    );
};

const Posts = () => {
    return (
        <div>
            <h1> Posts </h1>
            <Link to="/posts/react"> React </Link>
            <Link to="/posts/redux"> Redux </Link>
            <Link to="/posts/relay"> Realy </Link>
            <Route 
                path="/posts/:title" 
                component={Post} 
            /> 
        </div>
    );
};

export default Posts;