import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { CircularInputStream } from '../../../../../org/apache/commons/io/input/CircularInputStream.d.ts'
export class InfiniteCircularInputStream extends CircularInputStream {
    static nullInputStream(): InputStream;
    constructor(arg0: number[])
}