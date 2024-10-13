export function quot(input) {
  return JSON.stringify(input)
}

export function toClass(str, upper=true) {
  return str
  .split(/[^a-z0-1)]/i) // Split by spaces
  .map(word => (upper?word.charAt(0).toUpperCase():word.charAt(0).toLowerCase()) + word.slice(1).toLowerCase()) // Capitalize first letter
  .join(''); // Join without spaces
}

export function toInstance(str) {
  return toClass(str, false)
}

export function toProperty(str) {
  return toInstance(str)

}

export default { quot, toClass, toInstance, toProperty }
