import { Component, OnInit } from '@angular/core';

import { DataService } from "../data.service"
import { Post } from '../post';

@Component({
  selector: 'app-hola-mundo',
  templateUrl: './hola-mundo.component.html',
  styleUrls: ['./hola-mundo.component.css']
})
export class HolaMundoComponent implements OnInit {

  title = 'Welcome to angular'
  users: string[] = ['ryan', 'joe', 'cameron', 'john', 'bruce']
  activated: boolean = true
  name: string = 'Ryan Ray'
  age: number = 28
  address: {
    street: string,
    city: string
  }
  hobbies: string[]
  posts: Post[]

  constructor(private dataService: DataService) {
    this.age = 28
    this.address = {
      street: '2218 Baker street',
      city: 'London'
    }
    this.hobbies = ['swimming', 'read', 'write']
    this.dataService.getData().subscribe(data => {
      this.posts = data
    })
  }

  ngOnInit() {
  }

  sayHello() {
    alert('Hello');
  }

  deleteUser(user) {
    for (let i=0; i < this.users.length; i++)
      if (user == this.users[i])
        this.users.splice(i, 1)
  }

  addUser(newUser) {
    this.users.push(newUser.value)
    newUser.value = ''
    newUser.focus()
    return false
  }
}