import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface FetchTodosAction {
  type: ActionTypes.FetchTodos;
  payload: Todo[];
}

export interface DeleteTodosAction {
  type: ActionTypes.DeleteTodos;
  payload: number;
}

const todosUrl = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(todosUrl);

    dispatch<FetchTodosAction>({
      type: ActionTypes.FetchTodos,
      payload: response.data.splice(0, 5),
    });
  };
};

export const deleteTodos = (id: number): DeleteTodosAction => {
  return {
    type: ActionTypes.DeleteTodos,
    payload: id,
  };
};
