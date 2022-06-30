import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public isLoading: Boolean = false;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder) {

    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
   }

  ngOnInit(): void {

  }

  submitForm() {
    this.isLoading = true;
    const credentials = this.loginForm.value;
    this.authService.login(credentials).subscribe({
      next: (data: any) => {
        console.log('logado')
      },
      error: (error: any) => {
        console.log('senha incorreta');
      },
      complete: () => {
        this.isLoading = false;
      }
    })
  }

}
