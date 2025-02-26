// Named exports
export const firstFn = () => {
    console.log("Eerste functie");
}
export const secondFn = () => {
    console.log("Tweede functie");
    
}


type SumOrMultiFn = (a: number, b: number, c?: number) => number;
// type MultiFn = (a: number, b: number, c?: number) => number;

const sum: SumOrMultiFn = (a, b, c = 0) => {
    return a + b + c;
}

const theSum = sum(4, 2, 5);


const aMultiplier: SumOrMultiFn = (a, b, c = 1) => {
    return a * b * c;
}


sum(3, 2)


export const aString = "Test";



const obj = {
    firstName: "David",
    lastName: "Breckx"
}
export default obj;

// export default { firstFn: firstFn, secondFn: secondFn}