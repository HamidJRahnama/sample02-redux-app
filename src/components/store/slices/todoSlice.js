import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    { id: 1, text: "Book", isDone: false },
    { id: 2, text: "Gym", isDone: true },
    { id: 3, text: "Game", isDone: false },
  ],
};

const todosSlice = createSlice({
  name: "todos",

  reducers: {
    demo: (state, action) => {
      console.log("hi");
    },
  },

  initialState,
});

export default todosSlice.reducer;
export const { demo } = todosSlice.actions;

export const selected = (store) => store.todoSlice;

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   todos: [
//     { id: 1, text: "Book", isDone: false },
//     { id: 2, text: "Gym", isDone: true },
//     { id: 3, text: "Game", isDone: false },
//   ],
// };

// const todosSlice = createSlice({
//   name: "todos",

//   reducers: {
//     add: (state, action) => {
//       state.todos = [
//         ...state.todos,
//         { id: Date.now(), text: action.payload.text, isDone: false },
//       ];
//     },
//     remove: (state, action) => {
//       state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
//     },
//     toggleDone: (state, action) => {
//       state.todos = state.todos.map((todo) =>
//         todo.id === action.payload.id ? { ...todo, isDone: !todo.isDone } : todo
//       );
//     },
//     demo: (state, action) => {
//       console.log("hi");
//     },
//   },

//   initialState,
// });

// export default todosSlice.reducer;
// export const { demo, add, remove, toggleDone } = todosSlice.actions;

// export const selected = (store) => store.todoSlice;
