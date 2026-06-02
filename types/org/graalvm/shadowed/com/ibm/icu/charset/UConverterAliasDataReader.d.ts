import type { ByteBuffer } from '../../../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ICUBinary$Authenticate } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/ICUBinary$Authenticate.d.ts'
export class UConverterAliasDataReader extends Object implements ICUBinary$Authenticate {
    constructor(bytes: ByteBuffer)
    // private byteBuffer: ByteBuffer;
    isDataVersionAcceptable(version: number[]): boolean;
    readToc(n: number): number[];
}