'use client'

import { useSession, signOut } from 'next-auth/react'
import User from '@/app/components/User'

const Dashboard = () => {
  const { data: session } = useSession()

  return (
    <section className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl w-full">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Home</h1>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-600">Server Side Rendered</h2>
          <pre className="bg-gray-200 p-4 rounded-md overflow-x-auto text-sm text-gray-700">
            {JSON.stringify(session, null, 2)}
          </pre>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4 text-gray-600">Client Side Rendered</h2>
          <div className="bg-gray-200 p-4 rounded-md overflow-x-auto text-sm text-gray-700">
            <User />
          </div>
        </div>
        <div className='py-5 text-xl font-semibold mb-4 text-gray-600'>
          <button onClick={() => signOut()}>Sign Out</button>
        </div>
      </div>
    </section>
  )
}

export default Dashboard
