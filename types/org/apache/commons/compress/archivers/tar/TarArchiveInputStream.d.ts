import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { ArchiveEntry } from '../../../../../../org/apache/commons/compress/archivers/ArchiveEntry.d.ts'
import type { ArchiveInputStream } from '../../../../../../org/apache/commons/compress/archivers/ArchiveInputStream.d.ts'
import type { TarArchiveEntry } from '../../../../../../org/apache/commons/compress/archivers/tar/TarArchiveEntry.d.ts'
import type { TarArchiveStructSparse } from '../../../../../../org/apache/commons/compress/archivers/tar/TarArchiveStructSparse.d.ts'
import type { ZipEncoding } from '../../../../../../org/apache/commons/compress/archivers/zip/ZipEncoding.d.ts'
export class TarArchiveInputStream extends ArchiveInputStream<TarArchiveEntry> {
    static matches(paramarg0: number[], paramarg1: number): boolean;
    static nullInputStream(): InputStream;
    constructor(arg0: InputStream)
    constructor(arg0: InputStream, arg1: boolean)
    constructor(arg0: InputStream, arg1: number)
    constructor(arg0: InputStream, arg1: number, arg2: number)
    constructor(arg0: InputStream, arg1: number, arg2: number, arg3: string)
    constructor(arg0: InputStream, arg1: number, arg2: number, arg3: string, arg4: boolean)
    constructor(arg0: InputStream, arg1: number, arg2: string)
    constructor(arg0: InputStream, arg1: string)
    // private atEof: boolean;
    // private blockSize: number;
    // private currEntry: TarArchiveEntry;
    // private currentSparseInputStreamIndex: number;
    // private entryOffset: number;
    // private entrySize: number;
    // private globalPaxHeaders: { [key: string]: string };
    // private globalSparseHeaders: TarArchiveStructSparse[];
    // private lenient: boolean;
    // private recordBuffer: number[];
    // private smallBuf: number[];
    // private sparseInputStreams: InputStream[];
    // private zipEncoding: ZipEncoding;
    // private applyPaxHeadersToCurrentEntry(arg0: { [key: string]: string }, arg1: TarArchiveStructSparse[]): void;
    available(): number;
    // private buildSparseInputStreams(): void;
    canReadEntryData(arg0: ArchiveEntry): boolean;
    close(): void;
    // private consumeRemainderOfLastBlock(): void;
    // private getActuallySkipped(arg0: number, arg1: number, arg2: number): number;
    getCurrentEntry(): TarArchiveEntry;
    getLongNameData(): number[];
    getNextEntry(): TarArchiveEntry;
    getNextTarEntry(): TarArchiveEntry;
    // private getRecord(): number[];
    getRecordSize(): number;
    isAtEOF(): boolean;
    // private isDirectory(): boolean;
    isEOFRecord(arg0: number[]): boolean;
    mark(arg0: number): void;
    markSupported(): boolean;
    // private paxHeaders(): void;
    read(arg0: number[], arg1: number, arg2: number): number;
    // private readGlobalPaxHeaders(): void;
    // private readOldGNUSparse(): void;
    readRecord(): number[];
    // private readSparse(arg0: number[], arg1: number, arg2: number): number;
    reset(): void;
    setAtEOF(arg0: boolean): void;
    setCurrentEntry(arg0: TarArchiveEntry): void;
    skip(arg0: number): number;
    // private skipRecordPadding(): void;
    // private skipSparse(arg0: number): number;
    // private tryToConsumeSecondEOFRecord(): void;
}