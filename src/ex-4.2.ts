function processData(data: unknown) {
  return typeof data === "string" ? data.toUpperCase() : "Not a string"
}

console.log(processData("hello")); // ควรได้ "HELLO"
console.log(processData(123)); // ควรได้ "Not a string"

// Error ที่เจอคือ
//A function whose declared type is neither 'undefined', 'void', nor 'any' must return a value.