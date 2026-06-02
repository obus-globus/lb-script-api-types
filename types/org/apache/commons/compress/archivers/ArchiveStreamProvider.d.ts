import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../../java/io/OutputStream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ArchiveEntry } from '../../../../../org/apache/commons/compress/archivers/ArchiveEntry.d.ts'
import type { ArchiveInputStream } from '../../../../../org/apache/commons/compress/archivers/ArchiveInputStream.d.ts'
import type { ArchiveOutputStream } from '../../../../../org/apache/commons/compress/archivers/ArchiveOutputStream.d.ts'
export interface ArchiveStreamProvider extends Object{
    createArchiveInputStream<I extends ArchiveInputStream<ArchiveEntry>>(arg0: string, arg1: InputStream, arg2: string): I;
    createArchiveOutputStream<O extends ArchiveOutputStream<ArchiveEntry>>(arg0: string, arg1: OutputStream, arg2: string): O;
    getInputStreamArchiveNames(): string[];
    getOutputStreamArchiveNames(): string[];
}