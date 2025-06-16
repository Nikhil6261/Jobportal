import { useEffect } from 'react'


const Userdashboard = () => {

    useEffect(() => {

    }, [])


    return (
        <div>

            < div class="bg-gray-100 min-h-screen font-sans">

                <div class="max-w-4xl mx-auto p-6">

                    <h1 class="text-3xl font-bold text-gray-800 mb-6">👤 Jobseeker Dashboard</h1>

                    <div class="bg-white shadow-md rounded-xl p-6 mb-8">
                        <h2 class="text-xl font-semibold text-gray-700 mb-4">Profile Information</h2>
                        <div class="space-y-2 text-gray-600">
                            <p><strong>Name:</strong> Nikhil Ahirwar</p>
                            <p><strong>Email:</strong> nikhil@example.com</p>
                            <p><strong>Role:</strong> Jobseeker</p>
                        </div>
                    </div>

                    <div class="bg-white shadow-md rounded-xl p-6">
                        <h2 class="text-xl font-semibold text-gray-700 mb-4">📝 Applied Jobs</h2>

                        <div class="space-y-4">
                            <div class="border-b pb-3">
                                <p><strong>Job Title:</strong> Frontend Developer</p>
                                <p><strong>Company:</strong> Google</p>
                                <p><strong>Status:</strong> <span class="text-blue-600">Pending</span></p>
                            </div>

                            <div class="border-b pb-3">
                                <p><strong>Job Title:</strong> Backend Developer</p>
                                <p><strong>Company:</strong> Amazon</p>
                                <p><strong>Status:</strong> <span class="text-green-600">Selected</span></p>
                            </div>

                            <div class="border-b pb-3">
                                <p><strong>Job Title:</strong> UI/UX Designer</p>
                                <p><strong>Company:</strong> Adobe</p>
                                <p><strong>Status:</strong> <span class="text-red-600">Rejected</span></p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div >
    )

}


export default Userdashboard
