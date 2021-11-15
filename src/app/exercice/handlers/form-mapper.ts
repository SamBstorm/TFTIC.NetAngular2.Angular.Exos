import { FormArray, FormGroup } from "@angular/forms";
import { IFan } from "src/app/models/ifan";

export class FormMapper {
    public static convertToIFan(form : FormGroup) : IFan{
        if(!form.controls['name']) throw new Error("No good FormGroup : missing FormControl 'name'.");
        if(!form.controls['birthdate']) throw new Error("No good FormGroup : missing FormControl 'birthdate'.");
        if(!form.controls['titles']) throw new Error("No good FormGroup : missing FormArray 'titles'.");
        
        let name = form.controls['name'].value;
        let birthdate = form.controls['birthdate'].value;
        let titlesArray = form.controls['titles'] as FormArray;
        let result : IFan =  {
            name: name,
            birthdate : new Date(birthdate),
            titles : []
        };
        for (const arrayValue of titlesArray.value) {
            result.titles.push(arrayValue);
        }
        return result;
    }
}
