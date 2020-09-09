import {
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef,
  ComponentFactory,
  OnInit
} from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  { name = 'Angular';
public userForm: FormGroup;

constructor(private _fb: FormBuilder) {
  this.userForm = this._fb.group({
    firstName: ['', Validators.minLength(3)],
    lastName: [''],
    address: this._fb.array([])
    // address: this._fb.array([this.addAddressGroup()])
  });
}

private addAddressGroup(): FormGroup {
  return this._fb.group({
    street: [],
    city: [],
    state: [],
    contacts: this._fb.array([])
  });
}
newContactElement(): FormGroup {
return this._fb.group({
  formtitle: '',
  formPosition:''
})
} 

private contactsGroup(): FormGroup {
  return this._fb.group({
    contactPerson: ['', Validators.required],
    phoneNumber: ['', [Validators.maxLength(10)]], 
  });
}

get addressArray(): FormArray {
  return <FormArray>this.userForm.get('address');
}

addAddress(): void {
  this.addressArray.push(this.addAddressGroup());
}

addEmployee(){
  this.addressArray.push(this.newContactElement());
}

removeAddress(index: number): void {
  this.addressArray.removeAt(index);
}

addContact(index): void {
  (<FormArray>(<FormGroup>this.addressArray.controls[index]).controls.contacts).push(this.contactsGroup());
}

deletePhoneNumber(control, index) {
  control.removeAt(index)
}

selectfield(item){
// console.log(item.controls);
console.log(Object.keys(item.controls).length);
if (Object.keys(item.controls).length == 4){
  return true;
}
return false;
}
}
