import {useState, useEffect} from 'react';
import { getDocs, collection } from "firebase/firestore";
import { db, auth } from "../../config/firebase";
import Post from './post';
import {useAuthState} from 'react-firebase-hooks/auth';

export interface Post {
    id:string;
    userId:string;
    title:string;
    username:string;
    description:string;
}

const Home = () => {
  const [postsList, setPostsList] = useState<Post[] | null>(null);
  const postsRef = collection(db, 'posts');

  const getPosts = async () => {
    const data = await getDocs(postsRef);
    setPostsList(data.docs.map((doc) => ({...doc.data(), id: doc.id})) as Post[]); 
  }

  useEffect(() => {
    getPosts();
  },[])

  return (
    <div className="mx-auto w-fit p-3 text-center">
      <h1 className="text-3xl font-bold bg-blue-200 p-2 rounded text-violet-900">Home page</h1> 
      <div>{postsList?.map((post) => <Post post={post}/>)}</div>
    </div>
  )
}
 
export default Home
