import type { Serializable } from '../../../../../../java/io/Serializable.d.ts'
import type { BigInteger } from '../../../../../../java/math/BigInteger.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../../java/lang/Cloneable.d.ts'
import type { ZipExtraField } from '../../../../../../org/apache/commons/compress/archivers/zip/ZipExtraField.d.ts'
import type { ZipShort } from '../../../../../../org/apache/commons/compress/archivers/zip/ZipShort.d.ts'
export class X7875_NewUnix extends Object implements Serializable, Cloneable, ZipExtraField {
    static EXTRAFIELD_HEADER_SIZE: number;
    constructor()
    // private gid: BigInteger;
    // private uid: BigInteger;
    // private version: number;
    clone(): Object;
    equals(arg0: Object | null): boolean;
    getCentralDirectoryData(): number[];
    getCentralDirectoryLength(): ZipShort;
    getGID(): number;
    getHeaderId(): ZipShort;
    getLocalFileDataData(): number[];
    getLocalFileDataLength(): ZipShort;
    getUID(): number;
    hashCode(): number;
    parseFromCentralDirectoryData(arg0: number[], arg1: number, arg2: number): void;
    parseFromLocalFileData(arg0: number[], arg1: number, arg2: number): void;
    // private reset(): void;
    setGID(arg0: number): void;
    setUID(arg0: number): void;
    toString(): string;
}