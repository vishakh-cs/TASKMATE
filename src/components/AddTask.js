import React from 'react'

export const AddTask = ({taskList ,setTaskList, task ,setTask}) => {

  function handdleSubmit(e){
    e.preventDefault()

    if(task.id){
      const date = new Date();
      const updatedTasklist = taskList.map((todo) => (
        todo.id === task.id ? {id: task.id, name: task.name, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`} : todo
      ));
      setTaskList(updatedTasklist);
      setTask({});
    } else {
      const date = new Date();
      const newTask = {
        id: date.getTime(), 
        name: e.target.task.value, 
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
      }
      setTaskList([...taskList, newTask]);
      setTask({});
    }
  }

  return (
    <section className='addTask' >
      <form onSubmit={handdleSubmit}>
        <input type='text' name='task'autoComplete="off" value={task.name ||""} placeholder='Add task' maxLength="30" onChange={(e) => setTask({ ...task, name: e.target.value })} />
        <button type='submit' >{task.id ?'Update': 'Add Task' }</button>
      </form>
    </section>
  )
}
