import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FacebookService, InitParams, LoginResponse } from 'ngx-facebook';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Africa';

  constructor(private fb: FacebookService) {
    const initParams: InitParams = {
      appId: '909595094480508',
      xfbml: true,
      version: 'v21.0'
    };

    fb.init(initParams);
  }

  loginWithFacebook(): void {
    this.fb.login()
      .then((response: LoginResponse) => console.log(response))
      .catch((error: any) => console.error(error));
  }
}
