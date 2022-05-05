// Client facing scripts here




const addItemToCategory = (item, category) => {


  const hyperLinks = {
    movie: `https://www.imdb.com/find?q=${item}&ref_=nv_sr_sm`,
    food: `https://tasty.co/search?q=${item}&sort=popular`,
    buy: `https://www.amazon.ca/s?k=${item}&crid=1VLI5L8C3HVLR&sprefix=chair%2Caps%2C92&ref=nb_sb_noss_1`,
    read: `https://www.google.com/search?tbm=bks&q=${item}`
  }

  const ahref = hyperLinks[category]


  const productItem = $(`<li class="list-group-item ">
  <input class="form-check-input" type="checkbox" value=""
   id="check-${item.id}">
  <label class="form-check-label" for="check-${item.id}">
    ${item}
    <button type="button" class="btn btn-dark btn-sm" style="margin-left:70px;"><a href =${ahref}> more info</a></button>
  </label>
</li>`)
  $(`#${category}-list`).prepend(productItem);
};



$(document).ready(function () {

  const getTodos = () => {
    $.get('/api/tasks', (data) => {
      data.forEach(item => {
        viewsTodo(item)
      })

    })
  }
  getTodos();

  $(".task-form").on('submit', function (e) {
    e.preventDefault();

    $.post("/api/tasks", $(this).serialize())
      .then(data => {

        console.log(data);

        // addItemToCategory(data.value, data.category)
        viewsTodo(data.value)

      });
  });
});

const viewsTodo = (item) => {
  let category;
  if (item.category_id == 1) category = 'read';
  else if (item.category_id == 2) category = 'food';
  else if (item.category_id == 3) category = 'movie';
  else if (item.category_id == 4) category = 'buy';
  else if (item.category_id == 5) category = 'other';

  const linkArry = item.name.split(' ')
  console.log(linkArry);

  let linkParam = ''

  linkArry.forEach((item, index) => {
    if (index > 0) {
      linkParam += `+${item}`
    }
    else {
      linkParam += item
    }

  })
  console.log(linkParam);

  const hyperLinks = {
    movie: `https://www.imdb.com/find?q=${linkParam}&ref_=nv_sr_sm`,
    food: `https://tasty.co/search?q=${linkParam}&sort=popular`,
    buy: `https://www.amazon.ca/s?k=${linkParam}&crid=1VLI5L8C3HVLR&sprefix=chair%2Caps%2C92&ref=nb_sb_noss_1`,
    read: `https://www.google.com/search?tbm=bks&q=${linkParam}`
  }

  const ahref = hyperLinks[category]

  // create todo element
  const productItem = $(`<li class="list-group-item ">
  <input class="form-check-input" type="checkbox" value=""
    id="check-${item.id}" >
  <label class="form-check-label" for="check-${item.id}" >
    ${item.name}
    <button type="button" class="btn btn-dark btn-sm" style="margin-left:70px;"><a href =${ahref}> more info</a></button>
  </label>
</li>`)

  // add element to html
  $(`#${category}-list`).prepend(productItem);

  // listen on change of check box
  $(`#check-${item.id}`).on('change', (event) => {
    // throw line
    event.target.labels[0].style = 'text-decoration: line-through;'
    // request to delete from database
    $.get(`/api/tasks/${item.id}`, (data) => {
      console.log(data);
    })
  })
}
