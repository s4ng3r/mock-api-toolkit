import { format } from 'date-fns'


class BeautyLogger {

  timestamp!: string;
  className: string;
  classColor: string = "\x1b[33m"; 
  infoColor: string = "\x1b[32m";
  warnColor: string = "\x1b[33m";
  traceColor: string = "\x1b[36m";
  debugColor: string = "\x1b[35m";
  errorColor: string = "\x1b[31m";

  constructor(className: string) {
    this.className = className;
  }

  info(str: string) {
    this.log(str, this.infoColor, '[INFO] ');
  }

  debug(str: string) {
    this.log(str, this.debugColor, '[DEBUG]');
  }

  trace(str: string) {
    this.log(str, this.traceColor, '[TRACE]');
  }

  warn(str: string) {
    this.log(str, this.warnColor, '[WARN] ');
  }

  error(str: string) {
    this.log(str, this.errorColor, '[ERROR]');
  }

  private log(str: string, color: string, type: string) {
    this.timestamp = format(new Date(), 'yyyy-MM-dd HH:mm:ss ');
    console.log(`${color}[MockApi] ${process.pid} ${type} - ${white}${this.timestamp} ${this.classColor}[${this.className}] ${color}${str}`);
  }

}

export const reset = "\x1b[0m"
export const bright = "\x1b[1m"
export const dim = "\x1b[2m"
export const underscore = "\x1b[4m"
export const blink = "\x1b[5m"
export const reverse = "\x1b[7m"
export const hidden = "\x1b[8m"


export const red = "\x1b[31m"
export const green = "\x1b[32m"
export const yellow = "\x1b[33m"
export const blue = "\x1b[34m"
export const magenta = "\x1b[35m"
export const cyan = "\x1b[36m"
export const white = "\x1b[37m"

export { BeautyLogger };
