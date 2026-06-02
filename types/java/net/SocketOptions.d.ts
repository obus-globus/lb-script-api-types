import type { Object } from '../../java/lang/Object.d.ts'
export interface SocketOptions extends Object{
    getOption(arg0: number): Object;
    setOption(arg0: number, arg1: Object): void;
}