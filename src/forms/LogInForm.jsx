
import FieldSet from '../components/FieldSet'
import Field from '../components/Field'
import { useForm } from 'react-hook-form'

export const LogInForm = () => {
    const {register,handleSubmit} = useForm()
    const submitForm = (formData)=>{
        console.log(formData)
    }
  return (
    <div>
        <form onSubmit={handleSubmit(submitForm)}>
            <FieldSet label="Enter LogIn Details">
                <Field label="Email">
                    <input
                    {...register('email')}
                    className='w-full p-1 border box-border border-gray-300 rounded'
                     type="email" 
                     name='email'
                     id='email'
                     placeholder='Enter your email here'
                     /> 
                </Field>

                <Field label="Password">
                    <input
                    {...register('password')}
                    className='w-full p-1 border box-border border-gray-300 rounded'
                     type="password" 
                     name='password'
                     id='password'
                     placeholder='Enter your password here'
                     /> 
                </Field>
                <Field>
                    <button
                    className='m-auto p-1 border box-border bg-orange-400 border-gray-300 rounded cursor-pointer'
                   
                    >LogIn</button>
                </Field>
            </FieldSet>
        </form>
    </div>
  )
}
