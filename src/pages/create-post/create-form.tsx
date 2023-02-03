import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { addDoc, collection } from 'firebase/firestore';
import { auth, db } from '../../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import {useNavigate} from 'react-router-dom';

interface createFormData {
    title: string;
    description: string;
}

const CreateForm = () => {
  const [user]  = useAuthState(auth);
  const navigate = useNavigate();

  const schema = yup.object().shape({
    title: yup.string().required("Pls enter the title"),
    description: yup.string().required("Pls enter the description")
  })

  const { register, handleSubmit, formState:{errors}} = useForm<createFormData>({
    resolver: yupResolver(schema)
  })

  const postsRef = collection(db, 'posts')

  const onCreatePost = async (data: createFormData) => {
    await addDoc(postsRef, {
        ...data,
        username: user?.displayName,
        userId: user?.uid
    })

    navigate('/')
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onCreatePost)}  className='flex flex-col gap-3 items-center justify-start w-1/2 mx-auto py-4 px-2 border-2 bg-blue-300 rounded'>
        <input placeholder='title...' {...register("title")} className='border-2 p-1 w-full rounded'/>
        <p className='text-red-500'>{errors.title?.message}</p>
        <textarea placeholder='description...'{...register("description")} className='border-2 p-1 w-full rounded'/>
        <p className='text-red-500'>{errors.description?.message}</p>
        <input type="submit" className='bg-blue-600 rounded p-1 text-white hover:scale-110 duration-300 cursor-pointer'/>
      </form>
    </div>
  )
}

export default CreateForm
