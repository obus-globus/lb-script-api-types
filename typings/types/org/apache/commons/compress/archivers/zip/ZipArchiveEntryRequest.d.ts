import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ZipArchiveEntry } from '../../../../../../org/apache/commons/compress/archivers/zip/ZipArchiveEntry.d.ts'
import type { InputStreamSupplier } from '../../../../../../org/apache/commons/compress/parallel/InputStreamSupplier.d.ts'
export class ZipArchiveEntryRequest extends Object {
    static createZipArchiveEntryRequest(paramarg0: ZipArchiveEntry, paramarg1: InputStreamSupplier): ZipArchiveEntryRequest;
    private constructor(arg0: ZipArchiveEntry, arg1: InputStreamSupplier)
    readonly method: number;
    // private payloadSupplier: InputStreamSupplier;
    // private zipArchiveEntry: ZipArchiveEntry;
    getMethod(): number;
    getPayloadStream(): InputStream;
    getZipArchiveEntry(): ZipArchiveEntry;
}