// Client facing scripts here




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
