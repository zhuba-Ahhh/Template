declare interface Window {
  Babel: any;
  define: any;
}
declare module '*.less' {
  const className: { [key: string]: any };
  export default className;
}

declare const VERSION: string;
