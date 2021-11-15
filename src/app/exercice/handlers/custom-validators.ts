import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class CustomValidators {
    public static checkAge(minimalAge: number):ValidatorFn{
        return (control: AbstractControl): null|ValidationErrors=>{
            if(!control.value) return null;
            let date : Date = new Date(control.value);
            let today : Date = new Date();
            if(today.getFullYear()-date.getFullYear() < minimalAge) return {checkAge : "Bad date."}
            return null;
        }
    }
}
