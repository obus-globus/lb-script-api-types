import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { ZipArchiveEntry } from '../../../../../../org/apache/commons/compress/archivers/zip/ZipArchiveEntry.d.ts'
import type { ZipArchiveOutputStream } from '../../../../../../org/apache/commons/compress/archivers/zip/ZipArchiveOutputStream.d.ts'
export class JarArchiveOutputStream extends ZipArchiveOutputStream {
    static DEFAULT_COMPRESSION: number;
    static DEFLATED: number;
    static EFS_FLAG: number;
    static STORED: number;
    static nullOutputStream(): OutputStream;
    constructor(arg0: OutputStream)
    constructor(arg0: OutputStream, arg1: string)
    // private jarMarkerAdded: boolean;
    putArchiveEntry(arg0: ZipArchiveEntry): void;
}