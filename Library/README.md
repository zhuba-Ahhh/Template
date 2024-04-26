# Library

[![NPM version](https://img.shields.io/npm/v/render.svg?style=flat)](https://npmjs.org/package/)
[![NPM downloads](http://img.shields.io/npm/dm/render.svg?style=flat)](https://npmjs.org/package/)

A react library developed with dumi

## Usage

```js
import React, { useState } from "react";
import { Resizable } from "Resizable";

export default () => {
  const [style, setStyle] = useState<React.CSSProperties>({
    width: 200,
    height: 200,
    backgroundColor: "red",
  });

  const onResize = ({width, height}) => {
    setStyle(pre => ({...pre, width, height}))
  }
  return (
    <Resizable onResize={onResize} >
      <div style={style}></div>
    </Resizable>
  );
};
```

## Options

```js
interface ResizableProps {
  axis?: "x" | "y" | "both";  //resize direction
  zoom?: number;   //scaling
  onResizeStart?: () => void;  //Executed when dragging starts
  onResize?: (size: {
    width: CSSProperties["width"];
    height: CSSProperties["height"];
  }) => void;  //Executed when dragging
  onResizeStop?: () => void;  //Executed when dragging ends
  children: ReactElement<any, string | JSXElementConstructor<any>>;
  className?: string;
}
```

## LICENSE

MIT
