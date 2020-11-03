import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(
    private http: HttpClient
  ) { }

  getAllBlogs() {
    return this.http.get('http://localhost:3000/blogs');
  }

  addBlog(data) {
    return this.http.post('http://localhost:3000/blogs',data)
  }

  updata( category: string, title: string, desc: string, story: string, id: number, email: string, author:string, image:string) {
    const data = {
      'category': category,
      'title': title,
      'desc': desc,
      'story': story,
      'id': id,
      'email': email,
      'author': author,
      'image': image
    }
    console.log(data)
      return this.http.put('http://localhost:3000/blogs/' + id,data)

  }
}
