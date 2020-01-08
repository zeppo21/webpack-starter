import $ from "jquery";

export function test_jquery_get() {
  console.log("\n************\nTest JQuery\n************\n");

  //let promise = $.get("http://myid.mockapi.io/api/v1/users");
  //let promise = $.get(
  //"http://5b32a4fd82407e001413f1df.myid.mockapi.io/api/v1/users"
  //);
  let promise = $.get(
    "http://5e150ca0bce1d10014baf007.mockapi.io/api/v1/users"
  );

  promise.then(
    data => console.log("success: ", data),
    error => console.log("error: ", error)
  );
}

export function test_jquery_post() {
  let user = {
    name: "Paul Martin",
    avatar: "paul.jpg"
  };

  let promise = $.post(
    "http://5e150ca0bce1d10014baf007.mockapi.io/api/v1/users",
    user
  );

  promise.then(
    data => console.log("data: ", data),
    error => console.log("error: ", error)
  );
}
