const uswesttime = document.querySelector("#uswesttime")
const useasttime = document.querySelector("#useasttime")
const europetime = document.querySelector("#europetime")
const asiatime = document.querySelector("#asiatime")

setInterval(() => {
  const date = new Date()
  uswesttime.innerText = (date.toLocaleString("en-US", {timeZone: "America/Anchorage"})).replace(", ", " - ")
  useasttime.innerText = (date.toLocaleString("en-US", {timeZone: "America/Chicago"})).replace(", ", " - ")
  europetime.innerText = (date.toLocaleString("en-US", {timeZone: "Atlantic/Cape_Verde"})).replace(", ", " - ")
  asiatime.innerText = (date.toLocaleString("en-US", {timeZone: "Asia/Bangkok"})).replace(", ", " - ")
}, 1000)