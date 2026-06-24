import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { ByteBuffer } from '../../../../../../java/nio/ByteBuffer.d.ts'
import type { SeekableByteChannel } from '../../../../../../java/nio/channels/SeekableByteChannel.d.ts'
import type { TarArchiveEntry } from '../../../../../../org/apache/commons/compress/archivers/tar/TarArchiveEntry.d.ts'
import type { TarFile } from '../../../../../../org/apache/commons/compress/archivers/tar/TarFile.d.ts'
import type { BoundedArchiveInputStream } from '../../../../../../org/apache/commons/compress/utils/BoundedArchiveInputStream.d.ts'
export class TarFile$BoundedTarEntryInputStream extends BoundedArchiveInputStream {
    static nullInputStream(): InputStream;
    constructor(null_: TarFile, arg1: TarArchiveEntry, arg2: SeekableByteChannel)
    // private channel: SeekableByteChannel;
    // private currentSparseInputStreamIndex: number;
    // private entry: TarArchiveEntry;
    // private entryOffset: number;
    read(): number;
    read(arg0: number[]): number;
    read(arg0: number[], arg1: number, arg2: number): number;
    read(arg0: number, arg1: ByteBuffer): number;
    // private readArchive(arg0: number, arg1: ByteBuffer): number;
    // private readSparse(arg0: number, arg1: ByteBuffer, arg2: number): number;
}