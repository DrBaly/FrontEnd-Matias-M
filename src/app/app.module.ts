import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoapComponent } from './components/logoap/logoap.component';
import { IconosrsComponent } from './components/iconosrs/iconosrs.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';

import { HysComponent } from './components/hys/hys.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { interceptorProvider } from './service/interceptor-service';
import { ExperienciaComponent } from './components/workexperience/workexperience.component';
import { CortenegroComponent } from './components/cortenegro/cortenegro.component';
import { NeweducacionComponent } from './components/education2/neweducacion.component';
import { EditEducacionComponent } from './components/education2/editeducacion.component';

import { EducacionComponent } from './components/education2/education2.component';
import { NewExperienciaComponent } from './components/workexperience/new-experiencia.component';
import { FooterComponent } from './components/footer/footer.component';

import { EditExperienciaComponent } from './components/workexperience/edit-experiencia.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoapComponent,
    IconosrsComponent,
    BannerComponent,
    AboutmeComponent,
    HysComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    ExperienciaComponent,
    CortenegroComponent,
    FooterComponent,
    EducacionComponent,
    ProyectoComponent,
    NeweducacionComponent,
    EditEducacionComponent,
  ],
  imports: [
    BrowserModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
