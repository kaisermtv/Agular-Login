import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { NavMenuComponent } from './admin/nav-menu/nav-menu.component';
import { DanboardComponent } from './admin/danboard/danboard.component';
import { NewUserComponent } from './admin/NewUser/new-user.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    DanboardComponent,
    NewUserComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: DanboardComponent, pathMatch: 'full' },
      { path: 'newuser', component: NewUserComponent },
    ])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
