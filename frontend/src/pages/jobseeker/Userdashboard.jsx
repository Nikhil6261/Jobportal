import { useEffect, useState } from 'react';
import instanceAxios from '../../api/ApiAxios';

const UserDashboard = () => {
    const [appliedJobs, setAppliedJobs] = useState([]);
    const user = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        async function fetchAppliedJobs() {
            try {
                const res = await instanceAxios.get('/user/postuser', { withCredentials: true });
                setAppliedJobs(res.data);
            } catch (err) {
                console.error("Error fetching applied jobs:", err);
            }
        }

        fetchAppliedJobs();
    }, []);

    return (
        <div className="bg-gray-50 min-h-screen py-8 px-4">
            <div className="max-w-5xl mx-auto">
                {/* Profile Section */}
                <div className="bg-white rounded-2xl shadow p-6 mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">👤 Profile Info</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-600">
                        <p><span className="font-medium">Name:</span> {user?.name}</p>
                        <p><span className="font-medium">Email:</span> {user?.email}</p>
                        <p><span className="font-medium">Role:</span> {user?.role}</p>
                    </div>
                </div>

                {/* Applied Jobs Section */}
                <div className="bg-white rounded-2xl shadow p-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">📝 Applied Jobs</h2>

                    {appliedJobs.length === 0 ? (
                        <p className="text-gray-500">No applied jobs yet.</p>
                    ) : (
                        <div className="grid md:grid-cols-2 gap-6">
                            {appliedJobs.map((job) => (
                                <div key={job.id} className="p-5 border border-gray-200 rounded-xl bg-gray-50 hover:bg-white transition">
                                    <h3 className="text-lg font-semibold text-gray-700">{job.title}</h3>
                                    <p className="text-gray-600">Company: <span className="font-medium">{job.company_name}</span></p>
                                    <p className="mt-1">
                                        Status:
                                        <span
                                            className={`ml-2 px-3 py-1 rounded-full text-sm font-semibold 
                                                ${
                                                    job.status === 'Selected'
                                                        ? 'bg-green-100 text-green-600'
                                                        : job.status === 'Rejected'
                                                        ? 'bg-red-100 text-red-600'
                                                        : 'bg-blue-100 text-blue-600'
                                                }`}
                                        >
                                            {job.status}
                                        </span>
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;
