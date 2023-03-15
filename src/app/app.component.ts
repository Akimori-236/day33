import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Item } from './models';
import { AddItemComponent } from './components/add-item.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  title = 'day33';

  items: Item[] = []
  selectedItem: Item | undefined = undefined

  @ViewChild(AddItemComponent)
  addItemComp!: AddItemComponent
  @ViewChild('modifyButton')
  modifyBtn!: ElementRef
  
  ngAfterViewInit(): void {

  }

  addToLog(item: Item) {
    this.items = [...this.items, item]
  }

  itemSelected(index: number) {
    this.selectedItem = this.items.at(index)
  }

  modifyItem() {
    console.log(this.addItemComp.value)
  }
}
