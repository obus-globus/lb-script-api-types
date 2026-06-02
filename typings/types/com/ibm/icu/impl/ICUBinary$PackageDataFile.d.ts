import type { ICUBinary$DataFile } from '../../../../com/ibm/icu/impl/ICUBinary$DataFile.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
export class ICUBinary$PackageDataFile extends ICUBinary$DataFile {
    constructor(arg0: string, arg1: ByteBuffer)
    // private pkgBytes: ByteBuffer;
    addBaseNamesInFolder(arg0: string, arg1: string, arg2: string[]): void;
    getData(arg0: string): ByteBuffer;
}