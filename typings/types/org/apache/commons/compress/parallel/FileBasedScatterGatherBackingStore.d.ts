import type { File } from '../../../../../java/io/File.d.ts'
import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../../java/io/OutputStream.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ScatterGatherBackingStore } from '../../../../../org/apache/commons/compress/parallel/ScatterGatherBackingStore.d.ts'
export class FileBasedScatterGatherBackingStore extends Object implements ScatterGatherBackingStore {
    constructor(arg0: File)
    constructor(arg0: Path[])
    // private closed: boolean;
    // private outputStream: OutputStream;
    // private target: Path[];
    close(): void;
    closeForWriting(): void;
    getInputStream(): InputStream;
    writeOut(arg0: number[], arg1: number, arg2: number): void;
}