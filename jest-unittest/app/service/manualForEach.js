function manualForEach(items, callback) {
  for (let i = 0; i < items.length; i++) {
    callback(items[i]);
  }
}

const items = [1, 2];

manualForEach(items, (item) => item + 10);

module.exports = manualForEach;
