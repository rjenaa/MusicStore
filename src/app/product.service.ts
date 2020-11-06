import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { AlbumStorePage } from '../../e2e/app.po';
import 'rxjs/add/operator/map'
import { Album } from './album';
import { Observable } from 'rxjs';
import { Product } from './product';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _productsUrl = '../assets/products.json'

  private _albumUrl = '../assets/album.json';

  constructor(private _http: Http) { }

  

  getAlbum(id: number):Observable<Album>{
    return this._http.get(this._albumUrl).map(response => 
    <Album>response.json());
  }

  getProducts():Observable<Product[]>{
    return this._http.get(this._productsUrl).map(response =>
      <Product[]>response.json())
  }
}