import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase , AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/observable';
import {Router} from '@angular/router';


@Component({
  selector: 'app-addskill',
  templateUrl: './addskill.component.html',
  styleUrls: ['./addskill.component.css']
})
export class AddskillComponent implements OnInit {
 data = {
  name:'',
  phone: '',
  skill:'',
  provice:'',
  price:'',
  comment:''
 }



  itemList:AngularFireList<any>

  constructor(public db:AngularFireDatabase , public Router:Router) {
    this.itemList = db.list('skills')
   }

  ngOnInit() {
 console.log(this.data.name)
  } 

  


  insertSkill(){
    this.itemList.push({
      name:this.data.name,
      phone: this.data.phone,
      skill:this.data.skill,
      provice:this.data.provice,
      price:this.data.price,
      comment:this.data.comment
    })
    this.Router.navigate(['/myskill'])
  }

}





 
