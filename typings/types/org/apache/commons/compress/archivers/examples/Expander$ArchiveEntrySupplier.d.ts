import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ArchiveEntry } from '../../../../../../org/apache/commons/compress/archivers/ArchiveEntry.d.ts'
export interface Expander$ArchiveEntrySupplier<T extends ArchiveEntry> extends Object{
    get(): T;
}