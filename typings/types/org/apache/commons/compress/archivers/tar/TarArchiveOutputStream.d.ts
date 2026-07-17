import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { File } from '../../../../../../java/io/File.d.ts'
import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { LinkOption } from '../../../../../../java/nio/file/LinkOption.d.ts'
import type { Path } from '../../../../../../java/nio/file/Path.d.ts'
import type { FileTime } from '../../../../../../java/nio/file/attribute/FileTime.d.ts'
import type { ArchiveOutputStream } from '../../../../../../org/apache/commons/compress/archivers/ArchiveOutputStream.d.ts'
import type { TarArchiveEntry } from '../../../../../../org/apache/commons/compress/archivers/tar/TarArchiveEntry.d.ts'
import type { ZipEncoding } from '../../../../../../org/apache/commons/compress/archivers/zip/ZipEncoding.d.ts'
import type { CountingOutputStream } from '../../../../../../org/apache/commons/io/output/CountingOutputStream.d.ts'
export class TarArchiveOutputStream extends ArchiveOutputStream<TarArchiveEntry> {
    static BIGNUMBER_ERROR: number;
    static BIGNUMBER_POSIX: number;
    static BIGNUMBER_STAR: number;
    static LONGFILE_ERROR: number;
    static LONGFILE_GNU: number;
    static LONGFILE_POSIX: number;
    static LONGFILE_TRUNCATE: number;
    static nullOutputStream(): OutputStream;
    constructor(arg0: OutputStream)
    constructor(arg0: OutputStream, arg1: number)
    constructor(arg0: OutputStream, arg1: number, arg2: number)
    constructor(arg0: OutputStream, arg1: number, arg2: number, arg3: string)
    constructor(arg0: OutputStream, arg1: number, arg2: string)
    constructor(arg0: OutputStream, arg1: string)
    readonly addPaxHeadersForNonAsciiNames: boolean;
    readonly bigNumberMode: number;
    // private charsetName: string;
    // private countingOut: CountingOutputStream;
    // private currBytes: number;
    // private currName: string;
    // private currSize: number;
    // private haveUnclosedEntry: boolean;
    readonly longFileMode: number;
    // private recordBuf: number[];
    // private recordsPerBlock: number;
    // private recordsWritten: number;
    // private zipEncoding: ZipEncoding;
    // private addFileTimePaxHeader(arg0: JavaMap<string, string>, arg1: string, arg2: FileTime): void;
    // private addFileTimePaxHeaderForBigNumber(arg0: JavaMap<string, string>, arg1: string, arg2: FileTime, arg3: number): void;
    // private addInstantPaxHeader(arg0: JavaMap<string, string>, arg1: string, arg2: number, arg3: number): void;
    // private addPaxHeaderForBigNumber(arg0: JavaMap<string, string>, arg1: string, arg2: number, arg3: number): void;
    // private addPaxHeadersForBigNumbers(arg0: JavaMap<string, string>, arg1: TarArchiveEntry): void;
    close(): void;
    closeArchiveEntry(): void;
    createArchiveEntry(arg0: File, arg1: string): TarArchiveEntry;
    createArchiveEntry(arg0: Path, arg1: string, ...arg2: LinkOption[]): TarArchiveEntry;
    // private encodeExtendedPaxHeadersContents(arg0: JavaMap<string, string>): number[];
    // private failForBigNumber(arg0: string, arg1: number, arg2: number): void;
    // private failForBigNumber(arg0: string, arg1: number, arg2: number, arg3: string): void;
    // private failForBigNumberWithPosixMessage(arg0: string, arg1: number, arg2: number): void;
    // private failForBigNumbers(arg0: TarArchiveEntry): void;
    finish(): void;
    getBytesWritten(): number;
    getCount(): number;
    getRecordSize(): number;
    // private handleLongName(arg0: TarArchiveEntry, arg1: string, arg2: JavaMap<string, string>, arg3: string, arg4: number, arg5: string): boolean;
    // private padAsNeeded(): void;
    putArchiveEntry(arg0: TarArchiveEntry): void;
    setAddPaxHeadersForNonAsciiNames(arg0: boolean): void;
    setBigNumberMode(arg0: number): void;
    setLongFileMode(arg0: number): void;
    // private shouldBeReplaced(arg0: string): boolean;
    // private stripTo7Bits(arg0: string): string;
    // private transferModTime(arg0: TarArchiveEntry, arg1: TarArchiveEntry): void;
    write(arg0: File): number;
    write(arg0: Path): number;
    write(arg0: number[]): void;
    write(arg0: number[], arg1: number, arg2: number): void;
    write(arg0: number): void;
    // private writeEOFRecord(): void;
    writePaxHeaders(arg0: TarArchiveEntry, arg1: string, arg2: JavaMap<string, string>): void;
    // private writeRecord(arg0: number[]): void;
}