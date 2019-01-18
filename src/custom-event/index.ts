// 以下代码需要在有DOM的环境中运行，例如浏览器

const div = document.createElement("div")

const buildEvent = new Event("build")

div.addEventListener("build", (event) => {
  console.log(event);
}, false)

div.dispatchEvent(buildEvent)

// --------------- CustomEvent ---------------

const deployEvent = new CustomEvent("deploy", {
  detail: "Dummy data, whatever you like.",
  bubbles: true,
  cancelable: true,
  composed: true
})

div.addEventListener("deploy", (event) => {
  console.log(event)
}, false)

div.dispatchEvent(deployEvent)
