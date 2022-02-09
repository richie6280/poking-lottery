import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'poking-lottery';

  win: boolean = true;
  //客製化可選圖片
  logo: string = "url('../assets/logo.png')";
  prize: string = "url('../assets/下載.jpeg')";
  banner: string = "#fff";

  ngOnInit() {
    const logo = document.querySelector('.container') as HTMLElement;
    logo.style.background = `${this.logo}`;
    logo.style.backgroundSize = 'contain';

    const banner = document.querySelector('.banner') as HTMLElement;
    banner.style.background = `${this.banner}`;
    banner.style.backgroundSize = 'contain';
  }

  poking(e: any): void {
    this.onlyOnce();

    const box = document.querySelector(`.${e.target.className}`) as HTMLElement;

    let hand = document.createElement('div');
    box.appendChild(hand);
    
    hand.style.backgroundImage = "url('../assets/hand.png')";
    hand.style.width = '10vw';
    hand.style.height = '10vw';
    hand.style.backgroundRepeat = 'no-repeat';
    hand.style.backgroundSize = 'contain';
    hand.style.position = 'relative';
    hand.style.top = '5vw';
    hand.style.transform = 'scale(1.25)'
    hand.style.transition = '.75s';
    hand.style.opacity = '.5';
    setTimeout(() => {
      hand.style.transform = 'scale(1.25) translateY(-3vw)';
      hand.style.opacity = '1';
      setTimeout(() => {
        hand.style.transform = 'translateY(-3vw) scale(1)';
        setTimeout(() => {
          hand.style.display = 'none';
          this.holeShow(box);
        }, 500)
      }, 600)
    }, 1)
  }

  holeShow(box: any) {
    box.classList.add('mask');
    let mask = document.querySelector('.mask') as HTMLElement;
    this.win ? mask.style.background = `${this.prize}` : mask.style.backgroundColor = '#000'; //是否中獎
    mask.style.backgroundSize = 'contain';

    const hole = document.createElement('div');
    box.appendChild(hole);
    hole.style.zIndex = '1';
    hole.style.position = 'absolute';
    hole.style.width = '32vw';
    hole.style.height = '32vw';
    hole.style.backgroundImage = "url('../assets/hole.png')";
    hole.style.backgroundSize = 'contain';
  }

  onlyOnce() {
    const pokingLottery = document.querySelector('.container') as HTMLElement;
    const preventRepeat = document.createElement('div');
    pokingLottery.append(preventRepeat);
    preventRepeat.style.width = '96vw';
    preventRepeat.style.height = '96vw';
    preventRepeat.style.zIndex = '1';
    preventRepeat.style.position = 'absolute';
  }

  change() {
    this.win = !this.win;
  }
}
