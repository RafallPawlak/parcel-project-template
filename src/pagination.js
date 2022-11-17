import Tui from 'tui-pagination';
import './pagination.css';

class Pagination {
  constructor(totalItems, itemsPerPage, buttonHolderID) {
    this.totalItems = totalItems;
    this.itemsPerPage = itemsPerPage;
    this.buttonHolderID = buttonHolderID;
  }

  handler = null;
  buttonHolder = null;

  create() {
    this.buttonHolder = document.getElementById(this.buttonHolderID);
    this.handler = new Tui(this.buttonHolder, {
      totalItems: this.totalItems,
      itemsPerPage: this.itemsPerPage,
      visiblePages: 5,
      centerAlign: true,
    });
  }

  reset() {
    if (this.handler){
      this.handler = null;
      this.buttonHolder.innerHTML = '';
      this.buttonHolder = null;
    }
  }
}

export default Pagination;