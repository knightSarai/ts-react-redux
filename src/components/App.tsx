import { connect } from 'react-redux';
import { Todo, fetchTodos } from '../actions';
import { StoreState } from '../reducers';

interface AppProps {
  todos: Todo[];
  fetchTodos: any;
}

function App({ todos, fetchTodos }: AppProps) {
  return (
    <div>
      <h1>TODOS</h1>
      <button onClick={fetchTodos}>Get Your Todos</button>
      {todos.slice(0, 5).map((todo) => (
        <p key={todo.id}>{todo.title}</p>
      ))}
    </div>
  );
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};

export default connect(mapStateToProps, { fetchTodos })(App);
