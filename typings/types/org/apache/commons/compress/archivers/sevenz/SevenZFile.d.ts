import type { Closeable } from '../../../../../../java/io/Closeable.d.ts'
import type { File } from '../../../../../../java/io/File.d.ts'
import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { ByteBuffer } from '../../../../../../java/nio/ByteBuffer.d.ts'
import type { SeekableByteChannel } from '../../../../../../java/nio/channels/SeekableByteChannel.d.ts'
import type { BitSet } from '../../../../../../java/util/BitSet.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Archive } from '../../../../../../org/apache/commons/compress/archivers/sevenz/Archive.d.ts'
import type { Folder } from '../../../../../../org/apache/commons/compress/archivers/sevenz/Folder.d.ts'
import type { SevenZArchiveEntry } from '../../../../../../org/apache/commons/compress/archivers/sevenz/SevenZArchiveEntry.d.ts'
import type { SevenZFile$ArchiveStatistics } from '../../../../../../org/apache/commons/compress/archivers/sevenz/SevenZFile$ArchiveStatistics.d.ts'
import type { SevenZFile$Builder } from '../../../../../../org/apache/commons/compress/archivers/sevenz/SevenZFile$Builder.d.ts'
import type { SevenZFileOptions } from '../../../../../../org/apache/commons/compress/archivers/sevenz/SevenZFileOptions.d.ts'
import type { StartHeader } from '../../../../../../org/apache/commons/compress/archivers/sevenz/StartHeader.d.ts'
import type { InputStreamStatistics } from '../../../../../../org/apache/commons/compress/utils/InputStreamStatistics.d.ts'
export class SevenZFile extends Object implements Closeable {
    static builder(): SevenZFile$Builder;
    static matches(paramarg0: number[], paramarg1: number): boolean;
    constructor(arg0: File)
    constructor(arg0: File, arg1: number[])
    constructor(arg0: File, arg1: string[])
    constructor(arg0: File, arg1: string[], arg2: SevenZFileOptions)
    constructor(arg0: File, arg1: SevenZFileOptions)
    constructor(arg0: SeekableByteChannel)
    constructor(arg0: SeekableByteChannel, arg1: number[])
    constructor(arg0: SeekableByteChannel, arg1: string[])
    constructor(arg0: SeekableByteChannel, arg1: string[], arg2: SevenZFileOptions)
    constructor(arg0: SeekableByteChannel, arg1: string)
    constructor(arg0: SeekableByteChannel, arg1: string, arg2: number[])
    private constructor(arg0: SeekableByteChannel, arg1: string, arg2: number[], arg3: boolean, arg4: number, arg5: boolean, arg6: boolean)
    private constructor(arg0: SeekableByteChannel, arg1: string, arg2: number[], arg3: boolean, arg4: SevenZFileOptions)
    constructor(arg0: SeekableByteChannel, arg1: string, arg2: string[])
    constructor(arg0: SeekableByteChannel, arg1: string, arg2: string[], arg3: SevenZFileOptions)
    constructor(arg0: SeekableByteChannel, arg1: string, arg2: SevenZFileOptions)
    constructor(arg0: SeekableByteChannel, arg1: SevenZFileOptions)
    // private archive: Archive;
    // private channel: SeekableByteChannel;
    // private compressedBytesReadFromCurrentEntry: number;
    // private currentEntryIndex: number;
    // private currentFolderIndex: number;
    // private currentFolderInputStream: InputStream;
    // private deferredBlockStreams: InputStream[];
    // private fileName: string;
    // private maxMemoryLimitKiB: number;
    // private password: number[];
    // private tryToRecoverBrokenArchives: boolean;
    // private uncompressedBytesReadFromCurrentEntry: number;
    // private useDefaultNameForUnnamedEntries: boolean;
    // private buildDecoderStack(arg0: Folder, arg1: number, arg2: number, arg3: SevenZArchiveEntry): InputStream;
    // private buildDecodingStream(arg0: number, arg1: boolean): void;
    // private calculateStreamMap(arg0: Archive): void;
    // private checkEntryIsInitialized(arg0: { [key: number]: SevenZArchiveEntry }, arg1: number): void;
    close(): void;
    // private getCurrentStream(): InputStream;
    getDefaultName(): string;
    getEntries(): SevenZArchiveEntry[];
    getInputStream(arg0: SevenZArchiveEntry): InputStream;
    getNextEntry(): SevenZArchiveEntry;
    getStatisticsForCurrentEntry(): InputStreamStatistics;
    // private hasCurrentEntryBeenRead(): boolean;
    // private initializeArchive(arg0: StartHeader, arg1: number[], arg2: boolean): Archive;
    read(): number;
    read(arg0: number[]): number;
    read(arg0: number[], arg1: number, arg2: number): number;
    // private readAllOrBits(arg0: ByteBuffer, arg1: number): BitSet;
    // private readArchiveProperties(arg0: ByteBuffer): void;
    // private readBits(arg0: ByteBuffer, arg1: number): BitSet;
    // private readEncodedHeader(arg0: ByteBuffer, arg1: Archive, arg2: number[]): ByteBuffer;
    // private readFilesInfo(arg0: ByteBuffer, arg1: Archive): void;
    // private readFolder(arg0: ByteBuffer): Folder;
    // private readFully(arg0: ByteBuffer): void;
    // private readHeader(arg0: ByteBuffer, arg1: Archive): void;
    // private readHeaders(arg0: number[]): Archive;
    // private readPackInfo(arg0: ByteBuffer, arg1: Archive): void;
    // private readStartHeader(arg0: number): StartHeader;
    // private readStreamsInfo(arg0: ByteBuffer, arg1: Archive): void;
    // private readSubStreamsInfo(arg0: ByteBuffer, arg1: Archive): void;
    // private readUnpackInfo(arg0: ByteBuffer, arg1: Archive): void;
    // private reopenFolderInputStream(arg0: number, arg1: SevenZArchiveEntry): void;
    // private sanityCheckAndCollectStatistics(arg0: ByteBuffer): SevenZFile$ArchiveStatistics;
    // private sanityCheckArchiveProperties(arg0: ByteBuffer): void;
    // private sanityCheckFilesInfo(arg0: ByteBuffer, arg1: SevenZFile$ArchiveStatistics): void;
    // private sanityCheckFolder(arg0: ByteBuffer, arg1: SevenZFile$ArchiveStatistics): number;
    // private sanityCheckPackInfo(arg0: ByteBuffer, arg1: SevenZFile$ArchiveStatistics): void;
    // private sanityCheckStreamsInfo(arg0: ByteBuffer, arg1: SevenZFile$ArchiveStatistics): void;
    // private sanityCheckSubStreamsInfo(arg0: ByteBuffer, arg1: SevenZFile$ArchiveStatistics): void;
    // private sanityCheckUnpackInfo(arg0: ByteBuffer, arg1: SevenZFile$ArchiveStatistics): void;
    // private skipEntriesWhenNeeded(arg0: number, arg1: boolean, arg2: number): boolean;
    toString(): string;
    // private tryToLocateEndHeader(arg0: number[]): Archive;
}