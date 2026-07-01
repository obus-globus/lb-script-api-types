import type { Closeable } from '../../../../../../java/io/Closeable.d.ts'
import type { File } from '../../../../../../java/io/File.d.ts'
import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { ByteBuffer } from '../../../../../../java/nio/ByteBuffer.d.ts'
import type { SeekableByteChannel } from '../../../../../../java/nio/channels/SeekableByteChannel.d.ts'
import type { Charset } from '../../../../../../java/nio/charset/Charset.d.ts'
import type { Path } from '../../../../../../java/nio/file/Path.d.ts'
import type { Enumeration } from '../../../../../../java/util/Enumeration.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { InflaterInputStreamWithStatistics } from '../../../../../../org/apache/commons/compress/archivers/zip/InflaterInputStreamWithStatistics.d.ts'
import type { ZipArchiveEntry } from '../../../../../../org/apache/commons/compress/archivers/zip/ZipArchiveEntry.d.ts'
import type { ZipArchiveEntryPredicate } from '../../../../../../org/apache/commons/compress/archivers/zip/ZipArchiveEntryPredicate.d.ts'
import type { ZipArchiveOutputStream } from '../../../../../../org/apache/commons/compress/archivers/zip/ZipArchiveOutputStream.d.ts'
import type { ZipEncoding } from '../../../../../../org/apache/commons/compress/archivers/zip/ZipEncoding.d.ts'
import type { ZipFile$Builder } from '../../../../../../org/apache/commons/compress/archivers/zip/ZipFile$Builder.d.ts'
import type { ZipFile$NameAndComment } from '../../../../../../org/apache/commons/compress/archivers/zip/ZipFile$NameAndComment.d.ts'
import type { BoundedArchiveInputStream } from '../../../../../../org/apache/commons/compress/utils/BoundedArchiveInputStream.d.ts'
import type { IOFunction } from '../../../../../../org/apache/commons/io/function/IOFunction.d.ts'
import type { IOStream } from '../../../../../../org/apache/commons/io/function/IOStream.d.ts'
export class ZipFile extends Object implements Closeable {
    static builder(): ZipFile$Builder;
    static closeQuietly(paramarg0: ZipFile): void;
    constructor(arg0: File)
    constructor(arg0: File, arg1: string)
    constructor(arg0: File, arg1: string, arg2: boolean)
    constructor(arg0: File, arg1: string, arg2: boolean, arg3: boolean)
    constructor(arg0: SeekableByteChannel)
    constructor(arg0: SeekableByteChannel, arg1: string)
    constructor(arg0: SeekableByteChannel, arg1: string, arg2: Charset, arg3: boolean, arg4: boolean, arg5: boolean, arg6: (param0: Object) => Object, arg7: InflaterInputStreamWithStatistics)
    constructor(arg0: SeekableByteChannel, arg1: string, arg2: string, arg3: boolean)
    constructor(arg0: SeekableByteChannel, arg1: string, arg2: string, arg3: boolean, arg4: boolean)
    constructor(arg0: Path[])
    constructor(arg0: Path[], arg1: string)
    constructor(arg0: Path[], arg1: string, arg2: boolean)
    constructor(arg0: Path[], arg1: string, arg2: boolean, arg3: boolean)
    constructor(arg0: string)
    constructor(arg0: string, arg1: string)
    // private archive: SeekableByteChannel;
    // private centralDirectoryStartDiskNumber: number;
    // private centralDirectoryStartOffset: number;
    // private centralDirectoryStartRelativeOffset: number;
    // private cfhBbuf: ByteBuffer;
    // private cfhBuf: number[];
    // private closed: boolean;
    // private dwordBbuf: ByteBuffer;
    // private dwordBuf: number[];
    readonly encoding: Charset;
    readonly entries: ZipArchiveEntry[];
    readonly firstLocalFileHeaderOffset: number;
    // private isSplitZipArchive: boolean;
    // private nameMap: { [key: string]: ZipArchiveEntry[] };
    // private shortBbuf: ByteBuffer;
    // private shortBuf: number[];
    // private useUnicodeExtraFields: boolean;
    // private wordBbuf: ByteBuffer;
    // private wordBuf: number[];
    // private zipEncoding: ZipEncoding;
    // private zstdInputStreamFactory: (param0: InputStream) => InputStream;
    canReadEntryData(arg0: ZipArchiveEntry): boolean;
    close(): void;
    copyRawEntries(arg0: ZipArchiveOutputStream, arg1: ZipArchiveEntryPredicate): void;
    // private createBoundedInputStream(arg0: number, arg1: number): BoundedArchiveInputStream;
    createZstdInputStream(arg0: InputStream): InputStream;
    // private fillNameMap(): void;
    finalize(): void;
    getContentBeforeFirstLocalFileHeader(): InputStream;
    // private getDataOffset(arg0: ZipArchiveEntry): number;
    getEncoding(): string;
    getEntries(): Enumeration<ZipArchiveEntry>;
    getEntries(arg0: string): ZipArchiveEntry[];
    getEntriesInPhysicalOrder(): Enumeration<ZipArchiveEntry>;
    getEntriesInPhysicalOrder(arg0: string): ZipArchiveEntry[];
    getEntry(arg0: string): ZipArchiveEntry;
    getFirstLocalFileHeaderOffset(): number;
    getInputStream(arg0: ZipArchiveEntry): InputStream;
    getRawInputStream(arg0: ZipArchiveEntry): InputStream;
    getUnixSymlink(arg0: ZipArchiveEntry): string;
    // private populateFromCentralDirectory(): Map<ZipArchiveEntry, ZipFile$NameAndComment>;
    // private positionAtCentralDirectory(): void;
    // private positionAtCentralDirectory32(): void;
    // private positionAtCentralDirectory64(): void;
    // private readCentralDirectoryEntry(arg0: Map<ZipArchiveEntry, ZipFile$NameAndComment>): void;
    // private resolveLocalFileHeaderData(arg0: Map<ZipArchiveEntry, ZipFile$NameAndComment>): void;
    // private sanityCheckLFHOffset(arg0: ZipArchiveEntry): void;
    // private setDataOffset(arg0: ZipArchiveEntry): number[];
    // private setSizesAndOffsetFromZip64Extra(arg0: ZipArchiveEntry): void;
    // private skipBytes(arg0: number): void;
    // private sortByOffset(arg0: ZipArchiveEntry[]): ZipArchiveEntry[];
    // private startsWithLocalFileHeader(): boolean;
    stream(): IOStream<ZipArchiveEntry>;
}