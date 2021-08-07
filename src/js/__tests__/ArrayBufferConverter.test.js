
import getBuffer from '../app';
import ArrayBufferConverter from '../ArrayBufferConverter';


test('работа ArrayBufferConverter', () => {
  const obj = new ArrayBufferConverter();
  obj.load(getBuffer());
  expect(obj.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
