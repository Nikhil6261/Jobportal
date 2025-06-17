import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import instanceAxios from '../../api/ApiAxios';

const JobDashboard = () => {
    const navigate = useNavigate();
    const [jobs, setJobs] = useState([]);
    const user = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await instanceAxios.post('/user/post', { id: user.id }, { withCredentials: true });

                if (Array.isArray(res.data)) {
                    setJobs(res.data);
                } else {
                    console.warn("Expected array, got:", res.data);
                    setJobs([]);
                }
            } catch (err) {
                console.error("Error fetching jobs:", err);
            }
        };

        if (user?.id) getData();
    }, [user?.id]);

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-8">🏢 Employer Dashboard</h1>

                {/* Profile Info */}
                {user && (
                    <div className="bg-white p-6 rounded-2xl shadow mb-8">
                        <h2 className="text-xl font-semibold text-gray-700 mb-4">📋 Company Info</h2>
                        <p><strong>Name:</strong> {user.name}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Role:</strong> {user.role}</p>
                    </div>
                )}

                {/* Job Listings */}
                <div className="bg-white p-6 rounded-2xl shadow">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold text-gray-700">📂 Your Job Posts</h2>
                        <button
                            onClick={() => navigate("/jobform")}
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                        >
                            + Post New Job
                        </button>
                    </div>

                    <div className="space-y-6">
                        {jobs.length === 0 ? (
                            <p className="text-gray-500">No job posts found.</p>
                        ) : (
                            jobs.map((job) => (
                                <div
                                    key={job.id}
                                    className="border border-gray-200 rounded-xl p-4 shadow-sm bg-gray-50 hover:bg-white transition"
                                >
                                    <p className="text-lg font-medium text-gray-800">{job.title}</p>
                                    <p className="text-gray-600">Company: {job.company_name}</p>
                                    <p className="text-gray-600">Location: {job.location}</p>
                                    <button className="mt-2 text-sm text-blue-600 cursor-pointer hover:underline">
                                        View Applications
                                    </button>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDashboard;
