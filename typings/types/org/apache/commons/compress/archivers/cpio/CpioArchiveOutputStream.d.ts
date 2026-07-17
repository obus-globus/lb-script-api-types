import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { File } from '../../../../../../java/io/File.d.ts'
import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { LinkOption } from '../../../../../../java/nio/file/LinkOption.d.ts'
import type { Path } from '../../../../../../java/nio/file/Path.d.ts'
import type { ArchiveOutputStream } from '../../../../../../org/apache/commons/compress/archivers/ArchiveOutputStream.d.ts'
import type { CpioArchiveEntry } from '../../../../../../org/apache/commons/compress/archivers/cpio/CpioArchiveEntry.d.ts'
import type { CpioConstants } from '../../../../../../org/apache/commons/compress/archivers/cpio/CpioConstants.d.ts'
import type { ZipEncoding } from '../../../../../../org/apache/commons/compress/archivers/zip/ZipEncoding.d.ts'
export class CpioArchiveOutputStream extends ArchiveOutputStream<CpioArchiveEntry> implements CpioConstants {
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
    static nullOutputStream(): OutputStream;
    constructor(arg0: OutputStream)
    constructor(arg0: OutputStream, arg1: number)
    constructor(arg0: OutputStream, arg1: number, arg2: number)
    constructor(arg0: OutputStream, arg1: number, arg2: number, arg3: string)
    constructor(arg0: OutputStream, arg1: string)
    // private blockSize: number;
    // private charsetName: string;
    // private crc: number;
    // private entry: CpioArchiveEntry;
    // private entryFormat: number;
    // private names: JavaMap<string, CpioArchiveEntry>;
    // private nextArtificalDeviceAndInode: number;
    // private written: number;
    // private zipEncoding: ZipEncoding;
    close(): void;
    closeArchiveEntry(): void;
    createArchiveEntry(arg0: File, arg1: string): CpioArchiveEntry;
    createArchiveEntry(arg0: Path, arg1: string, ...arg2: LinkOption[]): CpioArchiveEntry;
    // private encode(arg0: string): number[];
    finish(): void;
    // private pad(arg0: number): void;
    putArchiveEntry(arg0: CpioArchiveEntry): void;
    write(arg0: File): number;
    write(arg0: Path): number;
    write(arg0: number[]): void;
    write(arg0: number[], arg1: number, arg2: number): void;
    write(arg0: number): void;
    // private writeAsciiLong(arg0: number, arg1: number, arg2: number): void;
    // private writeBinaryLong(arg0: number, arg1: number, arg2: boolean): void;
    // private writeCString(arg0: number[]): void;
    // private writeHeader(arg0: CpioArchiveEntry): void;
    // private writeNewEntry(arg0: CpioArchiveEntry): void;
    // private writeOldAsciiEntry(arg0: CpioArchiveEntry): void;
    // private writeOldBinaryEntry(arg0: CpioArchiveEntry, arg1: boolean): void;
}