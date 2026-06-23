import type { File } from '../../../../../../java/io/File.d.ts'
import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { SeekableByteChannel } from '../../../../../../java/nio/channels/SeekableByteChannel.d.ts'
import type { Path } from '../../../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ArchiveEntry } from '../../../../../../org/apache/commons/compress/archivers/ArchiveEntry.d.ts'
import type { ArchiveInputStream } from '../../../../../../org/apache/commons/compress/archivers/ArchiveInputStream.d.ts'
import type { CloseableConsumer } from '../../../../../../org/apache/commons/compress/archivers/examples/CloseableConsumer.d.ts'
import type { Expander$ArchiveEntryBiConsumer } from '../../../../../../org/apache/commons/compress/archivers/examples/Expander$ArchiveEntryBiConsumer.d.ts'
import type { Expander$ArchiveEntrySupplier } from '../../../../../../org/apache/commons/compress/archivers/examples/Expander$ArchiveEntrySupplier.d.ts'
import type { SevenZFile } from '../../../../../../org/apache/commons/compress/archivers/sevenz/SevenZFile.d.ts'
import type { TarFile } from '../../../../../../org/apache/commons/compress/archivers/tar/TarFile.d.ts'
import type { ZipFile } from '../../../../../../org/apache/commons/compress/archivers/zip/ZipFile.d.ts'
export class Expander extends Object {
    constructor()
    expand(arg0: File, arg1: File): void;
    expand(arg0: InputStream, arg1: File): void;
    expand(arg0: InputStream, arg1: File, arg2: CloseableConsumer): void;
    expand(arg0: Path[], arg1: Path[]): void;
    expand(arg0: string, arg1: File, arg2: File): void;
    expand(arg0: string, arg1: InputStream, arg2: File): void;
    expand(arg0: string, arg1: InputStream, arg2: File, arg3: CloseableConsumer): void;
    expand(arg0: string, arg1: InputStream, arg2: Path[], arg3: CloseableConsumer): void;
    expand(arg0: string, arg1: SeekableByteChannel, arg2: File): void;
    expand(arg0: string, arg1: SeekableByteChannel, arg2: File, arg3: CloseableConsumer): void;
    expand(arg0: string, arg1: SeekableByteChannel, arg2: Path[], arg3: CloseableConsumer): void;
    expand(arg0: string, arg1: Path[], arg2: Path[]): void;
    expand(arg0: ArchiveInputStream<any>, arg1: File): void;
    expand(arg0: ArchiveInputStream<any>, arg1: Path[]): void;
    // private expand<T extends ArchiveEntry>(arg0: () => T, arg1: (param0: T, param1: OutputStream) => void, arg2: Path[]): void;
    expand(arg0: SevenZFile, arg1: File): void;
    expand(arg0: SevenZFile, arg1: Path[]): void;
    expand(arg0: TarFile, arg1: File): void;
    expand(arg0: TarFile, arg1: Path[]): void;
    expand(arg0: ZipFile, arg1: File): void;
    expand(arg0: ZipFile, arg1: Path[]): void;
    // private prefersSeekableByteChannel(arg0: string): boolean;
    // private toPath(arg0: File): Path[];
}