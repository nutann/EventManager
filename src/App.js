// src/App.js
import React from "react";
import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom";
import { css } from '@emotion/react';

// import query definition
import { Authenticator } from '@aws-amplify/ui-react';
import Posts from './Posts';
import Post from './Post';
import Header from './Header';


function App() {


  return (
    <>
    <Authenticator>
       {({ signOut }) => (
    <div>
        <HashRouter>
          <div className={contentStyle}>
            <Header />
            <hr className={dividerStyle} />
            <Routes>
              <Route exact path="/" element={<Posts posts={[]} signOut={signOut}/>} ></Route>
              <Route path="/post/:id" element={<Post />}></Route>
            </Routes>
          </div>
        </HashRouter>
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