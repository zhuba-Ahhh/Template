import { useRef, useEffect, useCallback } from "react";

export const useEventCallback = (callback: any, dependencies: any[]) => {
  const ref = useRef(callback);
  useEffect(() => {
    ref.current = callback;
  }, dependencies);
  return useCallback((...args: any[]) => {
    return ref.current(...args);
  }, []);
};
