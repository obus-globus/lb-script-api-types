import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface DynamicUniformStorage$DynamicUniform extends Object{
    write(byteBuffer: ByteBuffer): void;
}