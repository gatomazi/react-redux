//Só uma função

export default function todos(state = [], action) {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { id: Math.random(), text: action.text }];
    default:
      return state;
  }
}

//Nome do reducer = nome do estado
// {
//   todos: []
// }
