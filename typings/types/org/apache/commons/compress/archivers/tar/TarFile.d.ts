import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Closeable } from '../../../../../../java/io/Closeable.d.ts'
import type { File } from '../../../../../../java/io/File.d.ts'
import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { ByteBuffer } from '../../../../../../java/nio/ByteBuffer.d.ts'
import type { SeekableByteChannel } from '../../../../../../java/nio/channels/SeekableByteChannel.d.ts'
import type { Path } from '../../../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { TarArchiveEntry } from '../../../../../../org/apache/commons/compress/archivers/tar/TarArchiveEntry.d.ts'
import type { TarArchiveStructSparse } from '../../../../../../org/apache/commons/compress/archivers/tar/TarArchiveStructSparse.d.ts'
import type { ZipEncoding } from '../../../../../../org/apache/commons/compress/archivers/zip/ZipEncoding.d.ts'
export class TarFile extends Object implements Closeable {
    constructor(arg0: File)
    constructor(arg0: File, arg1: boolean)
    constructor(arg0: File, arg1: string)
    constructor(arg0: SeekableByteChannel)
    constructor(arg0: SeekableByteChannel, arg1: number, arg2: number, arg3: string, arg4: boolean)
    constructor(arg0: Path)
    constructor(arg0: Path, arg1: boolean)
    constructor(arg0: Path, arg1: string)
    constructor(arg0: number[])
    constructor(arg0: number[], arg1: boolean)
    constructor(arg0: number[], arg1: string)
    // private archive: SeekableByteChannel;
    // private blockSize: number;
    // private currEntry: TarArchiveEntry;
    readonly entries: TarArchiveEntry[];
    // private eof: boolean;
    // private globalPaxHeaders: JavaMap<string, string>;
    // private globalSparseHeaders: TarArchiveStructSparse[];
    // private lenient: boolean;
    // private recordBuffer: ByteBuffer;
    // private recordSize: number;
    // private smallBuf: number[];
    // private sparseInputStreams: JavaMap<string, InputStream[]>;
    // private zipEncoding: ZipEncoding;
    // private applyPaxHeadersToCurrentEntry(arg0: JavaMap<string, string>, arg1: TarArchiveStructSparse[]): void;
    // private buildSparseInputStreams(): void;
    close(): void;
    // private consumeRemainderOfLastBlock(): void;
    getEntries(): TarArchiveEntry[];
    getInputStream(arg0: TarArchiveEntry): InputStream;
    // private getLongNameData(): number[];
    // private getNextTarEntry(): TarArchiveEntry;
    // private getRecord(): ByteBuffer;
    isAtEOF(): boolean;
    // private isDirectory(): boolean;
    // private isEOFRecord(arg0: ByteBuffer): boolean;
    // private paxHeaders(): void;
    // private readGlobalPaxHeaders(): void;
    // private readOldGNUSparse(): void;
    // private readRecord(): ByteBuffer;
    // private repositionForwardBy(arg0: number): void;
    // private repositionForwardTo(arg0: number): void;
    setAtEOF(arg0: boolean): void;
    // private skipRecordPadding(): void;
    // private throwExceptionIfPositionIsNotInArchive(): void;
    // private tryToConsumeSecondEOFRecord(): void;
}