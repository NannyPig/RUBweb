const arr = [1, 2, 3, 4, 5];

// delete arr[3];

// console.log("AFTER DELETE: ", arr);

//  forEach -> index opvragen

for (let index = 0; index < arr.length; index++) {
  const element = arr[index];
  console.log(element, index);
}

arr.forEach((el, idx) => {
  console.log(el, idx);
});

// MAP methode

const mappedArr = arr.map((el) => el * 5);

console.log(mappedArr);

arr.push(9);

const obj = {
  firstName: "David",
};

obj.firstName = "Test";
obj.lastName = "Dhoe";

console.log(obj.street);

const myFunc = () => {
  console.log("Test");
  return undefined;
};

// FILTER methode

const filteredArr = arr.filter((el) => el > 2);

//TODO:  Verwijder 4 uit array
const minFourArr = arr.filter((el) => el !== 4);

// Reduce methode

let sum = 0;

arr.forEach((el) => {
  sum += el;
});

const sumArr = arr.reduce((acc, val) => (val % 2 === 0 ? acc + val : acc), 0);

// Rest parameter

const sumFn = (a, b) => {
  return a + b;
};

const anotherSumFn = (a, b, c = 0) => {
  return a + b + c;
};

const abstractSumFn = (...arr) => {
  return arr.reduce((acc, val) => acc + val, 0);
};

abstractSumFn();
// arr = [];
abstractSumFn(1, 2, 3);
// arr = [1, 2, 3];
abstractSumFn(2, 4, 5, 6, 7, 8);
// arr = [2, 4, 5, 6, 7, 8];

const student = {
  fName: "John",
  lName: "Dhoe",
  password: "Test123",
  address: {
    street: "Henleykaai",
  },
};

const newStudentRef = student;

const newStudent = { ...student };

student.fName = "Jane";

console.log(newStudent);

const studentWithoutPassword = { ...student, password: undefined };

console.log(studentWithoutPassword);

const [, , ...third] = [10, 20, [30, 40, 50], 60];

const fName = "David";

const {
  fName: firstName,
  lName,
  address: { street },
} = student;

console.log(street);

const newObj = {
  name: "Web 3",
  displayName: function () {
    console.log(this.name);
  },
};

newObj.displayName();

setTimeout(() => {
  console.log("Eerste uitvoering!");
  setTimeout(() => {
    console.log("Tweede uitvoering!");
    setTimeout(() => {
      console.log("Derde uitvoering!");
      setTimeout(() => {
        console.log("Vierde uitvoering!");
        setTimeout(() => {
          console.log("Vijfde uitvoering!");
          setTimeout(() => {
            console.log("Zesde uitvoering!");
            setTimeout(() => {
              console.log("Zevende uitvoering!");
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 2000);

// Promises

// Producing code

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const isSuccessfull = true;

    console.log("Response is binnengekomen!");

    if (isSuccessfull) {
      // Promise was succesvol - resolve
      const dataArr = ["Student 1", "Student 2"];
      resolve(dataArr);
    } else {
      // Promise niet succesvol - reject
      const error = "Er is een fout gebeurd";
      reject(error);
    }
  }, 1500);
});

// Consuming code

myPromise
  .then((data) => {
    console.log("Promise was succesvol met .then() ", data);
  })
  .catch((err) => {
    console.log("Promise was rejected met .catch()", err);
  })
  .finally(() => {
    console.log("Deze code wordt altijd uitgevoerd!");
  });

// Hoe werkt chaining van methodes
const promiseObj = {
  then: function (callback) {
    callback();
    return this;
  },
  catch: function (callback) {
    callback();
    return this;
  },
  finally: function (callback) {
    callback();
  },
};

promiseObj.then(() => {
  console.log("Mijn eigen promise object - naiëf");
});

setTimeout(() => {
  console.log("Timeout met 0");
}, 0);
console.log("Test achter timeout");

const response = fetch("https://hogent.be")
  .then((data) => {
    console.log("HOGENT Response is binnengekomen ", data);
  })
  .catch((err) => {
    console.log("HOGENT Fout bij response ", err);
  });

const myNewFunc = () => {
  return () => {};
};

const returnedFunc = myNewFunc();
returnedFunc();
