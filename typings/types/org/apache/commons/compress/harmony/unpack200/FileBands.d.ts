import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { BandSet } from '../../../../../../org/apache/commons/compress/harmony/unpack200/BandSet.d.ts'
import type { Segment } from '../../../../../../org/apache/commons/compress/harmony/unpack200/Segment.d.ts'
export class FileBands extends BandSet {
    constructor(arg0: Segment)
    // private cpUTF8: string[];
    readonly fileBits: number[][];
    readonly fileModtime: number[];
    readonly fileName: string[];
    readonly fileOptions: number[];
    readonly fileSize: number[];
    // private in: InputStream;
    getFileBits(): number[][];
    getFileModtime(): number[];
    getFileName(): string[];
    getFileOptions(): number[];
    getFileSize(): number[];
    processFileBits(): void;
    read(arg0: InputStream): void;
    unpack(): void;
    unpack(arg0: InputStream): void;
}