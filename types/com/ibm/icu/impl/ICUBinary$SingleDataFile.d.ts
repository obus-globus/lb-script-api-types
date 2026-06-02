import type { ICUBinary$DataFile } from '../../../../com/ibm/icu/impl/ICUBinary$DataFile.d.ts'
import type { File } from '../../../../java/io/File.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
export class ICUBinary$SingleDataFile extends ICUBinary$DataFile {
    constructor(arg0: string, arg1: File)
    // private path: File;
    addBaseNamesInFolder(arg0: string, arg1: string, arg2: string[]): void;
    getData(arg0: string): ByteBuffer;
    toString(): string;
}