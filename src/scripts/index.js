import "../styles/index.scss";
import $ from "jquery";

let form = document.getElementById("user-form");

form.addEventListener("submit", event => {
  let user = form.elements["user"];
  let avatarFile = form.elements["avatar-file"];

  let posting = {
    user: user.value,
    avatarFile: avatarFile.value
  };

  let promise = $.post(
    "http://5e150ca0bce1d10014baf007.mockapi.io/api/v1/users",
    posting
  );

  promise.then(
    data => console.log("success: ", data),
    error => console.log("error: ", error)
  );
  event.preventDefault();
});

/*  BASIC CHECK */
/*
form.addEventListener("submit", event => {
  let user = form.elements["user"];
  let userError = document.getElementById("user-error");

  if (user.value.length < 4) {
    userError.textContent = "Invalid Entry";
    userError.style.color = "red";
    user.style.borderColor = "red";
    user.focus();
    event.preventDefault();
  }
});
*/
