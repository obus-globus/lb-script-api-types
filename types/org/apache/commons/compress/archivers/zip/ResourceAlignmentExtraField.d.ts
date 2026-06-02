import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ZipExtraField } from '../../../../../../org/apache/commons/compress/archivers/zip/ZipExtraField.d.ts'
import type { ZipShort } from '../../../../../../org/apache/commons/compress/archivers/zip/ZipShort.d.ts'
export class ResourceAlignmentExtraField extends Object implements ZipExtraField {
    static BASE_SIZE: number;
    static EXTRAFIELD_HEADER_SIZE: number;
    static ID: ZipShort;
    constructor()
    constructor(arg0: number)
    constructor(arg0: number, arg1: boolean)
    constructor(arg0: number, arg1: boolean, arg2: number)
    readonly alignment: number;
    // private allowMethodChange: boolean;
    // private padding: number;
    allowMethodChange(): boolean;
    getAlignment(): number;
    getCentralDirectoryData(): number[];
    getCentralDirectoryLength(): ZipShort;
    getHeaderId(): ZipShort;
    getLocalFileDataData(): number[];
    getLocalFileDataLength(): ZipShort;
    parseFromCentralDirectoryData(arg0: number[], arg1: number, arg2: number): void;
    parseFromLocalFileData(arg0: number[], arg1: number, arg2: number): void;
}