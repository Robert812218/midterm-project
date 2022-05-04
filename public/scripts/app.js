// Client facing scripts here




const addItemToCategory = (value, category) => {

  console.log(value, category)
  const hyperLinks = {
    movie: `https://www.imdb.com/find?q=${value.hyperString}&ref_=nv_sr_sm`,
    food : `https://tasty.co/search?q=${value.hyperString}&sort=popular`,
    buy: `https://www.amazon.ca/s?k=${value.hyperString}&crid=1VLI5L8C3HVLR&sprefix=chair%2Caps%2C92&ref=nb_sb_noss_1`,
    read: `https://www.google.com/search?tbm=bks&q=${value.hyperString}`
  }

  const ahref = hyperLinks[category]
  console.log('hello',ahref)

  const productItem = $(`<li class="list-group-item ">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
  <label class="form-check-label" for="flexCheckDefault">
    ${value.uiString}
    <button type="button" class="btn btn-dark btn-sm" style="margin-left:70px;"><a href =${ahref}> more info</a></button>
  </label>
</li>`)
  $(`#${category}-list`).prepend(productItem);
};



$(document).ready(function () {
  $(".task-form").on('submit', function (e) {
    e.preventDefault();

    $.post("/api/tasks", $(this).serialize())
      .then(data => {

        console.log(data);

        addItemToCategory(data.value, data.category)

      });
  });
});
