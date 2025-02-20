import React from 'react'
import { useWorkoutsContext } from '../hooks/UseWorkoutsContext'

const WorkoutDetails = ({workout}) => {
  const {dispatch} = useWorkoutsContext()
  const handleClick=async()=>{
    const response = await fetch('https://gym-workoutmanegmentapp.onrender.com/api/workouts/'+ workout._id, {
      method: 'DELETE'
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type:'DELETE_WOROUT', payload:json})
    }
  }
  return (
    <div className='workout-details'>
        <h4>{workout.title}</h4>
        <p><strong>Load(kg) :</strong> {workout.load}</p>
        <p><strong>Reps:</strong> {workout.reps}</p>
        <p>{workout.createdAt}</p>

        <span onClick={handleClick}>delete</span>

    </div>
  )
}

export default WorkoutDetails
