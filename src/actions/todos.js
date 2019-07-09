//Pode ter mais de uma

export function addTodo(text) {
  return {
    type: "ADD_TODO",
    text: text
  };
}
