import { AlertCircle } from 'lucide-react'
import React from 'react'

const AlertMsg = ({msg}) => {
  return (
    <div className='p-4 bg-red-500
    mt-5 text-white rounded-md flex gap-5 itms-center'>
        <AlertCircle/>
        <strong>{msg}</strong>
    </div>
  )
}

export default AlertMsg