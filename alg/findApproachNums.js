function findApproachNumber(arr, x) {
    let minVal = '', len = arr.length, minDiff = null;
    if (len <= 2) return arr;
    for(let i = 0; i < len - 1; i++) {
        for(let j = i; j < len - 1; j++) {
            const sum = arr[j] + arr[j+1], diff = Math.abs(sum - x);
            if (sum === x) return [j, j+1];
            if (minDiff === null || minDiff > diff) (minDiff = diff) && (minVal = `${arr[j]}-${arr[j+1]}`)
        }
    }
    return minVal.split("-").map(item => item - 0);
}

console.log(findApproachNumber([1,2,4,5,7,2,4,63,6], 10))

var type = function(data) {
    var toString = Object.prototype.toString;
    return  data instanceof Element
        ? "element" // 为了统一DOM节点类型输出
        : toString
            .call(data)
            .replace(/\[object\s(.+)\]/, "$1")
            .toLowerCase()
};

const dataReducer = (prev, cur, idx) => {
    let obj = {};
    const { name } = cur;
    obj[name] = cur;
    return {
        ...prev,
        ...obj
    }
}

const data = [
    {
          name: "Kris",
          age: "24"
    },
    {
          name: "Andy",
          age: "25"
    },
    {
          name: "Kitty",
          age: "25"
    },
    {
          name: "Andy",
          age: "25"
    },
    {
          name: "Kitty",
          age: "25"
    },
    {
          name: "Andy",
          age: "25"
    },
    {
          name: "Kitty",
          age: "25"
    }
]

const reducedData = data.reduce(dataReducer, {});
let newData = Object.values(reducedData);

const createList = (item, idx) => {
    let obj = {}
    obj[`a${idx}`] = "data"
    return obj
}
const listReducer = (acc, cur) => (!acc ? { ...cur } : { ...cur, ...acc })
const obj = Array.from(new Array(20), createList).reduce(listReducer);
console.log(obj)
