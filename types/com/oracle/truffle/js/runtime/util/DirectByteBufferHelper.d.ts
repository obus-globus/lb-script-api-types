import type { ByteBuffer } from '../../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class DirectByteBufferHelper extends Object {
    static allocateDirect(paramlength: number): ByteBuffer;
    static cast(parambuffer: ByteBuffer): ByteBuffer;
    private constructor()
}