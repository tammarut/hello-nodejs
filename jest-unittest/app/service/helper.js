function getFullname(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

function greet(firstName, lastName) {
  const fullName = exportFunctions.getFullname(firstName, lastName);
  return `✋Hey, ${fullName}`;
}

const exportFunctions = {
  getFullname,
  greet,
};

module.exports = exportFunctions;
