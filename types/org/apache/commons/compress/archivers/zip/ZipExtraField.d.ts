import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ZipShort } from '../../../../../../org/apache/commons/compress/archivers/zip/ZipShort.d.ts'
export interface ZipExtraField extends Object{
    getCentralDirectoryData(): number[];
    getCentralDirectoryLength(): ZipShort;
    getHeaderId(): ZipShort;
    getLocalFileDataData(): number[];
    getLocalFileDataLength(): ZipShort;
    parseFromCentralDirectoryData(arg0: number[], arg1: number, arg2: number): void;
    parseFromLocalFileData(arg0: number[], arg1: number, arg2: number): void;
}