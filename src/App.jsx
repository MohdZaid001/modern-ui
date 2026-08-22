import React from 'react'
import Section1 from './components/Section1/Section1'

const user = [
  
  {
    img: "https://media.istockphoto.com/id/1386479261/photo/happy-excited-young-black-business-woman-professional-head-shot-portrait.jpg?s=612x612&w=0&k=20&c=LE5y0TE8iTErP7mKt5gJ38TIWiXJH7Q2mAovSto-zRc=",

    intro: "I am here to say that the services provided by this company were not up to my expectations.",
    tag: "Satisfied"
  },
  {
    img: "https://media.istockphoto.com/id/1475454238/video/meeting-presentation-and-applause-with-a-business-woman-in-celebration-of-reaching-a-goal-or.jpg?s=640x640&k=20&c=DBWcU8HYWpXHBzCXxdcLsSNs1qQthnGcpIKZzIBHvE4=",
    intro: "I am a professional woman and I am very happy with the services provided by this company.",
    tag: "Satisfied"
  },
  {
    img: "https://imgs.search.brave.com/yRlqz7zNupM_FYKmBRUi8b_jlkGL_emfyAH1d25LME4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjE4/NzY3MzAyOC9waG90/by9wb3J0cmFpdC1v/Zi1idXNpbmVzc3dv/bWFuLWluLXRoZS1v/ZmZpY2UuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPTZMWW8w/M3g5Vk1ia0lvSWJY/enk0WXdWek9tdXF5/em9ybnpCT1c5cTRL/VTA9",

    intro: "I am not satisfied with the services provided by this company.",
    tag: "Unsatisfied"
  },
  {
    img: "https://imgs.search.brave.com/DwSCI0dn7P0fscS8IFhrW83cYaPAselz67Doer_Btsk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ0/MDE4MjUwNS9waG90/by9jb25maWRlbnQt/ZmVtYWxlLWVudHJl/cHJlbmV1ci11c2lu/Zy1hLWxhcHRvcC1p/bi1oZXItd2FyZWhv/dXNlLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1vLTN1anp3/ck4xc2V6aWhRSjNm/Y1NUUTlCSE1LcDhJ/MXk5VUJtRzBVTmtR/PQ",
    intro: "I am happy with the services provided by this company.",
    tag: "Satisfied"
  }
]
const App = () => {
  return (
    <div>
      <Section1 users={user} />
    </div>
  )
}

export default App
