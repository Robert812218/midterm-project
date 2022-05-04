// Client facing scripts here
const checkMovieCategories = (inputValue) => {
  const options = {
    method: 'GET',
    url: 'https://mdblist.p.rapidapi.com/',
    params: { prefix: inputValue },
    headers: {
      'X-RapidAPI-Host': 'mdblist.p.rapidapi.com',
      'X-RapidAPI-Key': '0a541a7215mshcf5407821f35232p1d7358jsn1173d3a79f29'
    }
  };
  try {
    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  } catch (error) {
    console.error(error);
  }
};

const addItemToCategory = (item, category) => {
  const productItem = $(`
  <li class="list-group-item ">
    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
    <label class="form-check-label" for="flexCheckDefault">
      ${item}
    </label>
  </li>
  `);
  $(`#${category}-list`).prepend(productItem);
};



$(document).ready(function () {
  $(".task-form").on('submit', function (e) {
    e.preventDefault();

    $.post("/api/tasks", $(this).serialize())
      .then(data => {

        console.log(data);

        addItemToCategory(data.item, data.category)

      });
  });
});
