const money = 20;
const user = { name: "fiffy" };

const checkShabuAble = new Promise((resolve, reject) => {
  money >= 300 ? resolve(user) : reject("Noooo!");
});

const canHaveShabu = result => {
  console.log("shabu", result.name);
};

const cannotHaveShabu = result => {
  console.log(result);
};

checkShabuAble.then(canHaveShabu).catch(cannotHaveShabu);
