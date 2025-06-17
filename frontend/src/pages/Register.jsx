import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import instanceAxios from '../api/ApiAxios'

const Register = () => {
  const { register, handleSubmit, reset } = useForm()
  
  const Navigate = useNavigate()

  async function Submithandle(data) {

    const newuser = await instanceAxios.post('/user/register', data)

    
    
    Navigate('/login')
    
    reset()
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-white">
      <form
        onSubmit={handleSubmit(Submithandle)}
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md space-y-6"
      >
        <h2 className="text-3xl font-bold text-indigo-700 text-center">Register</h2>

        {/* Name */}
        <div>
          <label className="block text-gray-700 mb-1" htmlFor="name">Full Name</label>
          <input
            {...register('name')}
            type="text"
            placeholder="John Doe"
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-700 mb-1" htmlFor="email">Email</label>
          <input
            {...register('email')}
            type="email"
            placeholder="you@example.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-gray-700 mb-1" htmlFor="password">Password</label>
          <input
            {...register('password')}
            type="password"
            placeholder="********"
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-gray-700 mb-1" htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            {...register('number')}
            placeholder="+91 9876543210"
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        {/* Role Selector */}
        <div>
          <label className="block text-gray-700 mb-1">Role</label>
          <select
            {...register('role')}
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          >
            <option value="">Select Role</option>
            <option value="jobseeker">Job Seeker</option>
            <option value="jobposter">Job Poster</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-xl hover:bg-indigo-700 transition duration-300"
        >
          Register
        </button>

        <p className="text-center text-gray-500 text-sm">
          Already have an account?{' '}
          <span
            onClick={() => Navigate('/login')}
            className="text-indigo-600 cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>
      </form>
    </div>
  )
}

export default Register
