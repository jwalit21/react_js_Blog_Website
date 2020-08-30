import React from 'react';
import './style.css';
import Card from '../../components/UI/Card';

const Post = (props) => {
    return (
        <section className="container">
            <Card className="blogPost">Blogpost</Card>
            <div className="sidebar">Sidebar</div>
        </section>
    );
}

export default Post;
