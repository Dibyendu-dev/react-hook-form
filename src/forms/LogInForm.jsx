
import FieldSet from '../components/FieldSet'
import Field from '../components/Field'
import { useForm } from 'react-hook-form'

export const LogInForm = () => {
    const {register,handleSubmit,formState:{errors},setError} = useForm()
    const submitForm = (formData)=>{
        console.log(formData)
        const user = {
            email:'d@gmail.com',
            password:'123456789'
        }
        const found = formData.email===user.email && formData.password===user.password

        if(!found){
            setError("root.random",{
                message: "Invalid email or password",
            })
        }
    }
  return (
    <div>
        <form onSubmit={handleSubmit(submitForm)}>
            <FieldSet label="Enter LogIn Details">
                <Field label="Email" error={errors.email}>
                    <input
                    {...register('email',{required: "Email is required."})}
                    className={`w-full p-1 border box-border rounded ${!errors.email ? 'border-red-500' : 'border-gray-300'}`}
                     type="email" 
                     name='email'
                     id='email'
                     placeholder='Enter your email here'
                     /> 
                </Field>

                <Field label="Password" error={errors.password}>
                    <input
                    {...register('password',{required: "Password is required.",
                         minLength: {
                             value: 8,
                             message: "Password must be at least 8 characters."
                         }})}
                         className={`w-full p-1 border box-border rounded ${!errors.password ? 'border-red-500' : 'border-gray-300'}`}
                     type="password" 
                     name='password'
                     id='password'
                     placeholder='Enter your password here'
                     /> 
                </Field>
                <div>{errors?.root?.random?.message}</div>
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
