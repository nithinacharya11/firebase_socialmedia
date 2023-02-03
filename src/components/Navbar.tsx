import {Link} from 'react-router-dom';
import {auth} from '../config/firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import {signOut} from 'firebase/auth'

const Navbar = () => {
    const [user] = useAuthState(auth);

    const signUserOut = async () => {
        await signOut(auth);
    }

  return (
    <div className='bg-blue-700 h-[10vh] text-white px-10'>
      <div className='flex items-center justify-end gap-10 h-[100%]'>
        <div className='hover:scale-110 duration-300'>
          <Link to="/">Home</Link>
        </div>
        <div className='hover:scale-110 duration-300'>
          {!user?<Link to='/login'>Login</Link>:<Link to='/createpost'>Create Post</Link>}
        </div>    
        <div> 
        {
            user && (
              <div className='flex gap-10 items-center'>
                <p>{user?.displayName}</p>
                <img src={user?.photoURL || ""} alt="user-image" className='rounded-full w-10'/>
                <button onClick={signUserOut} className='bg-blue-900 px-2 py-1 rounded hover:scale-110 duration-300'>Logout</button>
              </div> 
            )
        }
        </div>
      </div>
    </div>
  )
}

export default Navbar
