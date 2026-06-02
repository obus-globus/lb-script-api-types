import type { ByteArrayInputStream } from '../../../../../../java/io/ByteArrayInputStream.d.ts'
import type { ByteArrayOutputStream } from '../../../../../../java/io/ByteArrayOutputStream.d.ts'
import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { ByteBuffer } from '../../../../../../java/nio/ByteBuffer.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Inflater } from '../../../../../../java/util/zip/Inflater.d.ts'
import type { ArchiveEntry } from '../../../../../../org/apache/commons/compress/archivers/ArchiveEntry.d.ts'
import type { ArchiveInputStream } from '../../../../../../org/apache/commons/compress/archivers/ArchiveInputStream.d.ts'
import type { ZipArchiveEntry } from '../../../../../../org/apache/commons/compress/archivers/zip/ZipArchiveEntry.d.ts'
import type { ZipArchiveInputStream$CurrentEntry } from '../../../../../../org/apache/commons/compress/archivers/zip/ZipArchiveInputStream$CurrentEntry.d.ts'
import type { ZipEncoding } from '../../../../../../org/apache/commons/compress/archivers/zip/ZipEncoding.d.ts'
import type { ZipExtraField } from '../../../../../../org/apache/commons/compress/archivers/zip/ZipExtraField.d.ts'
import type { ZipLong } from '../../../../../../org/apache/commons/compress/archivers/zip/ZipLong.d.ts'
import type { ZipShort } from '../../../../../../org/apache/commons/compress/archivers/zip/ZipShort.d.ts'
import type { InputStreamStatistics } from '../../../../../../org/apache/commons/compress/utils/InputStreamStatistics.d.ts'
export class ZipArchiveInputStream extends ArchiveInputStream<ZipArchiveEntry> implements InputStreamStatistics {
    static PREAMBLE_GARBAGE_MAX_SIZE: number;
    static matches(paramarg0: number[], paramarg1: number): boolean;
    static nullInputStream(): InputStream;
    constructor(arg0: InputStream)
    constructor(arg0: InputStream, arg1: string)
    constructor(arg0: InputStream, arg1: string, arg2: boolean)
    constructor(arg0: InputStream, arg1: string, arg2: boolean, arg3: boolean)
    constructor(arg0: InputStream, arg1: string, arg2: boolean, arg3: boolean, arg4: boolean)
    // private allowStoredEntriesWithDataDescriptor: boolean;
    // private buf: ByteBuffer;
    // private closed: boolean;
    // private current: ZipArchiveInputStream$CurrentEntry;
    // private entriesRead: number;
    // private hitCentralDirectory: boolean;
    // private inf: Inflater;
    // private lastStoredEntry: ByteArrayInputStream;
    // private lfhBuf: number[];
    // private shortBuf: number[];
    // private skipBuf: number[];
    // private skipSplitSig: boolean;
    // private twoDwordBuf: number[];
    readonly uncompressedCount: number;
    // private useUnicodeExtraFields: boolean;
    // private wordBuf: number[];
    // private zipEncoding: ZipEncoding;
    // private bufferContainsSignature(arg0: ByteArrayOutputStream, arg1: number, arg2: number, arg3: number): boolean;
    // private cacheBytesRead(arg0: ByteArrayOutputStream, arg1: number, arg2: number, arg3: number): number;
    canReadEntryData(arg0: ArchiveEntry): boolean;
    close(): void;
    // private closeEntry(): void;
    createZstdInputStream(arg0: InputStream): InputStream;
    // private currentEntryHasOutstandingBytes(): boolean;
    // private drainCurrentEntryData(): void;
    // private fill(): number;
    // private findEocdRecord(): boolean;
    // private getBytesInflated(): number;
    getCompressedCount(): number;
    getNextEntry(): ZipArchiveEntry;
    getNextZipEntry(): ZipArchiveEntry;
    getUncompressedCount(): number;
    // private isApkSigningBlock(arg0: number[]): boolean;
    // private isFirstByteOfEocdSig(arg0: number): boolean;
    // private processZip64Extra(arg0: ZipLong, arg1: ZipLong): void;
    // private pushback(arg0: number[], arg1: number, arg2: number): void;
    read(arg0: number[], arg1: number, arg2: number): number;
    // private readDataDescriptor(): void;
    // private readDeflated(arg0: number[], arg1: number, arg2: number): number;
    // private readFirstLocalFileHeader(): boolean;
    // private readFromInflater(arg0: number[], arg1: number, arg2: number): number;
    // private readFully(arg0: number[]): void;
    // private readFully(arg0: number[], arg1: number): void;
    // private readOneByte(): number;
    // private readRange(arg0: number): number[];
    // private readStored(arg0: number[], arg1: number, arg2: number): number;
    // private readStoredEntry(): void;
    // private realSkip(arg0: number): void;
    setExtraFieldSupport(arg0: (param0: ZipShort) => ZipExtraField): ZipArchiveInputStream;
    skip(arg0: number): number;
    // private skipRemainderOfArchive(): void;
    // private supportsCompressedSizeFor(arg0: ZipArchiveEntry): boolean;
    // private supportsDataDescriptorFor(arg0: ZipArchiveEntry): boolean;
}