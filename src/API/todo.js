import call from "./Call"

const todoApi = {
    todoList : () => {
        return call("todos")
    },
}

export default todoApi;