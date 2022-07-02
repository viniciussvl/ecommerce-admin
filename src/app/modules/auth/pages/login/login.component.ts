import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import CustomValidator from 'src/app/core/utils/custom-validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  public isLoading: Boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder) {

    this.form = this.fb.group({
      email: ['', [Validators.required, CustomValidator.isEmail]],
      password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]]
    });
   }

  ngOnInit(): void {

  }

  get formControls(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  submitForm(): void {
    if(!this.form.valid) {
      return;
    }

    this.isLoading = true;
    const credentials = this.form.value;
    this.authService.login(credentials).subscribe({
      next: (data: any) => {
        this.router.navigateByUrl('/products');
      },
      error: (error: any) => {
        console.log('senha incorreta');
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
      }
    })
  }

}
