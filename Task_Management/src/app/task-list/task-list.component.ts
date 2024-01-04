import { Component } from '@angular/core';
import { ApicallserviceService } from '../service/apicallservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  endPoint:string="task";
  TaskData: any;
searchText: any;

constructor(private apicallservice:ApicallserviceService,private router:Router
  ){} 

ngOnInit(){
  this.getTaskData();
}

Headings =['Task Name','Discription','Date','Action'];

  getTaskData(){
    let endPoint ="task";
   this.apicallservice.getApiCall(endPoint).subscribe(res=>{
    this.TaskData = res;
    console.log("taskData",this.TaskData);
    
   })
 
 }
 backbtn(){
  this.apicallservice.id=null;
  this.router.navigateByUrl('')
 }
 edit(id:any){
 
  let IdRecord:any= [];
console.log("id" ,id);
this.TaskData.forEach((item:any) => {
if(item.id == id){
IdRecord.push(item)
}
})
console.log("record",IdRecord);
this.apicallservice.IdRecord=IdRecord;
this.apicallservice.id=id;
this.router.navigateByUrl('');

 }

 delete(id:any){
  console.log("id" ,id);
  this.apicallservice.deleteApiCall("task", id).subscribe(res=>{
    if(res){
      alert('Data Deleted Successfuly...!!');
    }
    this.getTaskData();
  })
 
  
}
}
