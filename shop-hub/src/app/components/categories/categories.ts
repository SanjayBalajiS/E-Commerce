import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-categories',
  imports: [CommonModule],
  templateUrl: './categories.html',
  styleUrl: './categories.css',
})
export class Categories {

  categories = [
   { name: 'Electronics', image: 'https://image2url.com/r2/default/images/1773943155281-5e487f24-01e5-40cd-baa8-ca5540482666.jpg' },
  { name: 'Fashion', image: 'https://image2url.com/r2/default/images/1773942555166-a816cdae-5ecf-44cb-8e25-e1a1b7015b14.jpg' },
  { name: 'Home & Kitchen', image: 'https://image2url.com/r2/default/images/1773943350465-10162929-bb56-46f1-8790-c77d8fc73894.jpg' },
  { name: 'Beauty', image: 'https://image2url.com/r2/default/images/1773943252875-6a2389d3-2aaa-434c-817e-70fb0cee6eab.jpg' },
  { name: 'Sports', image: 'https://image2url.com/r2/default/images/1773942959497-a8f97e81-4ba7-4121-b47e-439bd7175c78.jpg' },
  { name: 'Books', image: 'https://image2url.com/r2/default/images/1773943048738-3859e283-3fb6-463d-aaab-f9d6b4c0984b.jpg' }

  ]

}
