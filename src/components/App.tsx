interface AppProps {
  name?: string;
}
function App(props: AppProps) {
  return (
    <div>
      <h1>Hello {props.name}</h1>
    </div>
  );
}

export default App;
