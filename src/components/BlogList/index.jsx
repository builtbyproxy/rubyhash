import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import styles from './styles.module.scss'

const blogs = [
  {
    title: 'RubyHash',
    content: 'RubyHash is a blog for Ruby on Rails developers. We write about Ruby on Rails, JavaScript, React, and more.',
    image: 'https://source.unsplash.com/random',
    link: '/blog/rubyhash',
  },
  {
    title: 'RubyHash',
    content: 'RubyHash is a blog for Ruby on Rails developers. We write about Ruby on Rails, JavaScript, React, and more.',
    image: 'https://source.unsplash.com/random',
    link: '/blog/rubyhash',
  },
  {
    title: 'RubyHash',
    content: 'RubyHash is a blog for Ruby on Rails developers. We write about Ruby on Rails, JavaScript, React, and more.',
    image: 'https://source.unsplash.com/random',
    link: '/blog/rubyhash',
  }
]

const BlogList = () => {
  return (
    <div className={styles.container}>
      {blogs.map((blog) => (
        <Card key={blog.title} sx={{ width: '30%', margin: '0 10px' }}>
          <CardMedia
            component="img"
            height="140"
            image={blog.image}
            alt={blog.title}
          />
          <CardContent>
            <Typography variant="h6" component="div">
              {blog.title}
            </Typography>
          </CardContent>
          <a href={blog.link} target="_blank" rel="noopener noreferrer">
            Read More
          </a>
        </Card>
      ))}
    </div>
  );
};

export default BlogList;