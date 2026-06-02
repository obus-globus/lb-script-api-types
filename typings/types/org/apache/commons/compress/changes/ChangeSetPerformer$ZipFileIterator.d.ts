import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { Enumeration } from '../../../../../java/util/Enumeration.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ZipArchiveEntry } from '../../../../../org/apache/commons/compress/archivers/zip/ZipArchiveEntry.d.ts'
import type { ZipFile } from '../../../../../org/apache/commons/compress/archivers/zip/ZipFile.d.ts'
import type { ChangeSetPerformer$ArchiveEntryIterator } from '../../../../../org/apache/commons/compress/changes/ChangeSetPerformer$ArchiveEntryIterator.d.ts'
export class ChangeSetPerformer$ZipFileIterator extends Object implements ChangeSetPerformer$ArchiveEntryIterator<ZipArchiveEntry> {
    constructor(arg0: ZipFile)
    // private currentEntry: ZipArchiveEntry;
    // private nestedEnumeration: Enumeration<ZipArchiveEntry>;
    // private zipFile: ZipFile;
    getInputStream(): InputStream;
    hasNext(): boolean;
    next(): ZipArchiveEntry;
}