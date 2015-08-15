'use strict';

import { ADD_TODO, REMOVE_TODO, COMPLETE_TODO } from './../actions/todos';

export default function(state: Array = [], action: Object) {
  switch (action.type) {
  case ADD_TODO:
    return [...state, {
      text: action.text, complete: false
    }];

  case REMOVE_TODO:
    return [
      ...state.slice(0, action.index),
      ...state.slice(action.index + 1)
    ];

  case COMPLETE_TODO:
    return [
      ...state.todos.slice(0, action.index),
      Object.assign({}, state[action.index], { completed: true }),
      ...state.todos.slice(action.index + 1)
    ];

  default:
    return state;
  }
}
