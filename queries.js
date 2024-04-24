const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const Todo = require('./models/todo.js')

const connect = async () => {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');
    await runQueries()
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
    process.exit();
};

const createTodo = async () => {
  const todoData = {
  text:"Learn JS",
    isComplete: false,
  }

  const todo = await Todo.create(todoData)
  console.log("New todo;", todo)
}
const findTodos = async () => {
    const todos = await Todo.find({})
    console.log("All todos:", todos);
}

const findTodo = async() => {
  const id = '66292cbeeaacec87ecd5a1d3'
  const todo = await Todo.findById(id);
  console.log("The todo:", todo);
}

const deleteTodo = async() => {
  const id = '66292cbeeaacec87ecd5a1d3'
  const todo = await Todo.findByIdAndDelete(id);
  console.log("The todo:", todo);
}

const updateTodo = async() => {
  const id = '66292cbeeaacec87ecd5a1d3'
  const todo = await Todo.findByIdAndUpdate(id,
  {isComplete: true},
  {new: true}
  );
  console.log("The todo:", todo);
}

  const todoData = {
    text:"Learn JS",
    isComplete: false,
  }

  const runQueries = async () => {
    console.log('Queries running.');

  await updateTodo()
  await Todo.create(todoData)
}
connect()
/*-------------------------------- Query Functions --------------------------------*/
