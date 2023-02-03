import {auth, provider} from '../config/firebase';
import { signInWithPopup } from 'firebase/auth';
import {useNavigate} from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate();

    const signInWithGoogle = async () => {
        const result = await signInWithPopup(auth, provider);
        navigate('/')
    };

  return (
    <div className='mx-auto w-fit p-3'>
      <h1 className='text-3xl font-bold mb-3'>Login page</h1> 
      <button onClick={signInWithGoogle} className='bg-blue-700 rounded px-2 py-1 text-white hover:scale-110 duration-300'>Sign in with google</button>
    </div>
  );
}

export default Login