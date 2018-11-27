import { People } from '../../providers/people/people';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Subscriber } from 'rxjs/Subscriber';
import { DetailContactPage } from '../../pages/detail-contact/detail-contact';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})

export class ContactPage {
  public people = [];
  public errorMessage : string;

  public reloadData = false;
  constructor(public navCtrl: NavController, public service:People,) {
    this.service.getPeopleFromApi()
    .subscribe(
      (response) => {
        console.log(response);
        this.people = response["results"]
      },
      (error) => console.log(error)
    )
  }
  toggleReloadData(){
    this.reloadData = !this.reloadData
  }

  //untuk fresh page
  doRefresh(e){
    this.service.getPeopleFromApi()
    .subscribe(
      (response) => {
        console.log(response);
        this.people = response["results"]
        e.complete()
      },
      (error) => {
        console.log(error)
      e.complete()
      }
    )
  }

  //untuk 
  doInfinite(e){
    this.service.getPeopleFromApi()
    .subscribe(
    data => this.people.push(...data["results"]),
    err => console.log(err),
    () => e.complete()
    )
  }

  //untuk detail contact
  pushPerson(user){
    this.navCtrl.push(DetailContactPage,user)
  }

} 
/* export class ContactPage {
  public people = [
    {
      gender: "male",
      name: { title: "mr", first: "julian", last: "kohl" },
      location: {
        street: "6797 mühlenweg",
        city: "kleve",
        state: "bremen",
        postcode: 87356
      },
      email: "julian.kohl@example.com",
      login: {
        username: "browndog589",
        password: "finish",
        salt: "BclbhNDG",
        md5: "f430331b5a0172280153c45e94d36782",
        sha1: "d4e3d6f2fdb275e5df4c1c7abe821b1b03ee3fee",
        sha256: "22d4d01aee50055c2e3acf5c5786c05b645f56680e84dcd5a20fc50c89d5f547"
      },
      dob: "1946-04-17 13:40:10",
      registered: "2008-08-14 21:32:15",
      phone: "0601-9171644",
      cell: "0174-3893722",
      id: { name: "", value: null },
      picture: {
        large: "https://randomuser.me/api/portraits/men/71.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/71.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/71.jpg"
      },
      nat: "DE"
    },
    
    {
      gender: "female",
      name: { title: "ms", first: "florence", last: "clarke" },
      location: {
        street: "2714 maunganui road",
        city: "whanganui",
        state: "bay of plenty",
        postcode: 32413
      },
      email: "florence.clarke@example.com",
      login: {
        username: "tinyostrich898",
        password: "stokes",
        salt: "gDj8C3ba",
        md5: "70de1cde511885b92c68cda2fd6b25f7",
        sha1: "16216ddb4ff0b8baa58bf941e600f161c50a151b",
        sha256: "1a3a1c023739f29c54e6ccba58604cf85c1ebfe5d15962192628cf5482f35898"
      },
      dob: "1990-02-19 09:50:41",
      registered: "2004-04-07 05:24:08",
      phone: "(227)-014-4248",
      cell: "(332)-165-5972",
      id: { name: "", value: null },
      picture: {
        large: "https://randomuser.me/api/portraits/women/47.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/47.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/47.jpg"
      },
      nat: "NZ"
    }
  ]
  public reloadData = false;
  constructor(public navCtrl: NavController) {}
  toggleReloadData(){
    this.reloadData = !this.reloadData
  }


} */


