import { Button } from 'antd';
import FaviconSVG from 'assets/favicon.svg';
import { uuid } from './utils';
import css from './index.module.less';
import { Resizable } from '../../Library/dist/esm';
import { useCallback, useState } from 'react';

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
    [style]
  );
  return (
    <div className={`flex items-center justify-center ${css.test}`}>
      <img
        src={FaviconSVG}
        className="logo"
        alt="Vite logo"
        height={100}
        width={100}
        key={uuid()}
      />
      <Button onClick={() => console.log('Hello')} key={uuid()}>
        Hello
      </Button>
      {uuid()}
      <Resizable
        onResize={onResize}
        axis={'both'}
        onResizeStart={() => {
          console.log('start');
        }}
        onResizeStop={() => {
          console.log('stop');
        }}
      >
        <div style={style} />
      </Resizable>
    </div>
  );
}

export default App;
