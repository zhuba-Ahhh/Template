/* eslint-disable @typescript-eslint/no-use-before-define */
import React, {
  CSSProperties,
  JSXElementConstructor,
  ReactElement,
  ReactEventHandler,
  cloneElement,
  useCallback,
  useMemo,
  useRef,
} from 'react';
import styles from './index.module.less';

type OffsetType = [number, number];

type ResizeBarProps = {
  axis: 'x' | 'y';
  onMouseDown?: ReactEventHandler<HTMLElement>;
  onMouseMove?: (offset: OffsetType) => void;
  onMouseUp?: () => void;
  className?: string | undefined;
};

const ResizeBar = ({
  axis,
  onMouseDown,
  onMouseMove,
  onMouseUp,
  className,
}: ResizeBarProps) => {
  // 使用 useRef 来存储鼠标初始位置
  const startPosition = useRef<OffsetType>([0, 0]);
  const mouseDownHandler: React.MouseEventHandler<HTMLElement> = (e) => {
    startPosition.current = [e.clientX, e.clientY];
    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
    if (onMouseDown) onMouseDown(e);
    e.stopPropagation();
  };

  const mouseMoveHandler = (e: MouseEvent) => {
    const dx = e.clientX - startPosition.current[0];
    const dy = e.clientY - startPosition.current[1];
    if (onMouseMove) onMouseMove([dx, dy]);
  };

  const mouseUpHandler = () => {
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
    if (onMouseUp) onMouseUp();
  };

  const mouseOverHandler = useCallback(() => {
    const hoverEvent = new CustomEvent('hover', {
      detail: {
        axis,
      },
    });
    document.dispatchEvent(hoverEvent);
  }, [axis]);

  const mouseLeaveHandler = useCallback(() => {
    const leaveEvent = new CustomEvent('leave', {
      detail: {
        axis,
      },
    });
    document.dispatchEvent(leaveEvent);
  }, [axis]);

  return (
    <div
      className={`${axis === 'x' ? styles['resizer-r'] : styles['resizer-b']} ${
        className ?? ''
      }`}
      onMouseDown={mouseDownHandler}
      onMouseOver={mouseOverHandler}
      onMouseLeave={mouseLeaveHandler}
    />
  );
};

export interface ResizableProps {
  axis?: 'x' | 'y' | 'both';
  zoom?: number;
  onResizeStart?: () => void;
  onResize?: (size: {
    width: CSSProperties['width'];
    height: CSSProperties['height'];
  }) => void;
  onResizeStop?: () => void;
  children: ReactElement<any, string | JSXElementConstructor<any>>;
  className?: string | undefined;
}

const Resizable = ({
  axis = 'x',
  zoom = 1,
  onResizeStart,
  onResize,
  onResizeStop,
  children,
  className,
}: ResizableProps) => {
  const preRect = useRef<DOMRect | null>(null);
  const targetRef = useRef<HTMLElement | null>(null);

  const resizeStartHandler = () => {
    if (targetRef.current) {
      preRect.current = targetRef.current.getBoundingClientRect();
      if (onResizeStart) onResizeStart();
    }
  };

  const resizeHandler = useCallback(
    (offset: OffsetType) => {
      if (preRect.current && onResize) {
        const { width = 0, height = 0 } = preRect.current;
        const newWidth = Math.floor(
          (width + (axis === 'y' ? 0 : offset[0])) / zoom,
        );
        const newHeight = Math.floor(
          (height + (axis === 'x' ? 0 : offset[1])) / zoom,
        );
        onResize({
          width: `${newWidth}px`,
          height: `${newHeight}px`,
        });
      }
    },
    [axis, zoom],
  );

  const resizeStopHandler = () => {
    if (onResizeStop) onResizeStop();
  };

  const resizerTypes = useMemo<Array<ResizeBarProps['axis']>>(() => {
    if (axis === 'x' || axis === 'y') return [axis];
    if (axis === 'both') return ['x', 'y'];
    return [];
  }, [axis]);

  return cloneElement(
    children,
    {
      ...children.props,
      ref: targetRef,
      className: `${styles.resizable} ${children.props.className ?? ''}`,
      onMouseDown: resizeStartHandler,
    },
    ...resizerTypes.map((type) => (
      <ResizeBar
        key={`resizer-${type}`}
        axis={type}
        onMouseDown={resizeStartHandler}
        onMouseMove={resizeHandler}
        onMouseUp={resizeStopHandler}
        className={className}
      />
    )),
  );
};

export { Resizable };
