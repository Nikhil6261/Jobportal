import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import instanceAxios from '../api/ApiAxios'
import {useMyContext} from '../context/userContext'

const Login = () => {

    const Navigate = useNavigate()
    const { register, handleSubmit, reset } = useForm()

    const { setUser } = useMyContext()

    async function submitHandel(data) {

        const logindata = await instanceAxios.post('/user/login', data)
        const user = logindata.data.user;  
        
        if (user.role === "jobseeker") {
            
            const dash = await instanceAxios.get('/user/dashboard')         
            Navigate('/userdashboard')
            
        }
        else if (user.role === "jobposter") {
            const dash = await instanceAxios.get('/user/jobdashboard')         
            Navigate('/jobdashboard')
        }
    }

    return (

        <div className="min-h-screen flex items-center justify-center bg-gray-100 " >
            <form onSubmit={handleSubmit(submitHandel)} className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md space-y-6">
                <h2 className="text-2xl font-bold text-gray-800 text-center">Sign In</h2>


                <div>
                    <label className="block text-gray-600 mb-1" htmlFor="email">Email</label>
                    <input
                        type="email"
                        {...register('email')}
                        placeholder="you@example.com"
                        className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-600 mb-1" htmlFor="password">Password</label>
                    <input
                        type="password"
                        {...register('password')}
                        placeholder="********"
                        className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-semibold py-2 rounded-xl hover:bg-blue-700 transition duration-300"
                >
                    Login
                </button>

                <p className="text-center text-gray-500 text-sm">
                    Don't have an account?
                    <a href="#" className="text-blue-600 hover:underline" onClick={() => { Navigate('/register') }} > Register</a>
                </p>
            </form>
        </div>

    )
}

export default Login
