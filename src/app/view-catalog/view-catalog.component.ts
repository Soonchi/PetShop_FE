import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../service/catalog.service';
import {Catalog} from "../models/catalog";

@Component({
  selector: 'app-view-catalog',
  templateUrl: './view-catalog.component.html',
  styleUrls: ['./view-catalog.component.scss']
})
export class ViewCatalogComponent implements OnInit {
  listcatalog: Catalog[] = [];

  constructor(private catalogService: CatalogService) {
  }
  ngOnInit(): void {
    this.getAllCatalog()



  }

  getAllCatalog() {
    this.catalogService.getListCatalog().subscribe(data => {
      this.listcatalog = data;
      console.log(data);
    })
  }

  reloadpage() {
    window.location.reload()
  }
}
