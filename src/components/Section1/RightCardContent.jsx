import {ArrowRight} from 'lucide-react'

const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
            <h2 className=' text-xl leading-normal bg-white rounded-full h-12 w-12 flex font-semibold items-center justify-center '>{props.id+1}</h2>
            <div>
                <p  className='[text-shadow:0_0_10px_#22d3ee,0_0_30px_#111] text-lg text-white mb-14 w-[90%] leading-relaxed'>{props.users.intro}</p>
                <div className='flex justify-between'>
                   <button className='bg-blue-600 text-white font-semibold px-8 py-2 rounded-full'>{props.users.tag}</button>
                <button className='bg-blue-600 text-white font-semibold px-3 py-2 rounded-full'><ArrowRight /></button>
                </div>
            </div>
        </div>
  )
}

export default RightCardContent
