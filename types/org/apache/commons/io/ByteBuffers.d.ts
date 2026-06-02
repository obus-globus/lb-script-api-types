import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ByteBuffers extends Object {
    static littleEndian(paramarg0: number[]): ByteBuffer;
    static littleEndian(paramarg0: number): ByteBuffer;
    static littleEndian(paramarg0: ByteBuffer): ByteBuffer;
    private constructor()
}