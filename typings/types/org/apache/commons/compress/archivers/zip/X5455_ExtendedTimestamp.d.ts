import type { Serializable } from '../../../../../../java/io/Serializable.d.ts'
import type { FileTime } from '../../../../../../java/nio/file/attribute/FileTime.d.ts'
import type { Date } from '../../../../../../java/util/Date.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../../java/lang/Cloneable.d.ts'
import type { ZipExtraField } from '../../../../../../org/apache/commons/compress/archivers/zip/ZipExtraField.d.ts'
import type { ZipLong } from '../../../../../../org/apache/commons/compress/archivers/zip/ZipLong.d.ts'
import type { ZipShort } from '../../../../../../org/apache/commons/compress/archivers/zip/ZipShort.d.ts'
export class X5455_ExtendedTimestamp extends Object implements Serializable, Cloneable, ZipExtraField {
    static ACCESS_TIME_BIT: number;
    static CREATE_TIME_BIT: number;
    static EXTRAFIELD_HEADER_SIZE: number;
    static HEADER_ID: ZipShort;
    static MODIFY_TIME_BIT: number;
    constructor()
    readonly accessTime: ZipLong;
    readonly bit0_modifyTimePresent: boolean;
    readonly bit1_accessTimePresent: boolean;
    readonly bit2_createTimePresent: boolean;
    readonly createTime: ZipLong;
    readonly flags: number;
    readonly modifyTime: ZipLong;
    clone(): Object;
    equals(arg0: Object | null): boolean;
    getAccessFileTime(): FileTime;
    getAccessJavaTime(): Date;
    getAccessTime(): ZipLong;
    getCentralDirectoryData(): number[];
    getCentralDirectoryLength(): ZipShort;
    getCreateFileTime(): FileTime;
    getCreateJavaTime(): Date;
    getCreateTime(): ZipLong;
    getFlags(): number;
    getHeaderId(): ZipShort;
    getLocalFileDataData(): number[];
    getLocalFileDataLength(): ZipShort;
    getModifyFileTime(): FileTime;
    getModifyJavaTime(): Date;
    getModifyTime(): ZipLong;
    hashCode(): number;
    isBit0_modifyTimePresent(): boolean;
    isBit1_accessTimePresent(): boolean;
    isBit2_createTimePresent(): boolean;
    parseFromCentralDirectoryData(arg0: number[], arg1: number, arg2: number): void;
    parseFromLocalFileData(arg0: number[], arg1: number, arg2: number): void;
    // private reset(): void;
    setAccessFileTime(arg0: FileTime): void;
    setAccessJavaTime(arg0: Date): void;
    setAccessTime(arg0: ZipLong): void;
    setCreateFileTime(arg0: FileTime): void;
    setCreateJavaTime(arg0: Date): void;
    setCreateTime(arg0: ZipLong): void;
    setFlags(arg0: number): void;
    setModifyFileTime(arg0: FileTime): void;
    setModifyJavaTime(arg0: Date): void;
    setModifyTime(arg0: ZipLong): void;
    toString(): string;
}