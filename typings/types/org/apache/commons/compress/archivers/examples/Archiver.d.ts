import type { File } from '../../../../../../java/io/File.d.ts'
import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { SeekableByteChannel } from '../../../../../../java/nio/channels/SeekableByteChannel.d.ts'
import type { FileVisitOption } from '../../../../../../java/nio/file/FileVisitOption.d.ts'
import type { LinkOption } from '../../../../../../java/nio/file/LinkOption.d.ts'
import type { Path } from '../../../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ArchiveOutputStream } from '../../../../../../org/apache/commons/compress/archivers/ArchiveOutputStream.d.ts'
import type { CloseableConsumer } from '../../../../../../org/apache/commons/compress/archivers/examples/CloseableConsumer.d.ts'
import type { SevenZOutputFile } from '../../../../../../org/apache/commons/compress/archivers/sevenz/SevenZOutputFile.d.ts'
export class Archiver extends Object {
    static EMPTY_FileVisitOption: FileVisitOption[];
    constructor()
    create(arg0: string, arg1: File, arg2: File): void;
    create(arg0: string, arg1: OutputStream, arg2: File): void;
    create(arg0: string, arg1: OutputStream, arg2: File, arg3: CloseableConsumer): void;
    create(arg0: string, arg1: SeekableByteChannel, arg2: File): void;
    create(arg0: string, arg1: SeekableByteChannel, arg2: File, arg3: CloseableConsumer): void;
    create(arg0: string, arg1: SeekableByteChannel, arg2: Path[]): void;
    create(arg0: string, arg1: Path[], arg2: Path[]): void;
    create(arg0: ArchiveOutputStream<Object>, arg1: File): void;
    create(arg0: ArchiveOutputStream<Object>, arg1: Path[]): void;
    create(arg0: ArchiveOutputStream<Object>, arg1: Path[], arg2: FileVisitOption[], arg3: LinkOption[]): void;
    create(arg0: SevenZOutputFile, arg1: File): void;
    create(arg0: SevenZOutputFile, arg1: Path[]): void;
    // private prefersSeekableByteChannel(arg0: string): boolean;
}