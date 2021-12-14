import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  pd1Price = 150; 
  pd1Count = 0;
  pd1Sum = 0;
  pd2Price = 100; 
  pd2Count = 0;
  pd2Sum = 0;
  total=0;

  constructor() { }

  ngOnInit(): void {
  }

  calTotal(){
    this.total = this.pd1Sum + this.pd2Sum;
    
  }

  sumPd1(){
    this.pd1Sum = this.pd1Price * this.pd1Count;
    this.calTotal();
  }
  addPd1(){
    this.pd1Count++;
    if(this.pd1Count>5){
      this.pd1Count = 5;
    }
    this.sumPd1();
  }
  removePd1(){
    this.pd1Count--;
    if(this.pd1Count<0){
      this.pd1Count = 0;
    }
    this.sumPd1();
  }
  delPd1(){
    this.pd1Count=0;
    this.sumPd1();
  }

  sumPd2(){
    this.pd2Sum = this.pd2Price * this.pd2Count;
    this.calTotal();
  }
  addPd2(){
    this.pd2Count++;
    if(this.pd2Count>5){
      this.pd2Count = 5;
    }
    this.sumPd2();
  }
  removePd2(){
    this.pd2Count--;
    if(this.pd2Count<0){
      this.pd2Count = 0;
    }
    this.sumPd2();
  }
  delPd2(){
    this.pd2Count=0;
    this.sumPd2();
  }

  buy(){
    this.pd1Count = 0;
    this.pd2Count = 0;
    this.sumPd1();
    this.sumPd2();
  }

}
