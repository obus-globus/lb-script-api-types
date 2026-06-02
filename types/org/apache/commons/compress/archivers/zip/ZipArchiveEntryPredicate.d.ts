import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ZipArchiveEntry } from '../../../../../../org/apache/commons/compress/archivers/zip/ZipArchiveEntry.d.ts'
export interface ZipArchiveEntryPredicate extends Object{
    test(arg0: ZipArchiveEntry): boolean;
}