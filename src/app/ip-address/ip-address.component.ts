import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ip-address',
  templateUrl: './ip-address.component.html',
  styleUrls: ['./ip-address.component.css']
})
export class IpAddressComponent implements OnInit {

  checkForm: FormGroup;
  digits: number;
  ipClass: string;
  
  netId: String;
  hostId: String;
  

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.checkForm = this.fb.group({
      address: ['', [Validators.required,
      Validators.pattern(/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/)]]
    });
  }

  get address() {
    return this.checkForm.get('address');
  }


  // checkingIp() {
  //   let str = this.checkForm.controls.address.value;
  //   this.digits = str.split('.', 3);
  //   if (this.digits[0] >= 1 && this.digits[0] <= 126)
  //     alert("Class: A");
  //   else if (this.digits[0] >= 128 && this.digits[0] <= 191)
  //     alert("Class: B");
  //   else if (this.digits[0] >= 192 && this.digits[0] < 223)
  //     alert("Class: C");
  //   else if (this.digits[0] >= 224 && this.digits[0] <= 239)
  //     alert("Class: D");
  //   else
  //     alert("Class: E");

  // };

  //Adding new Code;
  checkingIp() {
    let str = this.checkForm.controls.address.value;
    this.ipClass = this.findClass(str);
    console.log("Given IP address belings to Class " + this.ipClass);
    this.seprate(str, this.ipClass);
  }

  findClass = function (str) {
    var index = str.indexOf('.');
    var ipsub = str.substring(0, index)
    var ip = parseInt(ipsub);
    if (ip >= 1 && ip <= 126)
      return "A";
    else if (ip >= 128 && ip <= 191)
      return "B";
    else if (ip >= 192 && ip < 223)
      return "C";
    else if (ip >= 224 && ip <= 239)
      return "D";
    else
      return "E";
   
  };
  // NetworkId.seprate
  seprate = function (str, ipClass) {
    var network = "";
    var host = "";
    if (ipClass === "A") {
      var index = str.indexOf('.');
      network = str.substring(0, index);
      host = str.substring(index + 1, str.length);
    }
    else if (ipClass === "B") {
      let index = -1;
      var dot = 2;
      for (var i = 0; i < str.length; i++) {
        {
          if ((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(str.charAt(i)) == '.'.charCodeAt(0)) {
            dot -= 1;
            if (dot === 0) {
              index = i;
              break;
            }
          }
        }

      }
      network = str.substring(0, index);
      host = str.substring(index + 1, str.length);
    }
    else if (ipClass === "C") {
      let index = -1;
      var dot = 3;
      for (var i = 0; i < str.length; i++) {
        {
          if ((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(str.charAt(i)) == '.'.charCodeAt(0)) {
            dot -= 1;
            if (dot === 0) {
              index = i;
              break;
            }
          }
        }
        ;
      }
      network = str.substring(0, index);
      host = str.substring(index + 1, str.length);
    }
    else if (ipClass === "D" || ipClass === "E") {
      console.info("In this Class, IP address is not divided into Network and Host IDs");
      return;
    }
    console.info("Network ID is " + network);
    console.info("Host ID is " + host);
    this.netId = network;
    this.hostId = host;
    
  };

  //}


}
