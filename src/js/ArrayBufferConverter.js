export default class ArrayBufferConverter {
  load(value) {
    this.buffer = value;
  }

  toString() {
    const buff = new Uint16Array(this.buffer);
    return String.fromCharCode(...buff);
    // let string = '';
    // for (let i = 0; i < this.buff.length; i += 1) {
    //    string += String.fromCharCode(this.buff[i]);
    // }
    // console.log(this.buff, string);
    // return string;
  }
}
