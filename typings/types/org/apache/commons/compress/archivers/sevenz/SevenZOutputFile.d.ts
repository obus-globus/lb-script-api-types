import type { Closeable } from '../../../../../../java/io/Closeable.d.ts'
import type { DataOutput } from '../../../../../../java/io/DataOutput.d.ts'
import type { File } from '../../../../../../java/io/File.d.ts'
import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { SeekableByteChannel } from '../../../../../../java/nio/channels/SeekableByteChannel.d.ts'
import type { LinkOption } from '../../../../../../java/nio/file/LinkOption.d.ts'
import type { OpenOption } from '../../../../../../java/nio/file/OpenOption.d.ts'
import type { Path } from '../../../../../../java/nio/file/Path.d.ts'
import type { BitSet } from '../../../../../../java/util/BitSet.d.ts'
import type { CRC32 } from '../../../../../../java/util/zip/CRC32.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ArchiveEntry } from '../../../../../../org/apache/commons/compress/archivers/ArchiveEntry.d.ts'
import type { AES256Options } from '../../../../../../org/apache/commons/compress/archivers/sevenz/AES256Options.d.ts'
import type { SevenZArchiveEntry } from '../../../../../../org/apache/commons/compress/archivers/sevenz/SevenZArchiveEntry.d.ts'
import type { SevenZMethod } from '../../../../../../org/apache/commons/compress/archivers/sevenz/SevenZMethod.d.ts'
import type { SevenZMethodConfiguration } from '../../../../../../org/apache/commons/compress/archivers/sevenz/SevenZMethodConfiguration.d.ts'
import type { CountingOutputStream } from '../../../../../../org/apache/commons/io/output/CountingOutputStream.d.ts'
export class SevenZOutputFile extends Object implements Closeable {
    constructor(arg0: File)
    constructor(arg0: File, arg1: string[])
    constructor(arg0: SeekableByteChannel)
    constructor(arg0: SeekableByteChannel, arg1: string[])
    // private additionalCountingStreams: CountingOutputStream[];
    // private additionalSizes: Map<SevenZArchiveEntry, number[]>;
    // private aes256Options: AES256Options;
    // private channel: SeekableByteChannel;
    // private compressedCrc32: CRC32;
    readonly contentMethods: SevenZMethodConfiguration[];
    // private crc32: CRC32;
    // private currentOutputStream: CountingOutputStream;
    // private fileBytesWritten: number;
    // private files: SevenZArchiveEntry[];
    // private finished: boolean;
    // private numNonEmptyStreams: number;
    close(): void;
    closeArchiveEntry(): void;
    createArchiveEntry(arg0: File, arg1: string): SevenZArchiveEntry;
    createArchiveEntry(arg0: Path, arg1: string, ...arg2: LinkOption[]): SevenZArchiveEntry;
    // private fillDates(arg0: Path, arg1: SevenZArchiveEntry, ...arg2: LinkOption[]): void;
    finish(): void;
    // private getContentMethods(arg0: SevenZArchiveEntry): SevenZMethodConfiguration[];
    // private getCurrentOutputStream(): OutputStream;
    putArchiveEntry(arg0: ArchiveEntry): void;
    putArchiveEntry(arg0: SevenZArchiveEntry): void;
    setContentCompression(arg0: SevenZMethod): void;
    setContentMethods(arg0: SevenZMethodConfiguration[]): void;
    // private setupFileOutputStream(): CountingOutputStream;
    write(arg0: InputStream): void;
    write(arg0: Path, ...arg1: OpenOption[]): void;
    write(arg0: number[]): void;
    write(arg0: number[], arg1: number, arg2: number): void;
    write(arg0: number): void;
    // private writeBits(arg0: DataOutput, arg1: BitSet, arg2: number): void;
    // private writeFileATimes(arg0: DataOutput): void;
    // private writeFileAntiItems(arg0: DataOutput): void;
    // private writeFileCTimes(arg0: DataOutput): void;
    // private writeFileEmptyFiles(arg0: DataOutput): void;
    // private writeFileEmptyStreams(arg0: DataOutput): void;
    // private writeFileMTimes(arg0: DataOutput): void;
    // private writeFileNames(arg0: DataOutput): void;
    // private writeFileWindowsAttributes(arg0: DataOutput): void;
    // private writeFilesInfo(arg0: DataOutput): void;
    // private writeFolder(arg0: DataOutput, arg1: SevenZArchiveEntry): void;
    // private writeHeader(arg0: DataOutput): void;
    // private writePackInfo(arg0: DataOutput): void;
    // private writeSingleCodec(arg0: SevenZMethodConfiguration, arg1: OutputStream): void;
    // private writeStreamsInfo(arg0: DataOutput): void;
    // private writeSubStreamsInfo(arg0: DataOutput): void;
    // private writeUint64(arg0: DataOutput, arg1: number): void;
    // private writeUnpackInfo(arg0: DataOutput): void;
}