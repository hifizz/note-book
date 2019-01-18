function StoreClass(name) {
  this.name = name
}

const AppStore = (function storeCreator() {
  let instance
  return function(name) {
    return instance || (instance = new StoreClass(name))
  }
})()

const appStore = AppStore("hifizz")
console.log(appStore.name); // hifizz

const app = AppStore("stack")
console.log(app.name); // hifizz
