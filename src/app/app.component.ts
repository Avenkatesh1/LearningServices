import { Component, OnInit } from '@angular/core';
import { ModulerService } from './services/moduler.service';
// import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // title = 'FirbaseCURD';

//   pageTitle:string= "Services in Angular";
users:any;
  
  constructor(private madularServices:ModulerService,
    // private el: ElementRef, private renderer: Renderer2
    ) {}
  // @HostListener('keypress', ['$event'])
  // onKeyPress(event: KeyboardEvent) {
  //   const allowedRegex = /^[0-9,A-Z,a-z]*$/;
  //   if (!allowedRegex.test(event.key) && event.key !== 'Backspace') {
  //     event.preventDefault();
  //   }
  // }

  ngOnInit(): void {
    this.madularServices.getAlluser().subscribe((data)=>{
      this.users=data; 

    })
  }
}



