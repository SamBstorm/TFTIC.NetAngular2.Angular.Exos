import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { IFan } from 'src/app/models/ifan';
import { FanService } from 'src/app/services/fan.service';
import { CustomValidators } from '../../handlers/custom-validators';
import { FormMapper } from '../../handlers/form-mapper';

@Component({
  selector: 'app-exo-fan-update',
  templateUrl: './exo-fan-update.component.html',
  styleUrls: ['./exo-fan-update.component.scss']
})
export class ExoFanUpdateComponent implements OnInit {

  public fan!: IFan;
  public editForm! : FormGroup;

  public get titlesArray(): FormArray {
    if (this.editForm.controls['titles']) return this.editForm.controls['titles'] as FormArray;
    return this._fb.array([]);
  }
  public newTitle: string = "";

  constructor(private _ar : ActivatedRoute, private _fs : FanService, private _fb : FormBuilder, private _router : Router) { }

  ngOnInit(): void {
    try {
      this.fan = this._ar.snapshot.data['fan'];
    } catch (error) {
      this._router.navigate(['exos','exo_04']);
    }
    this.editForm = this._fb.group({
      name: [this.fan.name, Validators.required],
      birthdate: [this.fan.birthdate, [Validators.required, CustomValidators.checkAge(13)]],
      titles: this._fb.array([])
    });
    for (const title of this.fan.titles) {
      this.addNewTitle(title);
    } 
  }

  public addNewTitle(title? : string) {
    if (!title) title = this.newTitle;
    if (title.trim().length <= 0) throw new Error("No value in new title");
    if (this.titlesArray.value.includes(title)) throw new Error("Title already registered");
    this.titlesArray.push(this._fb.control(title));
    this.newTitle = "";
  }

  public onSubmit(){
    if (!this.editForm.valid) throw new Error("editForm invalid");
    let fan: IFan = FormMapper.convertToIFan(this.editForm);
    this._fs.update(this._ar.snapshot.params['name'],fan);
    this._router.navigate(['exos','fan',fan.name]);
  }
}
