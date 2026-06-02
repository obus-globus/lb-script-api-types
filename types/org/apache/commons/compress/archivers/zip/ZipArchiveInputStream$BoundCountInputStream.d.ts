import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { BoundedInputStream } from '../../../../../../org/apache/commons/io/input/BoundedInputStream.d.ts'
import type { BoundedInputStream$Builder } from '../../../../../../org/apache/commons/io/input/BoundedInputStream$Builder.d.ts'
export class ZipArchiveInputStream$BoundCountInputStream extends BoundedInputStream {
    static builder(): BoundedInputStream$Builder;
    static nullInputStream(): InputStream;
    constructor(null_: ZipArchiveInputStream$BoundCountInputStream, arg1: InputStream, arg2: number)
    // private atMaxLength(): boolean;
    read(): number;
    read(arg0: number[], arg1: number, arg2: number): number;
    // private readCount(arg0: number): number;
}