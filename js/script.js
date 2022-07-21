// const generateNamesDiv = (count) => {
//   let newDivElement = document.createElement("div");
//   newDivElement.id = "randomId";
//   newDivElement.className= "container"
//   for (let x = 0; x < count; x++) {
//     let id = Math.floor(Math.random() * 50) + 1;
//     setTimeout(() => {
//       fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
//         .then((response) => response.json())
//         .then((data) => {
//           pElement = document.createElement("p");
//           pElement.innerText = data.name;
//           newDivElement.appendChild(pElement);
//         });
//     }, 1000);
//   }
//   return newDivElement
// };

// let divElement = document.getElementById("randomText");
// let myNAme = document.createElement("p");
// myNAme.innerText = "Marius Pasiulevicius";
// divElement.appendChild(myNAme);

// let newDivElement = generateNamesDiv(3);
// document.body.appendChild(newDivElement)

function dec2hex(dec) {
  return dec.toString(16).padStart(2, "0");
}

function generateId(len) {
  var arr = new Uint8Array((len || 40) / 2);
  window.crypto.getRandomValues(arr);
  return Array.from(arr, dec2hex).join("");
}

const randomNumer = (from, till) => {
  return Math.floor(Math.random() * (till - from + 1)) + from;
};

const randomNumerArray = (from, till, leng) => {
  let toReturn = [];
  for (let x = 0; x < leng; x++) {
    toReturn.push(randomNumer(from, till));
  }
  return toReturn;
};

const task01 = (text) => {
  let h1Tag = document.createElement("h1");
  h1Tag.innerText = text;
  return h1Tag;
};

const task02 = (text, tagNumber) => {
  let hTag = null;
  if (tagNumber >= 1 && tagNumber <= 6) {
    hTag = document.createElement(`h${tagNumber}`);
    hTag.innerText = text;
  } else {
    hTag = document.createElement("h1");
    hTag.innerText = "WrongTag number";
  }

  return hTag;
};

const task03 = () => {
  let newDivElement = document.createElement("div");
  const randomPw = generateId(10);
  let text = "";
  for (let indx = 0; indx < randomPw.length; indx++) {
    console.log(randomPw[indx]);
    if (randomPw[indx] >= "0" && randomPw[indx] <= "9") {
      text += randomPw[indx];
    } else if (text.length > 0) {
      newDivElement.appendChild(task01(text));
      text = "";
    }
  }
  if (text.length > 0) {
    newDivElement.appendChild(task01(text));
    text = "";
  }
  return newDivElement;
};


const task04 = (number) => {
  let toReturn = 0;
  for (let x = 2; x <= number / 2; x++) {
    if (number % x == 0) toReturn++;
  }
  return toReturn;
};

const task05 = () => {
  let myArray = [];
  for (let x = 0; x < 100; x++) {
    myArray.push(Math.floor(Math.random() * 45) + 33);
  }

  myArray.sort();
  console.log(myArray.sort((x, y) => task04(x) - task04(y)));
};

const task06 = () => {
  let myArray = [];
  for (let x = 0; x < 100; x++) {
    let randomNumber = Math.floor(Math.random() * 445) + 333;
    if (!task04(randomNumber)) {
      myArray.push(randomNumber);
    }
  }
  console.log(myArray);
};

const task07 = () => {
    const repeatTimes = randomNumer(10,30)
    let mainArray = randomNumerArray(0,10,randomNumer(9,19));
    mainArray.push(0);
    for (let x = 0; x < repeatTimes-1; x++) {
        let tempArray = randomNumerArray(0,10,randomNumer(9,19));
        tempArray.push(mainArray);
        mainArray = tempArray;
    }
    console.log(mainArray);
    return mainArray;
}

const task08 = () =>{
    let myArray = task07()
    let counter = 0;
    while(true){
      for (let x = 0; x < myArray.length-1; x++) {
        console.log(myArray[x])
          counter+=myArray[x];
        }
        let newArray =  myArray[myArray.length-1];
        myArray= newArray;
      if(myArray ==0){
        break;
      }
    }
    console.log(counter)
}


const task09  = () => {
  let randomArray = randomNumerArray(1,33,3);
  while(true){
    let slicedArray = randomArray.slice(-3)
    let isprimaryArray = true
    for (let x = 0; x < slicedArray.length; x++) {
      if(task04(slicedArray[x])>0 || slicedArray[x] ==1){
        isprimaryArray = false
      }
    }
    if(isprimaryArray) {
      break;
    }
    randomArray.push(randomNumer(1,33))
  }
  console.log(randomArray)
}


const findLowestNumberOnlyForTask10 = (array) => {
  let lowestNumber = array[0][0]
  for (let x = 0; x < 10; x++) {
    for (let y = 0; y < 10; y++) {
      if(array[x][y]<lowestNumber){
        lowestNumber = array[x][y]
      }
    }    
  }
  return lowestNumber;
}

const addToLowestNumber = (array, lowestNumber, toadd)=>{
  for (let x = 0; x < 10; x++) {
    for (let y = 0; y < 10; y++) {
      if(array[x][y] == lowestNumber){
        array[x][y]+=toadd
      }
    }    
  }
  return array;
}

const getPrimeAverage = (array)=>{
  let total = 0;
  let counter = 0;
  let numArray = [];
  for (let x = 0; x < 10; x++) {
    for (let y = 0; y < 10; y++) {
     if(task04(array[x][y])==0 && array[x][y] >1 ){
        total+=array[x][y];
        counter++;
        numArray.push(array[x][y])
      }
    }    
  }
  return total/counter;
}

const task10 = () => {
  let mainArray = [];
  for (let x = 0; x < 10; x++) {
    let subArray = [];
    for (let y = 0; y < 10; y++) {
      subArray.push(randomNumer(1,100));
    }
    mainArray.push(subArray);    
  }
  console.log(mainArray);
  while(true){
    if(getPrimeAverage(mainArray) < 70){
      const lowestNumber = findLowestNumberOnlyForTask10(mainArray);
      mainArray = addToLowestNumber(mainArray, lowestNumber, 3);
    }
    else{
      console.log(getPrimeAverage(mainArray));
      break;
    }
  }

  console.log(mainArray)
}

const generateArray =(size)=> {
    let array = []
    for (let x = 0; x < size; x++) {
    if(x<=size/2){
      array.push(0);
    }else if(randomNumer(0,1)){
      array.push(1)
    }else{
      array.push(0);
    }
  }
  return array;
}

const generateSubArray =(array)=> {
  for (let x = 0; x < array.length; x++) {
  if(array[x] ==1){
     array[x]=generateSubArray(generateArray(5))
  }    
}
return array;
}

const task11 = () => {
  const arraySize = randomNumer(11, 11);
  let mainArray = generateArray(arraySize);
  for (let x = 0; x < mainArray.length; x++) {
    if(mainArray[x]){
      mainArray[x] = generateSubArray(generateArray(5))
    }    
  }
  console.log(mainArray)
}

task11();

// task11();

// task10();

// task09();
// task08();
// task07()

// let divElement = document.getElementById("randomText");
// // 01
// divElement.appendChild(task01("Mano Teskstas"))
// // 02
// divElement.appendChild(task02("Mano Teskstas", 4))
// // 03
// divElement.appendChild(task03())
// task05();
// task06();
