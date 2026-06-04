import type { File } from '../../../../../../java/io/File.d.ts'
import type { LinkOption } from '../../../../../../java/nio/file/LinkOption.d.ts'
import type { FileTime } from '../../../../../../java/nio/file/attribute/FileTime.d.ts'
import type { Date } from '../../../../../../java/util/Date.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ArchiveEntry } from '../../../../../../org/apache/commons/compress/archivers/ArchiveEntry.d.ts'
import type { EntryStreamOffsets } from '../../../../../../org/apache/commons/compress/archivers/EntryStreamOffsets.d.ts'
import type { TarArchiveStructSparse } from '../../../../../../org/apache/commons/compress/archivers/tar/TarArchiveStructSparse.d.ts'
import type { TarConstants } from '../../../../../../org/apache/commons/compress/archivers/tar/TarConstants.d.ts'
import type { ZipEncoding } from '../../../../../../org/apache/commons/compress/archivers/zip/ZipEncoding.d.ts'
export class TarArchiveEntry extends Object implements ArchiveEntry, EntryStreamOffsets, TarConstants {
    static ATIMELEN_GNU: number;
    static ATIMELEN_XSTAR: number;
    static CHKSUMLEN: number;
    static CHKSUM_OFFSET: number;
    static CTIMELEN_GNU: number;
    static CTIMELEN_XSTAR: number;
    static DEFAULT_BLKSIZE: number;
    static DEFAULT_DIR_MODE: number;
    static DEFAULT_FILE_MODE: number;
    static DEFAULT_RCDSIZE: number;
    static DEVLEN: number;
    static FORMAT_OLDGNU: number;
    static FORMAT_POSIX: number;
    static FORMAT_XSTAR: number;
    static GIDLEN: number;
    static GNAMELEN: number;
    static GNU_LONGLINK: string;
    static ISEXTENDEDLEN_GNU: number;
    static ISEXTENDEDLEN_GNU_SPARSE: number;
    static LF_BLK: number;
    static LF_CHR: number;
    static LF_CONTIG: number;
    static LF_DIR: number;
    static LF_FIFO: number;
    static LF_GNUTYPE_LONGLINK: number;
    static LF_GNUTYPE_LONGNAME: number;
    static LF_GNUTYPE_SPARSE: number;
    static LF_LINK: number;
    static LF_MULTIVOLUME: number;
    static LF_NORMAL: number;
    static LF_OFFSET: number;
    static LF_OLDNORM: number;
    static LF_PAX_EXTENDED_HEADER_LC: number;
    static LF_PAX_EXTENDED_HEADER_UC: number;
    static LF_PAX_GLOBAL_EXTENDED_HEADER: number;
    static LF_SYMLINK: number;
    static LONGNAMESLEN_GNU: number;
    static MAGICLEN: number;
    static MAGIC_ANT: string;
    static MAGIC_GNU: string;
    static MAGIC_OFFSET: number;
    static MAGIC_POSIX: string;
    static MAGIC_XSTAR: string;
    static MAXID: number;
    static MAXSIZE: number;
    static MAX_NAMELEN: number;
    static MILLIS_PER_SECOND: number;
    static MODELEN: number;
    static MODTIMELEN: number;
    static NAMELEN: number;
    static OFFSETLEN_GNU: number;
    static OFFSET_UNKNOWN: number;
    static PAD2LEN_GNU: number;
    static PREFIXLEN: number;
    static PREFIXLEN_XSTAR: number;
    static REALSIZELEN_GNU: number;
    static SIZELEN: number;
    static SIZE_UNKNOWN: number;
    static SPARSELEN_GNU: number;
    static SPARSELEN_GNU_SPARSE: number;
    static SPARSE_HEADERS_IN_EXTENSION_HEADER: number;
    static SPARSE_HEADERS_IN_OLDGNU_HEADER: number;
    static SPARSE_NUMBYTES_LEN: number;
    static SPARSE_OFFSET_LEN: number;
    static UIDLEN: number;
    static UNAMELEN: number;
    static UNKNOWN: number;
    static VERSIONLEN: number;
    static VERSION_ANT: string;
    static VERSION_GNU_SPACE: string;
    static VERSION_GNU_ZERO: string;
    static VERSION_OFFSET: number;
    static VERSION_POSIX: string;
    static XSTAR_ATIME_OFFSET: number;
    static XSTAR_CTIME_OFFSET: number;
    static XSTAR_MAGIC_LEN: number;
    static XSTAR_MAGIC_OFFSET: number;
    static XSTAR_MULTIVOLUME_OFFSET: number;
    static XSTAR_PREFIX_OFFSET: number;
    constructor(arg0: File)
    constructor(arg0: File, arg1: string)
    constructor(arg0: Path[])
    constructor(arg0: Path[], arg1: string, arg2: LinkOption[])
    private constructor(arg0: boolean)
    constructor(arg0: number[])
    constructor(arg0: number[], arg1: ZipEncoding)
    constructor(arg0: number[], arg1: ZipEncoding, arg2: boolean)
    constructor(arg0: number[], arg1: ZipEncoding, arg2: boolean, arg3: number)
    constructor(arg0: string)
    constructor(arg0: string, arg1: boolean)
    constructor(arg0: string, arg1: number)
    constructor(arg0: string, arg1: number, arg2: boolean)
    constructor(arg0: { [key: string]: string }, arg1: number[], arg2: ZipEncoding, arg3: boolean)
    constructor(arg0: { [key: string]: string }, arg1: number[], arg2: ZipEncoding, arg3: boolean, arg4: number)
    // private aTime: FileTime;
    // private birthTime: FileTime;
    // private cTime: FileTime;
    readonly checkSumOK: boolean;
    readonly dataOffset: number;
    readonly devMajor: number;
    readonly devMinor: number;
    readonly extraPaxHeaders: { [key: string]: string };
    readonly file: Path[];
    readonly groupId: number;
    readonly groupName: string;
    // private isExtended: boolean;
    readonly linkFlag: number;
    readonly linkName: string;
    // private linkOptions: LinkOption[];
    // private mTime: FileTime;
    // private magic: string;
    readonly mode: number;
    readonly name: string;
    readonly paxGNU1XSparse: boolean;
    readonly paxGNUSparse: boolean;
    // private preserveAbsolutePath: boolean;
    readonly realSize: number;
    readonly size: number;
    readonly sparseHeaders: TarArchiveStructSparse[];
    readonly starSparse: boolean;
    readonly userId: number;
    readonly userName: string;
    // private version: string;
    addPaxHeader(arg0: string, arg1: string): void;
    clearExtraPaxHeaders(): void;
    equals(arg0: Object | null): boolean;
    equals(arg0: TarArchiveEntry): boolean;
    // private evaluateType(arg0: { [key: string]: string }, arg1: number[]): number;
    // private fill(arg0: number, arg1: number, arg2: number[], arg3: number): number;
    fillGNUSparse0xData(arg0: { [key: string]: string }): void;
    fillGNUSparse1xData(arg0: { [key: string]: string }): void;
    fillStarSparseData(arg0: { [key: string]: string }): void;
    getCreationTime(): FileTime;
    getDataOffset(): number;
    getDevMajor(): number;
    getDevMinor(): number;
    getDirectoryEntries(): TarArchiveEntry[];
    getExtraPaxHeader(arg0: string): string;
    getExtraPaxHeaders(): { [key: string]: string };
    getFile(): File;
    getGroupId(): number;
    getGroupName(): string;
    getLastAccessTime(): FileTime;
    getLastModifiedDate(): Date;
    getLastModifiedTime(): FileTime;
    getLinkFlag(): number;
    getLinkName(): string;
    getLongGroupId(): number;
    getLongUserId(): number;
    getModTime(): Date;
    getMode(): number;
    getName(): string;
    getOrderedSparseHeaders(): TarArchiveStructSparse[];
    getPath(): Path[];
    getRealSize(): number;
    getSize(): number;
    getSparseHeaders(): TarArchiveStructSparse[];
    getStatusChangeTime(): FileTime;
    getUserId(): number;
    getUserName(): string;
    hashCode(): number;
    isBlockDevice(): boolean;
    isCharacterDevice(): boolean;
    isCheckSumOK(): boolean;
    isDescendent(arg0: TarArchiveEntry): boolean;
    isDirectory(): boolean;
    isExtended(): boolean;
    isFIFO(): boolean;
    isFile(): boolean;
    isGNULongLinkEntry(): boolean;
    isGNULongNameEntry(): boolean;
    isGNUSparse(): boolean;
    isGlobalPaxHeader(): boolean;
    // private isInvalidPrefix(arg0: number[]): boolean;
    // private isInvalidXtarTime(arg0: number[], arg1: number, arg2: number): boolean;
    isLink(): boolean;
    isOldGNUSparse(): boolean;
    isPaxGNU1XSparse(): boolean;
    isPaxGNUSparse(): boolean;
    isPaxHeader(): boolean;
    isSparse(): boolean;
    isStarSparse(): boolean;
    isStreamContiguous(): boolean;
    isSymbolicLink(): boolean;
    isTypeFlagUstar(): boolean;
    // private isXstar(arg0: { [key: string]: string }, arg1: number[]): boolean;
    // private parseOctalOrBinary(arg0: number[], arg1: number, arg2: number, arg3: boolean): number;
    parseTarHeader(arg0: number[]): void;
    parseTarHeader(arg0: number[], arg1: ZipEncoding): void;
    // private parseTarHeader(arg0: number[], arg1: ZipEncoding, arg2: boolean, arg3: boolean): void;
    // private parseTarHeader(arg0: { [key: string]: string }, arg1: number[], arg2: ZipEncoding, arg3: boolean, arg4: boolean): void;
    // private parseTarHeaderBlock(arg0: number[], arg1: ZipEncoding, arg2: boolean, arg3: boolean, arg4: number): number;
    // private parseUstarHeaderBlock(arg0: { [key: string]: string }, arg1: number[], arg2: ZipEncoding, arg3: boolean, arg4: boolean): void;
    // private processPaxHeader(arg0: string, arg1: string): void;
    // private processPaxHeader(arg0: string, arg1: string, arg2: { [key: string]: string }): void;
    // private readFileMode(arg0: Path[], arg1: string, arg2: LinkOption[]): void;
    // private readOsSpecificProperties(arg0: Path[], arg1: LinkOption[]): void;
    resolveIn(arg0: Path[]): Path[];
    setCreationTime(arg0: FileTime): void;
    setDataOffset(arg0: number): void;
    setDevMajor(arg0: number): void;
    setDevMinor(arg0: number): void;
    setGroupId(arg0: number): void;
    setGroupName(arg0: string): void;
    setIds(arg0: number, arg1: number): void;
    setLastAccessTime(arg0: FileTime): void;
    setLastModifiedTime(arg0: FileTime): void;
    setLinkName(arg0: string): void;
    setModTime(arg0: FileTime): void;
    setModTime(arg0: Date): void;
    setModTime(arg0: number): void;
    setMode(arg0: number): void;
    setName(arg0: string): void;
    setNames(arg0: string, arg1: string): void;
    setSize(arg0: number): void;
    setSparseHeaders(arg0: TarArchiveStructSparse[]): void;
    setStatusChangeTime(arg0: FileTime): void;
    setUserId(arg0: number): void;
    setUserName(arg0: string): void;
    toString(): string;
    updateEntryFromPaxHeaders(arg0: { [key: string]: string }): void;
    writeEntryHeader(arg0: number[]): void;
    writeEntryHeader(arg0: number[], arg1: ZipEncoding, arg2: boolean): void;
    // private writeEntryHeaderField(arg0: number, arg1: number[], arg2: number, arg3: number, arg4: boolean): number;
    // private writeEntryHeaderOptionalTimeField(arg0: FileTime, arg1: number, arg2: number[], arg3: number): number;
}