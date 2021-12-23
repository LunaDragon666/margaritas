const searchfield = document.querySelector(".name-filter");

searchfield.onkeyup = function (event) {
  const searching = event.target.value.trim().toLowerCase();

  const filteredSearch = data.filter(function (search) {
    if (search.margarita.toLowerCase().startsWith(searching)) {
      return true;
    }
    
  });
  filteredSearch();
};