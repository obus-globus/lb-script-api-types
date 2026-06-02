import type { ByteBuffer } from '../../../../../../java/nio/ByteBuffer.d.ts'
import type { Charset } from '../../../../../../java/nio/charset/Charset.d.ts'
import type { CharsetDecoder } from '../../../../../../java/nio/charset/CharsetDecoder.d.ts'
import type { CharsetEncoder } from '../../../../../../java/nio/charset/CharsetEncoder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CharsetAccessor } from '../../../../../../org/apache/commons/compress/archivers/zip/CharsetAccessor.d.ts'
import type { ZipEncoding } from '../../../../../../org/apache/commons/compress/archivers/zip/ZipEncoding.d.ts'
export class NioZipEncoding extends Object implements CharsetAccessor, ZipEncoding {
    constructor(arg0: Charset)
    readonly charset: Charset;
    // private useReplacement: boolean;
    canEncode(arg0: string): boolean;
    decode(arg0: number[]): string;
    encode(arg0: string): ByteBuffer;
    getCharset(): Charset;
    // private newDecoder(): CharsetDecoder;
    // private newEncoder(): CharsetEncoder;
}