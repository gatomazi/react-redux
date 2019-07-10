//Só uma função

export default function todos(state = [], action) {
  console.log(action);
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { id: Math.random(), text: action.payload.text }];
    default:
      return state;
  }
}

//Nome do reducer = nome do estado
// {
//   todos: []
// }
