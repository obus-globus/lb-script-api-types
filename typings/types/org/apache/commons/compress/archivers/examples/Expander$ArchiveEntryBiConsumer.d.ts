import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ArchiveEntry } from '../../../../../../org/apache/commons/compress/archivers/ArchiveEntry.d.ts'
export interface Expander$ArchiveEntryBiConsumer<T extends ArchiveEntry> extends Object{
    accept(arg0: T, arg1: OutputStream): void;
}