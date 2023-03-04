const uswesttime = document.querySelector("#uswesttime")
const useasttime = document.querySelector("#useasttime")
const europetime = document.querySelector("#europetime")
const asiatime = document.querySelector("#asiatime")

setInterval(() => {
  const date = new Date()
  uswesttime.innerText = (date.toLocaleString("en-US", {timeZone: "America/Anchorage", weekday: "long", hour: "numeric", minute: "numeric", second: "numeric"})).replace(", ", " - ")
  useasttime.innerText = (date.toLocaleString("en-US", {timeZone: "America/Chicago", weekday: "long",hour: "numeric", minute: "numeric", second: "numeric"})).replace(", ", " - ")
  europetime.innerText = (date.toLocaleString("en-US", {timeZone: "Atlantic/Cape_Verde", weekday: "long", hour: "numeric", minute: "numeric", second: "numeric"})).replace(", ", " - ")
  asiatime.innerText = (date.toLocaleString("en-US", {timeZone: "Asia/Bangkok", weekday: "long", hour: "numeric", minute: "numeric", second: "numeric"})).replace(", ", " - ")
}, 1000)