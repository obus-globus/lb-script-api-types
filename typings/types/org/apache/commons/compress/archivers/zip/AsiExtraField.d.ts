import type { CRC32 } from '../../../../../../java/util/zip/CRC32.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../../java/lang/Cloneable.d.ts'
import type { UnixStat } from '../../../../../../org/apache/commons/compress/archivers/zip/UnixStat.d.ts'
import type { ZipExtraField } from '../../../../../../org/apache/commons/compress/archivers/zip/ZipExtraField.d.ts'
import type { ZipShort } from '../../../../../../org/apache/commons/compress/archivers/zip/ZipShort.d.ts'
export class AsiExtraField extends Object implements Cloneable, UnixStat, ZipExtraField {
    static DEFAULT_DIR_PERM: number;
    static DEFAULT_FILE_PERM: number;
    static DEFAULT_LINK_PERM: number;
    static DIR_FLAG: number;
    static EXTRAFIELD_HEADER_SIZE: number;
    static FILE_FLAG: number;
    static FILE_TYPE_FLAG: number;
    static LINK_FLAG: number;
    static PERM_MASK: number;
    constructor()
    // private crc: CRC32;
    // private dirFlag: boolean;
    // private gid: number;
    readonly link: string;
    readonly mode: number;
    // private uid: number;
    clone(): Object;
    getCentralDirectoryData(): number[];
    getCentralDirectoryLength(): ZipShort;
    getGroupId(): number;
    getHeaderId(): ZipShort;
    getLinkedFile(): string;
    getLocalFileDataData(): number[];
    getLocalFileDataLength(): ZipShort;
    getMode(): number;
    getMode(arg0: number): number;
    getUserId(): number;
    isDirectory(): boolean;
    isLink(): boolean;
    parseFromCentralDirectoryData(arg0: number[], arg1: number, arg2: number): void;
    parseFromLocalFileData(arg0: number[], arg1: number, arg2: number): void;
    setDirectory(arg0: boolean): void;
    setGroupId(arg0: number): void;
    setLinkedFile(arg0: string): void;
    setMode(arg0: number): void;
    setUserId(arg0: number): void;
}