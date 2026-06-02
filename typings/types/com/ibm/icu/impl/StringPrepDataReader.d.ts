import type { ICUBinary$Authenticate } from '../../../../com/ibm/icu/impl/ICUBinary$Authenticate.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class StringPrepDataReader extends Object implements ICUBinary$Authenticate {
    constructor(arg0: ByteBuffer)
    // private byteBuffer: ByteBuffer;
    readonly unicodeVersion: number;
    getUnicodeVersion(): number[];
    isDataVersionAcceptable(arg0: number[]): boolean;
    read(arg0: number): string[];
    readIndexes(arg0: number): number[];
}