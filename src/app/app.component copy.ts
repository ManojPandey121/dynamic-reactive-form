import {
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef,
  ComponentFactory,
  OnInit
} from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'test-angular';

  empContact = <any>[];
  empform:FormGroup;
  
  @ViewChild('messagecontainer', { read: ViewContainerRef }) 
      public target: ViewContainerRef;


constructor(private fb:FormBuilder) {
  this.empform = this.fb.group({
    questions: this.fb.array([]),
    // contacts: this.fb.array([])

  })
 }
 checkitem(item){
   console.log(item)
   console.log(item.controls['firstName'])
 }
 questions(): FormArray {
  return this.empform.get("questions") as FormArray
}
contacts(): FormArray {
  return this.empform.get("contacts") as FormArray
}

newEmployee(): FormGroup {
  return this.fb.group({
    firstName: '',
    lastName: '',
    skills:this.fb.array([])
  })
}

newContact(): FormGroup {
  return this.fb.group({
    formData: this.fb.array([])
  })
}  
newContactElement(): FormGroup {
  return this.fb.group({
    formtitle: '',
    formelement:this.fb.array([])
  })
} 

addEmployee() {
  this.empContact.push(this.newEmployee());
  // console.log(this.empContact[0].controls);
  this.questions().push(this.newEmployee());
}
selectfield(item){
  // console.log(Object.keys(item.controls).length);
  if (Object.keys(item.controls).length == 3){
    return true;
  }
  return false;
}

addContact() {
  // this.empContact.push(this.newContact());
  // console.log(this.empContact);
  // console.log((this.empContact).length);
  // this.contacts().push(this.newContact());
  
  this.questions().push(this.newContact());

  console.log(this.questions())

}
removeContact(contactIndex:number) {
  this.contacts().removeAt(contactIndex);
}


removeEmployee(empIndex:number) {
  this.questions().removeAt(empIndex);
}

formElements(contactIndex:number) : FormArray {
  return this.questions().at(contactIndex).get("formelement") as FormArray
}
newformElement(): FormGroup {
  return this.fb.group({
    elementTitle: '',
    elementPosition: '',
  })
}
addnewFormElement(elementIndex:number) {
  this.formElements(elementIndex).push(this.newformElement());
}
removeFormElement(contactIndex:number,elementIndex:number) {
  this.formElements(contactIndex).removeAt(elementIndex);
}

onSubmit() {
  console.log(this.empform.value);
}

getempContact(data:any){
    if (data.length > 0) {
      console.log(data[0].controls)
      console.log(Object.keys(data[0].controls))
      return Object.keys(data[0].controls) ;
    }

}
}
