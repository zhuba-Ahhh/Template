import { Button } from 'antd';
import FaviconSVG from 'assets/favicon.svg';
import { uuid } from './utils';
import css from './index.module.less';

function App() {
  return (
    <div className={`flex items-center justify-center ${css.test}`}>
      <img src={FaviconSVG} className="logo" alt="Vite logo" height={100} width={100} key={uuid()} />
      <Button onClick={() => console.log('Hello')} key={uuid()}>Hello</Button>
      {uuid()}
    </div>
  );
}

export default App;
