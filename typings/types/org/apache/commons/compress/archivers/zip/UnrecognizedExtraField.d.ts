import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ZipExtraField } from '../../../../../../org/apache/commons/compress/archivers/zip/ZipExtraField.d.ts'
import type { ZipShort } from '../../../../../../org/apache/commons/compress/archivers/zip/ZipShort.d.ts'
export class UnrecognizedExtraField extends Object implements ZipExtraField {
    static EXTRAFIELD_HEADER_SIZE: number;
    constructor()
    // private centralData: number[];
    readonly headerId: ZipShort;
    // private localData: number[];
    getCentralDirectoryData(): number[];
    getCentralDirectoryLength(): ZipShort;
    getHeaderId(): ZipShort;
    getLocalFileDataData(): number[];
    getLocalFileDataLength(): ZipShort;
    parseFromCentralDirectoryData(arg0: number[], arg1: number, arg2: number): void;
    parseFromLocalFileData(arg0: number[], arg1: number, arg2: number): void;
    setCentralDirectoryData(arg0: number[]): void;
    setHeaderId(arg0: ZipShort): void;
    setLocalFileDataData(arg0: number[]): void;
}