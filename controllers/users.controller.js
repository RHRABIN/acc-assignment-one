let users = [
  {
    id: 1,
    gernder: "male",
    name: "mr jhon",
    contact: "+00567",
    address: "Dhaka, Bashundhara",
    photoUrl: "https://photo.url.com",
  },
  {
    id: 2,
    gender: "male",
    name: "mr david",
    contact: "+00569",
    address: "Mirpur, uttora",
    photoUrl: "https://photo.url.com",
  },
  {
    id: 3,
    gender: "male",
    name: "mr Rahim",
    contact: "+00568",
    address: "Khulna, Bagerhat",
    photoUrl: "https://photo.url.com",
  },
  {
    id: 4,
    gender: "famale",
    name: "Mrs. Abc",
    contact: "+00567",
    address: "Jessonre, Jinaidah",
    photoUrl: "https://photo.url.com",
  },
  {
    id: 5,
    gender: "male",
    name: "mr sakib",
    contact: "+00567",
    address: "Dhaka, Airput",
    photoUrl: "https://photo.url.com",
  },
];

module.exports.getAllUsers = (req, res) => {
  const { limit } = req.query;
  const e = users.splice(0, limit);
  res.send(e);
};
module.exports.saveAUser = (req, res) => {
  res.send("data");
};
module.exports.getRandomUser = (req, res) => {
  let randomUser = users[Math.floor(Math.random() * users.length)];
  res.send(randomUser);
};
module.exports.saveNewUser = (req, res) => {
  users.push(req.body);
  res.send(users);
};

module.exports.updateUser = (req, res) => {
  const { id } = req.params;
  console.log(id);
  let updateUser = users.find((user) => user.id == id);
  updateUser.contact = req.body.contact;
  res.send(updateUser);
};
module.exports.bulkUpdate = (req, res) => {
  const { id } = req.query;
  const i = id.splice(",");
  console.log(i);
  res.send("bulk-update");
};
module.exports.deleteUser = (req, res) => {
  const { id } = req.params;
  const existingUser = users.filter((user) => user.id != id);
  res.send(existingUser);
};
