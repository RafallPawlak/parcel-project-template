
import Pagination from './pagination';

const container = document.getElementById('pagination');
//const pagination = new Pagination(container);

let pagination = null;

pagination = new Pagination(300, 10, container);
      pagination.create();