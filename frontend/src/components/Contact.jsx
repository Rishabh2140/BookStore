import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
    return (
        <>
            <div class="bg-gray-100 flex items-center justify-center min-h-screen">
                <div class="flex items-center rounded-half justify-between w-full max-w-2xl bg-white p-4 shadow-md ">

                    <div class="p-4 bg-pink-500 text-white">It will be implemented later  </div>
                    <span className="text-blue-600 underline-offset-2 underline " ><Link to="/">back </Link></span>
                </div>
            </div>
        </>

    )
}

export default Contact