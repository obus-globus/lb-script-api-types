import type { DataInputStream } from '../../../../../../java/io/DataInputStream.d.ts'
import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { ArchiveEntry } from '../../../../../../org/apache/commons/compress/archivers/ArchiveEntry.d.ts'
import type { ArchiveInputStream } from '../../../../../../org/apache/commons/compress/archivers/ArchiveInputStream.d.ts'
import type { ArjArchiveEntry } from '../../../../../../org/apache/commons/compress/archivers/arj/ArjArchiveEntry.d.ts'
import type { LocalFileHeader } from '../../../../../../org/apache/commons/compress/archivers/arj/LocalFileHeader.d.ts'
import type { MainHeader } from '../../../../../../org/apache/commons/compress/archivers/arj/MainHeader.d.ts'
export class ArjArchiveInputStream extends ArchiveInputStream<ArjArchiveEntry> {
    static matches(paramarg0: number[], paramarg1: number): boolean;
    static nullInputStream(): InputStream;
    constructor(arg0: InputStream)
    constructor(arg0: InputStream, arg1: string)
    // private currentInputStream: InputStream;
    // private currentLocalFileHeader: LocalFileHeader;
    // private dis: DataInputStream;
    // private mainHeader: MainHeader;
    canReadEntryData(arg0: ArchiveEntry): boolean;
    close(): void;
    getArchiveComment(): string;
    getArchiveName(): string;
    getNextEntry(): ArjArchiveEntry;
    read(arg0: number[], arg1: number, arg2: number): number;
    // private read16(arg0: DataInputStream): number;
    // private read32(arg0: DataInputStream): number;
    // private read8(arg0: DataInputStream): number;
    // private readExtraData(arg0: number, arg1: DataInputStream, arg2: LocalFileHeader): void;
    // private readHeader(): number[];
    // private readLocalFileHeader(): LocalFileHeader;
    // private readMainHeader(): MainHeader;
    // private readRange(arg0: InputStream, arg1: number): number[];
    // private readString(arg0: DataInputStream): string;
}