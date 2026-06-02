import type { ByteBuffer } from '../../../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ICUBinary$Authenticate } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/ICUBinary$Authenticate.d.ts'
export class StringPrepDataReader extends Object implements ICUBinary$Authenticate {
    constructor(bytes: ByteBuffer)
    // private byteBuffer: ByteBuffer;
    readonly unicodeVersion: number;
    getUnicodeVersion(): number[];
    isDataVersionAcceptable(version: number[]): boolean;
    read(length: number): string[];
    readIndexes(length: number): number[];
}