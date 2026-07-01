import type { FileTime } from '../../../java/nio/file/attribute/FileTime.d.ts'
import type { LocalDateTime } from '../../../java/time/LocalDateTime.d.ts'
import type { ZipConstants } from '../../../java/util/zip/ZipConstants.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../java/lang/Cloneable.d.ts'
export class ZipEntry extends Object implements ZipConstants, Cloneable {
    static CENATT: number;
    static CENATX: number;
    static CENCOM: number;
    static CENCRC: number;
    static CENDSK: number;
    static CENEXT: number;
    static CENFLG: number;
    static CENHDR: number;
    static CENHOW: number;
    static CENLEN: number;
    static CENNAM: number;
    static CENOFF: number;
    static CENSIG: number;
    static CENSIZ: number;
    static CENTIM: number;
    static CENVEM: number;
    static CENVER: number;
    static DEFLATED: number;
    static ENDCOM: number;
    static ENDHDR: number;
    static ENDOFF: number;
    static ENDSIG: number;
    static ENDSIZ: number;
    static ENDSUB: number;
    static ENDTOT: number;
    static EXTCRC: number;
    static EXTHDR: number;
    static EXTLEN: number;
    static EXTSIG: number;
    static EXTSIZ: number;
    static LOCCRC: number;
    static LOCEXT: number;
    static LOCFLG: number;
    static LOCHDR: number;
    static LOCHOW: number;
    static LOCLEN: number;
    static LOCNAM: number;
    static LOCSIG: number;
    static LOCSIZ: number;
    static LOCTIM: number;
    static LOCVER: number;
    static STORED: number;
    constructor(arg0: ZipEntry)
    constructor(arg0: string)
    // private atime: FileTime;
    comment: string;
    crc: number;
    // private csize: number;
    // private csizeSet: boolean;
    // private ctime: FileTime;
    // private externalFileAttributes: number;
    extra: number[];
    // private flag: number;
    method: number;
    // private mtime: FileTime;
    name: string;
    size: number;
    // private xdostime: number;
    clone(): Object;
    getComment(): string;
    getCompressedSize(): number;
    getCrc(): number;
    getCreationTime(): FileTime;
    getExtra(): number[];
    getLastAccessTime(): FileTime;
    getLastModifiedTime(): FileTime;
    getMethod(): number;
    getName(): string;
    getSize(): number;
    getTime(): number;
    getTimeLocal(): LocalDateTime;
    hashCode(): number;
    isDirectory(): boolean;
    setComment(arg0: string): void;
    setCompressedSize(arg0: number): void;
    setCrc(arg0: number): void;
    setCreationTime(arg0: FileTime): ZipEntry;
    setExtra(arg0: number[]): void;
    setExtra0(arg0: number[], arg1: boolean, arg2: boolean): void;
    setLastAccessTime(arg0: FileTime): ZipEntry;
    setLastModifiedTime(arg0: FileTime): ZipEntry;
    setMethod(arg0: number): void;
    setSize(arg0: number): void;
    setTime(arg0: number): void;
    setTimeLocal(arg0: LocalDateTime): void;
    toString(): string;
}