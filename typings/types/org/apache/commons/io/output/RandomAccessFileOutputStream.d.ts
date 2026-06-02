import type { OutputStream } from '../../../../../java/io/OutputStream.d.ts'
import type { RandomAccessFile } from '../../../../../java/io/RandomAccessFile.d.ts'
import type { RandomAccessFileOutputStream$Builder } from '../../../../../org/apache/commons/io/output/RandomAccessFileOutputStream$Builder.d.ts'
export class RandomAccessFileOutputStream extends OutputStream {
    static builder(): RandomAccessFileOutputStream$Builder;
    static nullOutputStream(): OutputStream;
    private constructor(arg0: RandomAccessFileOutputStream$Builder)
    readonly randomAccessFile: RandomAccessFile;
    close(): void;
    flush(): void;
    getRandomAccessFile(): RandomAccessFile;
    write(arg0: number): void;
}