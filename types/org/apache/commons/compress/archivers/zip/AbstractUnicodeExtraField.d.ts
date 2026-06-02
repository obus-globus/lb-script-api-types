import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ZipExtraField } from '../../../../../../org/apache/commons/compress/archivers/zip/ZipExtraField.d.ts'
import type { ZipShort } from '../../../../../../org/apache/commons/compress/archivers/zip/ZipShort.d.ts'
export abstract class AbstractUnicodeExtraField extends Object implements ZipExtraField {
    static EXTRAFIELD_HEADER_SIZE: number;
    constructor()
    constructor(arg0: string, arg1: number[])
    constructor(arg0: string, arg1: number[], arg2: number, arg3: number)
    // private data: number[];
    readonly nameCRC32: number;
    readonly unicodeName: number[];
    // private assembleData(): void;
    getCentralDirectoryData(): number[];
    getCentralDirectoryLength(): ZipShort;
    getLocalFileDataData(): number[];
    getLocalFileDataLength(): ZipShort;
    getNameCRC32(): number;
    getUnicodeName(): number[];
    parseFromCentralDirectoryData(arg0: number[], arg1: number, arg2: number): void;
    parseFromLocalFileData(arg0: number[], arg1: number, arg2: number): void;
    setNameCRC32(arg0: number): void;
    setUnicodeName(arg0: number[]): void;
}