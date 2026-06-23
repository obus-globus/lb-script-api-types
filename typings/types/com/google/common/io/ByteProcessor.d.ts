import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ByteProcessor<T extends unknown> extends Object{
    getResult(): T;
    processBytes(buf: number[], off: number, len: number): boolean;
}