import type { File } from '../../../../../../java/io/File.d.ts'
import type { Charset } from '../../../../../../java/nio/charset/Charset.d.ts'
import type { LinkOption } from '../../../../../../java/nio/file/LinkOption.d.ts'
import type { Path } from '../../../../../../java/nio/file/Path.d.ts'
import type { FileTime } from '../../../../../../java/nio/file/attribute/FileTime.d.ts'
import type { Date } from '../../../../../../java/util/Date.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ArchiveEntry } from '../../../../../../org/apache/commons/compress/archivers/ArchiveEntry.d.ts'
import type { CpioConstants } from '../../../../../../org/apache/commons/compress/archivers/cpio/CpioConstants.d.ts'
export class CpioArchiveEntry extends Object implements ArchiveEntry, CpioConstants {
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
    static SIZE_UNKNOWN: number;
    static S_IFMT: number;
    constructor(arg0: File, arg1: string)
    constructor(arg0: Path, arg1: string, ...arg2: LinkOption[])
    constructor(arg0: number)
    constructor(arg0: number, arg1: File, arg2: string)
    constructor(arg0: number, arg1: Path, arg2: string, ...arg3: LinkOption[])
    constructor(arg0: number, arg1: string)
    constructor(arg0: number, arg1: string, arg2: number)
    constructor(arg0: string)
    constructor(arg0: string, arg1: number)
    readonly alignmentBoundary: number;
    readonly chksum: number;
    // private fileFormat: number;
    // private fileSize: number;
    // private gid: number;
    readonly headerSize: number;
    readonly inode: number;
    // private maj: number;
    // private min: number;
    readonly mode: number;
    // private mtime: number;
    readonly name: string;
    // private nlink: number;
    // private rmaj: number;
    // private rmin: number;
    // private uid: number;
    // private checkNewFormat(): void;
    // private checkOldFormat(): void;
    equals(arg0: Object | null): boolean;
    getAlignmentBoundary(): number;
    getChksum(): number;
    getDataPadCount(): number;
    getDevice(): number;
    getDeviceMaj(): number;
    getDeviceMin(): number;
    getFormat(): number;
    getGID(): number;
    getHeaderPadCount(): number;
    getHeaderPadCount(arg0: Charset): number;
    getHeaderPadCount(arg0: number): number;
    getHeaderSize(): number;
    getInode(): number;
    getLastModifiedDate(): Date;
    getMode(): number;
    getName(): string;
    getNumberOfLinks(): number;
    getRemoteDevice(): number;
    getRemoteDeviceMaj(): number;
    getRemoteDeviceMin(): number;
    getSize(): number;
    getTime(): number;
    getUID(): number;
    hashCode(): number;
    isBlockDevice(): boolean;
    isCharacterDevice(): boolean;
    isDirectory(): boolean;
    isNetwork(): boolean;
    isPipe(): boolean;
    isRegularFile(): boolean;
    isSocket(): boolean;
    isSymbolicLink(): boolean;
    resolveIn(arg0: Path): Path;
    setChksum(arg0: number): void;
    setDevice(arg0: number): void;
    setDeviceMaj(arg0: number): void;
    setDeviceMin(arg0: number): void;
    setGID(arg0: number): void;
    setInode(arg0: number): void;
    setMode(arg0: number): void;
    setName(arg0: string): void;
    setNumberOfLinks(arg0: number): void;
    setRemoteDevice(arg0: number): void;
    setRemoteDeviceMaj(arg0: number): void;
    setRemoteDeviceMin(arg0: number): void;
    setSize(arg0: number): void;
    setTime(arg0: FileTime): void;
    setTime(arg0: number): void;
    setUID(arg0: number): void;
}