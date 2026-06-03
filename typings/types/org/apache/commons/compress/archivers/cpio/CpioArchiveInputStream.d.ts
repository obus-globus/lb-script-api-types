import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { ArchiveInputStream } from '../../../../../../org/apache/commons/compress/archivers/ArchiveInputStream.d.ts'
import type { CpioArchiveEntry } from '../../../../../../org/apache/commons/compress/archivers/cpio/CpioArchiveEntry.d.ts'
import type { CpioConstants } from '../../../../../../org/apache/commons/compress/archivers/cpio/CpioConstants.d.ts'
import type { ZipEncoding } from '../../../../../../org/apache/commons/compress/archivers/zip/ZipEncoding.d.ts'
export class CpioArchiveInputStream extends ArchiveInputStream<CpioArchiveEntry> implements CpioConstants {
    static BLOCK_SIZE: number;
    static CPIO_TRAILER: string;
    static C_IRGRP: number;
    static C_IROTH: number;
    static C_IRUSR: number;
    static C_ISBLK: number;
    static C_ISCHR: number;
    static C_ISDIR: number;
    static C_ISFIFO: number;
    static C_ISGID: number;
    static C_ISLNK: number;
    static C_ISNWK: number;
    static C_ISREG: number;
    static C_ISSOCK: number;
    static C_ISUID: number;
    static C_ISVTX: number;
    static C_IWGRP: number;
    static C_IWOTH: number;
    static C_IWUSR: number;
    static C_IXGRP: number;
    static C_IXOTH: number;
    static C_IXUSR: number;
    static FORMAT_NEW: number;
    static FORMAT_NEW_CRC: number;
    static FORMAT_NEW_MASK: number;
    static FORMAT_OLD_ASCII: number;
    static FORMAT_OLD_BINARY: number;
    static FORMAT_OLD_MASK: number;
    static MAGIC_NEW: string;
    static MAGIC_NEW_CRC: string;
    static MAGIC_OLD_ASCII: string;
    static MAGIC_OLD_BINARY: number;
    static S_IFMT: number;
    static matches(paramarg0: number[], paramarg1: number): boolean;
    static nullInputStream(): InputStream;
    constructor(arg0: InputStream)
    constructor(arg0: InputStream, arg1: number)
    constructor(arg0: InputStream, arg1: number, arg2: string)
    constructor(arg0: InputStream, arg1: string)
    // private blockSize: number;
    // private buffer2: number[];
    // private buffer4: number[];
    // private buffer6: number[];
    // private closed: boolean;
    // private crc: number;
    // private entry: CpioArchiveEntry;
    // private entryBytesRead: number;
    // private entryEOF: boolean;
    // private tmpBuf: number[];
    // private zipEncoding: ZipEncoding;
    available(): number;
    close(): void;
    // private closeEntry(): void;
    // private ensureOpen(): void;
    getNextCPIOEntry(): CpioArchiveEntry;
    getNextEntry(): CpioArchiveEntry;
    read(): number;
    read(arg0: number[]): number;
    read(arg0: number[], arg1: number, arg2: number): number;
    // private readAsciiLong(arg0: number, arg1: number): number;
    // private readBinaryLong(arg0: number, arg1: boolean): number;
    // private readCString(arg0: number): string;
    // private readFully(arg0: number[], arg1: number, arg2: number): number;
    // private readNewEntry(arg0: boolean): CpioArchiveEntry;
    // private readOldAsciiEntry(): CpioArchiveEntry;
    // private readOldBinaryEntry(arg0: boolean): CpioArchiveEntry;
    // private readRange(arg0: number): number[];
    // private skip(arg0: number): number;
    skip(arg0: number): number;
    // private skipRemainderOfLastBlock(): void;
}