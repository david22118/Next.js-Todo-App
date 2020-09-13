import { observable} from 'mobx'
export class Task {
       @observable id
       @observable startDate
       @observable lastUpdate 
       @observable name 

      constructor (id,startDate,name,lastUpdate){
         this.id=id
         this.startDate=startDate
         this.name=name
         this.lastUpdate=lastUpdate
        
      }

}