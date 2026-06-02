import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Charset } from '../../../../java/nio/charset/Charset.d.ts'
import type { CharsetDecoder } from '../../../../java/nio/charset/CharsetDecoder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class CharsetReader extends Object {
    constructor(inputStream: InputStream, charset: Charset)
    // private byteBuffer: ByteBuffer;
    // private charset: Charset;
    // private decoder: CharsetDecoder;
    // private hasLeftoverPotentiallySurrogateChar: boolean;
    // private inputStream: InputStream;
    // private leftoverChar: string;
    // private doRead(array: string[], offset: number, length: number): number;
    // private fillByteBuffer(): number;
    // private oneShotReadSlowPath(): number;
    read(array: string[], offset: number, length: number): number;
    release(): void;
}