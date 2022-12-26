import { Component } from '@angular/core';

@Component({
  selector: 'app-introduce',
  templateUrl: './introduce.component.html',
  styleUrls: ['./introduce.component.scss']
})
export class IntroduceComponent {
  constructor() {

  }

  ngOnInit(): void {
   const add = document.getElementsByClassName("click")[0] as HTMLElement
    add.onclick = () => {
     add.classList.add("active");
    }
  }
}
