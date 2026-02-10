import HashMap from "./hashmap.js";

const test = new HashMap();

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");

// console.log("After initial setting:");
// console.log(`Size: ${test.length()} / ${test.capacity}`);
// console.log(`Load factor: ${test.length() / test.capacity}`);
// console.log(test.entries());

test.set("apple", "red and green");
test.set("dog", "multicolor");

// console.log("After overwriting:");
// console.log(`Size: ${test.length()} / ${test.capacity}`);
// console.log(`Load factor: ${test.length() / test.capacity}`);
// console.log(test.entries());

test.set("moon", "silver");

// console.log("After exceeding load level:");
// console.log(`Size: ${test.length()} / ${test.capacity}`);
// console.log(`Load factor: ${test.length() / test.capacity}`);
// console.log(test.entries());

test.set("apple", "red");
test.set("dog", "brown");

// console.log("After overwriting again:");
// console.log(`Size: ${test.length()} / ${test.capacity}`);
// console.log(`Load factor: ${test.length() / test.capacity}`);
// console.log(test.entries());

console.log("Testing other functions:");
console.log(test.get("dog"));
console.log(test.get("non-existing key"));
console.log(test.has("dog"));
console.log(test.has("non-existing key"));
console.log(test.remove("moon"));
console.log(test.remove("non-existing key"));
console.log(test.entries());
console.log(test.keys());
console.log(test.values());
