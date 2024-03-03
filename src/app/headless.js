import React, {UseEffect, useState} from 'react'
import axios from 'axios'
import './blog.css';
 
export default function Blog({post}) {
    const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    axios
    .get('http://localhost:8000/wp-json/wp/v2/posts?_embed')
    .then((res) => {
      setPosts(res.data);
    });

    UseEffect(() => {
      fetchPosts()
    }, [])
  };
   
    return (
        <div class="container">
      <div class="blog-container">
        <p className="blog-date">
          {new Date(Date.now()).toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
        <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }}></h2>
        <p

          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />
        
      </div>
    </div>
  );
    

}