import type { File } from '../../../../../../../java/io/File.d.ts'
import type { ByteBuffer } from '../../../../../../../java/nio/ByteBuffer.d.ts'
import type { ICUBinary$DataFile } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/ICUBinary$DataFile.d.ts'
export class ICUBinary$SingleDataFile extends ICUBinary$DataFile {
    constructor(item: string, path: File)
    // private path: File;
    addBaseNamesInFolder(folder: string, suffix: string, names: string[]): void;
    getData(requestedPath: string): ByteBuffer;
    toString(): string;
}