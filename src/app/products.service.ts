import { Injectable } from '@angular/core';
import { Products } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products = [ 
    {
      key: "Postimütsid", 
      value: [
        { id: 1, name: 'Püramiid', info: "300x300mm -	10€", info2:"200x200mm - 8€", type:"postimüts", imagePath: '../../../assets/mytspyramiid.jpg' },
        { id: 2, name: 'Lame', info: "300x300mm	- 10€", info2:"385x385mm - 13€", info3: "445x445mm - 15€", type:"postimüts", imagePath: '../../../assets/mytslame.jpg' },
        { id: 3, name: 'Postimüts tellise moodulile', info: "500x340mm 12€", type:"postimüts", imagePath: '../../../assets/myts5.jpg' },
        { id: 4, name: 'Soklimüts', info: "500x130mm - 3€", type:"postimüts", imagePath: '../../../assets/soklimüts2.jpg' },
        { id: 5, name: 'Kõrge', info: "320x320mm - 10€", type:"postimüts", imagePath: '../../../assets/mytsterav.jpg' },    
      ]
    },
    {
      key: "Imitatsiooniga soklid", 
      value: [
        { id: 6, name: 'Murtud kivi', info: "2500x250x60mm	- 30€",info2: "2000x250x60mm - 25€", type:"soklid", imagePath: '../../../assets/Murtudkivisokkel01.jpg' },
        { id: 7, name: 'Laotud tellis', info: "2500x220x45mm - 30€",info2: "2000x220x45mm - 25€", type:"soklid", imagePath: '../../../assets/Tellissokkel2.jpg' },
      ]
    },
    {
      key: "Kuivbetoonist aiapostimoodulid", 
      value: [
        { id: 9, name: 'Murtud kivi', type:"moodul", info: "250x250x250mm - 8€", imagePath: '../../../assets/moodul1.png' },
        { id: 10, name: 'Sile kuubik', type:"moodul", info: "250x250x245mm - 8€", imagePath: '../../../assets/blokk_2.jpg' },
        { id: 11, name: 'Laotud tellis', type:"moodul", info: "240x370x220mm - 10€", imagePath: '../../../assets/moodul3.jpg' }
          ]
    },



  ];

  getProducts() {
    return [...this.products];
  }

  constructor() { }
}
