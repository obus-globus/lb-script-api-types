import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../../java/io/OutputStream.d.ts'
import type { RandomAccessFile } from '../../../../../java/io/RandomAccessFile.d.ts'
import type { AbstractInputStream } from '../../../../../org/apache/commons/io/input/AbstractInputStream.d.ts'
import type { RandomAccessFileInputStream$Builder } from '../../../../../org/apache/commons/io/input/RandomAccessFileInputStream$Builder.d.ts'
export class RandomAccessFileInputStream extends AbstractInputStream {
    static builder(): RandomAccessFileInputStream$Builder;
    static nullInputStream(): InputStream;
    constructor(arg0: RandomAccessFile)
    constructor(arg0: RandomAccessFile, arg1: boolean)
    constructor(arg0: RandomAccessFileInputStream$Builder, arg1: any)
    // private propagateClose: boolean;
    readonly randomAccessFile: RandomAccessFile;
    available(): number;
    availableLong(): number;
    close(): void;
    copy(arg0: number, arg1: number, arg2: OutputStream): number;
    getRandomAccessFile(): RandomAccessFile;
    isCloseOnClose(): boolean;
    read(): number;
    read(arg0: number[]): number;
    read(arg0: number[], arg1: number, arg2: number): number;
    skip(arg0: number): number;
}