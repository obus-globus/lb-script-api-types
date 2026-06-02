import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { BitInputStream } from '../../../../../../org/apache/commons/compress/utils/BitInputStream.d.ts'
export class BitStream extends BitInputStream {
    constructor(arg0: InputStream)
    nextBits(arg0: number): number;
    nextByte(): number;
}