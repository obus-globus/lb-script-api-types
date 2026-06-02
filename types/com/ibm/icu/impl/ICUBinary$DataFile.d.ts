import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class ICUBinary$DataFile extends Object {
    constructor(arg0: string)
    // private itemPath: string;
    addBaseNamesInFolder(arg0: string, arg1: string, arg2: string[]): void;
    getData(arg0: string): ByteBuffer;
    toString(): string;
}