import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ArchiveEntry } from '../../../../../org/apache/commons/compress/archivers/ArchiveEntry.d.ts'
export interface ChangeSetPerformer$ArchiveEntryIterator<E extends ArchiveEntry> extends Object{
    getInputStream(): InputStream;
    hasNext(): boolean;
    next(): E;
}