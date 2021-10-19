import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos, deleteTodos } from '../actions';
import { StoreState } from '../reducers';

interface AppProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodos: typeof deleteTodos;
}

interface AppState {
  loading: boolean;
}

function App({ todos, fetchTodos, deleteTodos }: AppProps) {
  const [loading, setLoading] = useState<AppState>({ loading: false });
  useEffect(() => {
    if (todos.length) {
      setLoading({ loading: false });
    }
  }, [todos]);

  const onFetchBtnClick = () => {
    fetchTodos();
    setLoading({ loading: true });
  };

  return (
    <div>
      <h1>TODOS</h1>
      <button onClick={onFetchBtnClick}>Get Your Todos</button>
      {loading.loading ? <h2>loading</h2> : null}
      {todos.map((todo) => (
        <div key={todo.id}>
          <p>{todo.title}</p>
          <span onClick={() => deleteTodos(todo.id)}>X</span>
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};

export default connect(mapStateToProps, { fetchTodos, deleteTodos })(App);
