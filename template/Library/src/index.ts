export default 'Hello father 4!';

const safeParse = (str: string) => {
  try {
    return JSON.parse(str);
  } catch (e) {
    return str;
  }
};

export let versionLog = () => {
  if (process.env.NODE_ENV === 'production') {
    console.log(
      `%c@zhuba`,
      'background: #FA6400;color: #fff;padding: 2px 6px;border-radius: 4px;',
      `${safeParse(VERSION)}`,
    );
    versionLog = () => {};
  }
};

export * from './Resizable';
