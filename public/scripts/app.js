// Client facing scripts here
const checkMovieCategories = (inputValue) => {
  const options = {
  method: 'GET',
  url: 'https://mdblist.p.rapidapi.com/',
  params: {s: inputValue},
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
}





const addItemToCategory = (item, category) => {
  const productItem = `
  <li class="list-group-item ">
    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
    <label class="form-check-label" for="flexCheckDefault">
      ${item}
    </label>
  </li>
  `
  $(`.${category}`).prepend(productItem)
}



$(document).ready(function(){
  $(".task-form").on('submit', function(e){
    e.preventDefault()
    const inputValue = $('#itemInput').val()
    console.log(inputValue)
    const foodCategoryOptions = {
      method: 'GET',
      url: 'https://tasty.p.rapidapi.com/recipes/auto-complete',
      params: {prefix: inputValue},
      headers: {
        'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
        'X-RapidAPI-Key': '0a541a7215mshcf5407821f35232p1d7358jsn1173d3a79f29'
      }
    };

    try {
      axios.request(foodCategoryOptions).then(function (response) {
        //	console.log(response.data);
        const dataType = []
          response.data.results.forEach((response)=>{
            console.log(response.type)
            if(response.type !== "ingredient"){
              dataType.push(false)
              checkMovieCategories(inputValue)
              return
            } else {
              dataType.push(true)
            }
          })
          if(!dataType.includes(false)){
            addItemToCategory(inputValue, 'foodcategorylist')
          }

        }).catch(function (error) {
          console.error(error);
        });
    } catch (error) {
      console.log(error)
    }
  })
})
