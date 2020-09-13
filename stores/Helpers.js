import {Task} from './Task';
import {Detail} from './Detail';

export  const erorHandler =err=>{
  console.log(err)
    if(err.response.data.error){
        return(err.response.data.error);
     }else{
         return(err.response.data)
     };
  }

  export const creatTasks=(data)=>{
    debugger
    if(data.constructor === Array){
    const allTasks=[]
    data.forEach(t =>allTasks.push(new Task(t._id,t.startDate,t.name,t.lastUpdate)))
    return allTasks
    }else {
       const newTask= new Task(data._id,data.startDate,data.name,data.lastUpdate)
       return newTask
    }
  }

  export const creatDetails=(data)=>{
    
    if(data.constructor === Array){
    const allDetails=[] 
    data.forEach(d =>allDetails.push(new Detail(d._id,d.name,d.isDone,d.taskId)))
    return allDetails
    }else {
        const newDetail= new Detail(data._id,data.name,data.isDone,data.taskId)
        return newDetail
     }
    }

     
    
