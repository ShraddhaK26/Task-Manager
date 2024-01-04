import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApicallserviceService } from '../service/apicallservice.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {

  taskForm!: FormGroup;
showTask: Boolean=true;
  endPoint:string="task";
  showBtn:any;
  id: any;
  IdRecord:any;

constructor(private fb:FormBuilder,private router:Router,private apicallservice:ApicallserviceService
  ){} 
ngOnInit(){
  this.IdRecord=this.apicallservice.IdRecord;
  console.log(this.IdRecord,this.IdRecord);
  this.id=this.apicallservice.id;
  this.showBtn = this.apicallservice.showBtn;
  this.showTaskDetail();
 
}
ngDoCheck(){
  if(this.id){
    this.showTask=true;
    this.showBtn=false;
   }
  
}


showTaskDetail(){ 
  this.showBtn=true;
  this.showTask =!this.showTask;
  this.taskForm=this.fb.group({ 
  taskName :[this.IdRecord ? this.IdRecord[0]?.taskName:"",[Validators.required, Validators.pattern('[a-zA-Z ]*')]], 
  Discription :[this.IdRecord ? this.IdRecord[0]?.Discription:"",[Validators.required, Validators.pattern('[a-zA-Z ]*')]], 
  Date:[this.IdRecord ? this.IdRecord[0]?.Date:"",[Validators.required]] 
 }) 

}

Task(){
console.log('data',this.taskForm.value);
this.apicallservice.postApiCall(this.endPoint, this.taskForm.value).subscribe(response => {
  console.log("res>>",response);
  if(response){
    alert('Data submitted Successfuly...!!');
    this.showTask=false;
    
  }

})
}

Update(){
  this.apicallservice.patchApiCall("task",this.id,this.taskForm.value).subscribe((responce:any)=>{
    if(responce){ 
      alert('Data Updated Successfuly...!!');
    this.router.navigateByUrl("task-list");
    this.showTask=false;
    }
    })
}
ngOnDestroy(){
  console.log("destroy");
  this.apicallservice.showBtn = false;
  this.apicallservice.IdRecord=[];
  
}
}
