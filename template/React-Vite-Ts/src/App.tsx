import { Button, Image } from 'antd';
import FaviconSVG from 'assets/favicon.svg';
import { uuid } from './utils';
import { uuid1 } from 'zhuba-tools';
import css from './index.module.less';
import { useNumStore } from 'store';

function App() {
  const { num, increasePopulation } = useNumStore();
  return (
    <>
      <div className={`flex items-center justify-center ${css.test}`}>
        <Image
          src={FaviconSVG}
          className="logo"
          alt="Vite logo"
          height={100}
          width={100}
          key={uuid()}
        />
        <Button
          onClick={() => {
            console.log('Hello');
            increasePopulation();
          }}
          key={uuid1()}
        >
          {num}
        </Button>
      </div>
      <div className={`flex items-center justify-center`}>
        <Image src={'https://api.52starxi.cn/api/img-4k/img.php'} style={{ width: '80vw' }}></Image>
      </div>
    </>
  );
}

export default App;
