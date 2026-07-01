import type { OutputStream } from '../../../../../java/io/OutputStream.d.ts'
import type { RandomAccessFile } from '../../../../../java/io/RandomAccessFile.d.ts'
import type { RandomAccessFileOutputStream$Builder } from '../../../../../org/apache/commons/io/output/RandomAccessFileOutputStream$Builder.d.ts'
export class RandomAccessFileOutputStream extends OutputStream {
    static builder(): RandomAccessFileOutputStream$Builder;
    static nullOutputStream(): OutputStream;
    constructor(arg0: RandomAccessFileOutputStream$Builder, arg1: any)
    readonly randomAccessFile: RandomAccessFile;
    close(): void;
    flush(): void;
    getRandomAccessFile(): RandomAccessFile;
    write(arg0: number[]): void;
    write(arg0: number[], arg1: number, arg2: number): void;
    write(arg0: number): void;
}