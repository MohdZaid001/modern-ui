import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='shrink-0 overflow-hidden h-full w-70 relative rounded-4xl'>
        <img className='h-full w-full object-cover' src={props.users.img} alt="" />
        <RightCardContent id={props.id} users={props.users} />
    </div>
  )
}

export default RightCard
