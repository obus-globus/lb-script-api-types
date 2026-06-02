import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ZipArchiveEntryRequest } from '../../../../../../org/apache/commons/compress/archivers/zip/ZipArchiveEntryRequest.d.ts'
export interface ZipArchiveEntryRequestSupplier extends Object{
    get(): ZipArchiveEntryRequest;
}