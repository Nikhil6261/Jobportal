import React from 'react'
import { useNavigate } from 'react-router-dom'



const Home = () => {

    const Navigate = useNavigate()

    return (

        <div className="bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <section className="text-center py-20 bg-white shadow-sm">
                <h1 className="text-4xl md:text-5xl font-bold text-blue-700">Welcome to JobPortal</h1>
                <p className="mt-4 text-gray-600 text-lg max-w-xl mx-auto">
                    Your one-stop solution to post and find jobs with ease.
                </p>
                <div className="mt-6 flex justify-center space-x-4">

                    <button onClick={() => Navigate('/login')}
                        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                        Browse Jobs
                    </button>

                    <button
                        onClick={() => { Navigate('/register') }}
                        className="px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
                    >
                        Post a Job
                    </button>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 px-4 md:px-12 bg-gray-100">
                <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-800 mb-10">
                    What You Can Do
                </h2>
                <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {/* Feature Card */}
                    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
                        <h3 className="text-lg font-bold text-blue-600 mb-2">Post Jobs</h3>
                        <p className="text-gray-600">
                            Companies and recruiters can easily post job openings and attract top talent.
                        </p>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
                        <h3 className="text-lg font-bold text-blue-600 mb-2">Browse Jobs</h3>
                        <p className="text-gray-600">
                            Job seekers can explore a wide range of opportunities tailored to their skills.
                        </p>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
                        <h3 className="text-lg font-bold text-blue-600 mb-2">Easy to Use</h3>
                        <p className="text-gray-600">
                            Clean interface and simple navigation make job search and hiring stress-free.
                        </p>
                    </div>
                </div>
            </section>
        </div>




    )
};

export default Home;

