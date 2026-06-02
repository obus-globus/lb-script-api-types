import type { ByteBuffer } from '../../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface ZipEncoding extends Object{
    canEncode(arg0: string): boolean;
    decode(arg0: number[]): string;
    encode(arg0: string): ByteBuffer;
}