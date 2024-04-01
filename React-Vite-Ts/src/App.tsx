import { Button } from 'components/Button';
import FaviconSVG from 'assets/favicon.svg';

function App() {
  return (
    <>
      <img src={FaviconSVG} className="logo" alt="Vite logo" height={100} width={100} />
      <Button onClick={() => alert('Hello')}>Hello</Button>
    </>
  );
}

export default App;
