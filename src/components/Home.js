import { useEffect, useState } from 'react'
import todoApi from "../API/todo"

import "../assets/styles/App.scss"

function Home() {
    const [todoList, setTodoList] = useState([]);

    useEffect(() => {
        getTodoList()
    }, [])

    async function getTodoList(){
        try{
            let response = await todoApi.todoList();
            setTodoList(response.data);
        }
        catch(error){
            return error
        }
        console.log({todoList})
    }

  return (
    <div className="home">
        {
            todoList.length > 0 ? (
                <ul>
                    {todoList.map(el => {
                        <li key={el.id}>{el}</li>
                    })}
                </ul>
            ) : ""
        }
    </div>
  )
}

export default Home