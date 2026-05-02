import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'


const Feed = () => {
    const [post, setPost] = useState([])
    const location = useLocation()

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await axios.get('http://localhost:3000/posts')
                const posts = Array.isArray(res.data?.post)
                    ? res.data.post
                    : Array.isArray(res.data?.posts)
                        ? res.data.posts
                        : []

                setPost(posts)
            } catch (error) {
                console.log(error)
            }
        }

        fetchPosts() 
    }, [location.state?.refreshAt])

    return (
        <section className='feed-section'>
            {
                post && post.length > 0 ?(
                    post.map((item) => (
                        <div className='post-card' key={item._id}>
                            <img src={item.image} alt={item.caption} />
                            <p>{item.caption}</p>
                        </div>
                    ))
                ) : (
                    <p>No posts available</p>
                )
            }
        </section>
    )
}

export default Feed
