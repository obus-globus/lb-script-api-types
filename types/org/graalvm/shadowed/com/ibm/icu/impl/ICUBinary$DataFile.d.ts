import type { ByteBuffer } from '../../../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export abstract class ICUBinary$DataFile extends Object {
    constructor(item: string)
    // private itemPath: string;
    addBaseNamesInFolder(folder: string, suffix: string, names: string[]): void;
    getData(requestedPath: string): ByteBuffer;
    toString(): string;
}