import React from 'react'
import TicketCard from '../components/TicketCard'
const Dashboard = () => {
  
  const colors = [
    'rgb(255,179,186)',
    'rgb(255,223,186)',
    'rgb(255,255,186)',
    'rgb(186,255,201)',
    'rgb(186,255,255)'
  ]

  const tickets = [
    {
      category : 'Q1 2022',
      color:'red',
      title: 'NFT Safety 101',
      owner: 'Rishabh',
      avatar: 'https://media.istockphoto.com/vectors/black-silhouette-of-a-person-wearing-the-hood-vector-illustration-vector-id1247235558?k=20&m=1247235558&s=612x612&w=0&h=nMVRo4H2LQE-zLv9itU4Qh2U4u-MUfX7Jnv9j3XLGHA=',
      status:'stuck',
      priority: 5,
      progress :100,
      description : 'How to work with NFTs safely',
      timestamp : '2022-04-11T07:36:17+0000'
    },
    {
      category : 'Q2 2022',
      color:'blue',
      title: 'ML 101',
      owner: 'Rishabh',
      avatar: 'https://media.istockphoto.com/vectors/black-silhouette-of-a-person-wearing-the-hood-vector-illustration-vector-id1247235558?k=20&m=1247235558&s=612x612&w=0&h=nMVRo4H2LQE-zLv9itU4Qh2U4u-MUfX7Jnv9j3XLGHA=',
      status:'done',
      priority: 2,
      progress :30,
      description : 'Intro to create ML Models',
      timestamp : '2022-04-14T07:36:17+0000'
    },
    {
      category : 'Q2 2022',
      color:'red',
      title: 'AI 101',
      owner: 'Rishabh',
      avatar: 'https://media.istockphoto.com/vectors/black-silhouette-of-a-person-wearing-the-hood-vector-illustration-vector-id1247235558?k=20&m=1247235558&s=612x612&w=0&h=nMVRo4H2LQE-zLv9itU4Qh2U4u-MUfX7Jnv9j3XLGHA=',
      status:'done',
      priority: 2,
      progress :60,
      description : 'How to work with AI models safely',
      timestamp : '2022-04-15T07:36:17+0000'
    }
  ]
  
  const uniqueCategories = [
    ...new Set(tickets?.map(({category})=> category))
  ]

  console.log(uniqueCategories)

  return(
    <div className='dashboard'>
    <h1>My Projects</h1>
    <div className='ticket-container'>
      {tickets && uniqueCategories?.map((uniqueCategory,categoryIndex)=>(
          <div key={categoryIndex}>
            <h3>{uniqueCategory}</h3>
            {tickets.filter(ticket => ticket.category === uniqueCategory)
            .map((filteredTicket, _index) => (
              <TicketCard id={_index} color={colors[categoryIndex]||colors[0]} ticket={filteredTicket}/>
            ))}
          </div>

      ) )}
    </div>
    </div>
   )

 }

export default Dashboard