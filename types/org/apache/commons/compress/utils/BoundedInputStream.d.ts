import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { BoundedInputStream } from '../../../../../org/apache/commons/io/input/BoundedInputStream.d.ts'
import type { BoundedInputStream$Builder } from '../../../../../org/apache/commons/io/input/BoundedInputStream$Builder.d.ts'
export class BoundedInputStream extends BoundedInputStream {
    static builder(): BoundedInputStream$Builder;
    static nullInputStream(): InputStream;
    constructor(arg0: InputStream, arg1: number)
    getBytesRemaining(): number;
}