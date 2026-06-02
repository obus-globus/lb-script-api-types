import type { File } from '../../../../../../java/io/File.d.ts'
import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { ByteBuffer } from '../../../../../../java/nio/ByteBuffer.d.ts'
import type { SeekableByteChannel } from '../../../../../../java/nio/channels/SeekableByteChannel.d.ts'
import type { Charset } from '../../../../../../java/nio/charset/Charset.d.ts'
import type { LinkOption } from '../../../../../../java/nio/file/LinkOption.d.ts'
import type { OpenOption } from '../../../../../../java/nio/file/OpenOption.d.ts'
import type { Deflater } from '../../../../../../java/util/zip/Deflater.d.ts'
import type { ArchiveEntry } from '../../../../../../org/apache/commons/compress/archivers/ArchiveEntry.d.ts'
import type { ArchiveOutputStream } from '../../../../../../org/apache/commons/compress/archivers/ArchiveOutputStream.d.ts'
import type { GeneralPurposeBit } from '../../../../../../org/apache/commons/compress/archivers/zip/GeneralPurposeBit.d.ts'
import type { StreamCompressor } from '../../../../../../org/apache/commons/compress/archivers/zip/StreamCompressor.d.ts'
import type { Zip64ExtendedInformationExtraField } from '../../../../../../org/apache/commons/compress/archivers/zip/Zip64ExtendedInformationExtraField.d.ts'
import type { Zip64Mode } from '../../../../../../org/apache/commons/compress/archivers/zip/Zip64Mode.d.ts'
import type { ZipArchiveEntry } from '../../../../../../org/apache/commons/compress/archivers/zip/ZipArchiveEntry.d.ts'
import type { ZipArchiveOutputStream$CurrentEntry } from '../../../../../../org/apache/commons/compress/archivers/zip/ZipArchiveOutputStream$CurrentEntry.d.ts'
import type { ZipArchiveOutputStream$EntryMetaData } from '../../../../../../org/apache/commons/compress/archivers/zip/ZipArchiveOutputStream$EntryMetaData.d.ts'
import type { ZipArchiveOutputStream$UnicodeExtraFieldPolicy } from '../../../../../../org/apache/commons/compress/archivers/zip/ZipArchiveOutputStream$UnicodeExtraFieldPolicy.d.ts'
import type { ZipEncoding } from '../../../../../../org/apache/commons/compress/archivers/zip/ZipEncoding.d.ts'
export class ZipArchiveOutputStream extends ArchiveOutputStream<ZipArchiveEntry> {
    static DEFAULT_COMPRESSION: number;
    static DEFLATED: number;
    static EFS_FLAG: number;
    static STORED: number;
    static nullOutputStream(): OutputStream;
    constructor(arg0: File)
    constructor(arg0: File, arg1: number)
    constructor(arg0: OutputStream)
    constructor(arg0: SeekableByteChannel)
    constructor(arg0: Path[], arg1: OpenOption[])
    constructor(arg0: Path[], arg1: number)
    // private cdDiskNumberStart: number;
    // private cdLength: number;
    // private cdOffset: number;
    // private charset: Charset;
    readonly comment: string;
    // private copyBuffer: number[];
    readonly createUnicodeExtraFields: ZipArchiveOutputStream$UnicodeExtraFieldPolicy;
    // private def: Deflater;
    // private entries: ZipArchiveEntry[];
    // private entry: ZipArchiveOutputStream$CurrentEntry;
    // private eocdLength: number;
    // private fallbackToUtf8: boolean;
    // private finished: boolean;
    // private hasCompressionLevelChanged: boolean;
    // private hasUsedZip64: boolean;
    // private isSplitZip: boolean;
    readonly level: number;
    // private metaData: Map<ZipArchiveEntry, ZipArchiveOutputStream$EntryMetaData>;
    readonly method: number;
    // private numberOfCDInDiskData: { [key: number]: number };
    // private streamCompressor: StreamCompressor;
    // private useUtf8Flag: boolean;
    // private zip64Mode: Zip64Mode;
    // private zipEncoding: ZipEncoding;
    addRawArchiveEntry(arg0: ZipArchiveEntry, arg1: InputStream): void;
    // private addUnicodeExtraFields(arg0: ZipArchiveEntry, arg1: boolean, arg2: ByteBuffer): void;
    canWriteEntryData(arg0: ArchiveEntry): boolean;
    // private checkIfNeedsZip64(arg0: Zip64Mode): boolean;
    close(): void;
    closeArchiveEntry(): void;
    // private closeCopiedEntry(arg0: boolean): void;
    // private closeEntry(arg0: boolean, arg1: boolean): void;
    // private copyFromZipInputStream(arg0: InputStream, arg1: boolean): void;
    createArchiveEntry(arg0: File, arg1: string): ZipArchiveEntry;
    createArchiveEntry(arg0: Path[], arg1: string, arg2: LinkOption[]): ZipArchiveEntry;
    // private createCentralFileHeader(arg0: ZipArchiveEntry): number[];
    // private createCentralFileHeader(arg0: ZipArchiveEntry, arg1: ByteBuffer, arg2: ZipArchiveOutputStream$EntryMetaData, arg3: boolean): number[];
    // private createLocalFileHeader(arg0: ZipArchiveEntry, arg1: ByteBuffer, arg2: boolean, arg3: boolean, arg4: number): number[];
    deflate(): void;
    destroy(): void;
    finish(): void;
    flush(): void;
    // private flushDeflater(): void;
    getBytesWritten(): number;
    // private getEffectiveZip64Mode(arg0: ZipArchiveEntry): Zip64Mode;
    getEncoding(): string;
    // private getEntryEncoding(arg0: ZipArchiveEntry): ZipEncoding;
    // private getGeneralPurposeBits(arg0: boolean, arg1: boolean): GeneralPurposeBit;
    // private getName(arg0: ZipArchiveEntry): ByteBuffer;
    // private getZip64Extra(arg0: ZipArchiveEntry): Zip64ExtendedInformationExtraField;
    // private handleSizesAndCrc(arg0: number, arg1: number, arg2: Zip64Mode): boolean;
    // private handleZip64Extra(arg0: ZipArchiveEntry, arg1: number, arg2: boolean): void;
    // private hasZip64Extra(arg0: ZipArchiveEntry): boolean;
    isSeekable(): boolean;
    // private isTooLargeForZip32(arg0: ZipArchiveEntry): boolean;
    // private isZip64Required(arg0: ZipArchiveEntry, arg1: Zip64Mode): boolean;
    // private preClose(): void;
    putArchiveEntry(arg0: ZipArchiveEntry): void;
    // private putArchiveEntry(arg0: ZipArchiveEntry, arg1: boolean): void;
    // private rewriteSizesAndCrc(arg0: boolean): void;
    setComment(arg0: string): void;
    setCreateUnicodeExtraFields(arg0: ZipArchiveOutputStream$UnicodeExtraFieldPolicy): void;
    // private setDefaults(arg0: ZipArchiveEntry): void;
    // private setEncoding(arg0: Charset): void;
    setEncoding(arg0: string): void;
    setFallbackToUTF8(arg0: boolean): void;
    setLevel(arg0: number): void;
    setMethod(arg0: number): void;
    setUseLanguageEncodingFlag(arg0: boolean): void;
    setUseZip64(arg0: Zip64Mode): void;
    // private shouldAddZip64Extra(arg0: ZipArchiveEntry, arg1: Zip64Mode): boolean;
    // private shouldUseZip64EOCD(): boolean;
    // private usesDataDescriptor(arg0: number, arg1: boolean): boolean;
    // private validateIfZip64IsNeededInEOCD(): void;
    // private validateSizeInformation(arg0: Zip64Mode): void;
    // private versionNeededToExtract(arg0: number, arg1: boolean, arg2: boolean): number;
    // private versionNeededToExtractMethod(arg0: number): number;
    write(arg0: number[], arg1: number, arg2: number): void;
    writeCentralDirectoryEnd(): void;
    // private writeCentralDirectoryInChunks(): void;
    writeCentralFileHeader(arg0: ZipArchiveEntry): void;
    // private writeCounted(arg0: number[]): void;
    writeDataDescriptor(arg0: ZipArchiveEntry): void;
    writeLocalFileHeader(arg0: ZipArchiveEntry): void;
    // private writeLocalFileHeader(arg0: ZipArchiveEntry, arg1: boolean): void;
    writeOut(arg0: number[]): void;
    writeOut(arg0: number[], arg1: number, arg2: number): void;
    writePreamble(arg0: number[]): void;
    writePreamble(arg0: number[], arg1: number, arg2: number): void;
    writeZip64CentralDirectory(): void;
}