export function isactive() {
    return localStorage.getItem("user")
      ? true
      : false;
  }

  export function getDataUser() {
    // console.log(localStorage.getItem("user"))
    return JSON.parse(
        localStorage.getItem("user")
    );
  }