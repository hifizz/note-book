async function getNumber() {
  const num = await fetchAsync();
  return num;
}

function fetchAsync () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1)
    }, 1000)
  })
}

const result = getNumber()
console.log(result);
result.then( R => console.log(R) )
