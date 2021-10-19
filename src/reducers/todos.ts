import {
  Todo,
  FetchTodosAction,
  DeleteTodosAction,
  ActionTypes,
} from '../actions';

type Action = FetchTodosAction | DeleteTodosAction;

export const todosReducer = (state: Todo[] = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.FetchTodos:
      return action.payload;
    case ActionTypes.DeleteTodos:
      return state.filter((todo: Todo) => todo.id !== action.payload);
    default:
      return state;
  }
};
