import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IFan } from 'src/app/models/ifan';
import { FanService } from 'src/app/services/fan.service';
import { CustomValidators } from '../../handlers/custom-validators';
import { FormMapper } from '../../handlers/form-mapper';

@Component({
  selector: 'app-exo-fan-create',
  templateUrl: './exo-fan-create.component.html',
  styleUrls: ['./exo-fan-create.component.scss']
})
export class ExoFanCreateComponent implements OnInit {

  public registerForm!: FormGroup;
  public get titlesArray(): FormArray {
    if (this.registerForm.controls['titles']) return this.registerForm.controls['titles'] as FormArray;
    return this._fb.array([]);
  }
  public newTitle: string = "";

  constructor(private _fb: FormBuilder, private _fs: FanService, private _router: Router) { }

  ngOnInit(): void {
    this.registerForm = this._fb.group({
      name: [null, Validators.required],
      birthdate: [null, [Validators.required, CustomValidators.checkAge(13)]],
      titles: this._fb.array([])
    });
  }

  public addNewTitle() {
    if (this.newTitle.trim().length <= 0) throw new Error("No value in new title");
    if (this.titlesArray.value.includes(this.newTitle)) throw new Error("Title already registered");
    this.titlesArray.push(this._fb.control(this.newTitle));
    this.newTitle = "";
  }

  public onSubmit() {
    if (!this.registerForm.valid) throw new Error("RegisterForm invalid");
    let fan: IFan = FormMapper.convertToIFan(this.registerForm);
    this._fs.create(fan);
    this._router.navigate(['exos','exo_04']);
  }
}
