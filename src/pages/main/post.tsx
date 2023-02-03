import {Post as IPost} from './Home'

interface Props {
    post: IPost
}
const Post = (props: Props) => {
  const {post} = props;

  return (
    <div>
      <div className='title text-2xl font-bold'>
        <h1>{post.title}</h1> 
      </div>
      <div className='body text-lg'>
        <h1>{post.description}</h1>
      </div>
      <div className='footer text-sm'>
        <p>@{post.username}</p>
      </div>
    </div>
  )
}

export default Post
