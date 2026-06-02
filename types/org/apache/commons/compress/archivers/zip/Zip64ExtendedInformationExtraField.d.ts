import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ZipEightByteInteger } from '../../../../../../org/apache/commons/compress/archivers/zip/ZipEightByteInteger.d.ts'
import type { ZipExtraField } from '../../../../../../org/apache/commons/compress/archivers/zip/ZipExtraField.d.ts'
import type { ZipLong } from '../../../../../../org/apache/commons/compress/archivers/zip/ZipLong.d.ts'
import type { ZipShort } from '../../../../../../org/apache/commons/compress/archivers/zip/ZipShort.d.ts'
export class Zip64ExtendedInformationExtraField extends Object implements ZipExtraField {
    static EXTRAFIELD_HEADER_SIZE: number;
    constructor()
    constructor(arg0: ZipEightByteInteger, arg1: ZipEightByteInteger)
    constructor(arg0: ZipEightByteInteger, arg1: ZipEightByteInteger, arg2: ZipEightByteInteger, arg3: ZipLong)
    readonly compressedSize: ZipEightByteInteger;
    // private diskStart: ZipLong;
    // private rawCentralDirectoryData: number[];
    readonly relativeHeaderOffset: ZipEightByteInteger;
    readonly size: ZipEightByteInteger;
    // private addSizes(arg0: number[]): number;
    getCentralDirectoryData(): number[];
    getCentralDirectoryLength(): ZipShort;
    getCompressedSize(): ZipEightByteInteger;
    getDiskStartNumber(): ZipLong;
    getHeaderId(): ZipShort;
    getLocalFileDataData(): number[];
    getLocalFileDataLength(): ZipShort;
    getRelativeHeaderOffset(): ZipEightByteInteger;
    getSize(): ZipEightByteInteger;
    parseFromCentralDirectoryData(arg0: number[], arg1: number, arg2: number): void;
    parseFromLocalFileData(arg0: number[], arg1: number, arg2: number): void;
    reparseCentralDirectoryData(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean): void;
    setCompressedSize(arg0: ZipEightByteInteger): void;
    setDiskStartNumber(arg0: ZipLong): void;
    setRelativeHeaderOffset(arg0: ZipEightByteInteger): void;
    setSize(arg0: ZipEightByteInteger): void;
}