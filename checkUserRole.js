let curenUserIFAny = JSON.parse(localStorage.getItem("currentUser"));
let currentRole = "notlogged";
if (!curenUserIFAny) {
  const data1 = {
    role: "notloggedIn",
  };
  localStorage.setItem("currentUser", JSON.stringify(data1));
  currentRole = "notloggedIn";
} else {
  currentRole = curenUserIFAny.role;
}
console.log(curenUserIFAny);

if (currentRole === "demoUser") {
  window.location.href = "/demo.html";
} else if (currentRole === "user") {
  console.log("nice ");
} else if (currentRole === "admin") {
} else if (currentRole === "notloggedIn") {
  window.location.href = "/login.html";
}


