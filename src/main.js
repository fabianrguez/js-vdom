import { Button } from './components/Button';
import { renderDOM, transformJSX } from './vdom';

function App() {
  return (
    <main>
      <Button label="Test" />
    </main>
  );
}

renderDOM('#app', <App />);
