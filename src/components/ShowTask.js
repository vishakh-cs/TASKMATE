import React, { useEffect, useState } from 'react'

export const ShowTask = ({taskList ,setTaskList ,task ,setTask}) => {
  
  const [progress,setprogress] = useState(() => {
  const storedProgress = JSON.parse(localStorage.getItem('taskProgress')) || {};
  return storedProgress;
});
useEffect(() => {
  
  localStorage.setItem('taskProgress', JSON.stringify(progress));
}, [progress]);


  function handdleReset(){
    setTaskList([]);
  }
  function remove(id){
    const updatedTasks = taskList.filter(task=>task.id !==id);
    setTaskList(updatedTasks);

  }
  function edit(id){
    const editTask = taskList.find(task=>task.id ===id);
    setTask(editTask);
  }
  function toggleProgress(id) {
    setprogress((prevProgressMap) => ({
      ...prevProgressMap,
      [id]: !prevProgressMap[id],
    }));
  }

  return (
   <section className='showTask'>
    <div className='head'>
    <div>
      <span className='title'> Todo</span>
      <span className='count'>{taskList.length}</span> 
      </div>

      <button onClick={handdleReset} className='clearAll'>Clear All</button>
   </div>
   <ul>
    {taskList.map((task)=>(
         <li key={task.id} >
         <p>
         <span className="name">{task.name}</span>
        <span className="time">{task.time}</span>
         </p>
         <button className='isComplete' onClick={() => toggleProgress(task.id)} style={{background : progress[task.id]? "#10c51f" : "#330354"}}>
              {progress[task.id]? 'Done' : 'Completed ?'}
            </button>
         <i onClick={()=>edit(task.id)} className='bi bi-pencil-square'></i>
         <i onClick={()=>remove(task.id)} className='bi bi-trash'></i>
   
       </li>  

    ))}
   </ul>
   

   </section>
  )
}
