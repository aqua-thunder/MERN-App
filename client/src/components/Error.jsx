import React from 'react'

const Error = () => {
    return (
        <div>
            <div className="min-h-screen flex items-center justify-center  p-4">
                <div className="text-center max-w-md">
                    <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                        404
                    </h1>
                    <p className="text-2xl font-semibold mt-4 text-blue-800">Page Not Found</p>
                    <p className="mt-2 text-gray-500">
                        Oops! The page you're looking for doesn't exist.
                    </p>

                    <div className="mt-6">
                        <a
                            href="/"
                            className="inline-block px-6 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition duration-300"
                        >
                            Go Home
                        </a>
                    </div>

                    <div className="mt-8 animate-pulse">
                        <svg
                            className="mx-auto h-24 w-24 text-blue-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 48 48"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M24 9v6m0 6v.01M24 30h.01M42 24c0 9.94-8.06 18-18 18S6 33.94 6 24 14.06 6 24 6s18 8.06 18 18z"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Error
