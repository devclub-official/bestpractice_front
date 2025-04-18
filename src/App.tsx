import { useHistory } from './hooks/useHistoryList';

function App() {
  const data = useHistory();
  console.log(data);

  return <>Main</>;
}

export default App;
