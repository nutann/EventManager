import React from 'react'
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

export default function Posts({
  posts = [],
  signOut
}) {
  return (
    <>
      <h1>Posts</h1>
      <button onClick={signOut}>Sign out</button>
      {
        posts.map(post => (
          <Link to={`/post/${post.id}`} className={linkStyle} key={post.id}>
            <div key={post.id} className={postContainer}>
            <h1 className={postTitleStyle}>{post.vendorType}</h1>
            <ul>
            {
              post.vendorSubCategory && post.vendorSubCategory.map(subCategory => (
                <li>{subCategory}</li>
              ))
            }
            </ul>
              {/* <h1 className={postTitleStyle}>{post.name}</h1>
              <img alt="post" className={imageStyle} src={post.image} /> */}
            </div>
          </Link>
        ))
      }
    </>
  )
}

const postTitleStyle = css`
  margin: 15px 0px;
  color: #0070f3;
`

const linkStyle = css`
  text-decoration: none;
`

const postContainer = css`
  border-radius: 10px;
  padding: 1px 20px;
  border: 1px solid #ddd;
  margin-bottom: 20px;
  :hover {
    border-color: #0070f3;
  }
`
