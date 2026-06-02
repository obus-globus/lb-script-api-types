import type { ByteBuffer } from '../../../../../../../java/nio/ByteBuffer.d.ts'
import type { ICUBinary$DataFile } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/ICUBinary$DataFile.d.ts'
export class ICUBinary$PackageDataFile extends ICUBinary$DataFile {
    constructor(item: string, bytes: ByteBuffer)
    // private pkgBytes: ByteBuffer;
    addBaseNamesInFolder(folder: string, suffix: string, names: string[]): void;
    getData(requestedPath: string): ByteBuffer;
}