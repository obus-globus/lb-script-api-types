import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { ArchiveInputStream } from '../../../../../../org/apache/commons/compress/archivers/ArchiveInputStream.d.ts'
import type { Dirent } from '../../../../../../org/apache/commons/compress/archivers/dump/Dirent.d.ts'
import type { DumpArchiveEntry } from '../../../../../../org/apache/commons/compress/archivers/dump/DumpArchiveEntry.d.ts'
import type { DumpArchiveSummary } from '../../../../../../org/apache/commons/compress/archivers/dump/DumpArchiveSummary.d.ts'
import type { TapeInputStream } from '../../../../../../org/apache/commons/compress/archivers/dump/TapeInputStream.d.ts'
import type { ZipEncoding } from '../../../../../../org/apache/commons/compress/archivers/zip/ZipEncoding.d.ts'
export class DumpArchiveInputStream extends ArchiveInputStream<DumpArchiveEntry> {
    static matches(paramarg0: number[], paramarg1: number): boolean;
    static nullInputStream(): InputStream;
    constructor(arg0: InputStream)
    constructor(arg0: InputStream, arg1: string)
    // private active: DumpArchiveEntry;
    // private blockBuffer: number[];
    // private entryOffset: number;
    // private entrySize: number;
    // private filepos: number;
    // private hasHitEOF: boolean;
    // private isClosed: boolean;
    // private names: { [key: number]: Dirent };
    // private pending: { [key: number]: DumpArchiveEntry };
    // private queue: DumpArchiveEntry[];
    // private raw: TapeInputStream;
    // private readBuf: number[];
    // private readIdx: number;
    // private recordOffset: number;
    readonly summary: DumpArchiveSummary;
    // private zipEncoding: ZipEncoding;
    close(): void;
    getBytesRead(): number;
    getCount(): number;
    getNextDumpEntry(): DumpArchiveEntry;
    getNextEntry(): DumpArchiveEntry;
    // private getPath(arg0: DumpArchiveEntry): string;
    getSummary(): DumpArchiveSummary;
    read(): number;
    read(arg0: number[]): number;
    read(arg0: number[], arg1: number, arg2: number): number;
    // private readBITS(): void;
    // private readCLRI(): void;
    // private readDirectoryEntry(arg0: DumpArchiveEntry): void;
}