import type { Closeable } from '../../../../../../java/io/Closeable.d.ts'
import type { File } from '../../../../../../java/io/File.d.ts'
import type { Path } from '../../../../../../java/nio/file/Path.d.ts'
import type { AtomicBoolean } from '../../../../../../java/util/concurrent/atomic/AtomicBoolean.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ScatterZipOutputStream$CompressedEntry } from '../../../../../../org/apache/commons/compress/archivers/zip/ScatterZipOutputStream$CompressedEntry.d.ts'
import type { ScatterZipOutputStream$ZipEntryWriter } from '../../../../../../org/apache/commons/compress/archivers/zip/ScatterZipOutputStream$ZipEntryWriter.d.ts'
import type { StreamCompressor } from '../../../../../../org/apache/commons/compress/archivers/zip/StreamCompressor.d.ts'
import type { ZipArchiveEntryRequest } from '../../../../../../org/apache/commons/compress/archivers/zip/ZipArchiveEntryRequest.d.ts'
import type { ZipArchiveOutputStream } from '../../../../../../org/apache/commons/compress/archivers/zip/ZipArchiveOutputStream.d.ts'
import type { ScatterGatherBackingStore } from '../../../../../../org/apache/commons/compress/parallel/ScatterGatherBackingStore.d.ts'
export class ScatterZipOutputStream extends Object implements Closeable {
    static fileBased(paramarg0: File): ScatterZipOutputStream;
    static fileBased(paramarg0: File, paramarg1: number): ScatterZipOutputStream;
    static pathBased(paramarg0: Path): ScatterZipOutputStream;
    static pathBased(paramarg0: Path, paramarg1: number): ScatterZipOutputStream;
    constructor(arg0: ScatterGatherBackingStore, arg1: StreamCompressor)
    // private backingStore: ScatterGatherBackingStore;
    // private isClosed: AtomicBoolean;
    // private items: ScatterZipOutputStream$CompressedEntry[];
    // private streamCompressor: StreamCompressor;
    // private zipEntryWriter: ScatterZipOutputStream$ZipEntryWriter;
    addArchiveEntry(arg0: ZipArchiveEntryRequest): void;
    close(): void;
    writeTo(arg0: ZipArchiveOutputStream): void;
    zipEntryWriter(): ScatterZipOutputStream$ZipEntryWriter;
}