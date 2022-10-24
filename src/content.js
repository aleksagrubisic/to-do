const userList = [
  {
    id: Math.random(),  // Znam da je ovo samo privremeno, ali u slucaju da nisi upoznat sa ovom bibliotekom evo link :) https://www.npmjs.com/package/uuid
    email: "aleksa",
    password: "123",
    todo: [
      {
        id: Math.random(),
        name: "Learn React"
      },
      {
        id: Math.random(),
        name: "Go to the gym"
      }
    ]
  },
  {
    id: Math.random(),
    email: "test",
    password: "test",
    todo: [
      {
        id: Math.random(),
        name: "test"
      },
    ]
  }
];

export default userList;