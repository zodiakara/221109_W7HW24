window.onload = () => {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => response.json())
    .then((books) => {
      console.log(books);
      renderBooks(books);
    });
};

const renderBooks = (books) => {
  const mainDiv = document.querySelector(".anotherDiv");
  books.forEach((book) => {
    let card = ` 
    <div class="col-md-3">
        <div class="card mb-3 ">
            
            <img class="card-img-top" style="height:60vh; object-fit:fill"src='${book.img}'/>
            <p class="mx-3">${book.category}</p>
            <div class="card-body">
            <div
            class="d-flex justify-content-between align-items-center">
            <h5 class="card-title text-truncate">${book.title}</h5>
            
            </div>

                <div class="btn-group justify-content-space-between">
                <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary">
                    skip
                </button>
                <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary">
                    add to cart
                </button>
                </div>
                <small class="text-muted">${book.price}$</small>
                </div>
            </div>
       
    </div>`;
    mainDiv.innerHTML += card;
  });
};
