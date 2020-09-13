import { observable} from 'mobx'
export class Detail {
       @observable id
       @observable name
       @observable isDone 
       @observable taskId 

      constructor (id,name,isDone,taskId){
         this.id=id
         this.name=name
         this.isDone=isDone
         this.taskId=taskId
      }

}