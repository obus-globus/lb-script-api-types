import type { Closeable } from '../../../../../../java/io/Closeable.d.ts'
import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../../java/util/Iterator.d.ts'
import type { ScatterZipOutputStream } from '../../../../../../org/apache/commons/compress/archivers/zip/ScatterZipOutputStream.d.ts'
import type { ScatterZipOutputStream$CompressedEntry } from '../../../../../../org/apache/commons/compress/archivers/zip/ScatterZipOutputStream$CompressedEntry.d.ts'
import type { ZipArchiveOutputStream } from '../../../../../../org/apache/commons/compress/archivers/zip/ZipArchiveOutputStream.d.ts'
export class ScatterZipOutputStream$ZipEntryWriter extends Object implements Closeable {
    constructor(arg0: ScatterZipOutputStream)
    // private inputStream: InputStream;
    // private itemsIterator: Iterator<ScatterZipOutputStream$CompressedEntry>;
    close(): void;
    writeNextZipEntry(arg0: ZipArchiveOutputStream): void;
}