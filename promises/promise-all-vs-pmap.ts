// import pMap from "p-map";

//Method to wait for specified time of milliseconds
function wait(milliseconds: number, id: number) {
  return new Promise(resolve => setTimeout(() => {
      resolve(null);
      console.log(id + " resolved");
  }, milliseconds));
}

const executePromiseWithoutPmap = (async () => {
    const fillArray = (number: number) => {
      const array = [];
      for (let i = 0; i < number; i++) array.push({id: i, seconds: Math.random()});
      return array;
    };

    const array = fillArray(10);

    console.log("Array with " + array.length + " elements was created.");
    let counter = 0;
    array.forEach(async (p) => {
      console.log("Started: " + p.id);
      await wait(p.seconds * 1000, p.id);
    });
    console.log("tagil")
});

// const executePromiseWithPmap = (async () => {
//   const fillArray = (number: number) => {
//     const array = [];
//     for (let i = 0; i < number; i++) array.push(1);
//     return array;
//   };

//   const array = fillArray(1000);

//   console.log("Array with " + array.length + " elements was created.");
//   await pMap(array, async (e) => await wait(e * 1000), {concurrency: 5});
// });



executePromiseWithoutPmap()
