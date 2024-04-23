export default 'Hello father 4!';

export let versionLog = () => {
  if (process.env.NODE_ENV === 'production') {
    console.log(
      'background: #FA6400;color: #fff;padding: 2px 6px;border-radius: 4px;',
      `${JSON.parse(VERSION)}`,
    );
    versionLog = () => {};
  }
};
