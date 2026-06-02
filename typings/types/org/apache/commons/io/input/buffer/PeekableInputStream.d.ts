import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { CircularBufferInputStream } from '../../../../../../org/apache/commons/io/input/buffer/CircularBufferInputStream.d.ts'
export class PeekableInputStream extends CircularBufferInputStream {
    static nullInputStream(): InputStream;
    constructor(arg0: InputStream)
    constructor(arg0: InputStream, arg1: number)
    peek(arg0: number[]): boolean;
    peek(arg0: number[], arg1: number, arg2: number): boolean;
}