import RightCard from "./RightCard"


const RightContent = (props) => {
  return (
    <div className='overflow-auto p-6 h-full w-2/3 flex flex-nowrap gap-10' id='right'>
      {props.users.map((user, index) => (
        <RightCard key={index} id={index} users={user} />
      ))}
    </div>
  )
}

export default RightContent
