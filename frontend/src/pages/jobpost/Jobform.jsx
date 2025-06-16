import React from 'react'
import { useForm } from 'react-hook-form'
import instanceAxios from '../../api/ApiAxios'
import { useNavigate } from 'react-router-dom'

const Jobform = () => {

const Navigate = useNavigate()

    const { register, handleSubmit, reset } = useForm()

    async function submithandle(data) {

        const res = await instanceAxios.post('/user/job/post', data, { withCredentials: true })

        if(res.data) { Navigate('/jobdashboard') } 
                
    
    }

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <form
                onSubmit={handleSubmit(submithandle)}
                className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-2xl space-y-6"
            >
                <h2 className="text-2xl font-bold text-center text-gray-800">Post a Job</h2>

                <div>
                    <label className="block text-gray-600 mb-1">Job Title</label>
                    <input
                        type="text"
                        {...register('title')}
                        className="w-full border border-gray-300 px-4 py-2 rounded-xl focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-600 mb-1">Company Name</label>
                    <input
                        type="text"
                        {...register('company_name')}
                        className="w-full border border-gray-300 px-4 py-2 rounded-xl focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-600 mb-1">Location</label>
                    <input
                        type="text"
                        {...register('location')}
                        className="w-full border border-gray-300 px-4 py-2 rounded-xl focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-gray-600 mb-1">Description</label>
                    <textarea
                        {...register('description')}
                        rows={5}
                        className="w-full border border-gray-300 px-4 py-2 rounded-xl focus:ring-2 focus:ring-blue-500"
                        placeholder="Job description"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-xl font-semibold hover:bg-blue-700 transition duration-300"
                >
                    Post Job
                </button>
            </form>
        </div>
    )


}

export default Jobform
