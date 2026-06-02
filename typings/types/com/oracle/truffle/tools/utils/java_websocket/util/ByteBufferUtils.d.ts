import type { ByteBuffer } from '../../../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ByteBufferUtils extends Object {
    static getEmptyByteBuffer(): ByteBuffer;
    static transferByteBuffer(paramarg0: ByteBuffer, paramarg1: ByteBuffer): number;
    private constructor()
}