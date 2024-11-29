import React, { useEffect, useState } from 'react'
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'
import { useWorkoutsContext } from '../hooks/UseWorkoutsContext'

const Home = () => {

  const {workouts,dispatch }= useWorkoutsContext()
  // const [workouts,setWorkouts] = useState(null)
  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        //  hhs
        const response = await fetch("http://localhost:8000/api/workouts")
        console.log('Raw response:', response);
        const json = await response.json()

        // Check if the response is okay
        if (response.ok) {
          // setWorkouts(json) // Set workouts when the response is okay
          dispatch({type:'SET_WORKOUTS',payload:json})
        } else {
          console.error("Error fetching workouts:", json)
        }
      } catch (error) {
        console.error("Fetch error:", error)
      }
    }

    fetchWorkouts()
  }, [])
  return (
    <div className='home'>
     <div className="workouts">
      {workouts && workouts.map((workout)=>(
        
        // <p key={workout._id}>{workout.title}</p>
        <WorkoutDetails key={workout._id} workout={workout} />
      ))}
     </div>
     <WorkoutForm/>
    </div>
  )
}

export default Home