'use client'

import { useSession } from 'next-auth/react'

export default function User() {
  const { data: session } = useSession()

  if (!session) return <div>Loading...</div>

  const clientSideData = {
    user: {
      name: session.user.name,
      email: session.user.email,
      image: session.user.image
    },
    expires: session.expires
  }

  return (
    <div>
      <pre>{JSON.stringify(clientSideData, null, 2)}</pre>
    </div>
  )
}
