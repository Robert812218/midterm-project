// Client facing scripts here

$(document).ready(function() {
  // keeps login/register forms open after buttons are clicked(true)
  const $loginActive = false;
  const $registerActive = false;
  console.log('BIGGE TEST, THIS IS A TEST');
  function renderLogin() {
    let $formInfo = (`
      <h1>LOGIN</h1>
      <form method="login">
        <label for="user-login">Email: </label>
        <input type="email" name="login-email">
        <hr />
        <label for="password-login">Password: </label>
        <input class="form-control" type="password">
        <button type="submit">LOGIN</button>
      </form>
    `);
    let $formArea = $(`<div class="login-area"></div>`);

    $formArea.append($formInfo);

    return $formArea;
  }

  function renderRegister() {
    let $registerInfo = (`
      <h1>REGISTER</h1>
        <form method="POST" action="/register">
          <label for="new-user">Email: </label>
          <input type="email" name="new-user">
          <hr />
          <label for="new-password">Password: </label>
          <input type="password" name="new-password-1">
          <button type="submit">SUBMIT</button>
      </form>
    `);
    let $registerArea = $(`<div class=register-area></div>`);
    registerArea.append($registerInfo);
    return $registerArea;
  }

  const $loginButton = $('#login-button');
  $loginButton.click(function() {
    $loginActive = true;
    const form = renderLogin();
    $(`.login-area`).append(form);
  });

  const $registerButton = $(`#register-button`);
  $registerButton.click(function() {
    $registerActive = true;
    const form2 = renderRegister();
    $(`.register-area`).append(form2);
  });
});