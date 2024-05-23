import { Button, Image } from 'antd';
import FaviconSVG from 'assets/favicon.svg';
import { uuid } from './utils';
import { uuid1 } from 'zhuba-tools';
import css from './index.module.less';
import { Resizable } from '../../Library/dist/esm';
import { useCallback, useState } from 'react';
import { useNumStore } from 'store';

function App() {
  const [style, setStyle] = useState<React.CSSProperties>({
    width: 100,
    height: 100,
    backgroundColor: '#ff4d4f',
  });

  const onResize = useCallback(
    ({ width, height }: Pick<React.CSSProperties, 'height' | 'width'>) => {
      setStyle((pre) => ({ ...pre, width, height }));
    },
    []
  );

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
          // key={uuid()}
        />
        <Button
          onClick={() => {
            console.log('Hello');
            increasePopulation();
          }}
          // key={uuid()}
        >
          {num}
        </Button>
        <Resizable
          onResize={onResize}
          axis={'both'}
          onResizeStart={() => {
            console.log('start');
          }}
          onResizeStop={() => {
            console.log('stop');
          }}
          key={uuid1()}
        >
          <div style={style} />
        </Resizable>
      </div>
      <div className={`flex items-center justify-center`}>
        <Image src={'https://api.52starxi.cn/api/img-4k/img.php'} style={{ width: '80vw' }}></Image>
      </div>
    </>
  );
}

export default App;
