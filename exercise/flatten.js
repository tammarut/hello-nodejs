// Input
let arr1=[1, [2], [3, 4, [5]]];

// Output
// [1, 2]

function flatten(arr) {
        let temp = [];
        function recursiveFlatten(arr) {
                for (let i = 0; i < arr.length; i++) {
                        if (Array.isArray(arr[i])) {
                                recursiveFlatten(arr[i]);
                        } else {
                                temp.push(arr[i]);
                        }
                }
        }
        recursiveFlatten(arr);

        return temp;
}
console.log("Before:", arr1);
console.log("After: ", flatten(arr1));

//arr1.forEach(el => console.log(el));

//function recurse(n) {
//        let nextNumber = n - 1;
//        let answer = n > 1 ? n * recurse(nextNumber) : n;
//
//        return answer;
//}
//
////console.log(recurse(5));
//let sum = n => {
//        let nextNumber = n - 1;
//        let answer = n > 1 ? n * recurse(nextNumber) : n;
//
//        return answer;
//};
//console.log(sum(5));
