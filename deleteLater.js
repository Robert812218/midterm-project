
<!DOCTYPE html>
<html lang="en">

<head>
  <title>Home Page</title>


  <link rel="stylesheet" href="/vendor/normalize-4.1.1.css" type="text/css" />
  <!-- CSS bootstrap -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  <link rel="stylesheet" href="/vendor/border-box.css" type="text/css" />
  <link rel="stylesheet" href="/styles/main.css" type="text/css" />
  <link rel="stylesheet" href="/styles/layout.css" type="text/css" />

  <script type="text/javascript" src="/vendor/jquery-3.0.0.js"></script>

  <script type="text/javascript" src="/scripts/app.js"></script>
</head>


<body class="bg-light">
  <header class="p-3 bg-dark text-white">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
            <use xlink:href="#bootstrap"></use>
          </svg>
        </a>

        <div class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor"
            class="bi bi-check2-circle text-warning" style="margin-right:10px;" viewBox="0 0 16 16">
            <path
              d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
            <path
              d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
          </svg>
          <h2>TO DO LIST </h2>
        </div>
        <div class="text-end">
          <button type="button" class="btn btn-outline-light me-2">Login</button>
          <button type="button" class="btn btn-warning">Sign-up</button>
        </div>
      </div>
    </div>
  </header>


  <!-- add item input -->
  <div class="container mb-5" style="margin-top:120px;">
        <div class="d-flex">
        <span class="input-group p-2">
          <form class="form-inline task-form">
          <input id="itemInput" class="form-control todo-item" placeholder="Add a ToDo!" name="item">
          <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </span>
      </div>
    <!--  groups   -->
    <div class="d-flex mt-5" style="justify-content: space-between;">

      <div class="card" style="width: 18rem;">
        <div class="card-header text-warning bg-dark">
          To Eat
        </div>
        <ul class="list-group list-group-flush" id="food-list">
          <li class="list-group-item ">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              Task 1
              <button type="button" class="btn btn-dark btn-sm" style="margin-left:70px;">more info</button>
            </label>
          </li>
          <li class="list-group-item ">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              Task 2
              <button type="button" class="btn btn-dark btn-sm" style="margin-left:70px;">more info</button>
            </label>
          </li>
          <li class="list-group-item ">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              Task 3
              <button type="button" class="btn btn-dark btn-sm" style="margin-left:70px;">more info</button>
            </label>
          </li>
        </ul>
      </div>
      <div class="card" style="width: 18rem;">
        <div class="card-header text-warning bg-dark">
          To Buy
        </div>
        <ul class="list-group list-group-flush" id="buy-list">
          <li class="list-group-item ">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              Task 1
              <button type="button" class="btn btn-dark btn-sm" style="margin-left:70px;">more info</button>
            </label>
          </li>
          <li class="list-group-item ">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              Task 2
              <button type="button" class="btn btn-dark btn-sm" style="margin-left:70px;">more info</button>
            </label>
          </li>
          <li class="list-group-item ">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              Task 3
              <button type="button" class="btn btn-dark btn-sm" style="margin-left:70px;">more info</button>
            </label>
          </li>
        </ul>
      </div>
      <div class="card" style="width: 18rem;" id="movie-list">
        <div class="card-header text-warning bg-dark">
          To Watch
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item ">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              Task 1
              <button type="button" class="btn btn-dark btn-sm" style="margin-left:70px;">more info</button>
            </label>
          </li>
          <li class="list-group-item ">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              Task 2
              <button type="button" class="btn btn-dark btn-sm" style="margin-left:70px;">more info</button>
            </label>
          </li>
          <li class="list-group-item ">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              Task 3
              <button type="button" class="btn btn-dark btn-sm" style="margin-left:70px;">more info</button>
            </label>
          </li>
        </ul>
      </div>
      <div class="card" style="width: 18rem;">
        <div class="card-header text-warning bg-dark">
          To Read
        </div>
        <ul class="list-group list-group-flush" id="read-list">
          <li class="list-group-item ">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              Task 1
              <button type="button" class="btn btn-dark btn-sm" style="margin-left:70px;">more info</button>
            </label>
          </li>
          <li class="list-group-item ">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              Task 2
              <button type="button" class="btn btn-dark btn-sm" style="margin-left:70px;">more info</button>
            </label>
          </li>
          <li class="list-group-item ">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              Task 3
              <button type="button" class="btn btn-dark btn-sm" style="margin-left:70px;">more info</button>
            </label>
          </li>
        </ul>
      </div>
      <div class="card" style="width: 18rem;">
        <div class="card-header text-warning bg-dark">
          General
        </div>
        <ul class="list-group list-group-flush" id="other-list">
          <li class="list-group-item ">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              Task 1
              <button type="button" class="btn btn-dark btn-sm" style="margin-left:70px;">more info</button>

            </label>
          </li>
          <li class="list-group-item ">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              Task 2
              <button type="button" class="btn btn-dark btn-sm" style="margin-left:70px;">more info</button>
            </label>
          </li>
          <li class="list-group-item ">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              Task 3
              <button type="button" class="btn btn-dark btn-sm" style="margin-left:70px;">more info</button>
            </label>
          </li>
        </ul>
      </div>
    </div>
  </div>



  <!-- JavaScript Bundle with Popper -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
    crossorigin="anonymous"></script>
</body>


</html>
