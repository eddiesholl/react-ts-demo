const CREATE_TODO = 'TODOS/CREATE_TODO'

export const createTodo = todoText => {
  return { type: CREATE_TODO, payload: { todoText: todoText } }
}

let idCounter = 0
const makeTodo = text => {
  return { id: idCounter++, text: text }
}

const startingList = [makeTodo('Remember the milk'), makeTodo('Don\'t forget me')]

export const todosReducer = (state = startingList, action) => {
  const { type, payload } = action

  switch (type) {
    case CREATE_TODO:
      return [
        ...state,
        makeTodo(payload.todoText)
      ]

    default:
      return state
  }
}
