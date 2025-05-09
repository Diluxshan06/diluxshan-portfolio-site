import React from 'react'

const SingleContact = ({text,Image}) => {
  return (
    <div className='flex gap-4 items-center justify-start'>
        <Image className='text-3xl' />
        <p dangerouslySetInnerHTML={{__html:text}}></p>
    </div>
  )
}

export default SingleContact