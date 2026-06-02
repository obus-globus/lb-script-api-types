import type { ByteSource } from '../../../../com/google/common/io/ByteSource.d.ts'
import type { FileBackedOutputStream$MemoryOutput } from '../../../../com/google/common/io/FileBackedOutputStream$MemoryOutput.d.ts'
import type { File } from '../../../../java/io/File.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
export class FileBackedOutputStream extends OutputStream {
    static nullOutputStream(): OutputStream;
    constructor(fileThreshold: number)
    constructor(fileThreshold: number, resetOnFinalize: boolean)
    // private file: File;
    // private fileThreshold: number;
    // private memory: FileBackedOutputStream$MemoryOutput;
    // private out: OutputStream;
    // private resetOnFinalize: boolean;
    // private source: ByteSource;
    asByteSource(): ByteSource;
    close(): void;
    flush(): void;
    getFile(): File;
    // private openInputStream(): InputStream;
    reset(): void;
    // private update(len: number): void;
    write(b: number[]): void;
    write(b: number[], off: number, len: number): void;
    write(b: number): void;
}