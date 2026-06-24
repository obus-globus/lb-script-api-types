import type { RandomAccessFileOutputStream$1 } from '../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { OutputStream } from '../../../../../java/io/OutputStream.d.ts'
import type { RandomAccessFile } from '../../../../../java/io/RandomAccessFile.d.ts'
import type { RandomAccessFileOutputStream$Builder } from '../../../../../org/apache/commons/io/output/RandomAccessFileOutputStream$Builder.d.ts'
export class RandomAccessFileOutputStream extends OutputStream {
    static builder(): RandomAccessFileOutputStream$Builder;
    static nullOutputStream(): OutputStream;
    private constructor(arg0: RandomAccessFileOutputStream$Builder)
    constructor(arg0: RandomAccessFileOutputStream$Builder, arg1: RandomAccessFileOutputStream$1)
    readonly randomAccessFile: RandomAccessFile;
    close(): void;
    flush(): void;
    getRandomAccessFile(): RandomAccessFile;
    write(arg0: number[]): void;
    write(arg0: number[], arg1: number, arg2: number): void;
    write(arg0: number): void;
}