import type { ByteSource } from '../../../../com/google/common/io/ByteSource.d.ts'
import type { FileBackedOutputStream$FbosByteSource } from '../../../../com/google/common/io/FileBackedOutputStream$FbosByteSource.d.ts'
import type { FileBackedOutputStream$State } from '../../../../com/google/common/io/FileBackedOutputStream$State.d.ts'
import type { File } from '../../../../java/io/File.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
export class FileBackedOutputStream extends OutputStream {
    static nullOutputStream(): OutputStream;
    constructor(fileThreshold: number)
    constructor(fileThreshold: number, resetWhenGarbageCollected: boolean)
    // private byteSource: FileBackedOutputStream$FbosByteSource;
    // private state: FileBackedOutputStream$State;
    asByteSource(): ByteSource;
    close(): void;
    flush(): void;
    getFile(): File;
    reset(): void;
    write(b: number[]): void;
    write(b: number[], off: number, len: number): void;
    write(b: number): void;
}