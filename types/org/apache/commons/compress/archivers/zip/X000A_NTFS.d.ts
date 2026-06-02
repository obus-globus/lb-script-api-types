import type { FileTime } from '../../../../../../java/nio/file/attribute/FileTime.d.ts'
import type { Date } from '../../../../../../java/util/Date.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ZipEightByteInteger } from '../../../../../../org/apache/commons/compress/archivers/zip/ZipEightByteInteger.d.ts'
import type { ZipExtraField } from '../../../../../../org/apache/commons/compress/archivers/zip/ZipExtraField.d.ts'
import type { ZipShort } from '../../../../../../org/apache/commons/compress/archivers/zip/ZipShort.d.ts'
export class X000A_NTFS extends Object implements ZipExtraField {
    static EXTRAFIELD_HEADER_SIZE: number;
    static HEADER_ID: ZipShort;
    constructor()
    readonly accessTime: ZipEightByteInteger;
    readonly createTime: ZipEightByteInteger;
    readonly modifyTime: ZipEightByteInteger;
    equals(arg0: Object | null): boolean;
    getAccessFileTime(): FileTime;
    getAccessJavaTime(): Date;
    getAccessTime(): ZipEightByteInteger;
    getCentralDirectoryData(): number[];
    getCentralDirectoryLength(): ZipShort;
    getCreateFileTime(): FileTime;
    getCreateJavaTime(): Date;
    getCreateTime(): ZipEightByteInteger;
    getHeaderId(): ZipShort;
    getLocalFileDataData(): number[];
    getLocalFileDataLength(): ZipShort;
    getModifyFileTime(): FileTime;
    getModifyJavaTime(): Date;
    getModifyTime(): ZipEightByteInteger;
    hashCode(): number;
    parseFromCentralDirectoryData(arg0: number[], arg1: number, arg2: number): void;
    parseFromLocalFileData(arg0: number[], arg1: number, arg2: number): void;
    // private readTimeAttr(arg0: number[], arg1: number, arg2: number): void;
    // private reset(): void;
    setAccessFileTime(arg0: FileTime): void;
    setAccessJavaTime(arg0: Date): void;
    setAccessTime(arg0: ZipEightByteInteger): void;
    setCreateFileTime(arg0: FileTime): void;
    setCreateJavaTime(arg0: Date): void;
    setCreateTime(arg0: ZipEightByteInteger): void;
    setModifyFileTime(arg0: FileTime): void;
    setModifyJavaTime(arg0: Date): void;
    setModifyTime(arg0: ZipEightByteInteger): void;
    toString(): string;
}