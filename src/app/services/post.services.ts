import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {Post} from "../models/post.models"

@Injectable({
    providedIn: 'root'
})
export class PostService {

    private readonly apiUrl = 'https://jsonplaceholder.typicode.com/posts'


    //O serviço do angular para consumo de API's
    constructor(private httpClient: HttpClient){}


    getPosts(): Observable<Post[]>{
        return this.httpClient.get<Post[]>(this.apiUrl)
    }    

    
    
}