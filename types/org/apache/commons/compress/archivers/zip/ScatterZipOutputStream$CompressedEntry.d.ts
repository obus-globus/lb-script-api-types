import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ZipArchiveEntry } from '../../../../../../org/apache/commons/compress/archivers/zip/ZipArchiveEntry.d.ts'
import type { ZipArchiveEntryRequest } from '../../../../../../org/apache/commons/compress/archivers/zip/ZipArchiveEntryRequest.d.ts'
export class ScatterZipOutputStream$CompressedEntry extends Object {
    constructor(arg0: ZipArchiveEntryRequest, arg1: number, arg2: number, arg3: number)
    // private compressedSize: number;
    // private crc: number;
    // private size: number;
    // private zipArchiveEntryRequest: ZipArchiveEntryRequest;
    transferToArchiveEntry(): ZipArchiveEntry;
}