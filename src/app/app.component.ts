import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    name = 'Angular';
    public userForm: FormGroup;

    constructor(private _fb: FormBuilder) {
        this.userForm = this._fb.group({
            questionTitle: [''],
            questionDesc: [''],
            address: this._fb.array([])
            // address: this._fb.array([this.addAddressGroup()])
        });
    }

    private addAddressGroup(): FormGroup {
        return this._fb.group({
            formTitle: [],
            formPosition: [],
            contacts: this._fb.array([this.contactsGroup()])
        });
    }
    newContactElement(): FormGroup {
        return this._fb.group({
            question: '',
            questionPosition: ''
        })
    }

    private contactsGroup(): FormGroup {
        return this._fb.group({
            elementTitle: [''],
            elementPosition: [''],
        });
    }

    get addressArray(): FormArray {
        return <FormArray>this.userForm.get('address');
    }

    addAddress(): void {
        this.addressArray.push(this.addAddressGroup());
    }

    addEmployee() {
        this.addressArray.push(this.newContactElement());
    }

    removeAddress(index: number) {
        this.addressArray.removeAt(index);
    }

    removeEmployee(index: number) {
        this.addressArray.removeAt(index);
    }

    removecontact(i: number, index: number) {
        // (<FormArray>(<FormGroup>this.addressArray.controls[i]).controls.contacts).removeAt(index);
        if ((<FormArray>(<FormGroup>this.addressArray.controls[i]).controls.contacts).length == 1) {
            alert('Form element cannot be empty.');
        }
        else{
            (<FormArray>(<FormGroup>this.addressArray.controls[i]).controls.contacts).removeAt(index);
        }
    }

    addContact(index): void {
        (<FormArray>(<FormGroup>this.addressArray.controls[index]).controls.contacts).push(this.contactsGroup());

    }


    selectfield(item) {
        // console.log(item.controls);
        // console.log(Object.keys(item.controls).length);
        if (Object.keys(item.controls).length == 3) {
            return true;
        }
        return false;
    }
}
