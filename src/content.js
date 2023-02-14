import uuid from 'react-uuid';

const userList = [
  {
    id: uuid(),  // Znam da je ovo samo privremeno, ali u slucaju da nisi upoznat sa ovom bibliotekom evo link :) https://www.npmjs.com/package/uuid
    email: "aleksa@gmail.com",
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
    id: uuid(),
    email: "test@gmail.com",
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