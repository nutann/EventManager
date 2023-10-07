// src/App.js
import React, { useState, useEffect } from "react";
import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom";
import { css } from '@emotion/react';
// import API from Amplify library
import { API, Auth } from 'aws-amplify'

// import query definition
import { listPosts, listVendorCategories } from './graphql/queries'
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Authenticator } from '@aws-amplify/ui-react';
import { Storage } from 'aws-amplify'
import { v4 as uuid } from 'uuid'
import Posts from './Posts';
import Post from './Post';
import Header from './Header';
import CreatePost from './CreatePost';
import Button from './Button';

function App() {
  const [userName, setUserName] = useState([]);
  const [images, setImages] = useState([])
    /* create a couple of pieces of initial state */
    const [showOverlay, updateOverlayVisibility] = useState(false);
    const [posts, updatePosts] = useState([]);
    const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetchPosts();
    fetchVendorCategories();
  //  checkUser();
  //  fetchImages();
  }, []);

  async function fetchPosts() {
    /* query the API, ask for 100 items */
    let postData = await API.graphql({ query: listPosts, variables: { limit: 100 }});
    let postsArray = postData.data.listPosts.items;
    /* map over the image keys in the posts array, get signed image URLs for each image */
    postsArray = await Promise.all(postsArray.map(async post => {
      const imageKey = await Storage.get(post.image);
      post.image = imageKey;
      return post;
    }));
    /* update the posts array in the local state */
    setPostState(postsArray);
  }
  async function setPostState(postsArray) {
    updatePosts(postsArray);
  }

  async function fetchVendorCategories() {
    /* query the API, ask for 100 items */
    let vendorData = await API.graphql({ query: listVendorCategories, variables: { limit: 100 }});
    let vendorArray = vendorData.data.listVendorCategories.items;
    /* update the posts array in the local state */
    setCategories(vendorArray);
  }

  async function checkUser() {
    const user = await Auth.currentAuthenticatedUser();
    setUserName(user.username);
    console.log('user: ', user.username);
    console.log('user attributes: ', user.attributes);
  }

  async function fetchImages() {
    // Fetch list of images from S3
    let s3images = await Storage.list('')
    // Get presigned URL for S3 images to display images in app
    s3images = await Promise.all(s3images.results.map(async image => {
      const signedImage = await Storage.get(image.key)
      return signedImage
    }))
    setImages(s3images)
  }
  function onChange(e) {
    if (!e.target.files[0]) return
    const file = e.target.files[0];
    // upload the image then fetch and rerender images
    Storage.put(uuid(), file).then (() => fetchImages())
  }

  return (
    <>
    <Authenticator>
       {({ signOut, user }) => (
    <div>
        <HashRouter>
          <div className={contentStyle}>
            <Header />
            <hr className={dividerStyle} />
            <Button title="New Post" onClick={() => updateOverlayVisibility(true)} />
            <Routes>
              <Route exact path="/" element={<Posts posts={categories} />} ></Route>
              <Route path="/post/:id" element={<Post />}></Route>
            </Routes>
          </div>
        </HashRouter>
        { showOverlay && (
          <CreatePost
            updateOverlayVisibility={updateOverlayVisibility}
            updatePosts={setPostState}
            posts={posts}
          />
        )}

      <button onClick={signOut}>Sign out</button>
    </div>
       )}
    </Authenticator>
    </>
  );
}
const dividerStyle = css`
  margin-top: 15px;
`

const contentStyle = css`
  min-height: calc(100vh - 45px);
  padding: 0px 40px;
`
export default App;