import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-lodash',
  templateUrl: './lodash.component.html',
  styleUrls: ['./lodash.component.css']
})
export class LodashComponent implements OnInit {

   data = [
    {
      "name": "Ganesh",
      "address": "Darbhanga",
      "branch": "ECE",
      "add":{
        "state": "Bihar",
        "city": "Darbhanga",
        "pin": [846004, 846003, 846008]
      }
    },
     {
       "name": "Shashi",
       "address": "Bangalore",
       "branch": "CE",
       "add": {
         "state": "Bihar",
         "city": "Muf",
         "pin": [8460012, 8460013, 8460018]
       }
     },
     {
       "name": "Aditya",
       "address": "Rachi",
       "branch": "EEE",
       "add": {
         "state": "Jar",
         "city": "Rachi",
         "pin": [846000, 8460023, 8460038]
       }
     }
  ];

   myArr = [{ name: "john", age: 23 },
           { name: "john", age: 43 },
           { name: "jim", age: 101 },
            { name: "bob", age: 67 }];

  constructor() { }

  ngOnInit() {
   this.findingAllName();

  }

  findingAllName(){
    const OutputArr = _.filter(this.data, person => person.name === 'Ganesh');
    console.log(OutputArr);
    // const johnArr = _.filter(this.myArr, person => person.name === 'john');
    // console.log(johnArr)
    // let list = _.map(this.myArr, item => item.name === 'jhon');
    // console.log(list);
    let lists = _.map(this.myArr, d => d.name);
    console.log(lists);
    let listFilter = lists.filter(x => x === 'john');
    console.log(listFilter);
    let stateList = _.map(this.data, item => item.add.state);
    console.log(stateList);
    let filterList = stateList.filter(x => x === 'Bihar');
    console.log(filterList);

    //All Pin Code in to single Array
    let allPinCodeArray = _.map(this.data, item => item.add.pin);
    console.log(allPinCodeArray);
   
  }


  

}
