import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ArchiveEntry } from '../../../../../org/apache/commons/compress/archivers/ArchiveEntry.d.ts'
import type { ArchiveInputStream } from '../../../../../org/apache/commons/compress/archivers/ArchiveInputStream.d.ts'
import type { ArchiveOutputStream } from '../../../../../org/apache/commons/compress/archivers/ArchiveOutputStream.d.ts'
import type { ZipFile } from '../../../../../org/apache/commons/compress/archivers/zip/ZipFile.d.ts'
import type { Change } from '../../../../../org/apache/commons/compress/changes/Change.d.ts'
import type { ChangeSet } from '../../../../../org/apache/commons/compress/changes/ChangeSet.d.ts'
import type { ChangeSetPerformer$ArchiveEntryIterator } from '../../../../../org/apache/commons/compress/changes/ChangeSetPerformer$ArchiveEntryIterator.d.ts'
import type { ChangeSetResults } from '../../../../../org/apache/commons/compress/changes/ChangeSetResults.d.ts'
export class ChangeSetPerformer<I extends ArchiveInputStream<E>, O extends ArchiveOutputStream<E>, E extends ArchiveEntry> extends Object {
    constructor(arg0: ChangeSet<E>)
    // private changes: Change<E>[];
    // private copyStream(arg0: InputStream, arg1: O, arg2: E): void;
    // private isDeletedLater(arg0: Change<E>[], arg1: E): boolean;
    perform(arg0: I, arg1: O): ChangeSetResults;
    perform(arg0: ZipFile, arg1: O): ChangeSetResults;
    // private perform(arg0: ChangeSetPerformer$ArchiveEntryIterator<E>, arg1: O): ChangeSetResults;
}