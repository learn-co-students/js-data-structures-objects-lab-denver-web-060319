// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value});
}

function destructivelyUpdateDriverWithKeyAndValue(object, key, value) {
  return Object.assign(object, {[key]: value});
}

function deleteFromDriverByKey(object, key) {
  const objClone = Object.assign({}, object);
  delete objClone[key];
  return objClone;
}

function destructivelyDeleteFromDriverByKey(object, key) {
  delete object[key];
  return object;
}