import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ArchiveEntry } from '../../../../../org/apache/commons/compress/archivers/ArchiveEntry.d.ts'
import type { ArchiveInputStream } from '../../../../../org/apache/commons/compress/archivers/ArchiveInputStream.d.ts'
import type { ChangeSetPerformer$ArchiveEntryIterator } from '../../../../../org/apache/commons/compress/changes/ChangeSetPerformer$ArchiveEntryIterator.d.ts'
export class ChangeSetPerformer$ArchiveInputStreamIterator<E extends ArchiveEntry> extends Object implements ChangeSetPerformer$ArchiveEntryIterator<E> {
    constructor(arg0: ArchiveInputStream<E>)
    readonly inputStream: ArchiveInputStream<E>;
    // private next: E;
    getInputStream(): InputStream;
    hasNext(): boolean;
    next(): E;
}