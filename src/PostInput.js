import React, { useState } from 'react';
import firebase from 'firebase';

export default function PostInput() {
  const [post, setPost] = useState({
    title: '',
    body: '',
    author: '',
  });

  async function addToFirebase() {
    const postCollection = firebase.firestore().collection('posts');
    // remember that writing to the server is an asynchronous action!
    const doc = await postCollection.add(post);
    postCollection.doc(doc.id).update({
      date: firebase.firestore.FieldValue.serverTimestamp(),
    });
  }

  return (
    <>
      <input onChange={(e) => setPost({ ...post, title: e.target.value })} />
      <input onChange={(e) => setPost({ ...post, body: e.target.value })} />
      <input onChange={(e) => setPost({ ...post, author: e.target.value })} />
      <button type="button" onClick={() => { addToFirebase(); }}>Submit</button>
    </>
  );
}
