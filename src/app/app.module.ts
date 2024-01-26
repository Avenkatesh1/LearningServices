import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModulerService } from './services/moduler.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoderInterceptor } from './loder.interceptor';
// import { CustomclassDirective } from './customclass.directive';



@NgModule({
  declarations: [
    AppComponent,
    // CustomclassDirective,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
     
  ],
  providers: [ModulerService,{provide:HTTP_INTERCEPTORS,useClass:LoderInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
